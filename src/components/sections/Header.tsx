"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

const navLinks = [
  { href: "#services", label: "Usługi" },
  { href: "#why-us", label: "O nas" },
  { href: "#process", label: "Proces" },
  { href: "#contact", label: "Kontakt" },
];

const mobileLinks = [
  { href: "#services", label: "Usługi" },
  { href: "#why-us", label: "Dlaczego my" },
  { href: "#process", label: "Proces" },
  { href: "#contact", label: "Kontakt" },
  { href: "/polityka-prywatnosci", label: "Polityka prywatności" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    firstLinkRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

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
            aria-label={isMenuOpen ? "Zamknij menu nawigacji" : "Otwórz menu nawigacji"}
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <Icon name={isMenuOpen ? "close" : "menu"} className="h-7 w-7" />
          </button>
        </div>
      </div>
      <button
        type="button"
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 lg:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
        aria-label="Zamknij menu"
        tabIndex={isMenuOpen ? 0 : -1}
        aria-hidden={!isMenuOpen}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu nawigacji"
        aria-hidden={!isMenuOpen}
        className={`fixed inset-y-0 right-0 z-50 w-72 max-w-[80vw] bg-white p-6 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-4" aria-label="Menu mobilne">
          {mobileLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              ref={index === 0 ? firstLinkRef : undefined}
              className="text-base font-semibold text-text-main transition-colors hover:text-primary"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
