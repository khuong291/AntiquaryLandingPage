"use client";
import React, { useState } from "react";

type FaqItem = {
  q: string;
  a: React.ReactNode;
};

const FAQS: FaqItem[] = [
  {
    q: "How does the Antiquary app work?",
    a: (
      <>
        Snap or upload photos of your item. Antiquary analyzes maker’s marks,
        hallmarks, construction details and style cues to suggest a likely
        category, period, and workshop. You’ll also see reading guides and
        comparable sales to continue your research.
      </>
    ),
  },
  {
    q: "Can Antiquary provide an accurate value for my items?",
    a: (
      <>
        We show <em>estimated ranges</em> based on recent comps and condition
        factors. Final value varies by provenance, authenticity, and market
        timing. For insurance or sale decisions, consult a professional
        appraisal—Antiquary helps you prepare for that conversation.
      </>
    ),
  },
  {
    q: "What types of antiques and vintage items can the app identify?",
    a: (
      <>
        European & Asian porcelain, British/Continental silver, clocks & watches,
        furniture (18th–20th c.), art glass, bronze sculpture, advertising,
        cameras, decorative arts, and more. We’re expanding our reference sets
        every month.
      </>
    ),
  },
  {
    q: "Is the Antiquary app free to use?",
    a: (
      <>
        Yes—core identification and a limited number of scans are free. Antiquary
        Pro unlocks unlimited scans, extended hallmark libraries, valuation
        insights, and collection export.
      </>
    ),
  },
  {
    q: "How accurate is the app at recognizing items?",
    a: (
      <>
        On clear photos of marks and key details, recognition often exceeds
        85–95% for common categories. Results depend on lighting, focus, and
        whether marks are complete. We always show alternative candidates and
        research tips.
      </>
    ),
  },
  {
    q: "Does Antiquary detect reproductions or repairs?",
    a: (
      <>
        We flag <strong>red-flags</strong> (cast seams, modern screws, over-polish,
        re-gilding, replaced movements, etc.). Treat them as guidance—not a
        certificate. Use the item’s full context and seek expert confirmation.
      </>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* subtle gradient background like screenshot */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(250,205,150,0.18),_transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-6 py-16 relative">
        <h2
          id="faq-heading"
          className="text-4xl font-bold tracking-tight text-gray-900"
        >
          FAQ
        </h2>
        <p className="mt-3 text-gray-600">
          Want to learn more about <span className="font-semibold">Antiquary</span>?
          Here are some of the most common questions.
        </p>

        <ul className="mt-10 divide-y divide-gray-200 rounded-2xlbackdrop-blur">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={item.q}>
                <button
                  className="flex w-full items-center justify-between gap-2 py-5 text-left hover:bg-gray-50/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => toggle(i)}
                >
                  <span className="font-semibold text-xl">{item.q}</span>
                  <svg
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 8l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  <div className="pb-5 text-gray-700 text-md leading-relaxed overflow-hidden">
                    {item.a}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}