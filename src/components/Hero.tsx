"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { staggerContainer } from "@/lib/animations";
import { useCountUp } from "@/hooks/useCountUp";

export default function Hero() {
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [glowActive, setGlowActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setGlowPos({ x: e.clientX, y: e.clientY });
      if (!glowActive) setGlowActive(true);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [glowActive]);

  const stats = [
    { value: personalInfo.stats.products, label: "Products shipped" },
    { value: personalInfo.stats.states, label: "States in production" },
    { value: 0, label: "Infrastructure cost", display: personalInfo.stats.infraCost },
    { value: personalInfo.stats.teamSize, label: "Team members" },
  ];

  const countProducts = useCountUp(stats[0].value, { duration: 1.2 });
  const countStates = useCountUp(stats[1].value, { duration: 1.2 });
  const countTeam = useCountUp(stats[3].value, { duration: 1.2 });

  return (
    <section ref={ref} className="relative min-h-[90vh] flex flex-col justify-center pt-20 pb-16 overflow-hidden">
      {/* Cursor glow */}
      <div
        className="cursor-glow hidden md:block"
        style={{ left: glowPos.x, top: glowPos.y, opacity: glowActive ? 1 : 0 }}
      />

      {/* Breathing dot grid */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.025 }}
        animate={{ opacity: [0.02, 0.035, 0.02] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, var(--color-text-faint) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </motion.div>

      {/* Parallax content */}
      <motion.div style={{ y, opacity }} className="container-main relative z-10">
        <motion.div
          className="label-signal mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-signal)] pulse" />
            Available for product roles — India or remote
          </span>
        </motion.div>

        <motion.h1 className="overflow-hidden" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.span
            className="block text-[var(--color-text)]"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.6 }}
          >
            Anvith Reddy
          </motion.span>
          <motion.span
            className="block text-[var(--color-text-muted)]"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.6 }}
          >
            Rondla
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[var(--color-text-secondary)] mt-4 max-w-xl text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.4 }}
        >
          {personalInfo.title}. Promoted to Junior PM in two months — for building ten products nobody asked for.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-6 md:gap-10 mt-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} className="flex flex-col" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } } }}>
              <span className="text-2xl md:text-3xl font-heading font-medium text-[var(--color-text)]">
                {i === 0 ? <span ref={countProducts.ref}>{countProducts.value}</span> :
                 i === 1 ? <span ref={countStates.ref}>{countStates.value}</span> :
                 i === 2 ? stat.display :
                 <span ref={countTeam.ref}>{countTeam.value}</span>}
              </span>
              <span className="label mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-5 sm:gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            { label: "Building", text: personalInfo.currently.building, color: "label-accent" },
            { label: "Last shipped", text: personalInfo.currently.lastDeploy, color: "label-signal" },
            { label: "Thinking", text: personalInfo.currently.thinking, color: "label" },
          ].map((item, i) => (
            <motion.div key={i} variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } } }}>
              <span className={item.color}>{item.label}</span>
              <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="label text-[var(--color-text-faint)]">Scroll</span>
            <div className="w-px h-6 bg-gradient-to-b from-[var(--color-border)] to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
