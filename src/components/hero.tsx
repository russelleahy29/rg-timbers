import { WhatsAppIcon } from "@/components/icons";
import { FellingDiagram } from "@/components/felling-diagram";

const trustPoints = ["Insured crews", "Fixed written quote", "Before & after photos"];

export function Hero() {
  return (
    <section className="bg-forest text-ivory">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-12 px-6 pt-16 pb-[88px]">
        <div className="flex min-w-0 flex-1 basis-[460px] flex-col gap-6">
          <p className="text-[15px] text-ivory-soft">
            High-risk tree felling, based in South Africa
          </p>
          <h1 className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] font-extrabold tracking-tight">
            Dangerous trees, handled safely.
          </h1>
          <p className="max-w-[520px] text-lg leading-relaxed text-ivory-soft sm:text-[19px]">
            Trees over roofs, on fence lines, near power lines or leaning
            where they shouldn&rsquo;t. Send photos and get a fixed quote from
            vetted, insured local specialists, usually within 24 hours.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#quote"
              className="rounded-[4px] bg-safety px-[26px] py-4 text-[17px] font-semibold text-ivory"
            >
              Get a free quote
            </a>
            <a
              href="https://wa.me/"
              className="flex items-center gap-2.5 rounded-[4px] border border-forest-line px-6 py-3.5 text-[17px] font-semibold text-ivory"
            >
              <WhatsAppIcon size={20} />
              WhatsApp us photos
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-y-2 text-[15px] text-ivory-soft">
            {trustPoints.map((point, i) => (
              <span key={point} className="flex items-center">
                {i > 0 && (
                  <span
                    className="mx-5 h-4 w-px bg-forest-line"
                    aria-hidden="true"
                  />
                )}
                {point}
              </span>
            ))}
          </div>
        </div>
        <div className="flex min-w-0 flex-1 basis-[400px] items-center justify-center">
          <FellingDiagram />
        </div>
      </div>
    </section>
  );
}
