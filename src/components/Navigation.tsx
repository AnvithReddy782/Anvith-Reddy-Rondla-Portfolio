"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { personalInfo } from "@/lib/data";
import { useStore } from "@/lib/store";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { auditMode, toggleAuditMode } = useStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Evidence", href: "#evidence" },
    { label: "Thinking", href: "#thinking" },
    { label: "Systems", href: "#systems" },
    { label: "About", href: "#about" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-18">
          <a href="#" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-md bg-[var(--color-accent)] flex items-center justify-center font-mono text-sm font-bold text-white"
            >
              A
            </motion.div>
            <div className="hidden sm:block">
              <div className="text-sm font-medium text-[var(--color-text)] leading-tight">
                Anvith Rondla
              </div>
              <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider">
                Product and Systems
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-accent)] group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleAuditMode}
              className={`h-8 px-3 mr-1 rounded-md border text-[10px] font-mono flex items-center gap-1.5 transition-all duration-300 ${
                auditMode
                  ? "bg-[#00B4A6]/10 border-[#00B4A6] text-[#00B4A6] shadow-[0_0_10px_rgba(0,180,166,0.2)] font-bold"
                  : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-border-hover)]"
              }`}
              aria-label="Toggle system audit mode"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${auditMode ? "bg-[#00B4A6] animate-pulse" : "bg-neutral-500"}`} />
              <span>AUDIT</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 rounded-md border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-border-hover)] transition-colors"
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {theme === "dark" ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="8" cy="8" r="3" />
                    <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 9.5A6.5 6.5 0 016.5 2 6.5 6.5 0 1014 9.5z" />
                  </svg>
                )}
              </motion.div>
            </motion.button>

            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
            >
              Send me an email
            </motion.a>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleAuditMode}
              className={`h-8 px-2.5 rounded-md border text-[10px] font-mono flex items-center gap-1 transition-all duration-300 ${
                auditMode
                  ? "bg-[#00B4A6]/10 border-[#00B4A6] text-[#00B4A6] shadow-[0_0_8px_rgba(0,180,166,0.2)]"
                  : "border-[var(--color-border)] text-[var(--color-text-muted)]"
              }`}
              aria-label="Toggle system audit mode"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${auditMode ? "bg-[#00B4A6] animate-pulse" : "bg-neutral-500"}`} />
              <span>AUDIT</span>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 rounded-md border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="8" cy="8" r="3" />
                  <path d="M8 1v2M8 13v2M1 8h2M13 8h2" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 9.5A6.5 6.5 0 016.5 2 6.5 6.5 0 1014 9.5z" />
                </svg>
              )}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="text-[var(--color-text)] p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                {mobileOpen ? <path d="M15 5L5 15M5 5l10 10" /> : <><path d="M3 6h14" /><path d="M3 14h14" /></>}
              </svg>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="md:hidden overflow-hidden border-t border-[var(--color-border)]"
            >
              <div className="py-4 flex flex-col gap-3">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="btn-primary text-center mt-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Send me an email
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
