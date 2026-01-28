const faqs = [
  {
    question: "Jakie dokumenty są potrzebne do odprawy celnej?",
    answer:
      "Podstawowe dokumenty to faktura handlowa, packing list (specyfikacja towaru) oraz list przewozowy (CMR/Bill of Lading). W zależności od rodzaju towaru mogą być wymagane dodatkowe certyfikaty (np. CE, sanepid).",
  },
  {
    question: "Ile czasu zajmuje przygotowanie wyceny?",
    answer:
      "W przypadku transportu drogowego standardowego wycenę przygotowujemy zazwyczaj w ciągu 1-2 godzin. Wyceny spedycji morskiej i lotniczej mogą zająć do 24 godzin ze względu na konieczność potwierdzenia stawek u armatorów.",
  },
  {
    question: "Czy obsługujecie klientów indywidualnych?",
    answer:
      "Specjalizujemy się w obsłudze firm (B2B). Obsługa celna dla osób prywatnych (np. mienie przesiedlenia) jest możliwa, ale podlega indywidualnej ocenie i wycenie.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full bg-background-subtle py-20">
      <div className="px-4 md:px-8 lg:px-40 flex justify-center">
        <div className="flex w-full max-w-[800px] flex-col gap-10">
          <h2 className="text-center text-3xl font-bold text-text-main">Częste pytania</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group overflow-hidden rounded-lg border border-border-light bg-white transition-all open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-text-main">
                  <span className="font-bold">{item.question}</span>
                  <svg
                    className="h-6 w-6 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-sm leading-relaxed text-secondary">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
