"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

type TabKey = "identifier" | "venom" | "health" | "compare";

type Feature = {
  key: TabKey;
  title: string;
  desc: string;
  img: string;
  icon: string;
};

const FEATURES: Feature[] = [
  {
    key: "identifier",
    title: "Instant Identifier",
    desc:
      "Snap or upload a photo to recognize frogs, snakes, reptiles, and more—powered by smart AI.",
    img: "/Include/identifier.png",
    icon: "/tools/ic-scan.png",
  },
  {
    key: "venom",
    title: "Venom Check",
    desc:
      "Quickly see venom/toxicity indicators and safety notes for potentially dangerous species.",
    img: "/Include/venom.png",
    icon: "/tools/ic-venom-check.png",
  },
  {
    key: "health",
    title: "Health Check",
    desc:
      "Helpful guidance and signs to watch for—useful for pet owners and wildlife observers (not medical advice).",
    img: "/Include/health.png",
    icon: "/tools/ic-health-check.png",
  },
  {
    key: "compare",
    title: "Compare Animals",
    desc:
      "Side-by-side stats: strength, speed, bite force, agility, and fun facts to learn faster.",
    img: "/Include/compare.png",
    icon: "/tools/ic-compare.png",
  },
];

export default function IncludeSection() {
  const [active, setActive] = useState<TabKey>("identifier");
  const [isLoading, setIsLoading] = useState(false);

  const activeFeature = useMemo(
    () => FEATURES.find((f) => f.key === active) ?? FEATURES[0],
    [active]
  );

  // Preload images for smoother switching
  useEffect(() => {
    FEATURES.forEach((f) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = f.img;
      document.head.appendChild(link);
    });
  }, []);

  const handleSwitch = (k: TabKey) => {
    if (k !== active) {
      setIsLoading(true);
      setActive(k);
    }
  };

  return (
    <section className="container mx-auto pt-20" aria-labelledby="include-heading" id="features">
      <h2 id="include-heading" className="text-4xl font-bold text-center mb-8 tracking-tight px-4">
        What’s included in <span className="text-primary">Beast ID</span>?
      </h2>

      <div className="flex md:flex-row flex-col justify-center items-center gap-16">
        {/* LEFT: Preview */}
        <div>
          <div className="relative w-full max-w-md mx-auto rounded-2xl">
            {isLoading && (
              <div
                className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100/70 rounded-lg"
                role="status"
                aria-live="polite"
              >
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500" />
              </div>
            )}

            <Image
              src={activeFeature.img}
              alt={`Beast ID feature preview — ${activeFeature.title}`}
              width={400}
              height={300}
              className={`w-full h-auto object-contain rounded-2xl transition-all duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              sizes="(max-width: 768px) 90vw,
                    (max-width: 1024px) 50vw,
                    400px"
              quality={95}
              priority={true}
              loading="eager"
              onLoad={() => setIsLoading(false)}
            />
          </div>

          {/* Indicators */}
          <div className="mt-4 flex justify-center gap-2">
            {FEATURES.map((f) => {
              const isActive = active === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => handleSwitch(f.key)}
                  aria-label={`Show ${f.title}`}
                  aria-pressed={isActive}
                  className={`h-2.5 w-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2
                    ${isActive ? "bg-emerald-500 scale-110" : "bg-gray-300 hover:bg-gray-400"}`}
                />
              );
            })}
          </div>
        </div>

        {/* RIGHT: Tabs list */}
        <div className="flex flex-col gap-4 md:px-2 px-4 w-full max-w-[640px]">
          {FEATURES.map((f) => {
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                onClick={() => handleSwitch(f.key)}
                className={`text-left flex flex-col gap-1 justify-center rounded-2xl border transition-all duration-300 cursor-pointer
                  md:p-6 p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500
                  ${isActive ? "border-emerald-500/70 bg-emerald-50/40 scale-[1.02]" : "bg-white hover:border-emerald-300"}`}
              >
                <div className="flex items-center gap-2">
                   <Image src={f.icon} alt={f.title} className={`p-1 rounded-xl ${
                      isActive ? "bg-emerald-500/10" : "bg-gray-400/10"
                    }`} width={46} height={46} />
                  <h3 className="md:text-xl text-lg font-bold">{f.title}</h3>
                </div>
                <p className="md:text-lg text-base text-gray-600">{f.desc}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}