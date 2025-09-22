"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Rarity = "Uncommon" | "Rare" | "Exceptional";

type PremiumAntique = {
  hero: string;     
  thumb: string;    
  name: string;    
  category: string; 
  maker?: string;
  era?: string;
  materials?: string;
  valueRange?: string;    
  rarity?: Rarity;
  highValue?: boolean;     
  museumGrade?: boolean;
  verified?: boolean;      
  auctionRecordNote?: string; 
};

const PREMIUMS: PremiumAntique[] = [
  {
    hero: "/antiques/patek-hero.webp",
    thumb: "/antiques/patek-thumb.webp",
    name: "Patek Philippe Pocket Chronometer",
    category: "Horology",
    maker: "Patek Philippe",
    era: "c. 1905",
    materials: "18k gold, enamel",
    valueRange: "$18,000 – $26,000",
    rarity: "Exceptional",
    highValue: true,
    museumGrade: true,
    verified: true,
    auctionRecordNote: "Christie’s 2022: $31,250",
  },
  {
    hero: "/antiques/art-deco-clock-hero.jpeg",
    thumb: "/antiques/art-deco-clock-thumb.jpeg",
    name: "Art Deco Marble & Chrome Mantel Clock",
    category: "Decorative Arts",
    maker: "Unsigned (French workshop)",
    era: "1930s",
    materials: "Marble, chrome",
    valueRange: "$2,800 – $4,200",
    rarity: "Rare",
    highValue: true,
    verified: true,
  },
  {
    hero: "/antiques/ming-jar-hero.jpeg",
    thumb: "/antiques/ming-jar-thumb.jpeg",
    name: "Ming Dynasty Blue-and-White Jar",
    category: "Ceramics",
    maker: "Jingdezhen kilns",
    era: "16th century",
    materials: "Porcelain, cobalt underglaze",
    valueRange: "$12,000 – $20,000",
    rarity: "Exceptional",
    highValue: true,
    museumGrade: true,
    auctionRecordNote: "Sotheby’s 2019: $22,000",
  },
];

function chipClass(name: "high" | "museum" | "verified" | "rarity", r?: Rarity) {
  switch (name) {
    case "high":
      return "bg-gradient-to-r from-amber-100 to-yellow-50 text-amber-800 ring-1 ring-amber-200";
    case "museum":
      return "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200";
    case "verified":
      return "bg-sky-50 text-sky-700 ring-1 ring-sky-200";
    case "rarity":
      if (r === "Exceptional") return "bg-rose-50 text-rose-700 ring-1 ring-rose-200";
      if (r === "Rare") return "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200";
      return "bg-stone-100 text-stone-700 ring-1 ring-stone-200";
  }
}

export default function PremiumAntiqueSwiper() {
  return (
    <div className="mx-auto w-full lg:max-w-lg md:max-w-[420px] max-w-[320px]">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4400, disableOnInteraction: false }}
        loop
        className="rounded-[28px] bg-white shadow-2xl shadow-black/10"
      >
        {PREMIUMS.map((a) => (
          <SwiperSlide key={a.name} className="p-0">
            {/* Gradient-border wrapper */}
            <div className="rounded-[28px] p-[1.5px]">
              <div className="rounded-[27px] bg-white">
                <div className="relative flex h-full flex-col">
                  {/* Hero */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-[27px]">
                    <Image
                      src={a.hero}
                      alt={`${a.name} hero image`}
                      fill
                      className="object-cover transition-transform duration-500 will-change-transform hover:scale-[1.02]"
                      priority
                    />
                    {/* top-right chips */}
                    <div className="absolute right-3 top-3 flex gap-2">
                      {a.highValue && (
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full backdrop-blur ${chipClass("high")}`}>
                          High-Value
                        </span>
                      )}
                      {a.museumGrade && (
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full backdrop-blur ${chipClass("museum")}`}>
                          Museum-grade
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 pt-12 pb-5 relative">
                    {/* Thumb overlap */}
                    <div className="absolute -top-9 left-5">
                      <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md">
                        <Image
                          src={a.thumb}
                          alt={`${a.name} thumbnail`}
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    {/* Title + price */}
                    <div className="mb-1 flex items-start justify-between gap-3">
                      <h3 className="font-serif text-[20px] leading-6 text-stone-900">
                        {a.name}
                      </h3>
                      {a.valueRange && (
                        <div className="shrink-0 rounded-xl bg-stone-50 px-3 py-1.5 text-stone-900 ring-1 ring-stone-200">
                          <span className="text-[13px] font-semibold">{a.valueRange}</span>
                        </div>
                      )}
                    </div>

                    {/* Sub-info line */}
                    <div className="text-[13px] text-stone-700">
                      <span className="font-medium text-stone-900">{a.category}</span>
                      {a.maker && <span className="text-stone-400"> • </span>}
                      {a.maker && <span className="text-stone-700">{a.maker}</span>}
                    </div>

                    {/* Meta grid */}
                    <div className="mt-3 grid grid-cols-3 gap-3 text-[12px]">
                      <div className="rounded-lg bg-stone-50 p-2 ring-1 ring-stone-200">
                        <div className="text-stone-400">Era</div>
                        <div className="font-medium text-stone-800">{a.era ?? "—"}</div>
                      </div>
                      <div className="rounded-lg bg-stone-50 p-2 ring-1 ring-stone-200">
                        <div className="text-stone-400">Materials</div>
                        <div className="line-clamp-1 font-medium text-stone-800">
                          {a.materials ?? "—"}
                        </div>
                      </div>
                      <div className="rounded-lg bg-stone-50 p-2 ring-1 ring-stone-200">
                        <div className="text-stone-400">Rarity</div>
                        <div className={`font-semibold ${chipClass("rarity", a.rarity)} rounded-md px-1.5 py-0.5 ring`}>
                          {a.rarity ?? "—"}
                        </div>
                      </div>
                    </div>

                    {/* Provenance / verified */}
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                      {a.verified && (
                        <span className={`rounded-full px-2 py-1 font-medium ${chipClass("verified")}`}>
                          Verified provenance
                        </span>
                      )}
                      {a.auctionRecordNote && (
                        <span className="rounded-full bg-stone-100 px-2 py-1 text-stone-800 ring-1 ring-stone-200">
                          {a.auctionRecordNote}
                        </span>
                      )}
                    </div>

                    {/* Divider + CTA */}
                    <div className="mt-4 h-px w-full bg-stone-100" />
                    <button
                      type="button"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-amber-700 transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-80">
                        <path d="M3 6h18M3 12h12M3 18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                      <span>View provenance & details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}