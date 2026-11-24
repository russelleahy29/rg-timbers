const audiences = [
  "Estates & body corporates",
  "Managing agents & insurers",
  "Schools, farms & businesses",
];

export function BusinessCta() {
  return (
    <section id="business" className="bg-paper px-6 py-[88px]">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-10 rounded-[10px] bg-forest-soft p-[clamp(28px,5vw,56px)] text-ivory">
        <div className="min-w-0 flex-1 basis-[420px] flex-col gap-4">
          <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.4rem)] font-extrabold tracking-tight">
            Managing an estate, school or farm?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ivory-soft">
            Set up an annual tree maintenance plan. Scheduled inspections,
            fence line clearing and priority storm call-outs, all on one
            monthly or yearly invoice.
          </p>
        </div>
        <div className="flex min-w-0 flex-1 basis-[300px] flex-col gap-4 text-[17px]">
          {audiences.map((audience, i) => (
            <span
              key={audience}
              className={i > 0 ? "border-t border-forest-line pt-4" : ""}
            >
              {audience}
            </span>
          ))}
          <a
            href="#quote"
            className="mt-2 self-start rounded-[6px] bg-safety px-[22px] py-3.5 font-semibold text-ivory"
          >
            Ask about a maintenance plan
          </a>
        </div>
      </div>
    </section>
  );
}
