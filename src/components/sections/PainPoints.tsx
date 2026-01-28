import { Icon } from "./Icon";

const points = [
  {
    title: "Opóźnienia dostaw",
    description:
      "Minimalizujemy ryzyko przestojów dzięki precyzyjnemu planowaniu tras i doborowi sprawdzonych przewoźników.",
    icon: "clock",
  },
  {
    title: "Zatrzymania celne",
    description:
      "Nasi agenci celni gwarantują 100% poprawność dokumentacji, eliminując ryzyko kosztownych blokad towaru.",
    icon: "gavel",
  },
  {
    title: "Ukryte koszty",
    description:
      "Oferujemy jasną strukturę kosztów 'all-in'. Żadnych niespodzianek na fakturze końcowej.",
    icon: "eye-off",
  },
] as const;

export default function PainPoints() {
  return (
    <section className="w-full bg-background-light py-20">
      <div className="px-4 md:px-8 lg:px-40 flex justify-center">
        <div className="flex w-full max-w-[1280px] flex-col gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="max-w-[800px] text-3xl font-bold leading-tight text-text-main md:text-4xl">
              Typowe problemy w logistyce, które rozwiązujemy
            </h2>
            <p className="max-w-[700px] text-lg text-secondary">
              Nie pozwól, aby opóźnienia i skomplikowane formalności hamowały Twój biznes.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {points.map((point) => (
              <div
                key={point.title}
                className="flex flex-col gap-4 rounded-xl border border-border-light bg-background-subtle p-8 transition-shadow hover:shadow-md"
              >
                <div className="mb-2 text-red-600">
                  <Icon name={point.icon} className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-text-main">{point.title}</h3>
                <p className="text-secondary">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
