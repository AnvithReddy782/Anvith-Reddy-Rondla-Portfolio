'use client';

import React, { useEffect, useRef } from 'react';
import { useStore } from '@/lib/store';
import { personalInfo } from '@/lib/data';
import gsap from 'gsap';

export default function Hero() {
  const booting = useStore((state) => state.booting);
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const statusStripRef = useRef<HTMLDivElement>(null);
  const metricStripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run animation when booting is finished (booting === false)
    if (booting) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Set initial hidden clip-paths
      gsap.set(nameRef.current, {
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      });
      gsap.set(subtitleRef.current, {
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      });
      gsap.set([statusStripRef.current, metricStripRef.current], {
        opacity: 0,
        y: 10,
      });

      // 1. Clip-path wipe reveal of name (0.8s)
      tl.to(nameRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.8,
        ease: 'power3.out',
      })
      // 2. Clip-path wipe reveal of subtitle block (0.6s)
      .to(subtitleRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.3')
      // 3. Fade-in and slide-up of status strip and metric strip (0.5s)
      .to([statusStripRef.current, metricStripRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: 'power2.out',
      }, '-=0.2');
    }, containerRef);

    return () => ctx.revert();
  }, [booting]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[90dvh] flex flex-col justify-center py-16 md:py-24 border-b border-white/5 select-none"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-between h-full gap-12 md:gap-16">
        
        {/* Name and identity headings */}
        <div className="flex flex-col gap-6">
          <h1
            ref={nameRef}
            className="font-heading text-[12vw] sm:text-[8vw] md:text-[5.5rem] font-bold uppercase leading-[1.0] text-[#F2EDE4]"
            style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
          >
            ANVITH REDDY RONDLA
          </h1>
          
          <div
            ref={subtitleRef}
            className="flex flex-col gap-1 font-body text-base md:text-lg text-[#888580] font-medium"
            style={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
          >
            <div className="text-[#F2EDE4] font-semibold text-lg md:text-xl">Junior Product Manager</div>
            <div>Systems Builder · AI Generalist</div>
            <div className="text-[#7C6FF7]/90 font-semibold italic mt-1 font-mono text-sm tracking-wider uppercase">
              Promoted for shipping. Not for credentials.
            </div>
          </div>
        </div>

        {/* Status Strip (small JetBrains Mono) */}
        <div
          ref={statusStripRef}
          className="border-t border-b border-white/5 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs text-[#888580]"
          style={{ opacity: 0 }}
        >
          <div className="flex flex-col gap-1.5">
            <span className="text-[#3A3836] font-bold uppercase tracking-wider">BUILDING NOW</span>
            <span className="text-[#00B4A6] font-semibold">DPMUMS v1.0 — testing</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[#3A3836] font-bold uppercase tracking-wider">LAST SHIPPED</span>
            <span className="text-[#F2EDE4] font-semibold">Reports Auto v102.0 — production</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[#3A3836] font-bold uppercase tracking-wider">LOCATION</span>
            <span className="text-[#888580] font-semibold">India</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[#3A3836] font-bold uppercase tracking-wider">AVAILABLE</span>
            <span className="text-[#FF6B00] font-semibold animate-pulse">Open to PM opportunities</span>
          </div>
        </div>

        {/* Compressed Metrics Strip (Orange) */}
        <div
          ref={metricStripRef}
          className="font-mono text-sm md:text-base text-[#FF6B00] font-semibold tracking-wide"
          style={{ opacity: 0 }}
        >
          10 products · 2 Indian states · ₹0 infrastructure cost · 0 team members
        </div>

      </div>
    </section>
  );
}
