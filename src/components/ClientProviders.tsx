"use client";

import { useLenis } from "@/hooks/useLenis";
import ScrollProgress from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  useLenis({ lerp: 0.09, smoothWheel: true });

  return (
    <ThemeProvider>
      <ScrollProgress />
      {children}
    </ThemeProvider>
  );
}

