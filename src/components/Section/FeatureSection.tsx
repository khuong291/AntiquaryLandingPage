import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import AnimalCardSwiper from "./AnimalCardSwiper";

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
    title: "Explore Nature with Confidence",
    desc: "Identify unknown species instantly and discover fascinating facts to enrich your outdoor adventures.",
    icon: "/tools/ic-explore.png",
  },
  {
    title: "Learn & Educate",
    desc: "Perfect for students, teachers, and wildlife enthusiasts to study animal behavior and classification.",
    icon: "/tools/ic-education.png",
  },
  {
    title: "Stay Safe Outdoors",
    desc: "Get alerts on venomous or dangerous animals to protect yourself and your loved ones while exploring.",
    icon: "/tools/ic-safety.png",
  },
  {
    title: "For Everyone",
    desc: "Whether you’re a pet owner, researcher, traveler, or nature photographer — Beast ID is built for you.",
    icon: "/tools/ic-community.png",
  },
];

const FeatureSection = () => {
  return (
    <section id="why-beastid" className="py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left side: card swiper */}
          <div className="flex justify-center">
            <AnimalCardSwiper />
          </div>

          {/* Right side: benefits list */}
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold leading-tight mb-6">
              Why Choose <span className="text-primary">Beast ID</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              More than just an identifier — Beast ID empowers you to explore, learn,
              and stay safe in the wild.
            </p>

            <ul className="space-y-6">
              {BENEFITS.map((b) => (
                <li key={b.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center">
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