"use client";

import { motion, useReducedMotion } from "framer-motion";

const milestones = [
  {
    date: "Late 2024",
    title: "Data via WhatsApp",
    scale: "~24 patrollers",
    body: "Field logs arrived as unstructured chat messages — coordinates lost in text histories. The telemetry gaps forced the first search for a structured interface.",
  },
  {
    date: "Dec 2024",
    title: "Google Apps Script",
    scale: "~100 field operators",
    body: "Field Reporter and Reports Auto shipped on a spreadsheet backend. Trigger time limits and row maximums exposed the ceiling just as the Bihar state contract demanded real-time events.",
  },
  {
    date: "Jan 2025",
    title: "React & Vite",
    scale: "Personal / office scale",
    body: "Client-only execution made secure payment webhooks and server-side rendering impossible to bolt on. The stack had to grow up.",
  },
  {
    date: "Mar 2025",
    title: "Next.js App Router",
    scale: "State-scale deployment",
    body: "DPMUMS and Annapurna went live on server-rendered foundations, with offline IndexedDB sync handling unreliable rural networks.",
  },
];

export default function Path() {
  const reduce = useReducedMotion();

  return (
    <section id="path" className="dotfield scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="container-main">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="display-lg max-w-[20ch]">From WhatsApp chats to state systems.</h2>
          <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-secondary md:text-[15px]">
            Every migration was forced by a technical constraint under a real contract —
            never by a tutorial.
          </p>
        </motion.div>

        <ol className="relative mt-16 max-w-3xl space-y-14 border-l border-line pl-8 md:pl-12">
          {milestones.map((ms, i) => (
            <motion.li
              key={ms.date}
              className="relative"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-1.5 h-2 w-2 bg-accent md:-left-[53px]"
              />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-mono text-xs tracking-wide text-accent">{ms.date}</span>
                <span className="font-mono text-xs text-faint">{ms.scale}</span>
              </div>
              <h3 className="mt-2 font-heading text-xl font-semibold text-text md:text-2xl">
                {ms.title}
              </h3>
              <p className="mt-2 max-w-[58ch] text-sm leading-relaxed text-secondary md:text-[15px]">
                {ms.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
