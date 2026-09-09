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

const themeScript = `
  (function() {
    try {
      var saved = localStorage.getItem('theme');
      var theme = (saved === 'dark' || saved === 'light') ? saved : 'light';
      var root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
        root.setAttribute('data-theme', 'dark');
      } else {
        root.classList.remove('dark');
        root.setAttribute('data-theme', 'light');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link
          rel="preload"
          href="/fonts/clash-display-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/general-sans-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#fbf9f5" />
      </head>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-accent)] focus:text-[var(--color-accent-contrast)] focus:text-sm focus:font-medium font-body"
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
