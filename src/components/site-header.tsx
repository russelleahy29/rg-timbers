"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CloseIcon, LogoMark, MenuIcon } from "@/components/icons";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How it works" },
  { href: "#business", label: "Estates & business" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-forest text-ivory transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_16px_rgba(0,0,0,0.25)]" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-[18px]">
        <Link
          href="#"
          className="flex items-center gap-2.5"
          onClick={() => setMenuOpen(false)}
        >
          <LogoMark size={26} className="text-safety" />
          <span className="font-display text-xl font-bold tracking-tight">
            RG Timbers
          </span>
        </Link>

        <nav
          aria-label="Main"
          className="hidden flex-wrap items-center gap-6 text-[15px] sm:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ivory-soft transition-colors hover:text-ivory"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            className="rounded-[6px] bg-safety px-[18px] py-3 font-semibold text-ivory transition-colors hover:bg-safety-dark"
          >
            Get a quote
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex items-center justify-center rounded-[6px] p-2 text-ivory sm:hidden"
        >
          {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="flex flex-col gap-1 border-t border-forest-line px-6 py-4 text-[15px] sm:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-[6px] px-2 py-3 text-ivory-soft transition-colors hover:bg-forest-soft hover:text-ivory"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-[6px] bg-safety px-[18px] py-3 text-center font-semibold text-ivory transition-colors hover:bg-safety-dark"
          >
            Get a quote
          </a>
        </nav>
      )}
    </header>
  );
}
