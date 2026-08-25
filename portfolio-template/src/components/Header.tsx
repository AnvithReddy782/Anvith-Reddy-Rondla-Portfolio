"use strict";

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  const navLinks = [
    { label: "Work", href: "/my-work" },
    { label: "Resume", href: "/resume" },
    { label: "About", href: "/about-me" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto flex h-16 items-center justify-between px-6">
        {/* Brand/Initials */}
        <Link href="/" className="font-heading text-lg font-extrabold tracking-widest text-[var(--color-text)] transition-opacity hover:opacity-80">
          HSK
        </Link>

        {/* Right side navigation & theme toggler */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-5 text-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-1.5 px-0.5 transition-colors hover:text-[var(--color-text)] text-[var(--color-text-secondary)] font-semibold"
                >
                  <span className={isActive ? "text-[var(--color-text)] font-extrabold" : ""}>
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-accent)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-elevated)] transition-all duration-200 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
