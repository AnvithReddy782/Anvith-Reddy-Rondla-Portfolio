"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className={`h-9 w-9 border border-line bg-surface flex items-center justify-center text-muted ${className}`}
        aria-hidden="true"
      >
        <span className="h-4 w-4 rounded-full bg-line" />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative flex h-9 w-9 items-center justify-center border border-line bg-surface text-secondary transition-colors duration-200 hover:border-line-strong hover:bg-raised hover:text-text ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ rotate: -30, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 30, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun size={16} className="transition-transform group-hover:rotate-45 duration-300" />
        ) : (
          <Moon size={15} className="transition-transform group-hover:-rotate-12 duration-300" />
        )}
      </motion.div>
    </button>
  );
}
