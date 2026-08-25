"use strict";

"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FadeInUp from "../../components/FadeInUp";
import { Download, Briefcase, Award, GraduationCap, Globe } from "lucide-react";

export default function Resume() {
  const experiences = [
    {
      company: "Blubeez AI",
      tagline: "US-based AI startup • blubeez.ai",
      role: "Design Consultant",
      location: "USA (Remote)",
      period: "Dec 2025 – Present",
      bullets: [
        "Leading product design and experience strategy for an AI-native platform, defining conversational UX patterns, information architecture, and core user journeys alongside the founding team.",
        "Built the end-to-end brand system and scalable visual foundation across product, web, and growth surfaces.",
        "Designed and shipped the marketing website used for early-stage demand generation and product positioning.",
      ],
    },
    {
      company: "Khyaal",
      tagline: "Senior-first consumer fintech • khyaal.com",
      role: "Founding Product Designer",
      location: "Mumbai (Hybrid)",
      period: "Jun 2023 – Dec 2025",
      bullets: [
        "Led end-to-end design of 15+ impact features including Digi-Gold, Digi-Gold SIP, AI Chatbot, and Memory Lane, directly contributing to the company's first $4M funding round.",
        "Contributed to scaling Khyaal from 50K → 5M users through product improvements and UX optimization across the platform.",
        "Defined UX principles and accessibility standards for senior-first digital products through research-led design decisions.",
        "Conducted user interviews, behavioral mapping, and journey analysis to uncover senior users' digital behavior and trust patterns.",
        "Built and scaled the design system to improve consistency, collaboration, and speed across product and marketing teams.",
        "Owned design and delivery of the '50 Above 50' platform, playing a key role in brand positioning and growth strategy.",
      ],
    },
    {
      company: "Nonlinear Consulting",
      tagline: "Design consultancy • nonlinear.in",
      role: "Associate UI UX Designer",
      location: "Bengaluru",
      period: "Jun 2022 – Nov 2022",
      bullets: [
        "Designed MVPs and product experiences for early-stage startups across multiple domains.",
        "Contributed to product strategy, visual design, made pitch decks, company portfolios, and interactive prototypes.",
        "Strengthened expertise in communication, user flows, and end-to-end product design across 0→1 product journeys.",
      ],
    },
  ];

  const skills = [
    "0→1 Product design",
    "Design systems",
    "UX research & synthesis",
    "Business strategy",
    "Conversational / AI UX",
    "Brand & visual systems",
    "Website design",
    "App design",
  ];

  const languages = ["English", "Tamil", "Kannada", "Hindi"];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] transition-colors duration-300 flex flex-col">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 space-y-12">
        {/* Intro CV Header */}
        <FadeInUp>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[var(--color-border)] pb-8">
            <div className="space-y-3 max-w-xl">
              <div className="text-[10px] font-bold tracking-widest text-[var(--color-text-muted)] font-mono uppercase">
                The official record
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-text)]">
                Professional <span className="font-serif italic text-[var(--color-accent)] font-normal">Resume</span>
              </h1>
              <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
                Product designer focused on building 0→1 consumer and AI products across growth stage startups. Previously contributed to scaling Khyaal from 50K → 5M users, currently designing AI native experiences at Blubeez.
              </p>
            </div>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] hover:border-[var(--color-text)] bg-[var(--color-bg-elevated)] px-5 py-2.5 text-xs font-bold text-[var(--color-text)] transition-colors duration-200 cursor-pointer shadow-sm"
            >
              <Download className="h-4 w-4 text-[var(--color-text-muted)]" />
              <span>Print / Download CV</span>
            </button>
          </div>
        </FadeInUp>

        {/* Layout Grid: Experience (Left) vs Skills/Info (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Timeline Block (2 Columns) */}
          <div className="md:col-span-2 space-y-8">
            <FadeInUp>
              <h2 className="font-heading text-lg font-bold text-[var(--color-text)] flex items-center gap-2 border-b border-[var(--color-border)] pb-3">
                <Briefcase className="h-5 w-5 text-[var(--color-text-muted)]" />
                <span>01 / Work Experience</span>
              </h2>
            </FadeInUp>

            <div className="relative border-l border-[var(--color-border)] ml-3 pl-6 space-y-10">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  <FadeInUp delay={idx * 0.05}>
                    <div className="space-y-3">
                      {/* Dot timeline anchor */}
                      <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] transition-all duration-300 group-hover:border-[var(--color-text)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 transition-colors group-hover:bg-[var(--color-text)]" />
                      </span>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h3 className="font-heading text-base font-extrabold text-[var(--color-text)]">
                          {exp.company}
                        </h3>
                        <div className="text-[10px] font-bold font-mono text-[var(--color-text-muted)]">
                          {exp.period}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[var(--color-text-secondary)]">
                        <span className="rounded bg-[var(--color-bg-sunk)] border border-[var(--color-border)] px-2 py-0.5">
                          {exp.role}
                        </span>
                        <span>•</span>
                        <span className="text-[var(--color-text-muted)] font-mono uppercase text-[10px]">
                          {exp.location}
                        </span>
                      </div>

                      <div className="text-[11px] text-[var(--color-text-muted)] font-mono leading-tight">
                        {exp.tagline}
                      </div>

                      <ul className="list-disc pl-4 space-y-2 text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </FadeInUp>
                </div>
              ))}
            </div>
          </div>

          {/* Info Sidebar Block (1 Column) */}
          <div className="space-y-8">
            
            {/* Biography details */}
            <FadeInUp delay={0.1}>
              <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-2xl p-5 space-y-4 shadow-sm hover:border-[var(--color-border-hover)] transition-all duration-300">
                <h3 className="text-[10px] font-bold tracking-widest text-[var(--color-text-muted)] font-mono uppercase border-b border-[var(--color-border)] pb-2">
                  Personal Info
                </h3>
                <div className="space-y-3 text-xs leading-relaxed">
                  <div>
                    <div className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase font-mono">Name</div>
                    <div className="font-semibold text-[var(--color-text)]">Harini Senthil Kumar</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase font-mono">Role</div>
                    <div className="font-semibold text-[var(--color-text)]">Product Designer</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase font-mono">Location</div>
                    <div className="font-semibold text-[var(--color-text)]">Bangalore, India</div>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Skills grid */}
            <FadeInUp delay={0.15}>
              <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-2xl p-5 space-y-3 shadow-sm hover:border-[var(--color-border-hover)] transition-all duration-300">
                <h3 className="text-[10px] font-bold tracking-widest text-[var(--color-text-muted)] font-mono uppercase border-b border-[var(--color-border)] pb-2">
                  02 / Core Skills
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="rounded bg-[var(--color-bg-sunk)] border border-[var(--color-border)] px-2 py-0.5 text-[11px] text-[var(--color-text-secondary)] font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInUp>

            {/* Languages */}
            <FadeInUp delay={0.2}>
              <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-2xl p-5 space-y-3 shadow-sm hover:border-[var(--color-border-hover)] transition-all duration-300 font-semibold">
                <h3 className="text-[10px] font-bold tracking-widest text-[var(--color-text-muted)] font-mono uppercase border-b border-[var(--color-border)] pb-2 flex items-center gap-1.5">
                  <Globe className="h-4 w-4" />
                  <span>Languages</span>
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs text-[var(--color-text-secondary)] border border-neutral-200/50"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInUp>

            {/* Education & Credentials */}
            <FadeInUp delay={0.25}>
              <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-2xl p-5 space-y-4 shadow-sm hover:border-[var(--color-border-hover)] transition-all duration-300">
                <h3 className="text-[10px] font-bold tracking-widest text-[var(--color-text-muted)] font-mono uppercase border-b border-[var(--color-border)] pb-2 flex items-center gap-1.5">
                  <GraduationCap className="h-4.5 w-4.5" />
                  <span>03 / Education</span>
                </h3>
                
                <div className="space-y-4 text-xs">
                  {/* PES University */}
                  <div className="space-y-1">
                    <div className="font-bold text-[var(--color-text)]">B.Arch (Architecture)</div>
                    <div className="text-[var(--color-text-secondary)] font-mono text-[11px]">PES University • 2016 – 2021</div>
                  </div>

                  {/* Certifications */}
                  <div className="space-y-2 pt-2 border-t border-[var(--color-border)]">
                    <div className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase font-mono">Certifications</div>
                    <ul className="space-y-1">
                      <li className="font-semibold text-[var(--color-text)]">10k Designers Cohort (2022 • 3m)</li>
                      <li className="font-semibold text-[var(--color-text)]">Design Boat UI UX Certification (2021 • 3m)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInUp>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
