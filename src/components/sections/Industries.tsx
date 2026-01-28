import { Icon, IconName } from "./Icon";

const industries: Array<{ icon: IconName; label: string }> = [
  { icon: "cart", label: "E-commerce" },
  { icon: "factory", label: "Produkcja" },
  { icon: "globe", label: "Europa" },
  { icon: "plane", label: "Azja (Chiny)" },
  { icon: "map", label: "USA" },
];

export default function Industries() {
  return (
    <section className="w-full bg-background-light py-16">
      <div className="px-4 md:px-8 lg:px-40 flex justify-center">
        <div className="flex w-full max-w-[1280px] flex-col gap-10">
          <h2 className="text-center text-2xl font-bold text-text-main">
            Obsługiwane branże i kierunki
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-70 transition-all duration-500 hover:grayscale-0">
            {industries.map((industry) => (
              <div key={industry.label} className="flex flex-col items-center gap-2">
                <Icon name={industry.icon} className="h-10 w-10" />
                <span className="text-sm font-semibold text-text-main">{industry.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
