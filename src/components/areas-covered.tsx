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
    <section className="px-6 py-[72px]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5">
        <h2 className="font-display text-[clamp(1.6rem,3vw,2.1rem)] font-bold">
          Areas we cover
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {areas.map((area) => (
            <a
              key={area}
              href="#"
              className="rounded-full border border-line bg-white px-[18px] py-3 text-[15px]"
            >
              {area}
            </a>
          ))}
          <span className="rounded-full border border-dashed border-input-border px-[18px] py-3 text-[15px] text-slate">
            More regions coming
          </span>
        </div>
      </div>
    </section>
  );
}
