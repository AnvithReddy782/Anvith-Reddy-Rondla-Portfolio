"use client";

import { motion, useReducedMotion } from "framer-motion";
import StatusBadge from "@/components/StatusBadge";
import { Card } from "@/components/ui/card";

const deployments = [
  {
    state: "Bihar",
    system: "DPMUMS state attendance portal",
    scope: "38 districts · 150+ administrators · 100% field adoption",
    status: "PRODUCTION",
  },
  {
    state: "Telangana",
    system: "T-Fiber field dispatch & patrol logger",
    scope: "Statewide fiber network · 100+ active field engineers",
    status: "PRODUCTION",
  },
  {
    state: "State Education",
    system: "APAAR student analytics platform",
    scope: "20M+ records · 75,000 schools · sub-2s natural language queries",
    status: "LIVE",
  },
];

const stats = [
  { value: "150+", label: "District administrators & field engineers active weekly" },
  { value: "38", label: "State districts managed with zero report forgery" },
  { value: "<15m", label: "Field reporting cycle time (compressed from 4 hours)" },
  { value: "100%", label: "Field compliance achieved within 3 weeks of rollout" },
];

export default function Scale() {
  const reduce = useReducedMotion();

  return (
    <section id="scale" className="scroll-mt-20 border-t border-line py-14 md:py-18">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-3 border-b border-line pb-5 md:flex-row md:items-end"
        >
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent mb-1.5 block">
              Deployment Scale
            </span>
            <h2 className="display-lg">State Operations in Production</h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-secondary">
            Verified deployments serving state administrative hierarchies with zero hardware capex.
          </p>
        </motion.div>

        {/* Deployment Record Table */}
        <div className="mt-6 border-b border-line">
          {deployments.map((d, i) => (
            <motion.div
              key={d.system}
              className="grid grid-cols-1 gap-x-6 gap-y-1.5 border-t border-line py-4 sm:grid-cols-[140px_1fr_auto] sm:items-center"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                {d.state}
              </span>
              <div>
                <h3 className="font-heading text-sm sm:text-base font-semibold text-text">{d.system}</h3>
                <p className="tabular mt-0.5 font-mono text-[11px] text-muted">{d.scope}</p>
              </div>
              <div className="mt-1 sm:mt-0">
                <StatusBadge status={d.status} />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-2.5 font-mono text-[11px] text-muted">
          * Telemetry and deployment records reviewed and approved by state project directors.
        </p>

        {/* Integrated Stats Grid */}
        <div className="mt-6 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-surface p-4 sm:p-5 shadow-2xs"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="tabular block font-heading text-2xl font-semibold text-accent md:text-3xl">
                {stat.value}
              </span>
              <p className="mt-1.5 text-xs leading-relaxed text-secondary">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
