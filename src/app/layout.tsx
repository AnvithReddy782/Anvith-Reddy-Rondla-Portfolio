import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Anvith Reddy Rondla — Product Manager and Systems Builder",
  description: "Promoted to Junior PM in two months. Built 10 products at zero infrastructure cost. Every system still runs in production.",
  authors: [{ name: "Anvith Reddy Rondla" }],
  openGraph: {
    title: "Anvith Reddy Rondla — Product Manager and Systems Builder",
    description: "10 products. 2 states. Zero infra. All shipping.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} ${jetbrains.variable}`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
