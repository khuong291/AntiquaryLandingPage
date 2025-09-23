"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  // close menu when route/hash or Esc
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // disable scroll background when open menu
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const navLinkClass =
    "block px-3 py-2 rounded-lg hover:text-primary hover:bg-black/5 md:hover:bg-transparent";

  // Smooth scroll not redirect
  const handleAnchorClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    const href = (e.currentTarget.getAttribute("href") || "").trim();
    if (href.startsWith("#")) {
      e.preventDefault();
      setOpen(false);
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-10 bg-white/60 backdrop-blur-md border-b border-white/20 supports-[backdrop-filter]:bg-white/40 animateBottomToTop">
      {/* Safe area cho iOS notch */}
      <div className="pt-[env(safe-area-inset-top)]" />

      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Brand */}
        <Link
          href="/"
          className="text-2xl text-black font-semibold flex gap-2 items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/antiquary-icon.png"
            alt="antiquary"
            width={44}
            height={44}
            quality={100}
            className=""
            priority
          />
          Antiquary
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-2 text-lg font-medium">
          <li>
            <a
              href="/#rating"
              className={navLinkClass}
              onClick={handleAnchorClick}
            >
              Rating
            </a>
          </li>
          <li>
            <a
              href="/#faq"
              className={navLinkClass}
              onClick={handleAnchorClick}
            >
              FAQ
            </a>
          </li>
          <li>
            <a href="mailto:antiquary.app@gmail.com" className={navLinkClass}>
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Desktop */}
        <Link
          href="https://apps.apple.com/app/id6478046939"
          target="_blank"
          className="hidden md:inline-flex rounded-[14px] hover:scale-110 transition-transform duration-300 items-center gap-1"
        >
          <Image
            src="/ic-appstore.png"
            alt="Download on the App Store"
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, 200px"
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Mobile: Hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center size-10 rounded-xl hover:bg-black/5 active:scale-95 transition"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Icon */}
          <svg
            className={`size-6 ${open ? "hidden" : "block"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`size-6 ${open ? "block" : "hidden"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 pb-4">
          <ul className="flex flex-col gap-1 text-base font-medium">
            <li>
              <a
                href="/#features"
                className={navLinkClass}
                onClick={handleAnchorClick}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/#rating"
                className={navLinkClass}
                onClick={handleAnchorClick}
              >
                Rating
              </a>
            </li>
            <li>
              <a
                href="mailto:antiquary.app@gmail.com"
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>

          <Link
            href="https://apps.apple.com/app/id6478046939"
            target="_blank"
            className="mt-3 inline-flex w-full justify-center text-white px-4 py-3 rounded-2xl active:scale-[0.99] transition"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/ic-appstore.png"
              alt="Download on the App Store"
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 200px"
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
