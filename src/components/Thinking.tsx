"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

export default function Thinking() {
  const artifacts = [
    { label: "BRDs", count: 10, sub: "Business requirements", suffix: "+" },
    { label: "ERDs", count: 8, sub: "Entity relationships", suffix: "" },
    { label: "User flows", count: 15, sub: "Logical pathing", suffix: "+" },
    { label: "User stories", count: 120, sub: "Feature backlog", suffix: "+" },
  ];

  const process = [
    { step: "01", title: "Observe", desc: "Watch what people actually do, not what they say they do. The gap is where the product lives." },
    { step: "02", title: "Define", desc: "Write the problem in one sentence. If you cannot, you do not understand it yet." },
    { step: "03", title: "Decide", desc: "Pick the simplest thing that solves the real problem. Not the fun problem. The real one." },
    { step: "04", title: "Build", desc: "Ship fast. Ship ugly. Fix it with real data, not opinions." },
    { step: "05", title: "Measure", desc: "If you cannot measure it, you do not know if it works. Period." },
  ];

  const countRefs = artifacts.map((a) => useCountUp(a.count, { suffix: a.suffix, duration: 1.2 }));

  return (
    <section id="thinking" className="py-10 md:py-14 relative overflow-hidden">
      <div className="absolute top-10 right-0 text-[clamp(8rem,20vw,16rem)] font-heading font-bold text-[var(--color-text)] opacity-[0.02] pointer-events-none select-none leading-none">
        02
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.15,
        }}
      />

      <div className="container-main relative z-10">
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } } }}
        >
          <span className="section-label">02 / The Process</span>
          <h2 className="section-heading">I write before I build.</h2>
          <p className="section-desc">
            Most portfolios show the code. This section shows the thinking behind it. Every product started with a document, a diagram, and a decision about what not to build.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
        >
          {artifacts.map((a, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } } }}
              className="card p-4 text-center"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <span className="text-2xl md:text-3xl font-heading font-medium text-[var(--color-text)]" ref={countRefs[i].ref}>
                {countRefs[i].value}
              </span>
              <span className="block text-sm text-[var(--color-text)] font-medium mt-1.5">{a.label}</span>
              <span className="label mt-0.5 block">{a.sub}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <motion.div
            className="card p-5 md:p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } } }}
          >
            <span className="label-accent mb-5 block">How I work</span>
            <motion.div className="space-y-4" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } }} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {process.map((item) => (
                <motion.div key={item.step} className="flex gap-3 items-start" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } } }}>
                  <span className="label text-[var(--color-text-faint)] flex-shrink-0 mt-0.5">{item.step}</span>
                  <div>
                    <h4 className="text-[var(--color-text)] text-sm font-medium">{item.title}</h4>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="card p-5 md:p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } } }}
          >
            <span className="label-signal mb-5 block">What I believe</span>
            <motion.blockquote
              className="text-[var(--color-text-secondary)] italic leading-relaxed border-l-2 border-[var(--color-accent)]/30 pl-4 mb-5"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 25 }}
            >
              I do not wait for permission. I see a problem, I build a solution, and I let the results do the talking. That is how I got promoted in two months. That is how every product here exists.
            </motion.blockquote>
            <div className="divider mb-5" />
            <div>
              <span className="label mb-2 block">If you hire me:</span>
              <motion.ul className="space-y-2.5 text-sm text-[var(--color-text-muted)]" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } }} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {[
                  "I will find the problems you have not noticed yet",
                  "I will ship the solution, not just suggest it",
                  "I will measure impact, not activity",
                  "I will own it from problem to production",
                ].map((item, i) => (
                  <motion.li key={i} className="flex items-start gap-2" variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } } }}>
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
