"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { personalInfo } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section id="top" className="hero-height relative flex flex-col justify-end">
      <div className="container-main flex w-full flex-col justify-between gap-14 pb-10 pt-32 md:gap-20 md:pb-14">
        <div>
          <motion.p {...rise(0)} className="label mb-7">
            Anvith Reddy Rondla — Junior Product Manager
          </motion.p>

          <h1 className="font-heading text-[clamp(2.5rem,4.6vw,4.25rem)] font-semibold uppercase leading-[1.02] tracking-[-0.02em] text-text">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduce ? false : { y: "108%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.08, ease }}
              >
                Systems that survive
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduce ? false : { y: "108%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.18, ease }}
              >
                bad networks<span className="text-accent">.</span>
              </motion.span>
            </span>
          </h1>

          <motion.p {...rise(0.35)} className="mt-7 max-w-[54ch] text-base leading-relaxed text-secondary md:text-lg">
            Data analyst turned PM in 14 months. I design and ship offline&#8209;first field
            systems for two Indian state governments — documented before a single line
            of code.
          </motion.p>

          <motion.div {...rise(0.45)} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-primary group">
              View selected work
              <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="btn-secondary">
              Email me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 font-mono text-xs lg:grid-cols-4">
            <div>
              <span className="block text-faint">Building now</span>
              <span className="mt-1 block font-medium text-signal">DPMUMS v1.0 — testing</span>
            </div>
            <div>
              <span className="block text-faint">Last shipped</span>
              <span className="mt-1 block font-medium text-secondary">Reports Auto — production</span>
            </div>
            <div>
              <span className="block text-faint">Base</span>
              <span className="mt-1 block font-medium text-secondary">{personalInfo.location}</span>
            </div>
            <div>
              <span className="block text-faint">Status</span>
              <span className="mt-1 block font-medium text-accent">Open to PM opportunities</span>
            </div>
          </div>

          <p className="tabular mt-6 max-w-none font-mono text-[13px] tracking-wide text-muted">
            <span className="text-accent">10</span> products shipped
            <span className="mx-2 text-faint">/</span>
            <span className="text-accent">2</span> states in production
            <span className="mx-2 text-faint">/</span>
            <span className="text-accent">150+</span> admins served
            <span className="mx-2 text-faint">/</span>
            ₹<span className="text-accent">0</span> infra spend
          </p>
        </motion.div>
      </div>
    </section>
  );
}
