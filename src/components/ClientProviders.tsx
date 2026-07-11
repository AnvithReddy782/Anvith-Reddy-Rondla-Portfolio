"use client";

import { ThemeProvider } from "next-themes";
import { useLenis } from "@/hooks/useLenis";
import ScrollProgress from "@/components/ScrollProgress";
import dynamic from "next/dynamic";

const SpatialCanvas = dynamic(() => import("./canvas/SpatialCanvas"), {
  ssr: false,
});

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  useLenis({ lerp: 0.08, duration: 0, smoothWheel: true });

  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
      <ScrollProgress />
      {children}
      <SpatialCanvas />
    </ThemeProvider>
  );
}
