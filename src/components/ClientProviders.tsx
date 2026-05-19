"use client";

import { ThemeProvider } from "next-themes";
import { useLenis } from "@/hooks/useLenis";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  useLenis({ lerp: 0.08, duration: 0, smoothWheel: true });

  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
      <CustomCursor />
      <ScrollProgress />
      {children}
    </ThemeProvider>
  );
}
