"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { personalInfo } from "@/lib/data";

export default function ByTheNumbers() {
  const metrics = [
    { value: personalInfo.stats.products, label: "Products shipped", context: "Across 4 tiers of maturity", suffix: "" },
    { value: personalInfo.stats.employeesTracked, label: "Employees tracked", context: "Across 8 districts", suffix: "" },
    { value: personalInfo.stats.positionsPlaced, label: "Positions placed", context: "Recruitment pipeline", suffix: "" },
    { value: personalInfo.stats.orgChartRoles, label: "Org chart roles", context: "Receiving automated reports", suffix: "" },
    { value: 1.2, label: "Pings per month", context: "Aggregate system scale", suffix: "M+", decimals: 1 },
    { value: personalInfo.stats.latestVersion, label: "Latest version", context: "Reports Automation stable", suffix: "" },
    { value: personalInfo.stats.aiTemplates, label: "AI templates", context: "DOC AI workstation", suffix: "" },
    { value: 0, label: "Infrastructure cost", context: "Across all systems", display: "₹0" },
  ];

  const countRefs = metrics.map((m) =>
    useCountUp(m.value, { suffix: m.suffix || "", decimals: m.decimals || 0, duration: 1.5 })
  );

  return (
    <section className="py-10 md:py-14" style={{
      background: "linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-elevated) 50%, var(--color-bg) 100%)",
    }}>
      <div className="container-main">
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } } }}
        >
          <span className="section-label">By The Numbers</span>
          <h2 className="section-heading">The full picture.</h2>
          <p className="section-desc">
            Aggregated across all ten products. Every number here represents a real system running in production.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
        >
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              className="card p-5"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } } }}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <span className="text-2xl md:text-3xl font-heading font-medium text-[var(--color-text)]" ref={countRefs[i].ref}>
                {m.display || countRefs[i].value}
              </span>
              <span className="block text-sm text-[var(--color-text)] font-medium mt-1.5">{m.label}</span>
              <span className="text-xs text-[var(--color-text-muted)] mt-0.5">{m.context}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
