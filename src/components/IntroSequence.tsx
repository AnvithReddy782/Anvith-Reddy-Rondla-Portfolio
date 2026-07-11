'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useStore } from '@/lib/store';
import gsap from 'gsap';

export default function IntroSequence() {
  const setBooting = useStore((state) => state.setBooting);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // GSAP Timeline for the cinematic intro sequence
    const tl = gsap.timeline({
      onComplete: () => {
        setBooting(false);
        setIsVisible(false);
      }
    });

    // Initial state: Background blocks are heavily blurred
    // Timeline steps:
    // 1. Maintain blur and let user register "shipped products" layout hints (1.2s)
    // 2. Animate the blur to shift/clear slightly (0.4s)
    // 3. Fade out the entire overlay (0.5s)
    tl.to('.intro-card', {
      filter: 'blur(8px)',
      opacity: 0.7,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    .to('.intro-card', {
      filter: 'blur(32px)',
      opacity: 0,
      scale: 1.05,
      duration: 0.6,
      ease: 'power3.in',
      stagger: 0.1,
    })
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.out',
    }, '-=0.4');

    return () => {
      tl.kill();
    };
  }, [setBooting]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen bg-[#0A0A0A] z-[999] flex flex-col justify-center items-center overflow-hidden pointer-events-none"
    >
      {/* 2x2 Grid of Blurred Shipped System Layouts (The Evidence) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-8 md:px-16 aspect-video">
        
        {/* Card 1: DPMUMS Geofence Map */}
        <div className="intro-card border border-white/5 bg-[#141414]/40 p-6 rounded-lg flex flex-col justify-between filter blur-xl opacity-40 transform scale-95 transition-all">
          <div className="flex justify-between items-center border-b border-white/5 pb-3">
            <span className="font-mono text-xs text-[#00B4A6]">SYSTEM: DPMUMS</span>
            <span className="font-mono text-xs text-white/30">GEOFENCE ACTIVE [100M]</span>
          </div>
          <div className="flex-1 py-8 flex flex-col justify-center">
            <div className="h-2 w-3/4 bg-white/10 rounded mb-3"></div>
            <div className="h-2 w-1/2 bg-[#00B4A6]/20 rounded mb-3"></div>
            <div className="h-2 w-5/6 bg-white/5 rounded"></div>
            <div className="mt-4 flex gap-2">
              <div className="h-6 w-16 bg-[#7C6FF7]/15 rounded border border-[#7C6FF7]/20"></div>
              <div className="h-6 w-20 bg-white/5 rounded"></div>
            </div>
          </div>
          <div className="flex justify-between items-center border-t border-white/5 pt-3">
            <span className="font-mono text-[10px] text-white/20">LOC: 25.5941° N, 85.1376° E</span>
            <span className="font-mono text-[10px] text-[#00B4A6] animate-pulse">● STABLE</span>
          </div>
        </div>

        {/* Card 2: Annapurna Collections Storefront */}
        <div className="intro-card border border-white/5 bg-[#141414]/40 p-6 rounded-lg flex flex-col justify-between filter blur-xl opacity-40 transform scale-95 transition-all">
          <div className="flex justify-between items-center border-b border-white/5 pb-3">
            <span className="font-mono text-xs text-[#FF6B00]">SYSTEM: ANNAPURNA</span>
            <span className="font-mono text-xs text-white/30">WEBHOOK STATUS: IDEMPOTENT</span>
          </div>
          <div className="flex-1 py-8 flex flex-col justify-center">
            <div className="h-2 w-2/3 bg-white/10 rounded mb-3"></div>
            <div className="h-2 w-4/5 bg-white/5 rounded mb-3"></div>
            <div className="h-12 w-full border border-dashed border-[#FF6B00]/25 rounded flex items-center justify-center">
              <span className="font-mono text-[9px] text-[#FF6B00]/40">EDITORIAL CONTAINER - 42/58 SPLIT</span>
            </div>
          </div>
          <div className="flex justify-between items-center border-t border-white/5 pt-3">
            <span className="font-mono text-[10px] text-white/20">ORDER ID: SANITY_CTR_092</span>
            <span className="font-mono text-[10px] text-white/30">RAZORPAY OK</span>
          </div>
        </div>

        {/* Card 3: DOC AI Stream Flow */}
        <div className="intro-card border border-white/5 bg-[#141414]/40 p-6 rounded-lg flex flex-col justify-between filter blur-xl opacity-40 transform scale-95 transition-all">
          <div className="flex justify-between items-center border-b border-white/5 pb-3">
            <span className="font-mono text-xs text-[#7C6FF7]">SYSTEM: DOC AI</span>
            <span className="font-mono text-xs text-white/30">STREAM PIPELINE</span>
          </div>
          <div className="flex-1 py-8 flex flex-col justify-center">
            <div className="h-2 w-5/6 bg-white/5 rounded mb-3"></div>
            <div className="h-2 w-3/4 bg-[#7C6FF7]/20 rounded mb-3"></div>
            <div className="h-2 w-2/3 bg-white/10 rounded mb-3"></div>
            <div className="h-2 w-1/2 bg-white/5 rounded"></div>
          </div>
          <div className="flex justify-between items-center border-t border-white/5 pt-3">
            <span className="font-mono text-[10px] text-[#00B4A6]">QA VALIDATION: STRICT PASSED</span>
            <span className="font-mono text-[10px] text-white/20">GEMINI 2.5</span>
          </div>
        </div>

        {/* Card 4: Reports Automation Org Chart */}
        <div className="intro-card border border-white/5 bg-[#141414]/40 p-6 rounded-lg flex flex-col justify-between filter blur-xl opacity-40 transform scale-95 transition-all">
          <div className="flex justify-between items-center border-b border-white/5 pb-3">
            <span className="font-mono text-xs text-white/40">SYSTEM: REPORTS ENGINE</span>
            <span className="font-mono text-xs text-white/30">CRON STATUS: ACTIVE</span>
          </div>
          <div className="flex-1 py-8 flex flex-col justify-center">
            <div className="h-2 w-1/2 bg-white/10 rounded mb-3"></div>
            <div className="h-10 w-3/4 border border-[#7C6FF7]/20 bg-[#7C6FF7]/5 rounded p-2 flex items-center mb-3">
              <div className="h-1.5 w-1.5 bg-[#7C6FF7] rounded-full mr-2"></div>
              <div className="h-2 w-4/5 bg-white/10 rounded"></div>
            </div>
            <div className="h-2 w-2/3 bg-white/5 rounded"></div>
          </div>
          <div className="flex justify-between items-center border-t border-white/5 pt-3">
            <span className="font-mono text-[10px] text-white/20">ROLES: 13 CUSTOM DISPATCHES</span>
            <span className="font-mono text-[10px] text-[#00B4A6]">100% DISPATCHED</span>
          </div>
        </div>

      </div>

      {/* Very faint text at bottom */}
      <div className="absolute bottom-8 font-mono text-[10px] text-white/15 tracking-[0.2em] uppercase">
        Systems evidence initializing...
      </div>
    </div>
  );
}
