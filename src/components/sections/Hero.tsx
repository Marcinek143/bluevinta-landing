import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex w-full flex-col bg-background-subtle">
      <div className="px-4 md:px-8 lg:px-40 flex justify-center py-12 lg:py-24">
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-12 lg:flex-row">
          <div className="flex flex-1 flex-col gap-6 lg:max-w-[600px]">
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-main md:text-5xl lg:text-6xl">
              Spedycja międzynarodowa i odprawy celne bez opóźnień
            </h1>
            <p className="max-w-[540px] text-lg font-normal leading-relaxed text-secondary">
              Kompleksowy transport i szybkie odprawy celne dla polskich firm. Zajmujemy się formalnościami, abyś Ty mógł zająć się biznesem.
            </p>
            <div className="mt-2 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="flex h-12 cursor-pointer items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Bezpłatna wycena transportu
              </a>
              <a
                href="tel:+48789008911"
                className="flex h-12 cursor-pointer items-center justify-center rounded-lg border border-border-light bg-white px-8 text-base font-bold text-text-main transition-colors hover:bg-gray-50"
              >
                Zadzwoń teraz
              </a>
            </div>
          </div>
          <div className="relative h-[300px] w-full flex-1 overflow-hidden rounded-2xl shadow-2xl lg:h-[500px]">
            <Image
              src="/hero-logistics.jpg"
              alt="Spedycja międzynarodowa i logistyka – Blue Vinta Services"
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
