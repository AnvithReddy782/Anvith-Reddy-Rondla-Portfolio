"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";

export default function TheStack() {
  const row1 = techStack.slice(0, 10);
  const row2 = techStack.slice(10);

  const renderRow = (items: typeof techStack, direction: "left" | "right") => (
    <div className="overflow-hidden">
      <div
        className={`flex gap-3 ${direction === "left" ? "marquee-left" : "marquee-right"} marquee-pause`}
        style={{ width: "max-content" }}
      >
        {[...items, ...items].map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] font-mono text-sm text-[var(--color-text-secondary)] whitespace-nowrap transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] cursor-default"
          >
            {tech.name}
            <span className="text-[var(--color-text-faint)]">({tech.count})</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-10 md:py-14 relative overflow-hidden" style={{
      backgroundImage: "repeating-linear-gradient(45deg, var(--color-border) 0px, var(--color-border) 1px, transparent 1px, transparent 24px)",
      backgroundSize: "24px 24px",
      opacity: 1,
    }}>
      <div className="absolute inset-0 bg-[var(--color-bg)]/95" />
      <div className="container-main relative z-10">
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } } }}
        >
          <span className="section-label">The Stack</span>
          <h2 className="section-heading">Technologies I build with</h2>
          <p className="section-desc">
            Every tool here has been used in production. Not tutorials. Not side experiments. Real systems, real users.
          </p>
        </motion.div>

        <div className="space-y-3">
          {renderRow(row1, "left")}
          {renderRow(row2, "right")}
        </div>
      </div>
    </section>
  );
}
