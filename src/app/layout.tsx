import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Navbar from "@/components/Navbar/Navbar";
import CTASection from "@/components/Section/CTASection";
import { Providers } from "@/app/store/Provider";

const gabarito = Gabarito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gabarito",
});

// ---------- SEO METADATA (Antiquary) ----------
export const metadata: Metadata = {
  metadataBase: new URL("https://antiquary.app"),
  title: "Antiquary – AI Antique Identifier & Price Guide",
  description:
    "Antiquary is an AI-powered antique identifier and price guide. Scan hallmarks and maker’s marks, detect era/materials, and view recent auction comps. Perfect for collectors, dealers, and estate sellers.",
  alternates: { canonical: "https://antiquary.app" },
  keywords: [
    "antique identifier",
    "AI antique app",
    "hallmark scanner",
    "maker’s mark",
    "auction comps",
    "antique price guide",
    "vintage valuation",
    "collectibles",
    "porcelain marks",
    "silver hallmarks",
  ],
  icons: {
    icon: [
      { url: "/android-icon-36x36.png", sizes: "36x36", type: "image/png" },
      { url: "/android-icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/android-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/android-icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/android-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/android-icon-192x192.png", sizes: "192x192" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Antiquary – AI Antique Identifier & Price Guide",
    description:
      "Identify antiques in seconds. Scan hallmarks/maker’s marks, get era & material cues, and see market-based price ranges with recent comps.",
    url: "https://antiquary.app",
    siteName: "Antiquary",
    images: [
      {
        url: "https://antiquary.app/antiquaryThumbnail.png",
        width: 1200,
        height: 630,
        alt: "Antiquary – AI Antique Identifier & Price Guide",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antiquary – AI Antique Identifier & Price Guide",
    description:
      "Scan marks, date pieces, and check auction comps. Antiquary helps collectors and dealers research antiques faster.",
    images: ["https://antiquary.app/antiquaryThumbnail.png"],
    site: "@antiquary_app",
    creator: "@antiquary_app",
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
    "og:image:secure_url": "https://antiquary.app/antiquaryThumbnail.png",
    "twitter:image:width": "1200",
    "twitter:image:height": "630",
    "twitter:image:alt": "Antiquary – AI Antique Identifier",
  },
};

// ---------- JSON-LD (Structured Data) ----------
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Antiquary – AI Antique Identifier",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "2000",
  },
  description:
    "Antiquary identifies antiques and vintage items using AI. Scan hallmarks and maker’s marks, detect era/materials, and view market comps to estimate value.",
  featureList: [
    "AI Antique Identifier for porcelain, silver, clocks, furniture, and more",
    "Hallmark & maker’s-mark scanner with quick references",
    "Era & material cues (e.g., Victorian, Art Deco, porcelain, bronze, jade)",
    "Price Guide with recent auction comps and value ranges",
    "Collections: save items, notes, and photos; export shareable PDFs",
  ],
  screenshot: [
    "https://antiquary.app/screenshots/screen1.png",
    "https://antiquary.app/screenshots/screen2.png",
    "https://antiquary.app/screenshots/screen3.png",
  ],
  publisher: {
    "@type": "Organization",
    name: "Antiquary",
    url: "https://antiquary.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={gabarito.variable}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="icon" type="image/png" sizes="32x32" href="/android-icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="shortcut icon" href="/android-icon-48x48.png" />
        <meta name="msapplication-TileImage" content="/android-icon-144x144.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        {/* JSON-LD */}
        <Script id="schema-jsonld" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <GoogleAnalytics />
      </head>
      <body
        className={gabarito.className}
        style={{
          // subtle warm/archival gradient background
          backgroundImage:
            "linear-gradient(to bottom, #FFFFFF, #FAF3E7, #F6F2EA, #FAF3E7)",
        }}
      >
        <Providers>
          <Navbar />
          {children}
          <CTASection />
        </Providers>
      </body>
    </html>
  );
}