'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '@/lib/store';

const BOOT_LOGS = [
  'INITIALIZING SPATIAL PIPELINE ENGINE...',
  'LINKING ZUSTAND GLOBAL STATE CONTAINERS...',
  'RESOLVING GRAPHIC SYSTEM CONSTANTS [GLSL-GRID]...',
  'SYNCHRONIZING PRODUCT DATA METRICS [ANNAPURNA, DOC_AI, VANTAGE]...',
  'LAUNCHING TELEMETRY ACQUISITION SYSTEM...',
  'PREPARING RECRUITER HUD AUDIT LAYER...',
  'ACTIVE PIPELINE STABLE. BOOT SUCCESSFUL.'
];

export default function Preloader() {
  const { booting, setBooting } = useStore();
  const [progress, setProgress] = useState(0);
  const [currentLogIdx, setCurrentLogIdx] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [glitchText, setGlitchText] = useState('SYS_BOOT');

  useEffect(() => {
    if (booting) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [booting]);

  useEffect(() => {
    if (!booting) return;

    // Fast loading simulation with organic variation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [booting]);

  useEffect(() => {
    if (!booting) return;

    // Simulate logs typewriter
    const logInterval = setInterval(() => {
      if (currentLogIdx < BOOT_LOGS.length) {
        setLogs((prev) => [...prev, `> ${BOOT_LOGS[currentLogIdx]}`]);
        setCurrentLogIdx((prev) => prev + 1);
      }
    }, 350);

    return () => clearInterval(logInterval);
  }, [booting, currentLogIdx]);

  useEffect(() => {
    if (!booting) return;

    // Glitch effect on header
    const glitchInterval = setInterval(() => {
      const glyphs = '01#@$%&_[]{}SYS_BOOT';
      const glitched = Array.from({ length: 8 })
        .map(() => glyphs[Math.floor(Math.random() * glyphs.length)])
        .join('');
      setGlitchText(glitched);
      setTimeout(() => setGlitchText('SYSTEMS_BOOT'), 150);
    }, 1800);

    return () => clearInterval(glitchInterval);
  }, [booting]);

  // Complete booting when progress is 100 and final log is printed
  useEffect(() => {
    if (progress === 100 && currentLogIdx >= BOOT_LOGS.length) {
      const delay = setTimeout(() => {
        setBooting(false);
      }, 800);
      return () => clearTimeout(delay);
    }
  }, [progress, currentLogIdx, setBooting]);

  return (
    <AnimatePresence>
      {booting && (
        <motion.div
          initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          exit={{ 
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#0C0C0C] p-6 md:p-12 font-mono text-[#00B4A6] select-none"
        >
          {/* Header Indicators */}
          <div className="flex items-center justify-between text-xs tracking-wider border-b border-[#00B4A6]/20 pb-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <span>CORE_INIT_STREAM // RUNTIME v1.0.2</span>
            </div>
            <div className="hidden sm:block text-right text-neutral-500">
              LOC: HYD_TELANGANA_IN // DST_04
            </div>
          </div>

          {/* Core Content - Status Log Console */}
          <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full my-8">
            <div className="mb-8">
              <h1 className="text-3xl sm:text-5xl font-black tracking-tighter text-neutral-100 flex items-baseline gap-2">
                {glitchText}
                <span className="text-sm font-normal text-[#FF6B00] px-2 py-0.5 rounded bg-[#FF6B00]/10 border border-[#FF6B00]/20 animate-pulse">
                  TRIAL_STREAM
                </span>
              </h1>
              <p className="text-xs text-neutral-500 mt-2 tracking-widest uppercase">
                Anvith Rondla // Spatial Blueprint Preloader
              </p>
            </div>

            {/* Terminal logs view */}
            <div className="h-48 sm:h-56 bg-[#161616]/60 border border-[#00B4A6]/20 rounded-md p-4 flex flex-col justify-end gap-1.5 overflow-hidden text-xs sm:text-sm text-neutral-400 select-text leading-relaxed">
              {logs.map((log, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={idx === logs.length - 1 ? 'text-[#00B4A6]' : ''}
                >
                  {log}
                </motion.div>
              ))}
              <div className="flex items-center gap-1.5">
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>

          {/* Footer - Loading bar */}
          <div className="w-full max-w-4xl mx-auto flex flex-col gap-3">
            <div className="flex items-baseline justify-between text-xs sm:text-sm">
              <span className="tracking-widest">DEPLOYING CONTAINER ARTIFACTS</span>
              <span className="text-[#FF6B00] font-black text-xl">{progress}%</span>
            </div>

            {/* Visual gradient bar */}
            <div className="h-2 w-full bg-[#161616] rounded-full overflow-hidden border border-[#00B4A6]/10 p-[1px]">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                className="h-full bg-gradient-to-r from-[#00B4A6] via-[#7C6FF7] to-[#FF6B00] rounded-full"
              />
            </div>

            <div className="flex justify-between items-center text-[10px] text-neutral-500 mt-1 uppercase tracking-widest">
              <span>EST_BANDWIDTH: 10Gbps</span>
              <span>SYS_TEMP: STABLE // 38C</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
