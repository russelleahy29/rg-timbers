import { CheckIcon, WhatsAppIcon } from "@/components/icons";

const trustPoints = [
  "Insured crews only",
  "Fixed written quote",
  "Before & after photos",
];

export function Hero() {
  return (
    <section className="bg-forest-900 text-cream">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-12 px-6 pt-14 pb-[88px]">
        <div className="flex min-w-0 flex-1 basis-[460px] flex-col gap-6">
          <p className="text-sm font-semibold tracking-[0.12em] text-accent uppercase">
            High-risk tree felling · South Africa
          </p>
          <h1 className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] font-bold">
            Dangerous trees, handled safely.
          </h1>
          <p className="max-w-[560px] text-lg leading-relaxed text-mist sm:text-[19px]">
            Trees over roofs, on fence lines, near power lines or leaning
            where they shouldn&rsquo;t. Send us photos and get a fixed quote
            from vetted, insured local specialists, usually within 24 hours.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#quote"
              className="rounded-[10px] bg-accent px-[26px] py-4 text-[17px] font-semibold text-forest-900"
            >
              Get a free quote
            </a>
            <a
              href="https://wa.me/"
              className="flex items-center gap-2.5 rounded-[10px] border-2 border-cream px-6 py-3.5 text-[17px] font-semibold text-cream"
            >
              <WhatsAppIcon size={20} />
              WhatsApp us photos
            </a>
          </div>
          <div className="flex flex-wrap gap-5 text-[15px] text-mist">
            {trustPoints.map((point) => (
              <span key={point} className="flex items-center gap-2">
                <CheckIcon size={18} strokeWidth={2.4} className="text-accent" />
                {point}
              </span>
            ))}
          </div>
        </div>
        <div className="flex h-[420px] min-w-0 flex-1 basis-[400px] items-center justify-center rounded-2xl border-2 border-dashed border-sage bg-forest-600 p-6 text-center text-base leading-relaxed text-sage-light">
          [PHOTO: crew rigging a large tree away from a house roof]
        </div>
      </div>
    </section>
  );
}
