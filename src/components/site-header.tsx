import Link from "next/link";
import { LogoMark } from "@/components/icons";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How it works" },
  { href: "#business", label: "Estates & business" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-timber-line bg-bark text-ivory">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-[18px]">
        <Link href="#" className="flex items-center gap-2.5">
          <LogoMark size={26} className="text-safety" />
          <span className="font-display text-xl font-semibold tracking-tight">
            RG Timbers
          </span>
        </Link>
        <nav
          aria-label="Main"
          className="flex flex-wrap items-center gap-6 text-[15px]"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-ivory-soft">
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            className="rounded-[4px] bg-safety px-[18px] py-3 font-semibold text-ivory"
          >
            Get a quote
          </a>
        </nav>
      </div>
    </header>
  );
}
