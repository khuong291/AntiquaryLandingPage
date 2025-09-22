import Image from "next/image";
import React from "react";
import DownloadButtonGroup from "../DownloadButtonGroup";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-[#0e1114] text-white">
      {/* soft glow background */}
      <div className="pointer-events-none absolute -top-20 -left-10 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-rose-400/20 blur-3xl" />

      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Ready to research your antiques with confidence?
        </h2>

        <p className="text-base md:text-xl mb-8 tracking-wide text-white/80">
          Photograph a piece and Antiquary helps identify maker’s marks, era, materials, and comparable values—so you can buy, sell, or curate smarter.
        </p>

        <div className="flex flex-col justify-center items-center gap-6">
          {/* rating badge or press strip (đặt ảnh của bạn trong /public/) */}
          <Image
            src="/rating-badge-antiquary.png"
            alt="Antiquary user rating"
            width={214}
            height={68}
            priority
          />
          <DownloadButtonGroup />
        </div>

        {/* Divider & Footer */}
        <div className="mt-10 border-t border-white/15 pt-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h3 className="font-bold text-lg md:text-xl">© 2025 Antiquary</h3>
            <Link
              href="mailto:antiquary.app@gmail.com"
              className="bg-primary text-white hover:opacity-90 transition-colors px-3 py-1.5 rounded-full flex items-center gap-2"
            >
              {/* mail icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2Zm0 3.236-8 5.333L4 7.236V6l8 5.333L20 6v1.236Z" />
              </svg>
              <span>Contact Us</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              href="/terms-conditions"
              className={`${inter.className} text-white/80 hover:text-white transition-colors`}
            >
              Terms of Use
            </Link>
            <span className="text-white/30">•</span>
            <Link
              href="/privacy-policy"
              className={`${inter.className} text-white/80 hover:text-white transition-colors`}
            >
              Privacy Policy
            </Link>
            <span className="text-white/30">•</span>
            <Link
              href="https://indiegoodies.com/antiquary"
              target="_blank"
              rel="noopener noreferrer"
              className={`${inter.className} text-white/80 hover:text-white transition-colors`}
            >
              IndieGoodies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;