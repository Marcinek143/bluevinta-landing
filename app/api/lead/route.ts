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

    const asString = (value: unknown) => (typeof value === "string" ? value : "");
    const company = asString((body as Record<string, unknown>).company);
    const name = asString((body as Record<string, unknown>).name);
    const email = asString((body as Record<string, unknown>).email);
    const phone = asString((body as Record<string, unknown>).phone);
    const details = asString((body as Record<string, unknown>).details);
    const serviceType = asString((body as Record<string, unknown>).serviceType);
    const direction = asString((body as Record<string, unknown>).direction);
    const website = asString((body as Record<string, unknown>).website);

    if (website && website.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const errors: string[] = [];
    const companyT = company.trim();
    const nameT = name.trim();
    const emailT = email.trim();
    const phoneT = phone.trim();
    const detailsT = details.trim();
    const serviceTypeT = serviceType.trim();
    const directionT = direction.trim();
    const allowedServiceTypes = [
      "Spedycja morska (FCL)",
      "Spedycja morska (LCL)",
      "Transport drogowy",
      "Odprawa celna",
      "Inne",
    ];
    const allowedDirections = [
      "PL → UE",
      "UE → PL",
      "PL/UE → poza UE (eksport)",
      "poza UE → PL/UE (import)",
      "Nie wiem / do ustalenia",
    ];

    if (!companyT) errors.push("company");
    if (!nameT) errors.push("name");
    if (!emailT || !emailRegex.test(emailT)) errors.push("email");
    if (!phoneT || phoneT.length < 7) errors.push("phone");
    if (!detailsT) errors.push("details");
    const directionList = serviceTypeT === "Transport drogowy" ? [...allowedDirections, "PL → PL"] : allowedDirections;

    if (!serviceTypeT || !allowedServiceTypes.includes(serviceTypeT)) errors.push("serviceType");
    if (!directionT || !directionList.includes(directionT)) errors.push("direction");

    if (errors.length) {
      return NextResponse.json({ ok: false, error: "validation", fields: errors }, { status: 400 });
    }

    recentByIp.set(ip, now);

    const payload = {
      timestamp: new Date().toISOString(),
      company: companyT,
      name: nameT,
      email: emailT,
      phone: phoneT,
      details: detailsT,
      serviceType: serviceTypeT,
      direction: directionT,
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
