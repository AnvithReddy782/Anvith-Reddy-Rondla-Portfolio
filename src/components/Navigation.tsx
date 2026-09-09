"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#scale", label: "Scale" },
  { href: "#path", label: "Evolution" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-20% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
        setActive(href);
        window.history.pushState(null, "", href);
      }
    }
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    handleNavClick(e, href);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/" || window.location.pathname === "") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActive("");
      window.history.pushState(null, "", "/");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-bg/90 backdrop-blur-md border-b border-line shadow-2xs py-2.5"
          : "bg-transparent border-b border-transparent py-4"
      }`}
    >
      <nav className="container-main" aria-label="Main navigation">
        <div className="flex items-center justify-between h-11">
          {/* Logo */}
          <a
            href="/#top"
            onClick={handleLogoClick}
            className="group flex items-center font-heading text-sm sm:text-[15px] font-semibold tracking-tight text-text"
          >
            <span className="group-hover:text-accent transition-colors">Anvith Rondla</span>
            <span className="text-accent ml-0.5">.</span>
            <span className="font-mono text-[10px] uppercase text-muted tracking-wider hidden sm:inline ml-2">
              / PM
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1 border border-line bg-surface/60 backdrop-blur-xs px-3 py-1 rounded-full shadow-2xs">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative flex min-h-11 items-center px-3 text-xs font-medium tracking-wide transition-colors duration-200 rounded-full ${
                      isActive ? "text-text font-semibold" : "text-secondary hover:text-text"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-sunk rounded-full -z-10 border border-line/60"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Status Pill */}
            <span className="hidden lg:flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-signal font-medium border border-line bg-surface px-2.5 py-1 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
              Open to PM roles
            </span>

            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="flex h-11 w-11 items-center justify-center border border-line bg-surface text-text rounded-xs"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden border-t border-line bg-bg/95 backdrop-blur-md mt-2.5"
            >
              <div className="py-3 pb-5 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleMobileNavClick(e, link.href)}
                    className="flex min-h-11 items-center justify-between px-2 text-sm font-medium text-text hover:bg-surface border-b border-line/40"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-[10px] text-accent uppercase">{link.href}</span>
                  </a>
                ))}
                <div className="pt-3 flex items-center justify-between px-2">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-signal font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                    Open to PM roles
                  </span>
                  <span className="font-mono text-[10px] text-muted">Bihar / Remote</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
