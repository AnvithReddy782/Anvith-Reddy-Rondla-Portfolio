import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";
import { personalInfo } from "@/lib/data";

const SITE_URL = "https://anvith-reddy.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Anvith Reddy Rondla | Product Manager and Systems Builder",
    template: "%s | Anvith Reddy Rondla",
  },
  description:
    "Junior Product Manager promoted from Data Analyst in 14 months. Architected and shipped platforms serving 150+ administrators across 38 districts for the Government of Bihar.",
  keywords: [
    "Product Manager",
    "AI Engineer",
    "Systems Builder",
    "RAG",
    "LangChain",
    "Next.js",
    "Government Tech",
    "Portfolio",
  ],
  authors: [{ name: "Anvith Reddy Rondla", url: SITE_URL }],
  creator: "Anvith Reddy Rondla",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Anvith Reddy Rondla",
    title: "Anvith Reddy Rondla | Product Manager and Systems Builder",
    description:
      "Junior PM promoted in 14 months. Architected platforms serving 150+ administrators across 38 districts.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Anvith Reddy Rondla - Product Manager and Systems Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anvith Reddy Rondla | Product Manager and Systems Builder",
    description:
      "Junior PM promoted in 14 months. Architected platforms serving 150+ administrators.",
    images: ["/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anvith Reddy Rondla",
  jobTitle: "Junior Product Manager",
  description:
    "Product Manager and Systems Builder. Promoted from Data Analyst to PM in 14 months. Architected DPMUMS serving 150+ administrators across 38 districts for the Government of Bihar.",
  url: SITE_URL,
  email: personalInfo.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
  sameAs: [personalInfo.linkedin, personalInfo.github].filter(Boolean),
  knowsAbout: [
    "Product Management",
    "Artificial Intelligence",
    "Retrieval-Augmented Generation",
    "LangChain",
    "Python",
    "Next.js",
    "PostgreSQL",
    "Google Apps Script",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Holy Mary Institute of Technological Sciences",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Anvith Reddy Rondla",
  url: SITE_URL,
  author: { "@type": "Person", name: "Anvith Reddy Rondla" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-[var(--color-bg)] transition-colors duration-300 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-accent)] focus:text-white focus:rounded"
        >
          Skip to main content
        </a>
        <ClientProviders>{children}</ClientProviders>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
