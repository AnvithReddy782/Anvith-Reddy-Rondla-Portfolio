"use client";

import { useEffect, useRef } from "react";

interface LenisOptions {
  lerp?: number;
  duration?: number;
  smoothWheel?: boolean;
}

export function useLenis(options: LenisOptions = {}) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    let lenis: any;

    const init = async () => {
      const { default: Lenis } = await import("lenis");
      lenis = new Lenis({
        lerp: options.lerp ?? 0.08,
        duration: options.duration ?? 0,
        smoothWheel: options.smoothWheel ?? true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
      lenisRef.current = lenis;
    };

    init();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, [options.lerp, options.duration, options.smoothWheel]);

  return lenisRef;
}
