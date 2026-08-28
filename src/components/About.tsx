"use client";

import { motion, useReducedMotion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Card } from "@/components/ui/card";

const story = [
  "I joined Globus Informatics as a Data Analyst, inheriting fragmented spreadsheets and unstructured WhatsApp chat logs across 38 state districts.",
  "Instead of accepting the status quo, I spent time understanding field operator habits, mapped the technical constraints of rural 2G connections, and built offline-first spatial tools on Leaflet and Apps Script, cutting tower lookup cycles from 48 hours to under 2 seconds.",
  "Shipping zero-friction systems that real field engineers actually adopted earned me a promotion to Junior Product Manager in 14 months.",
  "Today, I lead product discovery, PRD authoring, database schema modeling, and API integrations for mission-critical portals deployed across Bihar and Telangana state contracts.",
];

const principles = [
  {
    title: "Discover in the field, not in a silo",
    body: "The best product insights come from watching non-technical users struggle on low-end hardware, not from building for ideal network conditions.",
  },
  {
    title: "Document before writing code",
    body: "Every product starts with clear user stories, a PRD, and an ERD. Aligning on state machines first prevents costly rewrite cycles later.",
  },
  {
    title: "AI accelerates, human reasoning decides",
    body: "I leverage agentic AI to prototype and code faster, but product strategy, edge-case handling, and systems thinking remain human-driven.",
  },
  {
    title: "Lean, high-ROI architecture",
    body: "Scale is a design discipline, not a bloated cloud budget. Using edge compute and local browser caches delivers enterprise-grade speed on zero CapEx.",
  },
];

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-20 border-t border-line py-14 md:py-18">
      <div className="container-main grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
        {/* Left Column: Trajectory Story */}
        <motion.div
          className="lg:col-span-7"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent mb-1.5 block">
            About & Trajectory
          </span>
          <h2 className="display-lg max-w-[20ch]">
            Promoted for shipping systems that solve field bottlenecks<span className="text-accent">.</span>
          </h2>

          <div className="mt-6 space-y-3.5">
            {story.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="max-w-[60ch] text-xs sm:text-sm leading-relaxed text-secondary">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-6 grid max-w-lg grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-5 sm:grid-cols-3 font-mono text-xs">
            <div>
              <span className="text-[10px] uppercase text-muted block mb-0.5">Education</span>
              <span className="text-text font-medium block">B.Tech, CSE</span>
              <span className="text-[11px] text-muted block">Holy Mary Inst.</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-muted block mb-0.5">Currently Reading</span>
              <span className="text-text font-medium text-[11px] block">{personalInfo.currently.reading}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-muted block mb-0.5">Focus Area</span>
              <span className="text-text font-medium text-[11px] block">{personalInfo.currently.thinking}</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Operating Principles Card */}
        <div className="lg:col-span-5">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="p-5 sm:p-6 shadow-2xs">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent block mb-3">
                Operating Principles
              </span>
              <ol className="divide-y divide-line/70 border-t border-line/70">
                {principles.map((p, i) => (
                  <li key={p.title} className="flex gap-3.5 py-3.5 first:pt-3 last:pb-0">
                    <span className="tabular pt-0.5 font-mono text-xs text-accent font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-text">{p.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-secondary">{p.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
