"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function DigitColumn({ digit }: { digit: number }) {
  return (
    <div className="w-[1ch] h-[1em] overflow-hidden relative inline-block text-center font-mono">
      <motion.div
        animate={{ y: `-${digit * 10}%` }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className="flex flex-col absolute top-0 left-0 w-full"
        style={{ height: "1000%" }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span key={n} className="h-[1em] leading-none select-none flex items-center justify-center">
            {n}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function TimezoneClock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return (
      <div className="relative w-full h-full bg-[#f5efe7] rounded-lg animate-pulse" />
    );
  }

  // Get local Bangalore time (IST - UTC +5:30)
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(time);
  const hour = parts.find((p) => p.type === "hour")?.value || "00";
  const minute = parts.find((p) => p.type === "minute")?.value || "00";
  const second = parts.find((p) => p.type === "second")?.value || "00";

  const h0 = parseInt(hour[0]) || 0;
  const h1 = parseInt(hour[1]) || 0;
  const m0 = parseInt(minute[0]) || 0;
  const m1 = parseInt(minute[1]) || 0;
  const s0 = parseInt(second[0]) || 0;
  const s1 = parseInt(second[1]) || 0;

  // Format month and day
  const dateOptions: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Kolkata",
    month: "short",
    day: "numeric",
  };
  const dateStr = time.toLocaleDateString("en-US", dateOptions);

  return (
    <div className="relative w-full h-full select-none overflow-hidden" style={{ borderRadius: "inherit" }}>
      {/* Perforated border background wrapper */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Desktop Border */}
        <img
          src="/stamp_clock_border.svg"
          alt=""
          className="w-full h-full object-fill hidden md:block"
        />
        {/* Mobile Border */}
        <img
          src="/stamp_clock_border_small.svg"
          alt=""
          className="w-full h-full object-fill md:hidden"
        />
      </div>

      {/* Stamp inner card content */}
      <div className="absolute inset-0 bg-[#f5efe7] flex flex-col justify-between p-4 z-0">
        {/* Cloud Marquee Scrolling Area */}
        <div className="absolute inset-0 overflow-hidden opacity-30 z-0 select-none pointer-events-none">
          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-col gap-6 items-center w-full"
          >
            {/* Set of clouds repeating */}
            <div className="flex flex-col gap-6 items-center w-full">
              <img src="/symbol_rainbow.svg" className="w-16 h-auto" alt="" />
              <div className="w-16 h-12 bg-no-repeat bg-contain" style={{ backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 99.58 93.42\"><path d=\"M 16.556 37.599 C 19.979 37.599 22.917 39.677 24.177 42.64 C 24.394 42.623 24.613 42.612 24.835 42.612 C 29.407 42.612 33.114 46.318 33.114 50.89 C 33.114 55.462 29.407 59.169 24.835 59.169 C 23.326 59.169 21.913 58.762 20.695 58.057 C 19.477 58.762 18.064 59.169 16.556 59.169 C 15.047 59.169 13.634 58.763 12.416 58.058 C 11.199 58.762 9.786 59.169 8.278 59.169 C 3.706 59.168 0 55.462 0 50.89 C 0 46.318 3.706 42.612 8.278 42.612 C 8.499 42.612 8.718 42.623 8.935 42.64 C 10.195 39.677 13.133 37.599 16.556 37.599 Z\" fill=\"rgb(255, 255, 255)\"></path></svg>')" }} />
              <div className="w-20 h-14 bg-no-repeat bg-contain" style={{ backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 99.58 93.42\"><path d=\"M 44.48 64.616 C 48.889 64.616 52.673 67.292 54.298 71.108 C 54.579 71.086 54.862 71.072 55.149 71.072 C 61.041 71.072 65.817 75.849 65.817 81.741 C 65.816 87.633 61.04 92.409 55.149 92.409 C 53.204 92.409 51.383 91.887 49.813 90.978 C 48.244 91.886 46.423 92.409 44.48 92.409 C 42.535 92.409 40.714 91.887 39.144 90.978 C 37.575 91.886 35.754 92.409 33.811 92.409 C 27.918 92.409 23.142 87.633 23.142 81.741 C 23.142 75.849 27.918 71.072 33.811 71.072 C 34.096 71.072 34.379 71.086 34.659 71.108 C 36.284 67.291 40.069 64.616 44.48 64.616 Z\" fill=\"rgb(255, 255, 255)\"></path></svg>')" }} />
              <div className="w-24 h-16 bg-no-repeat bg-contain" style={{ backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 99.58 93.42\"><path d=\"M 80.773 0 C 84.513 0 87.722 2.269 89.099 5.505 C 89.337 5.486 89.577 5.474 89.819 5.474 C 94.815 5.474 98.865 9.524 98.865 14.52 C 98.865 19.515 94.815 23.565 89.819 23.565 C 88.172 23.565 86.63 23.122 85.3 22.353 C 83.968 23.124 82.423 23.569 80.773 23.569 C 79.125 23.569 77.581 23.125 76.25 22.355 C 74.919 23.125 73.376 23.569 71.727 23.569 C 66.732 23.568 62.683 19.518 62.683 14.523 C 62.683 9.527 66.732 5.478 71.727 5.478 C 71.969 5.478 72.209 5.49 72.445 5.509 C 73.822 2.271 77.033 0 80.773 0 Z\" fill=\"rgb(255, 255, 255)\"></path></svg>')" }} />
            </div>
            {/* Same set repeated for seamless loop */}
            <div className="flex flex-col gap-6 items-center w-full">
              <img src="/symbol_rainbow.svg" className="w-16 h-auto" alt="" />
              <div className="w-16 h-12 bg-no-repeat bg-contain" style={{ backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 99.58 93.42\"><path d=\"M 16.556 37.599 C 19.979 37.599 22.917 39.677 24.177 42.64 C 24.394 42.623 24.613 42.612 24.835 42.612 C 29.407 42.612 33.114 46.318 33.114 50.89 C 33.114 55.462 29.407 59.169 24.835 59.169 C 23.326 59.169 21.913 58.762 20.695 58.057 C 19.477 58.762 18.064 59.169 16.556 59.169 C 15.047 59.169 13.634 58.763 12.416 58.058 C 11.199 58.762 9.786 59.169 8.278 59.169 C 3.706 59.168 0 55.462 0 50.89 C 0 46.318 3.706 42.612 8.278 42.612 C 8.499 42.612 8.718 42.623 8.935 42.64 C 10.195 39.677 13.133 37.599 16.556 37.599 Z\" fill=\"rgb(255, 255, 255)\"></path></svg>')" }} />
              <div className="w-20 h-14 bg-no-repeat bg-contain" style={{ backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 99.58 93.42\"><path d=\"M 44.48 64.616 C 48.889 64.616 52.673 67.292 54.298 71.108 C 54.579 71.086 54.862 71.072 55.149 71.072 C 61.041 71.072 65.817 75.849 65.817 81.741 C 65.816 87.633 61.04 92.409 55.149 92.409 C 53.204 92.409 51.383 91.887 49.813 90.978 C 48.244 91.886 46.423 92.409 44.48 92.409 C 42.535 92.409 40.714 91.887 39.144 90.978 C 37.575 91.886 35.754 92.409 33.811 92.409 C 27.918 92.409 23.142 87.633 23.142 81.741 C 23.142 75.849 27.918 71.072 33.811 71.072 C 34.096 71.072 34.379 71.086 34.659 71.108 C 36.284 67.291 40.069 64.616 44.48 64.616 Z\" fill=\"rgb(255, 255, 255)\"></path></svg>')" }} />
              <div className="w-24 h-16 bg-no-repeat bg-contain" style={{ backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 99.58 93.42\"><path d=\"M 80.773 0 C 84.513 0 87.722 2.269 89.099 5.505 C 89.337 5.486 89.577 5.474 89.819 5.474 C 94.815 5.474 98.865 9.524 98.865 14.52 C 98.865 19.515 94.815 23.565 89.819 23.565 C 88.172 23.565 86.63 23.122 85.3 22.353 C 83.968 23.124 82.423 23.569 80.773 23.569 C 79.125 23.569 77.581 23.125 76.25 22.355 C 74.919 23.125 73.376 23.569 71.727 23.569 C 66.732 23.568 62.683 19.518 62.683 14.523 C 62.683 9.527 66.732 5.478 71.727 5.478 C 71.969 5.478 72.209 5.49 72.445 5.509 C 73.822 2.271 77.033 0 80.773 0 Z\" fill=\"rgb(255, 255, 255)\"></path></svg>')" }} />
            </div>
          </motion.div>
        </div>

        {/* Text Information overlay (z-index: 1) */}
        <div className="relative flex flex-col justify-between h-full w-full z-10 pt-2 pb-1 text-[#517d64]">
          {/* Location */}
          <div className="flex flex-col items-center">
            <span
              className="text-xs uppercase"
              style={{ fontFamily: '"Architects Daughter", cursive', fontSize: "11px", letterSpacing: "1px" }}
            >
              India
            </span>
            <span
              className="text-lg font-extrabold leading-none tracking-tight"
              style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontSize: "17px", fontWeight: 800 }}
            >
              Bangalore
            </span>
          </div>

          {/* Time digits columns */}
          <div className="flex items-center justify-center text-2xl font-bold font-mono tracking-tighter" style={{ fontSize: "28px" }}>
            <DigitColumn digit={h0} />
            <DigitColumn digit={h1} />
            <span className="relative -top-0.5 mx-px animate-[pulse_1s_infinite]">:</span>
            <DigitColumn digit={m0} />
            <DigitColumn digit={m1} />
            <span className="relative -top-0.5 mx-px hidden md:inline animate-[pulse_1s_infinite]">:</span>
            <span className="hidden md:inline">
              <DigitColumn digit={s0} />
              <DigitColumn digit={s1} />
            </span>
          </div>

          {/* Date Label */}
          <div className="text-center font-bold text-[9px] uppercase tracking-wider text-[#7d776e]">
            {dateStr}
          </div>
        </div>

        {/* Sparkle sticker annotation overlay (z-index: 10) */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 z-20 pointer-events-none">
          <img src="/stamp_sparkle.svg" alt="" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
}
