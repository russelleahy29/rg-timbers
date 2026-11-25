import Image from "next/image";

const photos = [
  {
    src: "/photos/crew-clearing-near-house.jpg",
    alt: "Crew in full safety gear clearing storm-damaged branches next to a house",
  },
  {
    src: "/photos/aerial-rigging-removal.jpg",
    alt: "Climber roped and harnessed high up a trunk during a sectional removal",
  },
  {
    src: "/photos/crew-processing-felled-trunk.jpg",
    alt: "Crew member processing a large felled trunk on site",
  },
  {
    src: "/photos/crew-cutting-stump.jpg",
    alt: "Crew member cutting back a stump after a removal",
  },
];

export function RecentWork() {
  return (
    <section className="bg-paper-soft px-6 py-[88px]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex max-w-[640px] flex-col gap-3">
          <h2 className="font-display text-[clamp(1.9rem,3.5vw,2.6rem)] font-extrabold tracking-tight">
            Recent jobs
          </h2>
          <p className="text-lg leading-relaxed text-ink-soft">
            Our own crew, on site, in full safety gear. No stock photos.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-square w-full overflow-hidden rounded-[4px] border border-paper-line"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
