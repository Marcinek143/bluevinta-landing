import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-background-dark py-12 text-white">
      <div className="px-4 md:px-8 lg:px-40 flex justify-center">
        <div className="flex w-full max-w-[1280px] flex-col gap-8">
          <div className="flex flex-col items-start gap-8 md:flex-row md:justify-between">
            <div className="flex flex-col gap-4">
              <a href="#top" className="inline-flex items-center">
                <Image
                  src="/vinta_logo_biale.svg"
                  alt="Blue Vinta Services"
                  width={212}
                  height={45}
                  className="h-8 w-auto"
                />
              </a>
              <p className="max-w-[300px] text-sm text-gray-400">
                Profesjonalna spedycja międzynarodowa i agencja celna. Twój partner w globalnym handlu.
              </p>
            </div>
            <div className="flex flex-wrap gap-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-bold text-gray-200">Usługi</h3>
                <a className="text-sm text-gray-400 transition-colors hover:text-white" href="#uslugi">
                  Spedycja morska
                </a>
                <a className="text-sm text-gray-400 transition-colors hover:text-white" href="#uslugi">
                  Transport drogowy
                </a>
                <a className="text-sm text-gray-400 transition-colors hover:text-white" href="#uslugi">
                  Odprawy celne
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-bold text-gray-200">Firma</h3>
                <a className="text-sm text-gray-400 transition-colors hover:text-white" href="#dlaczego-my">
                  O nas
                </a>
                <a className="text-sm text-gray-400 transition-colors hover:text-white" href="#kontakt">
                  Kariera
                </a>
                <a
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                  href="/polityka-prywatnosci"
                >
                  Polityka prywatności
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 border-t border-white/10 pt-8 md:flex-row md:justify-between">
            <p className="text-xs text-gray-500">
              © 2021 Blue Vinta Services. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-4">
              <span className="size-6 rounded-full bg-white/10" aria-hidden="true" />
              <span className="size-6 rounded-full bg-white/10" aria-hidden="true" />
              <span className="size-6 rounded-full bg-white/10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
