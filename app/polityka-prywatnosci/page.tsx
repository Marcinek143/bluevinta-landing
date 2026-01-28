import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności | Blue Vinta Services",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-background-light px-4 py-16 md:px-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 text-text-main">
        <header className="flex flex-col gap-4">
          <p className="text-sm font-semibold text-primary">Polityka prywatności</p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Polityka prywatności Blue Vinta Services
          </h1>
          <p className="text-secondary">
            Niniejsza Polityka prywatności określa zasady przetwarzania danych osobowych przez Blue Vinta Services w
            związku z korzystaniem z serwisu internetowego oraz formularza kontaktowego dotyczącego usług spedycji
            międzynarodowej i odpraw celnych.
          </p>
        </header>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Administrator danych</h2>
          <p>
            Administratorem danych osobowych jest Blue Vinta Services z siedzibą w Polsce. W sprawach związanych z
            ochroną danych osobowych można kontaktować się pod adresem e-mail:{" "}
            <a className="text-primary underline" href="mailto:office@bluevinta.com">
              office@bluevinta.com
            </a>
            .
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Zakres przetwarzanych danych</h2>
          <p>W ramach formularza kontaktowego przetwarzane są następujące dane osobowe:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>nazwa firmy,</li>
            <li>imię i nazwisko osoby kontaktowej,</li>
            <li>adres e-mail,</li>
            <li>numer telefonu,</li>
            <li>treść zapytania (w tym informacje dotyczące trasy transportu lub ładunku).</li>
          </ul>
          <p>Serwis nie umożliwia zakładania kont użytkowników ani dokonywania płatności online.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Cele i podstawa prawna przetwarzania</h2>
          <p>Dane osobowe przetwarzane są w następujących celach i na następujących podstawach prawnych:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              udzielenie odpowiedzi na zapytanie przesłane za pośrednictwem formularza kontaktowego oraz przygotowanie
              oferty – art. 6 ust. 1 lit. b RODO,
            </li>
            <li>
              kontakt w sprawach bieżącej współpracy oraz obsługa klientów biznesowych (B2B) – art. 6 ust. 1 lit. b oraz
              lit. f RODO,
            </li>
            <li>
              archiwizacja korespondencji oraz ewentualna obrona przed roszczeniami – art. 6 ust. 1 lit. f RODO (prawnie
              uzasadniony interes Administratora).
            </li>
          </ul>
          <p>Administrator nie przetwarza danych osobowych w celach marketingowych wymagających odrębnej zgody.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Odbiorcy danych</h2>
          <p>Dane osobowe mogą być przekazywane następującym kategoriom odbiorców, działającym na zlecenie Administratora:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Make.com – obsługa automatycznego przekazywania zgłoszeń z formularza kontaktowego,</li>
            <li>Google (Google Sheets / Google Workspace) – przechowywanie zgłoszeń oraz organizacja korespondencji,</li>
            <li>Vercel – dostawca hostingu i infrastruktury serwisu internetowego,</li>
            <li>dostawcy usług poczty elektronicznej – obsługa korespondencji kierowanej na adres office@bluevinta.com.</li>
          </ul>
          <p>Podmioty te przetwarzają dane osobowe wyłącznie na podstawie umów powierzenia i zgodnie z poleceniami Administratora.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Przekazywanie danych poza Europejski Obszar Gospodarczy</h2>
          <p>
            W związku z korzystaniem z usług Make.com, Google oraz Vercel dane osobowe mogą być przekazywane do państw
            spoza Europejskiego Obszaru Gospodarczego, w szczególności do Stanów Zjednoczonych. Przekazywanie danych
            odbywa się na podstawie standardowych klauzul umownych lub innych mechanizmów przewidzianych w RODO,
            zapewniających odpowiedni poziom ochrony danych.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Okres przechowywania danych</h2>
          <p>
            Dane osobowe są przechowywane przez okres niezbędny do obsługi zapytania i realizacji współpracy, a następnie
            przez okres przedawnienia ewentualnych roszczeń lub wypełnienia obowiązków wynikających z przepisów prawa.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Zautomatyzowane podejmowanie decyzji</h2>
          <p>Dane osobowe nie są wykorzystywane do zautomatyzowanego podejmowania decyzji ani profilowania w rozumieniu art. 22 RODO.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Prawa osób, których dane dotyczą</h2>
          <p>
            Osobom, których dane osobowe są przetwarzane, przysługują następujące prawa: prawo dostępu do danych, prawo
            ich sprostowania, prawo usunięcia danych, prawo ograniczenia przetwarzania, prawo przenoszenia danych, prawo
            wniesienia sprzeciwu wobec przetwarzania danych. Ponadto przysługuje prawo wniesienia skargi do Prezesa
            Urzędu Ochrony Danych Osobowych.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Dobrowolność podania danych</h2>
          <p>
            Podanie danych osobowych w formularzu kontaktowym jest dobrowolne, jednak ich niepodanie uniemożliwi
            udzielenie odpowiedzi na zapytanie oraz przygotowanie oferty.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Cookies</h2>
          <p>
            Serwis korzysta wyłącznie z plików cookies niezbędnych do prawidłowego działania strony (cookies techniczne).
            Nie są stosowane pliki cookies marketingowe ani analityczne wymagające uzyskania zgody użytkownika.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Kontakt w sprawach prywatności</h2>
          <p>
            Wszelkie pytania dotyczące przetwarzania danych osobowych można kierować na adres e-mail:{" "}
            <a className="text-primary underline" href="mailto:office@bluevinta.com">
              office@bluevinta.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
