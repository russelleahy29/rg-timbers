const jobTypes = [
  "Tree over a building",
  "Fence line clearing",
  "Near power lines",
  "Leaning / storm damage",
  "Ongoing maintenance",
  "Stump removal",
  "Other",
];

const urgencyOptions = ["Emergency (today)", "This week", "Flexible"];

const fieldClass =
  "min-h-12 rounded-[4px] border border-paper-line bg-paper px-3.5 py-3 text-base transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15";

export function QuoteForm() {
  return (
    <section id="quote" className="bg-paper px-6 py-[88px] text-ink">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-12">
        <div className="flex min-w-0 flex-1 basis-[320px] flex-col gap-4">
          <h2 className="font-display text-[clamp(1.9rem,3.5vw,2.6rem)] font-extrabold tracking-tight">
            Get your free quote
          </h2>
          <p className="text-lg leading-relaxed text-ink-soft">
            Tell us about the tree and add a few photos. We&rsquo;ll come
            back with a price, usually within 24 hours.
          </p>
          <p className="text-base leading-relaxed text-ink-soft">
            Prefer WhatsApp? Send photos to{" "}
            <strong className="text-ink">[YOUR NUMBER]</strong>.
          </p>
          <p className="text-base leading-relaxed text-ink-soft">
            Emergency, tree already down? Call{" "}
            <strong className="text-ink">[YOUR NUMBER]</strong>.
          </p>
        </div>
        <form className="box-border grid min-w-0 flex-[2_1_520px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 border border-paper-line p-[clamp(20px,4vw,36px)]">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="q-name" className="text-sm font-medium">
              Your name
            </label>
            <input id="q-name" type="text" className={fieldClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="q-phone" className="text-sm font-medium">
              Phone / WhatsApp
            </label>
            <input id="q-phone" type="tel" className={fieldClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="q-area" className="text-sm font-medium">
              Suburb / town
            </label>
            <input
              id="q-area"
              type="text"
              placeholder="e.g. Hilton, Durban North"
              className={fieldClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="q-type" className="text-sm font-medium">
              Type of job
            </label>
            <select id="q-type" className={fieldClass}>
              {jobTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="q-urgency" className="text-sm font-medium">
              How urgent?
            </label>
            <select id="q-urgency" className={fieldClass}>
              {urgencyOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="q-photos" className="text-sm font-medium">
              Photos of the tree
            </label>
            <input
              id="q-photos"
              type="file"
              multiple
              accept="image/*"
              className={`${fieldClass} border-dashed p-2.5 text-[15px]`}
            />
          </div>
          <div className="col-span-full flex flex-col gap-1.5">
            <label htmlFor="q-notes" className="text-sm font-medium">
              Anything we should know?
            </label>
            <textarea
              id="q-notes"
              rows={4}
              placeholder="Height, what it's leaning towards, access for vehicles..."
              className={`${fieldClass} resize-y`}
            />
          </div>
          <button
            type="button"
            className="col-span-full min-h-[52px] rounded-[4px] bg-safety p-4 text-[17px] font-semibold text-ivory transition-colors hover:bg-safety-dark focus:outline-none focus:ring-2 focus:ring-forest/30"
          >
            Send my quote request
          </button>
        </form>
      </div>
    </section>
  );
}
