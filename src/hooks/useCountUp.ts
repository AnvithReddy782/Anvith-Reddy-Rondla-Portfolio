"use client";

import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function useCountUp(target: number, options: UseCountUpOptions = {}) {
  const { duration = 1.5, suffix = "", prefix = "", decimals = 0 } = options;
  const [value, setValue] = useState(prefix + "0" + suffix);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (target - start) * eased;

      if (decimals > 0) {
        setValue(prefix + current.toFixed(decimals) + suffix);
      } else {
        setValue(prefix + Math.round(current) + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration, suffix, prefix, decimals]);

  return { ref, value };
}
