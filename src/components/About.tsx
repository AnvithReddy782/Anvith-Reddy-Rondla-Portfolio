"use client";

import { motion, useReducedMotion } from "framer-motion";
import { personalInfo } from "@/lib/data";

const story = [
  "I joined Globus Informatics as a data analyst, inheriting messy spreadsheets and field operations reported through WhatsApp chats across 38 districts. Nobody asked me to fix it.",
  "I built location-aware reporting tools on Apps Script and Leaflet anyway, cutting tower lookup cycles from 48 hours to under 2 seconds.",
  "Shipping zero-cost systems that worked for real operators in rural blocks fast-tracked me to Junior PM in 14 months.",
  "I now lead database strategy, BRD modelling, and API integrations for tracking platforms deployed across Bihar and Telangana.",
];

const principles = [
  {
    title: "Document before building",
    body: "Every product starts with a BRD and an ERD. Mapping the schema first prevents rewrite cycles later.",
  },
  {
    title: "Production is the teacher",
    body: "I learned Next.js by shipping it to state-level databases — not by finishing tutorials.",
  },
  {
    title: "AI accelerates, never replaces reasoning",
    body: "I use AI to code faster, but the database design and systems thinking stay mine.",
  },
  {
    title: "Zero-cost infrastructure",
    body: "Every system I've built runs in production on free-tier hosting. Scale is a design decision, not a budget line.",
  },
];

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="container-main grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Story */}
        <motion.div
          className="lg:col-span-7"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label mb-6 block">About</span>
          <h2 className="display-lg max-w-[16ch]">
            Promoted for shipping<span className="text-accent">,</span> not
            credentials<span className="text-accent">.</span>
          </h2>

          <div className="mt-9 space-y-5">
            {story.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="max-w-[62ch] text-[15px] leading-relaxed text-secondary md:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-3">
            <div>
              <dt className="label mb-1.5">Education</dt>
              <dd className="text-sm leading-snug text-text">
                B.Tech, Computer Science
                <span className="mt-0.5 block text-xs text-muted">
                  Holy Mary Institute of Technology
                </span>
              </dd>
            </div>
            <div>
              <dt className="label mb-1.5">Reading</dt>
              <dd className="text-sm leading-snug text-text">{personalInfo.currently.reading}</dd>
            </div>
            <div>
              <dt className="label mb-1.5">Thinking about</dt>
              <dd className="text-sm leading-snug text-text">{personalInfo.currently.thinking}</dd>
            </div>
          </dl>
        </motion.div>

        {/* Principles */}
        <div className="lg:col-span-5">
          <motion.div
            className="border border-line bg-surface p-7 lg:sticky lg:top-24"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="label block">How I work</span>
            <ol className="mt-6 divide-y divide-line border-y border-line">
              {principles.map((p, i) => (
                <li key={p.title} className="flex gap-5 py-5 first:pt-0 last:pb-0">
                  <span className="tabular pt-0.5 font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-[15px] font-semibold text-text">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-secondary">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
