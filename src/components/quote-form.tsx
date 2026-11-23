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

export function QuoteForm() {
  return (
    <section id="quote" className="bg-cream-dark px-6 py-[88px]">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-12">
        <div className="flex min-w-0 flex-1 basis-[320px] flex-col gap-4">
          <h2 className="font-display text-[clamp(1.9rem,3.5vw,2.6rem)] font-bold">
            Get your free quote
          </h2>
          <p className="text-lg leading-relaxed text-slate">
            Tell us about the tree and add a few photos. We&rsquo;ll come
            back with a price, usually within 24 hours.
          </p>
          <p className="text-base leading-relaxed text-slate">
            Prefer WhatsApp? Send photos to{" "}
            <strong className="text-forest-900">[YOUR NUMBER]</strong>.
          </p>
          <p className="text-base leading-relaxed text-slate">
            Emergency, tree already down? Call{" "}
            <strong className="text-forest-900">[YOUR NUMBER]</strong>.
          </p>
        </div>
        <form className="box-border grid min-w-0 flex-[2_1_520px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 rounded-2xl bg-white p-[clamp(20px,4vw,36px)]">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="q-name" className="text-sm font-semibold">
              Your name
            </label>
            <input
              id="q-name"
              type="text"
              className="min-h-12 rounded-lg border border-input-border px-3.5 py-3 text-base"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="q-phone" className="text-sm font-semibold">
              Phone / WhatsApp
            </label>
            <input
              id="q-phone"
              type="tel"
              className="min-h-12 rounded-lg border border-input-border px-3.5 py-3 text-base"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="q-area" className="text-sm font-semibold">
              Suburb / town
            </label>
            <input
              id="q-area"
              type="text"
              placeholder="e.g. Hilton, Durban North"
              className="min-h-12 rounded-lg border border-input-border px-3.5 py-3 text-base"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="q-type" className="text-sm font-semibold">
              Type of job
            </label>
            <select
              id="q-type"
              className="min-h-12 rounded-lg border border-input-border bg-white px-3.5 py-3 text-base"
            >
              {jobTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="q-urgency" className="text-sm font-semibold">
              How urgent?
            </label>
            <select
              id="q-urgency"
              className="min-h-12 rounded-lg border border-input-border bg-white px-3.5 py-3 text-base"
            >
              {urgencyOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="q-photos" className="text-sm font-semibold">
              Photos of the tree
            </label>
            <input
              id="q-photos"
              type="file"
              multiple
              accept="image/*"
              className="min-h-12 rounded-lg border border-dashed border-input-border p-2.5 text-[15px]"
            />
          </div>
          <div className="col-span-full flex flex-col gap-1.5">
            <label htmlFor="q-notes" className="text-sm font-semibold">
              Anything we should know?
            </label>
            <textarea
              id="q-notes"
              rows={4}
              placeholder="Height, what it's leaning towards, access for vehicles..."
              className="resize-y rounded-lg border border-input-border px-3.5 py-3 text-base"
            />
          </div>
          <button
            type="button"
            className="col-span-full min-h-[52px] rounded-[10px] bg-accent p-4 text-[17px] font-semibold text-forest-900"
          >
            Send my quote request
          </button>
        </form>
      </div>
    </section>
  );
}
