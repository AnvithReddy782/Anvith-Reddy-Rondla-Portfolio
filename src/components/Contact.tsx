"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";

const signals = [
  "Junior PM roles that value technical depth",
  "AI products with strict data constraints",
  "Teams that document before writing code",
];

const channels = [
  { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { label: "LinkedIn", value: "/anvith-reddy-rondla", href: personalInfo.linkedin },
  { label: "GitHub", value: "/anvith-reddy-rondla", href: personalInfo.github },
];

export default function Contact() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="container-main">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="display-xl max-w-[14ch] text-text">
            Put me near a messy system<span className="text-accent">.</span>
          </h2>
          <p className="mt-7 max-w-[58ch] text-base leading-relaxed text-secondary md:text-lg">
            I'm looking for a team that needs a PM who can write the BRD, design the
            schemas, prototype the interface, and verify the code under real network
            constraints.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={`mailto:${personalInfo.email}`} className="btn-primary">
              <Mail size={14} /> Email Anvith
            </a>
            <a href="/resume.pdf" download className="btn-secondary">
              Download resume <ArrowUpRight size={14} />
            </a>
            <span className="flex items-center gap-2 font-mono text-xs text-muted">
              <MapPin size={13} className="text-accent" />
              {personalInfo.location} — open to remote or relocation
            </span>
          </div>
        </motion.div>

        {/* Channels */}
        <div className="mt-16 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group bg-bg p-6 transition-colors duration-300 hover:bg-surface"
            >
              <div className="flex items-center justify-between">
                <span className="label">{c.label}</span>
                <ArrowUpRight
                  size={14}
                  className="text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </div>
              <span className="mt-4 block break-words font-mono text-sm text-text">{c.value}</span>
            </a>
          ))}
        </div>

        {/* Good-fit signals */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
          <span className="label pt-0.5">Good fit</span>
          {signals.map((s) => (
            <span key={s} className="flex items-center gap-2 text-sm text-secondary">
              <span aria-hidden="true" className="h-1 w-1 shrink-0 bg-accent" />
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
