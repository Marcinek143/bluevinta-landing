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
            Niniejszy dokument opisuje zasady przetwarzania danych osobowych przez Blue Vinta Services w związku z
            korzystaniem z serwisu internetowego i formularza kontaktowego dla usług spedycji międzynarodowej i odpraw
            celnych.
          </p>
        </header>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Administrator danych</h2>
          <p>
            Administratorem danych osobowych jest Blue Vinta Services. W sprawach związanych z ochroną danych osobowych
            można kontaktować się pod adresem e-mail:{" "}
            <a className="text-primary underline" href="mailto:lead@bluevinta.com">
              lead@bluevinta.com
            </a>
            .
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Zakres przetwarzanych danych</h2>
          <p>
            W ramach formularza kontaktowego przetwarzamy następujące dane: nazwa firmy, imię i nazwisko, adres e-mail,
            numer telefonu oraz treść zapytania (opis trasy i ładunku). Nie tworzymy kont użytkownika ani nie prowadzimy
            płatności online.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Cele i podstawa prawna przetwarzania</h2>
          <p>Dane są przetwarzane w następujących celach:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>udzielenie odpowiedzi na zapytanie przesłane przez formularz i przygotowanie oferty (art. 6 ust. 1 lit. b RODO),</li>
            <li>kontakt w sprawach bieżącej współpracy i obsługi klienta B2B (art. 6 ust. 1 lit. b i lit. f RODO),</li>
            <li>archiwizacja korespondencji i obrona przed roszczeniami (art. 6 ust. 1 lit. f RODO),</li>
            <li>w przypadkach dobrowolnej zgody – w celach zgodnych z udzieloną zgodą (art. 6 ust. 1 lit. a RODO).</li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Odbiorcy danych</h2>
          <p>Dane mogą być udostępniane następującym podmiotom przetwarzającym na zlecenie Administratora:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Make.com – obsługa webhooka przesyłającego zgłoszenia z formularza;</li>
            <li>Google (Google Sheets/Workspace) – przechowywanie zgłoszeń i organizacja korespondencji e-mail;</li>
            <li>Vercel – dostawca hostingu serwisu internetowego;</li>
            <li>dostawcy poczty e-mail – dystrybucja powiadomień na adres lead@bluevinta.com.</li>
          </ul>
          <p>Odbiorcy przetwarzają dane wyłącznie na podstawie umów powierzenia i zgodnie z poleceniami Administratora.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Przekazywanie danych poza EOG</h2>
          <p>
            W związku z korzystaniem z usług Make.com, Google oraz Vercel dane mogą być przekazywane do państw spoza EOG
            (w szczególności USA). Przekazanie odbywa się na podstawie standardowych klauzul umownych lub innych
            właściwych mechanizmów zapewniających odpowiedni poziom ochrony zgodnie z RODO.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Okres przechowywania danych</h2>
          <p>
            Dane są przechowywane przez okres niezbędny do obsługi zapytania i realizacji współpracy, a następnie przez
            czas przedawnienia ewentualnych roszczeń lub spełnienia obowiązków archiwizacyjnych wynikających z prawa.
            Dane przetwarzane na podstawie zgody są przechowywane do momentu jej wycofania, o ile nie występuje inna
            podstawa ich dalszego przetwarzania.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Prawa osób, których dane dotyczą</h2>
          <p>
            Osobom, których dane dotyczą, przysługują prawa wynikające z RODO: prawo dostępu do danych, sprostowania,
            usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu wobec przetwarzania oraz
            prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania przed jej
            wycofaniem. Przysługuje także prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Dobrowolność podania danych</h2>
          <p>
            Podanie danych w formularzu kontaktowym jest dobrowolne, jednak konieczne do otrzymania odpowiedzi na
            zapytanie oraz przygotowania oferty.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Cookies</h2>
          <p>
            Serwis może korzystać wyłącznie z plików cookies niezbędnych do prawidłowego działania strony (cookies
            techniczne). Nie stosujemy cookies marketingowych ani analitycznych wymagających zgody użytkownika.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Kontakt w sprawach prywatności</h2>
          <p>
            Wszelkie pytania dotyczące przetwarzania danych osobowych można kierować na adres e-mail:{" "}
            <a className="text-primary underline" href="mailto:lead@bluevinta.com">
              lead@bluevinta.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
