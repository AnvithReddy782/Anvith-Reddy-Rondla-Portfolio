'use client';

import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import ProceduralGrid from './ProceduralGrid';

export default function SpatialCanvas() {
  // Listen to window scroll and calculate velocity to pass to shader
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lastScrollY = window.scrollY;
    let lastTime = performance.now();
    let velocity = 0;
    let timeoutId: number;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = performance.now();
      const timeDiff = Math.max(currentTime - lastTime, 1); // Avoid division by zero
      const scrollDiff = currentScrollY - lastScrollY;

      // Velocity: pixels per millisecond
      velocity = scrollDiff / timeDiff;

      // Expose to window for the shader's useFrame animation loop
      (window as any).__scrollVelocity = velocity;

      lastScrollY = currentScrollY;
      lastTime = currentTime;

      // Decay velocity when scrolling stops
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        (window as any).__scrollVelocity = 0;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen z-[-1] pointer-events-none bg-[#0A0A0A]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: false, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <ProceduralGrid />
      </Canvas>
    </div>
  );
}
