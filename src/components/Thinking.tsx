"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, springSoft, springMedium } from "@/lib/animations";
import { useCountUp } from "@/hooks/useCountUp";

export default function Thinking() {
  const artifacts = [
    { label: "BRDs", count: 10, sub: "Business requirements", suffix: "+" },
    { label: "ERDs", count: 8, sub: "Entity relationships", suffix: "" },
    { label: "User flows", count: 15, sub: "Logical pathing", suffix: "+" },
    { label: "User stories", count: 120, sub: "Feature backlog", suffix: "+" },
  ];

  const process = [
    { step: "01", title: "Observe", desc: "Watch how people actually work, not how they say they work." },
    { step: "02", title: "Define", desc: "Write the problem down. If you cannot, you do not understand it yet." },
    { step: "03", title: "Decide", desc: "Choose the simplest solution that solves the real problem." },
    { step: "04", title: "Build", desc: "Ship fast. Ship ugly. Fix it in production with real data." },
    { step: "05", title: "Measure", desc: "If you cannot measure it, you do not know if it works." },
  ];

  const countRefs = artifacts.map((a) => useCountUp(a.count, { suffix: a.suffix, duration: 1.2 }));

  return (
    <section id="thinking" className="py-14 md:py-20 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-10 right-0 text-[clamp(8rem,20vw,16rem)] font-heading font-bold text-[var(--color-text)] opacity-[0.02] pointer-events-none select-none leading-none">
        02
      </div>

      <div className="container-main relative z-10">
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <span className="section-label">02 — Thinking</span>
          <h2 className="section-heading">How I approach problems</h2>
          <p className="section-desc">
            Before writing code, I write requirements. Before building features, I map user flows. This is the layer most portfolios skip — and the layer that separates PMs from developers.
          </p>
        </motion.div>

        {/* Artifacts */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
        >
          {artifacts.map((a, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="card p-4 text-center"
              whileHover={{ y: -2 }}
              transition={springSoft}
            >
              <span className="text-2xl md:text-3xl font-heading font-medium text-[var(--color-text)]" ref={countRefs[i].ref}>
                {countRefs[i].value}
              </span>
              <span className="block text-sm text-[var(--color-text)] font-medium mt-1.5">{a.label}</span>
              <span className="label mt-0.5 block">{a.sub}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Process + Mindset */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Process */}
          <motion.div
            className="card p-5 md:p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={fadeInUp}
          >
            <span className="label-accent mb-5 block">The process</span>
            <motion.div className="space-y-4" variants={staggerContainer}>
              {process.map((item) => (
                <motion.div key={item.step} className="flex gap-3 items-start" variants={fadeInUp}>
                  <span className="label text-[var(--color-text-faint)] flex-shrink-0 mt-0.5">{item.step}</span>
                  <div>
                    <h4 className="text-[var(--color-text)] text-sm font-medium">{item.title}</h4>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mindset */}
          <motion.div
            className="card p-5 md:p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={fadeInUp}
          >
            <span className="label-signal mb-5 block">The mindset</span>
            <motion.blockquote
              className="text-[var(--color-text-secondary)] italic leading-relaxed border-l-2 border-[var(--color-accent)]/30 pl-4 mb-5"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, ...springSoft }}
            >
              I do not wait for permission to solve problems I can see. I build the thing, show the results, and let the work speak for itself.
            </motion.blockquote>
            <div className="divider mb-5" />
            <div>
              <span className="label mb-2 block">What this means for you</span>
              <motion.ul className="space-y-2.5 text-sm text-[var(--color-text-muted)]" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {[
                  "I will find problems before you assign them",
                  "I will ship solutions, not just suggestions",
                  "I will measure impact, not just output",
                  "I will own the problem end to end",
                ].map((item, i) => (
                  <motion.li key={i} className="flex items-start gap-2" variants={fadeInUp}>
                    <span className="text-[var(--color-signal)] mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
