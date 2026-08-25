"use strict";

"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FadeInUp from "../../components/FadeInUp";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen, CheckCircle, Flame, Star, Users } from "lucide-react";

export default function KhyaalCaseStudy() {
  const processSteps = [
    { num: "01", name: "Discover", desc: "Aligned with business and product goals through stakeholder conversations with the CEO, CPO, and COO to understand the commercial vision." },
    { num: "02", name: "Research", desc: "Conducted competitive and analogous-product analysis to study positioning, interaction patterns, and motion language." },
    { num: "03", name: "Architect", desc: "Structured the sitemap and information architecture collaboratively, defining the content hierarchy before visual design." },
    { num: "04", name: "Narrate", desc: "Translated the architecture into a scroll-driven narrative spine, establishing the emotional tone and pace of the scrolls." },
    { num: "05", name: "Design", desc: "High-fidelity Figma specs, motion blueprints, and palette extensions (introducing section-accent pastels layered on the design system)." },
    { num: "06", name: "Validate", desc: "Review rounds with engineering and the Chief Product Officer, closing loop gaps before final handoff." },
    { num: "07", name: "Handoff", desc: "Delivered responsive specifications, motion specs, and assets, coordinating dependencies across travel, commerce, and creative teams." },
    { num: "08", name: "QA & Refine", desc: "Collaborated with engineers during development to test motion timings, focus states, and responsive breakpoints." },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] transition-colors duration-300 flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-10 space-y-12">
        {/* Back Link */}
        <FadeInUp>
          <Link href="/my-work" className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to work index</span>
          </Link>
        </FadeInUp>

        {/* Hero Title & Pitch */}
        <FadeInUp delay={0.05}>
          <div className="space-y-4">
            <div className="text-[10px] font-bold tracking-widest text-[var(--color-text-muted)] font-mono uppercase">
              Web design • Motion design
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--color-text)] leading-tight">
              Redesigning the front door for{" "}
              <span className="font-serif italic text-[var(--color-accent)] font-normal block mt-1">
                India's largest senior wellness platform
              </span>
            </h1>
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              A story-led, motion-first redesign that re-positioned Khyaal for users, partners, and the next funding round. Rebuilding the website from the ground up to reflect a multi-product ecosystem.
            </p>
          </div>
        </FadeInUp>

        {/* Project Metadata Bento Grid */}
        <FadeInUp delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-[var(--color-border)] py-6">
            <div>
              <div className="text-[9px] font-bold text-[var(--color-text-muted)] font-mono uppercase">Role</div>
              <div className="text-xs font-bold text-[var(--color-text)] mt-1">Lead Product Designer</div>
            </div>
            <div>
              <div className="text-[9px] font-bold text-[var(--color-text-muted)] font-mono uppercase">Company</div>
              <div className="text-xs font-bold text-[var(--color-text)] mt-1">Khyaal (App for 50+)</div>
            </div>
            <div>
              <div className="text-[9px] font-bold text-[var(--color-text-muted)] font-mono uppercase">Surface</div>
              <div className="text-xs font-bold text-[var(--color-text)] mt-1">Responsive Marketing Site</div>
            </div>
            <div>
              <div className="text-[9px] font-bold text-[var(--color-text-muted)] font-mono uppercase">Outcome</div>
              <div className="text-xs font-bold text-[var(--color-text)] mt-1">Supported CPO/C-Suite Fundraise</div>
            </div>
          </div>
        </FadeInUp>

        {/* Outcomes Bento Box */}
        <FadeInUp delay={0.15}>
          <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-3xl p-6 space-y-4 shadow-sm hover:border-[var(--color-border-hover)] transition-all duration-300">
            <h3 className="text-[10px] font-bold tracking-widest text-[var(--color-text-muted)] font-mono uppercase flex items-center gap-1.5">
              <Flame className="h-4 w-4 text-amber-500 animate-pulse" />
              <span>Success Indicators</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="space-y-1">
                <div className="font-heading text-xl font-extrabold text-[var(--color-text)]">Conversion</div>
                <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase">Ramping Up</div>
              </div>
              <div className="space-y-1">
                <div className="font-heading text-xl font-extrabold text-[var(--color-text)]">Revenue</div>
                <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase">Growth Boost</div>
              </div>
              <div className="space-y-1">
                <div className="font-heading text-xl font-extrabold text-[var(--color-text)]">Retention</div>
                <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase">Lifting Up</div>
              </div>
              <div className="space-y-1">
                <div className="font-heading text-xl font-extrabold text-[var(--color-text)]">5M+ Users</div>
                <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase">Scale reached</div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Section 01: Context */}
        <section className="space-y-4">
          <FadeInUp>
            <h2 className="font-heading text-xl font-bold tracking-tight text-[var(--color-text)] flex items-center gap-2">
              <span className="font-mono text-xs bg-neutral-100 dark:bg-neutral-800 border border-[var(--color-border)] rounded px-1.5">01</span>
              <span>Context: Outgrowing The Website</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.05}>
            <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
              As Khyaal evolved into a complex multi-product ecosystem serving millions of senior citizens, its landing page fell out of step with the company's scale, ambition, and actual product features. Users struggled to discover various offerings like Travel and Commerce, while prospective investors saw a brand that underrepresented its traction. Rebuilding the front door was essential.
            </p>
          </FadeInUp>
        </section>

        {/* Section 02: Goals */}
        <section className="space-y-4">
          <FadeInUp>
            <h2 className="font-heading text-xl font-bold tracking-tight text-[var(--color-text)] flex items-center gap-2">
              <span className="font-mono text-xs bg-neutral-100 dark:bg-neutral-800 border border-[var(--color-border)] rounded px-1.5">02</span>
              <span>Core Redesign Goals</span>
            </h2>
          </FadeInUp>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FadeInUp delay={0.05}>
              <li className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-2xl p-4 text-xs space-y-1.5 hover:border-[var(--color-border-hover)] transition-all h-full">
                <div className="font-bold text-[var(--color-text)] flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-[var(--color-signal)]" />
                  <span>Re-position as a Club</span>
                </div>
                <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                  Showcase Khyaal as a holistic happiness club for seniors, not a simple single-feature application.
                </p>
              </li>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <li className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-2xl p-4 text-xs space-y-1.5 hover:border-[var(--color-border-hover)] transition-all h-full">
                <div className="font-bold text-[var(--color-text)] flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-[var(--color-signal)]" />
                  <span>Validate Trust Instantly</span>
                </div>
                <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                  Leverage testimonials, member stories, and ambassador pictures as credible social proof.
                </p>
              </li>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <li className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-2xl p-4 text-xs space-y-1.5 hover:border-[var(--color-border-hover)] transition-all h-full">
                <div className="font-bold text-[var(--color-text)] flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-[var(--color-signal)]" />
                  <span>Surface Multi-Product Area</span>
                </div>
                <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                  Clean navigational entry points for Travel, Commerce, Community, and App downloads.
                </p>
              </li>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <li className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-2xl p-4 text-xs space-y-1.5 hover:border-[var(--color-border-hover)] transition-all h-full">
                <div className="font-bold text-[var(--color-text)] flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-[var(--color-signal)]" />
                  <span>Support Fundraising</span>
                </div>
                <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                  Enable prospective investors to scan metrics, retention rates, and general momentum in under two minutes.
                </p>
              </li>
            </FadeInUp>
          </ul>
        </section>

        {/* Section 03: Process */}
        <section className="space-y-6">
          <FadeInUp>
            <h2 className="font-heading text-xl font-bold tracking-tight text-[var(--color-text)] flex items-center gap-2 border-b border-[var(--color-border)] pb-3">
              <span className="font-mono text-xs bg-neutral-100 dark:bg-neutral-800 border border-[var(--color-border)] rounded px-1.5">03</span>
              <span>Our Iterative Process Loop</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.05}>
            <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
              A website is a story told in scrolls. If the narrative backbone is weak, the visual polish falls apart. We cycled continuously through design, cross-functional validation, and iteration.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="w-full">
                <FadeInUp delay={idx * 0.04}>
                  <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-2xl p-4 flex gap-4 items-start shadow-sm hover:border-[var(--color-border-hover)] transition-all h-full">
                    <div className="font-mono text-[11px] font-bold bg-neutral-100 dark:bg-neutral-800 border border-[var(--color-border)] rounded px-1.5 text-[var(--color-text-muted)]">
                      {step.num}
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-[var(--color-text)]">{step.name}</div>
                      <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04: Design Details */}
        <section className="space-y-4">
          <FadeInUp>
            <h2 className="font-heading text-xl font-bold tracking-tight text-[var(--color-text)] flex items-center gap-2">
              <span className="font-mono text-xs bg-neutral-100 dark:bg-neutral-800 border border-[var(--color-border)] rounded px-1.5">04</span>
              <span>Design Hooks & Specs</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.05}>
            <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-6 space-y-3 hover:border-amber-500/25 transition-all duration-300">
              <h3 className="font-serif italic text-sm text-[var(--color-accent)] font-semibold flex items-center gap-1.5">
                <Star className="h-4.5 w-4.5 fill-amber-500 text-amber-500" />
                <span>A Familiar System, with a new lightness</span>
              </h3>
              <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
                Instead of throwing away the pre-existing system, we extended it. We introduced a fresh set of pastel colors for section-level accents, handled emotional alignment with pastels, and let the existing tokens execute the structural layout. 
              </p>
              <div className="text-[11px] font-mono text-[var(--color-text-muted)] border-t border-[var(--color-border)] pt-2.5">
                💡 Creative coordination involved scoping photoshoot re-shoots, user testimonials, long-form stories, and SEO copies upfront, keeping engineering teams unblocked.
              </div>
            </div>
          </FadeInUp>
        </section>

      </main>

      <Footer />
    </div>
  );
}
