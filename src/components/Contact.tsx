"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";

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
    <section id="contact" className="scroll-mt-20 border-t border-line py-14 md:py-18">
      <div className="container-main">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent mb-1.5 block">
            Initiate Contact
          </span>
          <h2 className="display-xl max-w-[14ch] text-text">
            Put me near a messy system<span className="text-accent">.</span>
          </h2>
          <p className="mt-3.5 max-w-[58ch] text-sm sm:text-base leading-relaxed text-secondary">
            I&apos;m looking for a team that needs a PM who can write the BRD, design the
            schemas, prototype the interface, and verify the code under real network
            constraints.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild variant="default" size="default">
              <a href={`mailto:${personalInfo.email}`}>
                <Mail size={14} /> Email Anvith
              </a>
            </Button>
            <Button asChild variant="secondary" size="default">
              <a href="/resume.pdf" download>
                Download resume <ArrowUpRight size={14} />
              </a>
            </Button>
            <span className="flex items-center gap-1.5 font-mono text-xs text-muted ml-1">
              <MapPin size={12} className="text-accent" />
              {personalInfo.location} · open to remote or relocation
            </span>
          </div>
        </motion.div>

        {/* Channels Grid */}
        <div className="mt-8 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group bg-surface p-4 sm:p-5 transition-colors duration-200 hover:bg-raised/40"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted">{c.label}</span>
                <ArrowUpRight
                  size={13}
                  className="text-faint transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </div>
              <span className="mt-2.5 block break-words font-mono text-xs sm:text-sm font-medium text-text">{c.value}</span>
            </a>
          ))}
        </div>

        {/* Good-fit signals */}
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-7">
          <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold pt-0.5">Good fit:</span>
          {signals.map((s) => (
            <span key={s} className="flex items-center gap-1.5 text-xs text-secondary">
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-accent rounded-full" />
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
