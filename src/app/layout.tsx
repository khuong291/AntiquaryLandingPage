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

export const metadata: Metadata = {
  metadataBase: new URL('https://beastid.app'),
  title: "Beast ID - AI Animal Identifier & Venom Check",
  description:
    "Beast ID is an AI-powered animal identifier app. Instantly identify snakes, frogs, reptiles, and 1000+ species. Includes Venom Check, Health Check, and Compare tools for explorers, students, and pet owners.",
  alternates: {
    canonical: "https://beastid.app",
  },
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
    title: "Beast ID - AI Animal Identifier & Venom Check",
    description:
      "Identify animals instantly with Beast ID. AI-powered scanner for snakes, frogs, reptiles, and more. Stay safe with Venom Check and explore wildlife with confidence.",
    url: "https://beastid.app",
    siteName: "Beast ID",
    images: [
      {
        url: "https://beastid.app/BeastIDThumbnail.png",
        width: 1200,
        height: 630,
        alt: "Beast ID - AI Animal Identifier",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beast ID - AI Animal Identifier & Venom Check",
    description:
      "Beast ID is the AI animal scanner app for explorers and students. Identify snakes, frogs, reptiles, and 1000+ species instantly. Includes Venom Check and Compare features.",
    images: ["https://beastid.app/BeastIDThumbnail.png"],
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
    "og:image:secure_url": "https://beastid.app/BeastIDThumbnail.png",
    "twitter:image:width": "1200",
    "twitter:image:height": "630",
    "twitter:image:alt": "Beast ID - AI Animal Scanner",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Beast ID - Animal Identifier",
  applicationCategory: "EducationApplication",
  operatingSystem: "iOS",
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
    "Beast ID is an AI-powered animal scanner app that identifies frogs, snakes, reptiles, birds, and 1000+ species instantly. Includes Venom Check, Health Check, and Compare features.",
  featureList: [
    "AI Animal Identifier - snakes, frogs, reptiles, and 1000+ species",
    "Venom Check with safety notes",
    "Animal Health Check insights",
    "Compare animals by speed, strength, bite force, and more",
  ],
  screenshot: [
    "https://beastid.app/screenshots/screen1.png",
    "https://beastid.app/screenshots/screen2.png",
    "https://beastid.app/screenshots/screen3.png",
  ],
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
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/android-icon-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link rel="shortcut icon" href="/android-icon-48x48.png" />
        <meta
          name="msapplication-TileImage"
          content="/android-icon-144x144.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GoogleAnalytics />
      </head>
      <body
        className={gabarito.className}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #FFFFFF,#FFFFF0, #F0F8FF, #FFFFF0)",
        }}
      >
        <Providers>
          <Navbar />
          {children}
          {/* CTA Section */}
          <CTASection />
        </Providers>
      </body>
    </html>
  );
}
