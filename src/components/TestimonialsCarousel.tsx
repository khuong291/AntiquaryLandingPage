"use client";
import React, { useMemo } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TestimonialCard from "./Card/TestimonialCard";

const ANIM = { duration: 40000, easing: (t: number) => t };

// ★ Testimonials dành cho Antiquary
const DATA = [
  {
    image: "sarah.jpg",
    name: "Sarah (Collector)",
    content:
      "Antiquary spotted a Meissen crossed-swords mark I kept missing and pulled recent comps within seconds. It paid for itself on my first purchase.",
  },
  {
    image: "michael.jpg",
    name: "Michael (Dealer)",
    content:
      "The hallmark guide is brilliant—lion passant, date letters, assay offices—all in one place. Pricing ranges mapped to auction results save me time.",
  },
  {
    image: "emma.jpg",
    name: "Emma (Estate Seller)",
    content:
      "I cataloged an entire estate: Victorian silver, Art Deco clocks, Chinese porcelain. The app suggested era/materials and gave a clean PDF export.",
  },
  {
    image: "david.jpg",
    name: "David (Appraiser)",
    content:
      "The maker’s-mark matcher and material cues (paste, glaze, construction) are surprisingly accurate. Great as a first-pass before deep research.",
  },
  {
    image: "jennifer.jpg",
    name: "Jennifer (Museum Volunteer)",
    content:
      "Students loved the provenance tips and short context blurbs—quickly explains styles from Ming to Edo without overwhelming beginners.",
  },
  {
    image: "alex.jpg",
    name: "Alex (Weekend Picker)",
    content:
      "Offline notes and checklists are perfect at flea markets. I identified a bronze candlestick and negotiated confidently using the value range.",
  },
];

export default function TestimonialsCarousel() {
  const autoplay = (slider: any) => {
    let mouseOver = false;
    let timer: any;

    function clear() { timer && clearTimeout(timer); }
    function next() {
      clear();
      if (mouseOver) return;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;
      timer = setTimeout(() => {
        slider.moveToIdx(slider.track.details.abs + 5, true, ANIM);
      }, 0);
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => { mouseOver = true; clear(); });
      slider.container.addEventListener("mouseout", () => { mouseOver = false; next(); });
      document.addEventListener("visibilitychange", () => { document.hidden ? clear() : next(); });
      next();
    });
    slider.on("updated", next);
    slider.on("animationEnded", next);
  };

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: "performance",
      mode: "free-snap",
      drag: true,
      rubberband: true,
      slides: { perView: 1, spacing: 12 },
      breakpoints: {
        "(min-width: 640px)": { slides: { perView: 1.3, spacing: 12 } },
        "(min-width: 768px)": { slides: { perView: 2, spacing: 14 } },
        "(min-width: 1024px)": { slides: { perView: 3, spacing: 16 } },
        "(min-width: 1280px)": { slides: { perView: 4, spacing: 18 } },
      },
      created(s) { s.moveToIdx(5, true, ANIM); },
      updated(s) { s.moveToIdx(s.track.details.abs + 5, true, ANIM); },
      animationEnded(s) { s.moveToIdx(s.track.details.abs + 5, true, ANIM); },
    },
    [autoplay]
  );

  const goPrev = () => instanceRef.current?.prev();
  const goNext = () => instanceRef.current?.next();
  const items = useMemo(() => DATA, []);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-20"
      aria-labelledby="testimonials-heading"
    >
      {/* soft gradient background (ấm cổ điển) */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-amber-300/25 blur-3xl" />
      <div className="pointer-events-none absolute right-0 -bottom-10 h-72 w-72 rounded-full bg-rose-300/20 blur-3xl" />

      <div>
        <div className="flex items-end justify-between gap-4 mb-8 container mx-auto max-w-6xl px-4">
          <div>
            <h2
              id="testimonials-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              What collectors say about Antiquary
            </h2>
            <p className="text-gray-600 mt-2">
              Real stories from dealers, appraisers, and enthusiasts using Antiquary to
              identify marks, date pieces, and estimate value.
            </p>
          </div>

          {/* arrows (hidden on small) */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={goPrev}
              aria-label="Previous testimonials"
              className="h-10 w-10 rounded-full border border-gray-200 hover:bg-gray-50 grid place-items-center transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <button
              onClick={goNext}
              aria-label="Next testimonials"
              className="h-10 w-10 rounded-full border border-gray-200 hover:bg-gray-50 grid place-items-center transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="keen-slider px-1 sm:px-2"
          aria-roledescription="carousel"
          aria-label="Testimonials carousel"
        >
          {items.map((t, i) => (
            <div key={i} className="keen-slider__slide p-1">
              <TestimonialCard
                name={t.name}
                content={t.content}
                image={t.image}
                rating={5}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}