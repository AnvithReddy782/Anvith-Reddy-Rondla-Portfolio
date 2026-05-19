"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { fadeInUp, staggerContainer, springSoft } from "@/lib/animations";
import { useMouseTilt } from "@/hooks/useMouseTilt";
import { useState } from "react";

export default function About() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tilt = useMouseTilt({ maxRotation: 6, perspective: 800, scale: 1.01 });

  return (
    <section id="about" className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute top-10 right-0 text-[clamp(8rem,20vw,16rem)] font-heading font-bold text-[var(--color-text)] opacity-[0.02] pointer-events-none select-none leading-none">
        04
      </div>

      <div className="container-main relative z-10">
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <span className="section-label">04 — About</span>
          <h2 className="section-heading">Who I am outside the work</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Story */}
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={fadeInUp}
          >
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6 text-balance">
              {personalInfo.story}
            </p>

            {/* Philosophy */}
            <motion.div className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {personalInfo.philosophy.map((line, i) => (
                <motion.div key={i} className="flex gap-3 items-start" variants={fadeInUp}>
                  <span className="label text-[var(--color-text-faint)] mt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{line}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="lg:col-span-2 space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={staggerContainer}
          >
            {/* Currently */}
            <motion.div className="card p-4" variants={fadeInUp}>
              <span className="label-accent mb-3 block">Currently</span>
              <div className="space-y-3">
                {[
                  { label: "Building", value: personalInfo.currently.building, color: "label-accent" },
                  { label: "Reading", value: personalInfo.currently.reading, color: "label" },
                  { label: "Thinking", value: personalInfo.currently.thinking, color: "label" },
                ].map((item, i, arr) => (
                  <div key={i}>
                    <span className={item.color}>{item.label}</span>
                    <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">{item.value}</p>
                    {i < arr.length - 1 && <div className="divider mt-3" />}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Location */}
            <motion.div className="card p-4" variants={fadeInUp}>
              <span className="label text-[var(--color-text-faint)] mb-1 block">Location</span>
              <p className="text-sm text-[var(--color-text)]">{personalInfo.location}</p>
            </motion.div>

            {/* Contact with copy */}
            <motion.div className="card p-4" variants={fadeInUp}>
              <span className="label text-[var(--color-text-faint)] mb-1 block">Email</span>
              <motion.button
                onClick={handleCopyEmail}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors flex items-center gap-2"
              >
                {personalInfo.email}
                <motion.span
                  animate={copied ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
                  className="text-[var(--color-signal)] text-xs"
                >
                  Copied
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
