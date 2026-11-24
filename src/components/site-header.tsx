"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/icons";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How it works" },
  { href: "#business", label: "Estates & business" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-[18px]">
        <Link href="#" className="flex items-center gap-2.5">
          <LogoMark size={26} className="text-safety" />
          <span className="font-display text-xl font-bold tracking-tight">
            RG Timbers
          </span>
        </Link>
        <nav
          aria-label="Main"
          className="flex flex-wrap items-center gap-6 text-[15px]"
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
      </div>
    </header>
  );
}
