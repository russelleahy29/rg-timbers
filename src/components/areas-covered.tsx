const areas = [
  "Pietermaritzburg",
  "Hilton",
  "Howick",
  "Durban",
  "Ballito",
  "Kloof & Hillcrest",
];

export function AreasCovered() {
  return (
    <section className="bg-paper-soft px-6 py-[72px]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5">
        <h2 className="font-display text-[clamp(1.6rem,3vw,2.1rem)] font-extrabold tracking-tight">
          Areas we cover
        </h2>
        <div className="flex flex-wrap items-center text-[15px]">
          {areas.map((area, i) => (
            <span key={area} className="flex items-center">
              {i > 0 && (
                <span className="mx-4 h-4 w-px bg-paper-line" aria-hidden="true" />
              )}
              <span className="font-semibold text-forest">{area}</span>
            </span>
          ))}
          <span className="ml-4 text-ink-soft">More regions coming</span>
        </div>
      </div>
    </section>
  );
}
