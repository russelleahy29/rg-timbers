import type { ComponentType } from "react";
import type { SVGProps } from "react";
import {
  FenceIcon,
  LeaningTreeIcon,
  MaintenanceIcon,
  PowerLineIcon,
  RoofIcon,
  StumpIcon,
} from "@/components/icons";

const services: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}[] = [
  {
    icon: RoofIcon,
    title: "Trees over buildings",
    description:
      "Sectional dismantling and rigging so nothing lands on roofs, gutters or walls.",
  },
  {
    icon: FenceIcon,
    title: "Fence line clearing",
    description:
      "Boundary and security fence clearing for homes, estates, farms and schools.",
  },
  {
    icon: PowerLineIcon,
    title: "Near power lines",
    description:
      "Work near overhead lines, coordinated with the supplier where required.",
  },
  {
    icon: LeaningTreeIcon,
    title: "Leaning & storm-damaged",
    description:
      "Urgent call-outs for split, uprooted or dangerously leaning trees after storms.",
  },
  {
    icon: MaintenanceIcon,
    title: "Property maintenance",
    description:
      "Scheduled tree care for estates, body corporates and managed properties.",
  },
  {
    icon: StumpIcon,
    title: "Stumps & clean-up",
    description:
      "Stump grinding, chipping and full site clean-up so you're left with a tidy yard.",
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-[88px]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex max-w-[680px] flex-col gap-3">
          <h2 className="font-display text-[clamp(1.9rem,3.5vw,2.6rem)] font-bold">
            The jobs other teams won&rsquo;t touch
          </h2>
          <p className="text-lg leading-relaxed text-slate">
            We specialise in difficult, high-consequence removals where a
            mistake costs a roof, a wall or worse.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {services.map(({ icon: ServiceIcon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-3 rounded-[14px] border border-line bg-white p-7"
            >
              <ServiceIcon width={32} height={32} className="text-forest-700" />
              <h3 className="font-display text-xl">{title}</h3>
              <p className="text-base leading-relaxed text-slate">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
