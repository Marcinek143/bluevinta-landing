import Image from "next/image";
import { Icon } from "./Icon";

const navLinks = [
  { href: "#services", label: "Usługi" },
  { href: "#why-us", label: "O nas" },
  { href: "#process", label: "Proces" },
  { href: "#contact", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-light bg-background-light/95 backdrop-blur-sm">
      <div className="px-4 md:px-8 lg:px-40 flex justify-center">
        <div className="flex h-16 w-full max-w-[1280px] items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/vinta_logo_czarne.svg"
              alt="Blue Vinta Services"
              width={212}
              height={45}
              priority
              className="h-9 w-auto"
            />
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            <nav className="flex items-center gap-8" aria-label="Główna nawigacja">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-text-main transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="flex h-10 items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
            >
              Bezpłatna wycena
            </a>
          </div>
          <button
            type="button"
            className="text-text-main lg:hidden"
            aria-label="Otwórz menu nawigacji"
          >
            <Icon name="menu" className="h-7 w-7" />
          </button>
        </div>
      </div>
    </header>
  );
}
