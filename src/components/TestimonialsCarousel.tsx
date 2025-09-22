"use client";
import React, { useMemo } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TestimonialCard from "./Card/TestimonialCard";

const ANIM = { duration: 40000, easing: (t: number) => t };

const DATA = [
  { image: "sarah.jpg",   name: "Sarah",    content: "Beast ID helped me quickly identify reptiles on the trail. The Venom Check notes are super handy when I shoot in remote areas." },
  { image: "michael.jpg", name: "Michael",  content: "The species details and compare view make studying animal traits actually fun. It’s my go-to field companion now." },
  { image: "emma.jpg",    name: "Emma",     content: "I used Beast ID to verify similar-looking breeds at the shelter. Clean UI, accurate suggestions, and helpful tips." },
  { image: "david.jpg",   name: "David",    content: "Instant ID from a quick snap. The safety notes gave me confidence when I came across a snake on a rocky path." },
  { image: "jennifer.jpg",name: "Jennifer", content: "Great for classroom activities. Students love scanning photos and reading the fun facts. Learning feels interactive." },
  { image: "alex.jpg",    name: "Alex",     content: "Offline-friendly behavior saved me while exploring in poor signal areas. Smooth experience end to end." },
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
    <section id="testimonials" className="relative overflow-hidden py-20" aria-labelledby="testimonials-heading">
      {/* soft gradient background */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 -bottom-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />

      <div>
        <div className="flex items-end justify-between gap-4 mb-8 container mx-auto max-w-6xl px-4">
          <div>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold tracking-tight">
              What people say about Beast ID
            </h2>
            <p className="text-gray-600 mt-2">
              Feedback from our community of explorers, learners, and pet owners.
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
              <TestimonialCard name={t.name} content={t.content} image={t.image} rating={5} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}