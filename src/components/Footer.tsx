"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { personalInfo } from "@/lib/data";

const links = [
  { label: "Work", href: "#work" },
  { label: "Scale", href: "#scale" },
  { label: "Path", href: "#path" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setShowTop(v > 700));

  return (
    <footer className="border-t border-line py-12">
      <div className="container-main">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          <div>
            <span className="font-heading text-sm font-semibold tracking-tight text-text">
              Anvith Reddy Rondla
            </span>
            <p className="mt-1.5 font-mono text-xs text-muted">{personalInfo.location}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center" aria-label="Footer">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.1em] text-secondary transition-colors hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-6 md:justify-end">
            {[
              { label: "LinkedIn", href: personalInfo.linkedin },
              { label: "GitHub", href: personalInfo.github },
            ]
              .filter((l) => l.href)
              .map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.1em] text-secondary transition-colors hover:text-text"
                >
                  {l.label}
                </a>
              ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          <span className="font-mono text-xs leading-relaxed text-faint">
            Built alone · Documented before building · Running in production
          </span>
          <span className="font-mono text-xs text-faint">
            &copy; {new Date().getFullYear()} Anvith Reddy Rondla
          </span>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center border border-line-strong bg-surface text-text transition-colors hover:border-text"
            aria-label="Scroll to top"
          >
            <ArrowUp size={15} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
