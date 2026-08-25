"use client";

import { motion, useReducedMotion } from "framer-motion";
import { techStack } from "@/lib/data";

const tierMeta = {
  core: { label: "Core", desc: "Ships in production weekly" },
  familiar: { label: "Familiar", desc: "Comfortable shipping active features" },
  explored: { label: "Explored", desc: "Built prototypes and research spikes" },
} as const;

const tierOrder: ("core" | "familiar" | "explored")[] = ["core", "familiar", "explored"];

export default function Stack() {
  const reduce = useReducedMotion();

  return (
    <section id="stack" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="container-main">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label mb-6 block">Stack</span>
          <h2 className="display-lg max-w-[24ch]">Tools I build with — tiered by how often they ship.</h2>
        </motion.div>

        <div className="mt-14 space-y-12">
          {tierOrder.map((tier, ti) => {
            const groups = techStack.filter((g) => g.tier === tier);
            if (groups.length === 0) return null;
            const meta = tierMeta[tier];

            return (
              <motion.div
                key={tier}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: ti * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-baseline gap-3 border-b border-line pb-4">
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
                    {meta.label}
                  </span>
                  <span className="text-sm text-muted">— {meta.desc}</span>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
                  {groups.map((group) => (
                    <div key={group.category}>
                      <span className="label mb-3 block">{group.category}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((skill) => (
                          <span key={skill} className="chip">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
