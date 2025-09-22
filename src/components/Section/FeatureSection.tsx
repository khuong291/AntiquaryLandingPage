import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
// Nếu bạn đã đổi swiper sang antiques, sửa import tương ứng:
// import PremiumAntiqueSwiper from "./PremiumAntiqueSwiper";
import AnimalCardSwiper from "./AntiqueCardSwiper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

type Benefit = {
  title: string;
  desc: string;
  icon: string;
};

const BENEFITS: Benefit[] = [
  {
    title: "Identify Antiques in Seconds",
    desc: "Scan maker’s marks, hallmarks, and construction details to quickly recognize period, workshop, and authenticity cues.",
    icon: "/tools/ic-identify-anti.png",
  },
  {
    title: "Valuation Insights",
    desc: "See condition factors and comparable sales to understand realistic value ranges before you bid, buy, or consign.",
    icon: "/tools/value-insight.png",
  },
  {
    title: "Built for Collectors & Curators",
    desc: "Whether you’re a weekend picker, dealer, or museum professional, Antiquary streamlines research and cataloging.",
    icon: "/tools/ic-collection.png",
  },
];

const FeatureSection = () => {
  return (
    <section id="why-antiquary" className="py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left side: card swiper (đổi sang PremiumAntiqueSwiper nếu bạn đã có) */}
          <div className="flex justify-center">
            {/* <PremiumAntiqueSwiper /> */}
            <AnimalCardSwiper />
          </div>

          {/* Right side: benefits list */}
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold leading-tight mb-6">
              Why Choose <span className="text-primary">Antiquary</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Antiquary is more than an identifier. It helps you research provenance, read hallmarks, spot restorations,
              and estimate value—so you can buy and collect with confidence.
            </p>

            <ul className="space-y-6">
              {BENEFITS.map((b) => (
                <li key={b.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-600/10 flex items-center justify-center">
                    <Image src={b.icon} alt={b.title} width={28} height={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{b.title}</h3>
                    <p className={`text-gray-600 text-sm ${inter.className}`}>{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;