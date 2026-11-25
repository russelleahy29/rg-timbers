import Image from "next/image";

const services: {
  image: string;
  title: string;
  description: string;
}[] = [
  {
    image: "/services/01-trees-over-buildings.png",
    title: "Trees over buildings",
    description:
      "Sectional dismantling and rigging so nothing lands on roofs, gutters or walls.",
  },
  {
    image: "/services/02-fence-line-clearing.png",
    title: "Fence line clearing",
    description:
      "Boundary and security fence clearing for homes, estates, farms and schools.",
  },
  {
    image: "/services/03-near-power-lines.png",
    title: "Near power lines",
    description:
      "Work near overhead lines, coordinated with the supplier where required.",
  },
  {
    image: "/services/04-leaning-storm-damaged.png",
    title: "Leaning and storm-damaged",
    description:
      "Urgent call-outs for split, uprooted or dangerously leaning trees after storms.",
  },
  {
    image: "/services/05-property-maintenance.png",
    title: "Property maintenance",
    description:
      "Scheduled tree care for estates, body corporates and managed properties.",
  },
  {
    image: "/services/06-stumps-clean-up.png",
    title: "Stumps and clean-up",
    description:
      "Stump grinding, chipping and full site clean-up so you're left with a tidy yard.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-paper px-6 py-[88px]">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex max-w-[640px] flex-col gap-3">
          <h2 className="font-display text-[clamp(1.9rem,3.5vw,2.6rem)] font-extrabold tracking-tight">
            The jobs other teams won&rsquo;t touch
          </h2>
          <p className="text-lg leading-relaxed text-ink-soft">
            We specialise in difficult, high-consequence removals where a
            mistake costs a roof, a wall or worse.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
          {services.map(({ image, title, description }, i) => (
            <div key={title} className="flex flex-col gap-4">
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-3 border-t-2 border-safety pt-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-sm font-bold text-safety">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-bold">{title}</h3>
                </div>
                <p className="text-base leading-relaxed text-ink-soft">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
