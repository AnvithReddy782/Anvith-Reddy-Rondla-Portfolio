"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { useStore } from "@/lib/store";
import Terminal from "./Terminal";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const { auditMode, toggleAuditMode } = useStore();

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-14 border-t border-[var(--color-border)] relative">
      <div className="container-main">
        {/* CTA */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } },
          }}
        >
          <h2 className="mb-3">I solve problems you have not noticed yet.</h2>
          <p className="text-[var(--color-text-secondary)] max-w-lg mx-auto mb-6">
            I am looking for a team that values shipping speed as much as I do. If that is your team, I would love to talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="btn-primary w-full sm:w-auto text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Send me an email</span>
              <motion.span
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              className="btn-secondary w-full sm:w-auto text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              download
            >
              Download my resume
            </motion.a>
            <motion.button
              onClick={toggleAuditMode}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-md border flex items-center justify-center gap-2 transition-all duration-300 font-mono text-[11px] ${
                auditMode
                  ? "bg-[#00B4A6]/10 border-[#00B4A6] text-[#00B4A6] shadow-[0_0_12px_rgba(0,180,166,0.3)] font-bold"
                  : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)]"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={`w-2 h-2 rounded-full ${auditMode ? "bg-[#00B4A6] animate-pulse" : "bg-neutral-500"}`} />
              <span>SYSTEM_AUDIT: {auditMode ? "ACTIVE" : "STANDBY"}</span>
            </motion.button>
          </div>

          {/* Tactical Command CLI Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Terminal />
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 pt-6 border-t border-[var(--color-border)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-5">
            <span className="label text-[var(--color-text-faint)]">{personalInfo.location}</span>
            <span className="label text-[var(--color-text-faint)]">Built with intention. 2026.</span>
          </div>

          <div className="flex items-center gap-5">
            {[
              { label: "LinkedIn", href: personalInfo.linkedin },
              { label: "GitHub", href: personalInfo.github },
              { label: "X", href: personalInfo.twitter },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                className="label text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-border-hover)] shadow-lg z-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 13V3M4 7l4-4 4 4" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
