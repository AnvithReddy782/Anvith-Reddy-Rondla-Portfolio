"use client";

import { useRef, useState, useCallback } from "react";

interface UseMouseTiltOptions {
  maxRotation?: number;
  perspective?: number;
  scale?: number;
}

export function useMouseTilt(options: UseMouseTiltOptions = {}) {
  const { maxRotation = 8, perspective = 1000, scale = 1.02 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - y) * maxRotation;
      const rotateY = (x - 0.5) * maxRotation;

      setStyle({
        transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: "transform 0.1s ease-out",
      });
    },
    [maxRotation, perspective, scale]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s ease-out",
    });
  }, []);

  return { ref, style, isHovering, handlers: { onMouseMove: handleMouseMove, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave } };
}
