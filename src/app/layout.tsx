import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import ClientProviders from "@/components/ClientProviders";

export const viewport: Viewport = {
    themeColor: "#0a0a0a",
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    title: {
        default: "Anvith Reddy Rondla | Product Manager & Systems Builder",
        template: "%s | Anvith Reddy Rondla"
    },
    description: "Promoted to Junior PM in two months. Building 10+ products across government scale systems, AI workstations, and luxury platforms. Documented before building.",
    keywords: ["Anvith Reddy Rondla", "Product Manager India", "Systems Builder", "AI Product Management", "T-Fiber PM", "Documentation First PM", "Axiom Portfolio"],
    authors: [{ name: "Anvith Reddy Rondla" }],
    creator: "Anvith Reddy Rondla",
    metadataBase: new URL("https://axiom.pm"),
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://axiom.pm",
        title: "Anvith Reddy Rondla | Product Manager & Systems Builder",
        description: "10 products. 2 states. ₹0 cost. The evidence of a builder.",
        siteName: "Axiom Portfolio",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Anvith Reddy Rondla Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Anvith Reddy Rondla | PM & Systems Builder",
        description: "Documenting systems before building them. Running in production at scale.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link href="https://api.fontshare.com/css?f[]=clash-display@400,500,600,700&f[]=general-sans@300,400,500,600&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
            </head>
            <body className="antialiased font-body bg-bg-0 text-text-primary">
                <div className="grain-overlay" />
                <ClientProviders>
                    {children}
                </ClientProviders>
            </body>
        </html>
    );
}