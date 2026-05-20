"use client";

import { motion } from "framer-motion";
import { useMouseTilt } from "@/hooks/useMouseTilt";
import { useCountUp } from "@/hooks/useCountUp";

const flowSteps = [
  { label: "FIELD_APP", desc: "Data capture with validation" },
  { label: "LOGIC_HUB", desc: "Processing and routing engine" },
  { label: "DASHBOARD", desc: "Role-based HTML delivery" },
  { label: "NOTIFY_SVC", desc: "Automated alerts and reports" },
];

const capabilities = [
  { title: "Edge deployment", description: "Local first data persistence with cloud sync. Built for the worst connectivity, not the best.", color: "accent" },
  { title: "Logic engines", description: "Deterministic state machines for field workers. No ambiguity. No edge cases left unhandled.", color: "signal" },
  { title: "Zero fail state", description: "Automated retry logic for low connectivity zones. The system does not break when the network does.", color: "muted" },
];

const liveSystems = [
  { name: "Annapurna Collections", status: "production" },
  { name: "Reports Automation", status: "production" },
  { name: "DPMUMS", status: "testing" },
  { name: "DOC AI", status: "functional" },
  { name: "Field Reporter", status: "functional" },
  { name: "Vantage OS", status: "functional" },
  { name: "Span Finder Pro", status: "functional" },
  { name: "GlobusIT ERP", status: "development" },
  { name: "BSEC Recruitment", status: "functional" },
];

export default function Systems() {
  const pingsCount = useCountUp(1.2, { prefix: "", suffix: "M+", decimals: 1, duration: 2 });

  return (
    <section id="systems" className="py-10 md:py-14 relative overflow-hidden transition-all duration-500 audit-wireframe">
      <span className="audit-hud-tag absolute top-4 left-4 bg-[#00B4A6]/20 text-[#00B4A6] border border-[#00B4A6]/40 px-2 py-0.5 rounded text-[8px] z-20">
        COMP: SYSTEMS_ARCHITECTURE // AGGREGATE_PINGS: 1.2M+ // STACK: deterministic-state-machines
      </span>
      <div className="absolute top-10 right-0 text-[clamp(8rem,20vw,16rem)] font-heading font-bold text-[var(--color-text)] opacity-[0.02] pointer-events-none select-none leading-none">
        03
      </div>

      <div className="container-main relative z-10">
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } } }}
        >
          <span className="section-label">03 / The Architecture</span>
          <h2 className="section-heading">Built for the worst conditions.</h2>
          <p className="section-desc">
            Every system here runs in places with bad internet, confused users, and zero maintenance budget. They do not just work. They survive.
          </p>
        </motion.div>

        {/* Architecture Flow */}
        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } } }}
        >
          <span className="label mb-4 block">How data flows through my systems</span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {flowSteps.map((step, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 25 }}
              >
                <span className="audit-hud-tag absolute -top-1.5 right-1.5 bg-[#FF6B00]/25 text-[#FF6B00] border border-[#FF6B00]/40 px-1.5 py-0.2 rounded text-[7px] font-mono z-10 select-none">
                  SEQ: 0{i+1}
                </span>
                <div className="card p-4 transition-all duration-500 audit-wireframe-orange">
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

        {/* Capability Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
        >
          {capabilities.map((cap, i) => {
            const tilt = useMouseTilt({ maxRotation: 6, perspective: 800, scale: 1.01 });
            return (
              <motion.div
                key={i}
                className="card p-5 relative transition-all duration-500 audit-wireframe-violet"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } } }}
                ref={tilt.ref}
                style={tilt.style}
                {...tilt.handlers}
              >
                <span className="audit-hud-tag absolute -top-1.5 right-1.5 bg-[#7C6FF7]/25 text-[#7C6FF7] border border-[#7C6FF7]/40 px-1.5 py-0.2 rounded text-[7px] font-mono z-10 select-none">
                  CAP_ID: 0{i+1} // LATENCY: 0.05MS
                </span>
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

        {/* Live Status Panel */}
        <motion.div
          className="card p-5 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } } }}
        >
          <span className="label-signal mb-3 block">System Status</span>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {liveSystems.map((sys, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${
                  sys.status === "production" ? "bg-[var(--color-signal)]" :
                  sys.status === "functional" ? "bg-[var(--color-accent)]" :
                  sys.status === "testing" ? "bg-[var(--color-accent)] opacity-60" :
                  "bg-[var(--color-text-faint)]"
                }`} />
                <span className="text-xs text-[var(--color-text-secondary)]">{sys.name}</span>
              </div>
            ))}
          </div>
          <span className="label text-[var(--color-signal)] mt-3 block">7 of 9 systems currently active</span>
        </motion.div>

        {/* Aggregate Scale */}
        <motion.div
          className="card p-6 md:p-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } } }}
        >
          <span className="label text-[var(--color-text-faint)] mb-1.5 block">All systems, combined</span>
          <span className="text-4xl md:text-5xl font-heading font-medium text-[var(--color-signal)]" ref={pingsCount.ref}>
            {pingsCount.value}
          </span>
          <span className="block text-sm text-[var(--color-text-muted)] mt-1.5">Pings per month across all systems</span>
        </motion.div>
      </div>
    </section>
  );
}
