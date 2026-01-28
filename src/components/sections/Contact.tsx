import { Icon } from "./Icon";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-background-light py-20">
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
                    href="mailto:kontakt@bluevinta.pl"
                    className="text-xl font-bold text-text-main transition-colors hover:text-primary"
                  >
                    kontakt@bluevinta.pl
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon name="location" className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-secondary">Biuro</p>
                  <p className="text-lg font-bold text-text-main">ul. Portowa 8, 81-350 Gdynia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="rounded-2xl border border-border-light bg-background-subtle p-8 shadow-lg">
              <h3 className="mb-6 text-xl font-bold text-text-main">Formularz wyceny</h3>
              <form className="flex flex-col gap-4" autoComplete="off">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-1 text-sm font-semibold text-text-main">
                    Nazwa firmy
                    <input
                      type="text"
                      name="company"
                      placeholder="Twoja firma"
                      className="rounded-lg border-border-light bg-white px-4 py-2.5 text-sm text-text-main focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </label>
                  <label className="flex flex-col gap-1 text-sm font-semibold text-text-main">
                    Osoba kontaktowa
                    <input
                      type="text"
                      name="contact"
                      placeholder="Imię i nazwisko"
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
                      className="rounded-lg border-border-light bg-white px-4 py-2.5 text-sm text-text-main focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </label>
                  <label className="flex flex-col gap-1 text-sm font-semibold text-text-main">
                    Telefon
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+48 ..."
                      className="rounded-lg border-border-light bg-white px-4 py-2.5 text-sm text-text-main focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-1 text-sm font-semibold text-text-main">
                  Opis trasy i ładunku
                  <textarea
                    name="message"
                    placeholder="Skąd, dokąd, waga, wymiary, rodzaj towaru..."
                    rows={4}
                    className="rounded-lg border-border-light bg-white px-4 py-2.5 text-sm text-text-main focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </label>
                <button
                  type="button"
                  className="mt-2 w-full rounded-lg bg-primary py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-primary-dark"
                >
                  Otrzymaj bezpłatną wycenę
                </button>
                <p className="mt-2 text-center text-xs text-secondary">
                  Twoje dane są bezpieczne. Odpowiadamy zazwyczaj w ciągu 2h.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
