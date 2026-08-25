"use strict";

"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const hobbyTags = [
    "Planning my next trip",
    "Playing Catan",
    "Hogging mom's pasta",
    "Crocheting a never-ending project",
    "Sipping on green tea",
    "Sketching on my iPad",
    "Watching sunsets",
    "Vibe coding something new",
  ];

  return (
    <footer className="w-full border-t border-[var(--color-border)] bg-[var(--color-bg)] transition-colors duration-300 py-12">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        
        {/* Call To Action Block */}
        <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm">
          <div className="space-y-2">
            <div className="text-[10px] font-bold tracking-widest text-[var(--color-text-muted)] font-mono uppercase">
              Get in touch
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-[var(--color-text)]">
              Got a project you want to talk about?
            </h3>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black px-6 py-3 text-xs font-bold hover:opacity-90 transition-opacity duration-200 shadow-sm"
          >
            <span>Send me a message</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Hobby / Ticker Tag Panel */}
        <div className="space-y-3">
          <div className="text-[10px] font-bold tracking-widest text-[var(--color-text-muted)] font-mono uppercase">
            Currently I'm...
          </div>
          <div className="flex flex-wrap gap-2">
            {hobbyTags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-3.5 py-1.5 text-xs text-[var(--color-text-secondary)] font-mono"
              >
                🌿 {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links & Branding Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-[var(--color-border)] pt-8 gap-4 text-xs font-semibold text-[var(--color-text-secondary)]">
          <div className="flex flex-wrap gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text)] transition-colors">
              LINKEDIN
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text)] transition-colors">
              INSTAGRAM
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text)] transition-colors">
              BEHANCE
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text)] transition-colors">
              TWITTER
            </a>
          </div>

          <div className="flex flex-col md:items-end gap-1 font-mono text-[11px] text-[var(--color-text-muted)]">
            <div>™ 2026 HSK • Built with passion</div>
          </div>
        </div>

      </div>
    </footer>
  );
}
