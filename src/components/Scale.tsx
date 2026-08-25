"use client";

import { motion, useReducedMotion } from "framer-motion";
import StatusBadge from "@/components/StatusBadge";

const deployments = [
  {
    state: "Bihar",
    system: "DPMUMS attendance portal",
    scope: "38 districts · 150+ administrators",
    status: "PRODUCTION",
  },
  {
    state: "Telangana",
    system: "T-Fiber field tools",
    scope: "38 districts · 100+ engineers",
    status: "PRODUCTION",
  },
  {
    state: "State education dept.",
    system: "APAAR analytics platform",
    scope: "20M+ student records queryable",
    status: "LIVE",
  },
];

const stats = [
  { value: "150+", label: "District admins and engineers served across systems" },
  { value: "13", label: "Org-chart roles receiving automated custom reports" },
  { value: "<15m", label: "Field reporting cycle time — down from 4 hours" },
  { value: "₹0", label: "Total infrastructure spend across every deployment" },
];

export default function Scale() {
  const reduce = useReducedMotion();

  return (
    <section id="scale" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="container-main">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label mb-6 block">At scale</span>
          <h2 className="display-lg max-w-[22ch]">
            State government runs on these systems.
          </h2>
        </motion.div>

        {/* Deployment record */}
        <div className="mt-14 border-t border-line">
          {deployments.map((d, i) => (
            <motion.div
              key={d.system}
              className="grid grid-cols-1 gap-x-8 gap-y-2 border-b border-line py-6 sm:grid-cols-[140px_1fr_auto] sm:items-center"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-mono text-xs uppercase tracking-wider text-accent">
                {d.state}
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold text-text">{d.system}</h3>
                <p className="tabular mt-0.5 font-mono text-xs text-muted">{d.scope}</p>
              </div>
              <StatusBadge status={d.status} />
            </motion.div>
          ))}
        </div>

        <p className="mt-4 font-mono text-xs italic leading-relaxed text-muted">
          * Dashboards for these deployments have been reviewed and approved by a state
          project director.
        </p>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-bg p-6"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="tabular block font-heading text-4xl font-semibold text-text md:text-[2.75rem]">
                {stat.value}
              </span>
              <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-secondary">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
