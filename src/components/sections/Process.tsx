import { Icon } from "./Icon";

type StepVariant = "primary" | "outline" | "flag";

const steps: Array<{ title: string; description: string; variant: StepVariant; label?: string }> = [
  { title: "Zapytanie", description: "Przesyłasz szczegóły ładunku i trasy.", variant: "primary", label: "1" },
  { title: "Wycena", description: "Przygotowujemy optymalną ofertę.", variant: "outline", label: "2" },
  { title: "Zlecenie", description: "Akceptujesz warunki i zlecasz transport.", variant: "outline", label: "3" },
  { title: "Realizacja", description: "Odbiór, transport i odprawa celna.", variant: "outline", label: "4" },
  { title: "Dostawa", description: "Towar dociera bezpiecznie do celu.", variant: "flag" },
];

function StepBadge({ variant, label }: { variant: StepVariant; label?: string }) {
  const baseClass =
    "flex size-12 items-center justify-center rounded-full text-xl font-bold";

  if (variant === "primary") {
    return (
      <div className={`${baseClass} border-4 border-background-subtle bg-primary text-white`}>
        {label}
      </div>
    );
  }

  if (variant === "flag") {
    return (
      <div className={`${baseClass} border-4 border-background-subtle bg-primary text-white`}>
        <Icon name="flag" className="h-5 w-5" />
      </div>
    );
  }

  return (
    <div className={`${baseClass} border-2 border-primary bg-white text-primary`}>
      {label}
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="w-full bg-background-subtle py-24">
      <div className="px-4 md:px-8 lg:px-40 flex justify-center">
        <div className="flex w-full max-w-[1280px] flex-col gap-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-main md:text-4xl">Jak działamy?</h2>
            <p className="mt-2 text-secondary">Prosty proces od zapytania do dostawy</p>
          </div>
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row">
            <div className="-z-10 hidden h-0.5 w-full bg-border-light md:absolute md:left-0 md:top-6 md:block" />
            {steps.map((step) => (
              <div key={step.title} className="flex flex-1 flex-col items-center gap-4 text-center">
                <StepBadge variant={step.variant} label={step.label} />
                <h3 className="text-lg font-bold text-text-main">{step.title}</h3>
                <p className="text-sm text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
