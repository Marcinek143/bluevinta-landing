import { Icon, IconName } from "./Icon";

const services: Array<{ title: string; description: string; icon: IconName }> = [
  {
    title: "Spedycja międzynarodowa",
    description:
      "Organizacja transportu na terenie całej Europy oraz między kontynentami. Pełna obsługa logistyczna.",
    icon: "globe",
  },
  {
    title: "Transport drogowy",
    description:
      "Transport całopojazdowy (FTL) i drobnicowy (LTL). Terminowość i bezpieczeństwo ładunku.",
    icon: "truck",
  },
  {
    title: "Spedycja morska",
    description:
      "Import i eksport drogą morską. Kontenery FCL i drobnica LCL z głównych portów świata.",
    icon: "ship",
  },
  {
    title: "Odprawy celne",
    description:
      "Agencja celna. Reprezentacja przed urzędem, procedury uproszczone, doradztwo taryfowe.",
    icon: "shield",
  },
  {
    title: "Doradztwo logistyczne",
    description:
      "Optymalizacja łańcucha dostaw. Pomagamy wybrać najkorzystniejsze rozwiązania transportowe.",
    icon: "users",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-background-subtle py-20">
      <div className="px-4 md:px-8 lg:px-40 flex justify-center">
        <div className="flex w-full max-w-[1280px] flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold leading-tight text-text-main md:text-4xl">
              Nasze Usługi
            </h2>
            <p className="text-lg text-secondary">
              Kompleksowe wsparcie dla Twojego łańcucha dostaw.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col gap-4 rounded-xl border border-transparent bg-white p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-lg"
              >
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-text-main">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-secondary">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
