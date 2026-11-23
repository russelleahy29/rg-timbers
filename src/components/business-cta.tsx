import { CheckIcon } from "@/components/icons";

const audiences = [
  "Estates & body corporates",
  "Managing agents & insurers",
  "Schools, farms & businesses",
];

export function BusinessCta() {
  return (
    <section id="business" className="px-6 py-[88px]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-10 rounded-[20px] bg-forest-700 p-[clamp(28px,5vw,56px)] text-cream">
        <div className="min-w-0 flex-1 basis-[420px] flex-col gap-4">
          <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.4rem)] font-bold">
            Managing an estate, school or farm?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-mist">
            Set up an annual tree maintenance plan. Scheduled inspections,
            fence line clearing and priority storm call-outs, all on one
            monthly or yearly invoice.
          </p>
        </div>
        <div className="flex min-w-0 flex-1 basis-[300px] flex-col gap-3 text-[17px]">
          {audiences.map((audience) => (
            <span key={audience} className="flex items-center gap-2.5">
              <CheckIcon size={20} strokeWidth={2.4} className="text-accent" />
              {audience}
            </span>
          ))}
          <a
            href="#quote"
            className="mt-2 self-start rounded-[10px] bg-accent px-[22px] py-3.5 font-semibold text-forest-900"
          >
            Ask about a maintenance plan
          </a>
        </div>
      </div>
    </section>
  );
}
