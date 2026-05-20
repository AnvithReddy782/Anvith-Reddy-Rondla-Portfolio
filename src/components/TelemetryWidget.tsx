"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/lib/store";

export default function TelemetryWidget() {
  const { telemetry, updateTelemetry, addTelemetryLog, auditMode } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const lastMousePos = useRef<{ x: number; y: number } | null>(null);
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  // Active tracking listeners
  useEffect(() => {
    // 1. Mouse mileage tracker
    const handleMouseMove = (e: MouseEvent) => {
      if (lastMousePos.current) {
        const dx = e.clientX - lastMousePos.current.x;
        const dy = e.clientY - lastMousePos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Convert to virtual meters and accumulate
        updateTelemetry({
          cursorMileage: Math.round(telemetry.cursorMileage + distance),
        });
      }
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    // 2. Scroll velocity & energy tracker
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const dy = Math.abs(currentScrollY - lastScrollY.current);
      const dt = Math.max(1, currentTime - lastScrollTime.current);
      
      const velocity = dy / dt; // pixels per millisecond
      const energyGained = Math.round(velocity * 12);
      
      if (energyGained > 0) {
        updateTelemetry({
          scrollEnergy: telemetry.scrollEnergy + energyGained,
        });

        // Periodic logging of high energy scroll events
        if (velocity > 3 && Math.random() < 0.1) {
          addTelemetryLog(`Kinetic burst: scroll velocity ${velocity.toFixed(2)}px/ms`);
        }
      }
      
      lastScrollY.current = currentScrollY;
      lastScrollTime.current = currentTime;
    };

    // 3. Hover attention span tracker
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "BUTTON" || 
        target.tagName === "A" || 
        target.closest("a") || 
        target.closest("button") ||
        target.classList.contains("card");

      if (isInteractive) {
        if (hoverTimer.current) clearTimeout(hoverTimer.current);
        
        hoverTimer.current = setTimeout(() => {
          updateTelemetry({
            attentionSpan: telemetry.attentionSpan + 1,
          });
          const elementLabel = target.textContent?.slice(0, 15) || target.tagName;
          addTelemetryLog(`Attention lock on target: "${elementLabel.trim()}"`);
        }, 1000); // 1s continuous hover counts as positive attention
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseover", handleMouseOver);
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, [telemetry.cursorMileage, telemetry.scrollEnergy, telemetry.attentionSpan, updateTelemetry, addTelemetryLog]);

  // Click tracker
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const label = target.textContent?.slice(0, 15) || target.tagName;
      addTelemetryLog(`Click confirmed: "${label.trim()}"`);
      
      // Bonus attention points for interaction clicks
      updateTelemetry({
        attentionSpan: telemetry.attentionSpan + 5,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [telemetry.attentionSpan, updateTelemetry, addTelemetryLog]);

  const virtualMeters = (telemetry.cursorMileage / 350).toFixed(1);

  return (
    <div className="fixed bottom-6 right-6 z-[90] font-mono select-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`w-72 bg-[#0C0C0C]/90 border backdrop-blur-md p-4 rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.8)] mb-3 ${
              auditMode 
                ? "border-[#00B4A6] shadow-[0_0_15px_rgba(0,180,166,0.15)]" 
                : "border-[var(--color-border)]"
            }`}
          >
            {/* Widget Header */}
            <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-2 mb-3">
              <span className="text-[10px] font-bold text-[#00B4A6] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B4A6] animate-pulse" />
                VISITOR_TELEMETRY_HUD
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[10px] text-neutral-500 hover:text-white transition-colors"
              >
                [HIDE]
              </button>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-2.5 mb-3.5">
              <div className="bg-[#161616]/60 border border-[var(--color-border)] p-2 rounded">
                <span className="text-[9px] text-[var(--color-text-faint)] block uppercase">Cursor Mileage</span>
                <span className="text-xs font-semibold text-white mt-0.5 block">{virtualMeters}m</span>
              </div>
              <div className="bg-[#161616]/60 border border-[var(--color-border)] p-2 rounded">
                <span className="text-[9px] text-[var(--color-text-faint)] block uppercase">Scroll Kinetic</span>
                <span className="text-xs font-semibold text-white mt-0.5 block">{telemetry.scrollEnergy}J</span>
              </div>
              <div className="bg-[#161616]/60 border border-[var(--color-border)] p-2 rounded col-span-2">
                <span className="text-[9px] text-[var(--color-text-faint)] block uppercase">Attention Span Rating</span>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#7C6FF7] transition-all duration-300"
                      style={{ width: `${Math.min(100, (telemetry.attentionSpan / 60) * 100)}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-[var(--color-text-secondary)]">{telemetry.attentionSpan}</span>
                </div>
              </div>
            </div>

            {/* Visitor Classification Tier */}
            <div className="bg-[#161616]/80 border border-[#00B4A6]/20 p-2.5 rounded mb-3.5">
              <span className="text-[9px] text-[#00B4A6] block uppercase font-bold">Visitor Tier Profile</span>
              <span className="text-[11px] text-white mt-1 block font-semibold">
                {telemetry.visitorTier}
              </span>
            </div>

            {/* Realtime Event Logs stream */}
            <div className="border-t border-[var(--color-border)] pt-2.5">
              <span className="text-[9px] text-[var(--color-text-faint)] block uppercase mb-1.5">Active Event Log Stream</span>
              <div className="h-20 overflow-y-auto bg-black/50 rounded border border-[var(--color-border)] p-1.5 font-mono text-[8px] text-neutral-400 space-y-1 scrollbar-thin">
                {telemetry.logs.slice(0, 20).map((log, i) => (
                  <div key={i} className="leading-normal border-b border-neutral-900/50 pb-0.5 break-all">
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-10 h-10 rounded-full bg-[#0C0C0C] border flex items-center justify-center text-neutral-400 hover:text-white transition-all shadow-lg ${
          isOpen 
            ? "border-[#00B4A6] text-[#00B4A6] shadow-[0_0_10px_rgba(0,180,166,0.3)]" 
            : "border-[var(--color-border)] hover:border-neutral-700"
        }`}
        aria-label="Toggle visitor telemetry dashboard"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <path d="M12 22V12M12 12L3.27 6.96M12 12l8.73-5.04" />
        </svg>
      </motion.button>
    </div>
  );
}
