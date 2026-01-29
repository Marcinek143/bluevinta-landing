"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { Icon } from "./Icon";

type FormState = {
  company: string;
  name: string;
  email: string;
  phone: string;
  details: string;
  serviceType: string;
  direction: string;
  website: string; // honeypot
};

const initialState: FormState = {
  company: "",
  name: "",
  email: "",
  phone: "",
  details: "",
  serviceType: "",
  direction: "",
  website: "",
};

const baseDirectionOptions = [
  "PL → UE",
  "UE → PL",
  "PL/UE → poza UE (eksport)",
  "poza UE → PL/UE (import)",
  "Nie wiem / do ustalenia",
] as const;

export default function Contact() {
  const [values, setValues] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isRoadTransport = values.serviceType === "Transport drogowy";

  const directionPlaceholder = isRoadTransport ? "Wybierz (np. Transport krajowy PL)" : "Wybierz...";

  const directionOptions = useMemo(() => {
    const options = [...baseDirectionOptions];
    if (isRoadTransport) {
      options.splice(2, 0, "PL → PL");
    }
    return options;
  }, [isRoadTransport]);

  useEffect(() => {
    if (!isRoadTransport && values.direction === "PL → PL") {
      setValues((prev) => ({ ...prev, direction: "" }));
    }
  }, [isRoadTransport, values.direction]);

  const disabled = useMemo(() => {
    return (
      loading ||
      !values.company.trim() ||
      !values.name.trim() ||
      !values.email.trim() ||
      !values.phone.trim() ||
      !values.serviceType.trim() ||
      !values.direction.trim() ||
      !values.details.trim()
    );
  }, [loading, values]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: values.company,
          name: values.name,
          email: values.email,
          phone: values.phone,
          details: values.details,
          serviceType: values.serviceType,
          direction: values.direction,
          website: values.website,
        }),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string; fields?: string[] };

      if (!res.ok || !data.ok) {
        const fieldInfo = data.fields?.join(", ");
        setError(data.error === "validation" ? `Uzupełnij pola: ${fieldInfo ?? ""}` : "Wystąpił błąd. Spróbuj ponownie.");
        return;
      }

      setSuccess(true);
      setValues(initialState);
    } catch (err) {
      console.error(err);
      setError("Wystąpił błąd. Spróbuj ponownie.");
    } finally {
      setLoading(false);
    }
  }

  function updateField(field: keyof FormState) {
    return (value: string) => setValues((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <section id="kontakt" className="w-full bg-background-light py-20 scroll-mt-24">
      <div className="px-4 md:px-8 lg:px-40 flex justify-center">
        <div className="flex w-full max-w-[1280px] flex-col gap-12 lg:flex-row lg:gap-24">
          <div className="flex flex-1 flex-col justify-center gap-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-text-main md:text-4xl">
                Skontaktuj się z nami
              </h2>
              <p className="text-lg text-secondary">
                Jesteśmy gotowi, aby usprawnić Twoją logistykę. Wypełnij formularz lub zadzwoń bezpośrednio.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon name="phone" className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-secondary">Telefon</p>
                  <a
                    href="tel:+48789008911"
                    className="text-xl font-bold text-text-main transition-colors hover:text-primary"
                  >
                    +48 789 008 911
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon name="mail" className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-secondary">Email</p>
                  <a
                    href="mailto:office@bluevinta.com"
                    className="text-xl font-bold text-text-main transition-colors hover:text-primary"
                  >
                    office@bluevinta.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon name="location" className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-secondary">Biuro</p>
                  <p className="text-lg font-bold text-text-main">
                    Ul. Świętojańska 188, 81-388 Gdynia
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="rounded-2xl border border-border-light bg-background-subtle p-8 shadow-lg">
              <h3 className="mb-6 text-xl font-bold text-text-main">Formularz wyceny</h3>
              <form className="flex flex-col gap-4" autoComplete="off" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-1 text-sm font-semibold text-text-main">
                    Nazwa firmy
                    <input
                      type="text"
                      name="company"
                      placeholder="Twoja firma"
                      value={values.company}
                      onChange={(e) => updateField("company")(e.target.value)}
                      className="rounded-lg border-border-light bg-white px-4 py-2.5 text-sm text-text-main focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </label>
                  <label className="flex flex-col gap-1 text-sm font-semibold text-text-main">
                    Osoba kontaktowa
                    <input
                      type="text"
                      name="name"
                      placeholder="Imię i nazwisko"
                      value={values.name}
                      onChange={(e) => updateField("name")(e.target.value)}
                      className="rounded-lg border-border-light bg-white px-4 py-2.5 text-sm text-text-main focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </label>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-1 text-sm font-semibold text-text-main">
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="email@firma.pl"
                      value={values.email}
                      onChange={(e) => updateField("email")(e.target.value)}
                      className="rounded-lg border-border-light bg-white px-4 py-2.5 text-sm text-text-main focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </label>
                  <label className="flex flex-col gap-1 text-sm font-semibold text-text-main">
                    Telefon
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+48 ..."
                      value={values.phone}
                      onChange={(e) => updateField("phone")(e.target.value)}
                      className="rounded-lg border-border-light bg-white px-4 py-2.5 text-sm text-text-main focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </label>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-1 text-sm font-semibold text-text-main">
                    Rodzaj usługi
                    <select
                      name="serviceType"
                      required
                      value={values.serviceType}
                      onChange={(e) => updateField("serviceType")(e.target.value)}
                      className="rounded-lg border-border-light bg-white px-4 py-2.5 text-sm text-text-main focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Wybierz...</option>
                      <option value="Spedycja morska (FCL)">Spedycja morska (FCL)</option>
                      <option value="Spedycja morska (LCL)">Spedycja morska (LCL)</option>
                      <option value="Transport drogowy">Transport drogowy</option>
                      <option value="Odprawa celna">Odprawa celna</option>
                      <option value="Inne">Inne</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-1 text-sm font-semibold text-text-main">
                    Kierunek
                    <select
                      name="direction"
                      required
                      value={values.direction}
                      onChange={(e) => updateField("direction")(e.target.value)}
                      className="rounded-lg border-border-light bg-white px-4 py-2.5 text-sm text-text-main focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                      <option value="" disabled>
                        {directionPlaceholder}
                      </option>
                      {directionOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="flex flex-col gap-1 text-sm font-semibold text-text-main">
                  Opis trasy i ładunku
                  <textarea
                    name="details"
                    placeholder="Skąd, dokąd, waga, wymiary, rodzaj towaru..."
                    rows={4}
                    value={values.details}
                    onChange={(e) => updateField("details")(e.target.value)}
                    className="rounded-lg border-border-light bg-white px-4 py-2.5 text-sm text-text-main focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </label>
                <input
                  type="text"
                  name="website"
                  value={values.website}
                  onChange={(e) => updateField("website")(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  aria-hidden="true"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  disabled={disabled}
                  className="mt-2 w-full rounded-lg bg-primary py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Wysyłanie..." : "Otrzymaj bezpłatną wycenę"}
                </button>
                <p className="mt-3 text-xs leading-relaxed text-slate-500">
                  Administratorem danych osobowych jest Blue Vinta Services z siedzibą w Polsce. Dane podane w formularzu
                  przetwarzamy w celu odpowiedzi na zapytanie i przygotowania oferty (art. 6 ust. 1 lit. b i f RODO).
                  Dane mogą być przekazywane dostawcom usług IT (Make.com, Google, Vercel) oraz poza EOG na podstawie
                  standardowych klauzul umownych. Podanie danych jest dobrowolne, lecz niezbędne do obsługi zapytania.
                  Szczegóły znajdują się w{" "}
                  <Link
                    href="/polityka-prywatnosci"
                    className="underline transition-colors hover:text-text-main"
                  >
                    Polityce prywatności
                  </Link>
                  .
                </p>
                {error ? (
                  <p className="text-center text-xs font-semibold text-red-600" role="alert">
                    {error}
                  </p>
                ) : null}
                {success ? (
                  <div className="flex flex-col items-center gap-3 text-center" role="status">
                    <p className="text-sm font-semibold text-green-700">
                      Dziękujemy! Odezwiemy się możliwie szybko. Jeśli sprawa jest pilna – zadzwoń: +48 789 008 911.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <a
                        href="tel:+48789008911"
                        className="rounded-lg border border-primary bg-white px-4 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-white"
                      >
                        Zadzwoń
                      </a>
                      <a
                        href="mailto:office@bluevinta.com"
                        className="rounded-lg border border-border-light bg-white px-4 py-2 text-xs font-bold text-text-main transition-colors hover:bg-gray-50"
                      >
                        Napisz email
                      </a>
                    </div>
                  </div>
                ) : (
                  <p className="mt-2 text-center text-xs text-secondary">
                    Twoje dane są bezpieczne. Odpowiadamy zazwyczaj w ciągu 2h.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
