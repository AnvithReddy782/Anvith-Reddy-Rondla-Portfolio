"use client";

import { useEffect, useRef } from "react";

interface LenisOptions {
  lerp?: number;
  smoothWheel?: boolean;
}

export function useLenis(options: LenisOptions = {}) {
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let rafId = 0;

    const init = async () => {
      const { default: Lenis } = await import("lenis");
      lenis = new Lenis({
        lerp: optionsRef.current.lerp ?? 0.09,
        smoothWheel: optionsRef.current.smoothWheel ?? true,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    };

    init();

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);
}
