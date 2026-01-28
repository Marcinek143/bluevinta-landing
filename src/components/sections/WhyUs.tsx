import Image from "next/image";
import { Icon } from "./Icon";

const highlights = [
  {
    title: "Szybka wycena",
    description: "Otrzymasz ofertę transportową zazwyczaj w ciągu 2 godzin od zapytania.",
  },
  {
    title: "Transparentność",
    description: "Jasne warunki współpracy i stały kontakt z dedykowanym opiekunem.",
  },
  {
    title: "Bezpośredni kontakt",
    description: "Nie jesteś numerem w systemie. Zawsze możesz zadzwonić do swojego spedytora.",
  },
];

const imageUrl =
  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBI3iePCUvCqQmk2AszlEjAzI9nOMMhCHz95H1-bSehsAdEnWslo9-szqP6-VqRj0QdkFtvv3CiqQ6-wV8mrnwiXECw7mz2lI1XMF75rfE-V3BbGIoyn1QKSgVjWf2RkWz68Zn-Gr7w60B0vFdSVx_3XRuczdNJfnWutuloxExNm3ElP8JEWU3OzUY2eLLECwoOkuIguyZMTKLuLYsO8r_dqQMyZ47EJLs6zgigwQFNlKb8CQHVCFryBFxzDlx78Fe2Jh_XoJmOQ2LC')";

export default function WhyUs() {
  return (
    <section id="why-us" className="w-full border-b border-border-light bg-background-light py-20">
      <div className="px-4 md:px-8 lg:px-40 flex justify-center">
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-16 md:flex-row">
          <div className="flex flex-1 flex-col gap-8">
            <h2 className="text-3xl font-bold leading-tight text-text-main md:text-4xl">
              Dlaczego warto nam zaufać?
            </h2>
            <ul className="flex flex-col gap-6">
              {highlights.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="mt-1 flex size-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-text-main">{item.title}</h3>
                    <p className="text-sm text-secondary">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] w-full flex-1 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/trust-logistics.jpg"
              alt="Doświadczenie i niezawodność w logistyce – Blue Vinta Services"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 600px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
