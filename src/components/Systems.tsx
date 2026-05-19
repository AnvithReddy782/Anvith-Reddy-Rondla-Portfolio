"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { fadeInUp, staggerContainer, springSoft } from "@/lib/animations";
import { useMouseTilt } from "@/hooks/useMouseTilt";
import { useCountUp } from "@/hooks/useCountUp";

export default function Systems() {
  const capabilities = [
    { title: "Edge deployment", description: "Local-first data persistence with cloud sync. Built for the worst connectivity, not the best.", color: "accent" },
    { title: "Logic engines", description: "Deterministic state machines for field workers. No ambiguity. No edge cases left unhandled.", color: "signal" },
    { title: "Zero fail state", description: "Automated retry logic for low-connectivity zones. The system does not break when the network does.", color: "muted" },
  ];

  const flowSteps = [
    { label: "FIELD_APP", desc: "Data capture with validation" },
    { label: "LOGIC_HUB", desc: "Processing and routing engine" },
    { label: "DASHBOARD", desc: "Role-based HTML delivery" },
    { label: "NOTIFY_SVC", desc: "Automated alerts and reports" },
  ];

  const pingsCount = useCountUp(1.2, { prefix: "", suffix: "M+", decimals: 1, duration: 2 });

  return (
    <section id="systems" className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute top-10 right-0 text-[clamp(8rem,20vw,16rem)] font-heading font-bold text-[var(--color-text)] opacity-[0.02] pointer-events-none select-none leading-none">
        03
      </div>

      <div className="container-main relative z-10">
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <span className="section-label">03 — Systems</span>
          <h2 className="section-heading">Can I handle complexity?</h2>
          <p className="section-desc">
            1.2M+ pings per month across all systems. Every one designed to survive real-world conditions — bad networks, confused users, and zero maintenance budget.
          </p>
        </motion.div>

        {/* Architecture flow */}
        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={fadeInUp}
        >
          <span className="label mb-4 block">System architecture pattern</span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {flowSteps.map((step, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ...springSoft }}
              >
                <div className="card p-4">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                    />
                    <span className="mono text-[var(--color-text)] font-medium">{step.label}</span>
                  </div>
                  <p className="text-xs text-[var(--color-text-muted)]">{step.desc}</p>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-[var(--color-border)]">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 border-r border-t border-[var(--color-border)] rotate-45" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Capabilities with 3D tilt */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
        >
          {capabilities.map((cap, i) => {
            const tilt = useMouseTilt({ maxRotation: 6, perspective: 800, scale: 1.01 });
            return (
              <motion.div
                key={i}
                className="card p-5"
                variants={fadeInUp}
                ref={tilt.ref}
                style={tilt.style}
                {...tilt.handlers}
              >
                <div className={`w-9 h-9 rounded-lg mb-3 flex items-center justify-center ${
                  cap.color === "accent" ? "bg-[var(--color-accent-subtle)] text-[var(--color-accent)]" :
                  cap.color === "signal" ? "bg-[var(--color-signal-subtle)] text-[var(--color-signal)]" :
                  "bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)]"
                }`}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {cap.title === "Edge deployment" && <><rect x="2" y="5" width="14" height="9" rx="1.5" /><path d="M5 5V4a4 4 0 018 0v1" /></>}
                    {cap.title === "Logic engines" && <><circle cx="9" cy="9" r="2.5" /><path d="M9 2v2M9 14v2M2 9h2M14 9h2" /></>}
                    {cap.title === "Zero fail state" && <><path d="M9 1.5L2.5 6v6L9 16.5l6.5-4.5V6L9 1.5z" /><path d="M9 7.5v3M9 12.5v.5" /></>}
                  </svg>
                </div>
                <h4 className="text-[var(--color-text)] mb-1">{cap.title}</h4>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{cap.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Aggregate scale */}
        <motion.div
          className="card p-6 md:p-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={fadeInUp}
        >
          <span className="label text-[var(--color-text-faint)] mb-1.5 block">Aggregate scale</span>
          <span className="text-4xl md:text-5xl font-heading font-medium text-[var(--color-signal)]" ref={pingsCount.ref}>
            {pingsCount.value}
          </span>
          <span className="block text-sm text-[var(--color-text-muted)] mt-1.5">Pings per month across all systems</span>
        </motion.div>
      </div>
    </section>
  );
}
