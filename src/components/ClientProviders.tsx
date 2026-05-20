"use client";

import { ThemeProvider } from "next-themes";
import { useLenis } from "@/hooks/useLenis";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Preloader from "@/components/Preloader";
import TelemetryWidget from "@/components/TelemetryWidget";
import GitScrollbar from "@/components/GitScrollbar";
import { useStore } from "@/lib/store";
import { useEffect } from "react";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  useLenis({ lerp: 0.08, duration: 0, smoothWheel: true });
  const { auditMode } = useStore();

  useEffect(() => {
    if (auditMode) {
      document.documentElement.setAttribute('data-audit', 'true');
    } else {
      document.documentElement.removeAttribute('data-audit');
    }
  }, [auditMode]);

  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <TelemetryWidget />
      <GitScrollbar />
      <div className="audit-scanner" />
      {children}
    </ThemeProvider>
  );
}
