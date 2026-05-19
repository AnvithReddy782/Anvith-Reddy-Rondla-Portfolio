"use client";

import { useEffect, useState, useCallback } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role=button], .card-interactive, .cursor-pointer")) {
        setIsHovering(true);
      }
    };

    const handleOut = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, [isVisible]);

  const size = isHovering ? 48 : 20;
  const opacity = isHovering ? 0.15 : 0.08;

  return (
    <div
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
        transition: "width 0.2s ease, height 0.2s ease, opacity 0.2s ease",
      }}
    >
      <div
        className="rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: `var(--color-accent)`,
          opacity,
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.2s ease",
        }}
      />
    </div>
  );
}
