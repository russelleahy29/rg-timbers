"use client";

import { useRef, useState } from "react";
import { CloseIcon } from "@/components/icons";

const jobTypes = [
  "Tree over a building",
  "Fence line clearing",
  "Near power lines",
  "Leaning / storm damage",
  "Ongoing maintenance",
  "Stump removal",
  "Other",
];

const urgencyOptions = ["This week", "Flexible", "Emergency (today)"];

const MAX_PHOTOS = 8;
const FORM_ENDPOINT = "https://formsubmit.co/ajax/russelleahy29@gmail.com";

const fieldClass =
  "min-h-12 rounded-[4px] border border-paper-line bg-paper px-3.5 py-3 text-base transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15";

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [photos, setPhotos] = useState<File[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const chosen = Array.from(e.target.files ?? []);
    setPhotos((prev) => [...prev, ...chosen].slice(0, MAX_PHOTOS));
    e.target.value = "";
  }

  function removePhoto(index: number) {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setStatus("submitting");
    setErrorMessage("");

    const data = new FormData(form);
    data.set("_subject", "New quote request — RG Timbers");
    data.set("_template", "table");
    data.set("_captcha", "false");
    photos.forEach((file) => data.append("photos", file, file.name));

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus("success");
      form.reset();
      setPhotos([]);
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong sending that. Your details are still filled in below — please try again, or WhatsApp us photos instead.",
      );
    }
  }

  if (status === "success") {
    return (
      <section id="quote" className="bg-paper px-6 py-[88px] text-ink">
        <div className="mx-auto flex max-w-xl flex-col items-start gap-3 text-center sm:items-center">
          <h2 className="font-display text-[clamp(1.9rem,3.5vw,2.6rem)] font-extrabold tracking-tight">
            Quote request sent
          </h2>
          <p className="text-lg leading-relaxed text-ink-soft">
            Thanks — we&rsquo;ve got your details and photos. We&rsquo;ll be
            in touch, usually within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-2 rounded-[4px] border border-paper-line px-5 py-3 font-semibold text-forest transition-colors hover:bg-paper-soft"
          >
            Send another request
          </button>
        </div>
      </section>
    );
  }

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
            <strong className="text-ink">082 464 3285</strong>.
          </p>
          <p className="text-base leading-relaxed text-ink-soft">
            Emergency, tree already down? Call{" "}
            <strong className="text-ink">082 464 3285</strong>. Stay clear of
            unstable trees and power lines, and only take photos from a safe
            distance.
          </p>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="box-border grid min-w-0 flex-[2_1_520px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 border border-paper-line p-[clamp(20px,4vw,36px)]"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="q-name" className="text-sm font-medium">
              Your name
            </label>
            <input
              id="q-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={fieldClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="q-phone" className="text-sm font-medium">
              Phone / WhatsApp
            </label>
            <input
              id="q-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className={fieldClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="q-area" className="text-sm font-medium">
              Suburb / town
            </label>
            <input
              id="q-area"
              name="suburb"
              type="text"
              required
              placeholder="e.g. Hilton, Durban North"
              autoComplete="address-level2"
              className={fieldClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="q-type" className="text-sm font-medium">
              Type of job
            </label>
            <select
              id="q-type"
              name="job_type"
              required
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>
                Select job type
              </option>
              {jobTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="q-urgency" className="text-sm font-medium">
              How urgent?
            </label>
            <select
              id="q-urgency"
              name="urgency"
              required
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>
                Select urgency
              </option>
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
              onChange={handlePhotoChange}
              className={`${fieldClass} border-dashed p-2.5 text-[15px]`}
            />
            {photos.length > 0 && (
              <ul className="mt-1 flex flex-wrap gap-2">
                {photos.map((file, i) => (
                  <li
                    key={`${file.name}-${i}`}
                    className="flex items-center gap-1.5 rounded-[4px] border border-paper-line bg-paper-soft py-1 pr-1 pl-2.5 text-sm"
                  >
                    <span className="max-w-[140px] truncate">
                      {file.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => removePhoto(i)}
                      aria-label={`Remove ${file.name}`}
                      className="flex items-center justify-center rounded-[4px] p-1 text-ink-soft transition-colors hover:bg-paper-line hover:text-ink"
                    >
                      <CloseIcon size={14} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="col-span-full flex flex-col gap-1.5">
            <label htmlFor="q-notes" className="text-sm font-medium">
              Anything we should know?
            </label>
            <textarea
              id="q-notes"
              name="notes"
              rows={4}
              placeholder="Height, what it's leaning towards, access for vehicles..."
              className={`${fieldClass} resize-y`}
            />
          </div>

          {status === "error" && (
            <p
              role="alert"
              className="col-span-full rounded-[4px] border border-safety bg-safety/10 px-4 py-3 text-sm text-ink"
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="col-span-full min-h-[52px] rounded-[4px] bg-safety p-4 text-[17px] font-semibold text-ivory transition-colors hover:bg-safety-dark focus:outline-none focus:ring-2 focus:ring-forest/30 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? "Sending…" : "Send my quote request"}
          </button>
        </form>
      </div>
    </section>
  );
}
