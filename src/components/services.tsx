import type { ComponentType, SVGProps } from "react";
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
    title: "Leaning and storm-damaged",
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
    title: "Stumps and clean-up",
    description:
      "Stump grinding, chipping and full site clean-up so you're left with a tidy yard.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-bark-soft px-6 py-[88px]">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex max-w-[640px] flex-col gap-3">
          <h2 className="font-display text-[clamp(1.9rem,3.5vw,2.6rem)] font-semibold">
            The jobs other teams won&rsquo;t touch
          </h2>
          <p className="text-lg leading-relaxed text-ivory-soft">
            We specialise in difficult, high-consequence removals where a
            mistake costs a roof, a wall or worse.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {services.map(({ icon: ServiceIcon, title, description }, i) => (
            <div
              key={title}
              className="flex flex-col gap-3 border-t border-timber-line pt-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-sm text-safety">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ServiceIcon width={22} height={22} className="text-ivory-soft" />
                <h3 className="font-display text-xl font-medium">{title}</h3>
              </div>
              <p className="text-base leading-relaxed text-ivory-soft">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
