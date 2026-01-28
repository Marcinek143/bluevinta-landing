import { NextRequest, NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const recentByIp = new Map<string, number>();
const WINDOW_MS = 15_000; // soft throttle: 1 request per 15s per IP

function getClientIp(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const parts = forwarded.split(",");
    if (parts.length > 0) return parts[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  const cfConnecting = req.headers.get("cf-connecting-ip");
  if (cfConnecting) return cfConnecting.trim();
  return "unknown";
}

async function forwardToMake(payload: unknown) {
  const url = process.env.MAKE_WEBHOOK_URL;
  if (!url) {
    throw new Error("MAKE_WEBHOOK_URL is not configured");
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Make webhook failed: ${res.status}`);
  }
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const now = Date.now();
    const last = recentByIp.get(ip) ?? 0;
    if (now - last < WINDOW_MS) {
      return NextResponse.json({ ok: true });
    }

    const body = await req.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
    }

    const { company, name, email, phone, details, website } = body as Record<string, string | undefined>;

    if (website && website.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const errors: string[] = [];
    if (!company?.trim()) errors.push("company");
    if (!name?.trim()) errors.push("name");
    if (!email?.trim() || !emailRegex.test(email)) errors.push("email");
    if (!phone?.trim() || phone.trim().length < 7) errors.push("phone");
    if (!details?.trim()) errors.push("details");

    if (errors.length) {
      return NextResponse.json({ ok: false, error: "validation", fields: errors }, { status: 400 });
    }

    recentByIp.set(ip, now);

    const payload = {
      timestamp: new Date().toISOString(),
      company: company.trim(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      details: details.trim(),
      source: "bluevinta-landing",
      userAgent: req.headers.get("user-agent") ?? "",
      ip,
    };

    await forwardToMake(payload);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead submission error", err);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
