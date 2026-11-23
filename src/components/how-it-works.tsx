const steps = [
  {
    number: "01",
    title: "Send photos",
    description:
      "Use the form below or WhatsApp a few photos of the tree and what's around it.",
  },
  {
    number: "02",
    title: "Get a fixed quote",
    description:
      "We assess the job with a vetted local specialist and send one clear, written price.",
  },
  {
    number: "03",
    title: "Book with a deposit",
    description:
      "Accept online, pay a deposit and we schedule an insured crew for your site.",
  },
  {
    number: "04",
    title: "Job done, with proof",
    description:
      "You get before-and-after photos, then the final invoice. One point of contact throughout.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-cream-dark px-6 py-[88px]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <h2 className="font-display text-[clamp(1.9rem,3.5vw,2.6rem)] font-bold">
          How it works
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-7">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-2.5">
              <span className="font-display text-4xl font-bold text-forest-700">
                {step.number}
              </span>
              <h3 className="text-[19px]">{step.title}</h3>
              <p className="text-base leading-relaxed text-slate">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
