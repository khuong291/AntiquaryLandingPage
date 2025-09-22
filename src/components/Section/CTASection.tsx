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
      <div className="pointer-events-none absolute -top-20 -left-10 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Ready to explore the wild with confidence?
        </h2>
        <p className="text-base md:text-xl mb-8 tracking-wide text-white/80">
          Identify frogs, snakes & reptiles in seconds. Safety notes, health check insights, and fun facts — all in one app.
        </p>

        <div className="flex flex-col justify-center items-center gap-6">
          {/* Rating badge (đặt ảnh của bạn trong /public/) */}
          <Image
            src="/rating-badge-beastid.png"
            alt="Beast ID user rating"
            width={214}
            height={68}
            priority
          />
          <DownloadButtonGroup />
        </div>

        {/* Socials */}
        {/* <div className="flex justify-center gap-5 mt-10">
          <a
            href="https://www.tiktok.com/@habitpal.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="TikTok"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Facebook"
            title="Facebook"
          >
            <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22.675 0h-21.35C.592 0 0 .593 0 1.326v21.348C0 23.406.592 24 1.325 24h11.498v-9.294H9.691v-3.622h3.132V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.622h-3.123V24h6.116C23.406 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
          </a>
          <a
              href="https://www.instagram.com/habitpal.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          <a
            href="https://x.com/beastid_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="X (Twitter)"
            title="X (Twitter)"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.147 2H21l-6.52 7.45L22.5 22h-6.42l-5.02-6.54L5 22H2.147l7.16-8.18L1.5 2h6.51l4.53 5.97L18.147 2Zm-1.123 18h1.787L7.05 4H5.217L17.024 20Z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@beastid_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="YouTube"
            title="YouTube"
          >
             <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a2.997 2.997 0 00-2.11-2.121C19.636 3.5 12 3.5 12 3.5s-7.636 0-9.388.565A2.997 2.997 0 00.502 6.186 31.76 31.76 0 000 12a31.76 31.76 0 00.502 5.814 2.997 2.997 0 002.11 2.121C4.364 20.5 12 20.5 12 20.5s7.636 0 9.388-.565a2.997 2.997 0 002.11-2.121A31.76 31.76 0 0024 12a31.76 31.76 0 00-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
          </a>
        </div> */}

        {/* Divider & Footer */}
        <div className="mt-10 border-t border-white/15 pt-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h3 className="font-bold text-lg md:text-xl">© 2025 Beast ID</h3>
            <Link
              href="mailto:beastid.app@gmail.com"
              className="bg-primary text-white hover:opacity-90 transition-colors px-3 py-1.5 rounded-full flex items-center gap-2"
            >
              {/* mail icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fff">
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
              href="https://indiegoodies.com/beastid"
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