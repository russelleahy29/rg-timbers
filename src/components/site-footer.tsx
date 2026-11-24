export function SiteFooter() {
  return (
    <footer className="bg-forest px-6 py-10 text-ivory-soft">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-5 text-sm leading-relaxed">
        <span className="font-display text-[17px] font-bold text-ivory">
          RG Timbers
        </span>
        <span className="flex items-center gap-4">
          <span>[YOUR NUMBER]</span>
          <span className="h-4 w-px bg-forest-line" aria-hidden="true" />
          <span>[YOUR EMAIL]</span>
        </span>
        <span>All work carried out by insured, vetted local specialists.</span>
      </div>
    </footer>
  );
}
