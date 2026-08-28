"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { personalInfo } from "@/lib/data";

const links = [
  { label: "Work", href: "#work" },
  { label: "Scale", href: "#scale" },
  { label: "Evolution", href: "#path" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setShowTop(v > 700));

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 72;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <footer className="border-t border-line py-8 md:py-10">
      <div className="container-main">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          <div>
            <span className="font-heading text-sm font-semibold tracking-tight text-text">
              Anvith Reddy Rondla
            </span>
            <p className="mt-1 font-mono text-xs text-muted">{personalInfo.location}</p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-1.5 md:justify-center" aria-label="Footer">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-mono text-xs uppercase tracking-[0.1em] text-secondary transition-colors hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-5 md:justify-end">
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

        <div className="mt-6 flex flex-col items-start justify-between gap-2.5 border-t border-line pt-4 sm:flex-row sm:items-center">
          <span className="font-mono text-[11px] leading-relaxed text-faint">
            Built alone · Documented before building · Running in production
          </span>
          <span className="font-mono text-[11px] text-faint">
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
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-5 right-5 z-50 flex h-9 w-9 items-center justify-center border border-line-strong bg-surface text-text transition-colors hover:border-text shadow-2xs"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
