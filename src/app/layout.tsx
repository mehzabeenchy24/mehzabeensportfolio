import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { links, site } from "@/data/portfolio";
import "./globals.css";

// Self-hosted (OFL-licensed) fonts: no external requests, works offline and on Vercel.
const instrument = localFont({
  variable: "--font-instrument",
  src: [
    { path: "../fonts/InstrumentSerif-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/InstrumentSerif-Italic.woff2", weight: "400", style: "italic" },
  ],
  display: "swap",
});

const inter = localFont({
  variable: "--font-inter",
  src: "../fonts/Inter-Variable.woff2",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    "healthcare AI",
    "medical imaging",
    "clinical machine learning",
    "data science",
    "interpretable machine learning",
    "digital health",
  ],
  openGraph: {
    type: "website",
    title: site.title,
    description: site.description,
    siteName: site.name,
    locale: "en",
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#FAF9F6",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Sylhet", addressCountry: "BD" },
  jobTitle: "MSc Data Science student",
  description: site.description,
  sameAs: [links.linkedin, links.professional, links.github].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrument.variable} ${inter.variable}`}>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
