"use client";

import { useEffect } from "react";
import { useLenis } from "@/hooks/useLenis";
import ScrollProgress from "@/components/ScrollProgress";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  useLenis({ lerp: 0.09, smoothWheel: true });

  return (
    <>
      <ScrollProgress />
      {children}
    </>
  );
}
