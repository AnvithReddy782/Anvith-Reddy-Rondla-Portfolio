"use strict";

"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sketchpad from "../../components/Sketchpad";
import FadeInUp from "../../components/FadeInUp";
import Link from "next/link";
import { ArrowUpRight, Award, Folder } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MyWork() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "Favourites" },
    { id: "work", label: "Work projects" },
    { id: "exploration", label: "Exploration & WIP" },
    { id: "sketch", label: "Leave a sketch" },
  ];

  const projects = [
    {
      id: "khyaal",
      title: "Khyaal Redesign",
      tagline: "The Front Door, Reimagined",
      description: "How a story-led, motion-first redesign caught Khyaal's website up to the company it had become and opened the door to the next level.",
      metric: "5M+ Seniors Reached",
      category: "work",
      isFavourite: true,
      link: "/khyaal-case-study-main",
    },
    {
      id: "blubeez",
      title: "Blubeez AI Dashboard",
      tagline: "Conversational UI & Agent Systems",
      description: "Leading product design and experience strategy for an AI-native platform, defining conversational UX patterns, information architecture, and core user journeys alongside the founding team.",
      metric: "Intelligent AI Flows",
      category: "work",
      isFavourite: true,
      link: "#",
    },
    {
      id: "nonlinear",
      title: "Nonlinear MVPs",
      tagline: "Design Consultancy Deliverables",
      description: "Designed MVPs and product experiences for early-stage startups across multiple domains. Contributed to product strategy, visual design, and interactive prototypes.",
      metric: "6+ Shipped Prototypes",
      category: "work",
      isFavourite: false,
      link: "#",
    },
    {
      id: "garden",
      title: "Community Garden App",
      tagline: "Social Micro-Platform",
      description: "A fun micro-concept app enabling urban neighbors to co-own, schedule shifts, and trade local harvests in neighborhood gardens.",
      metric: "WIP Concept",
      category: "exploration",
      isFavourite: false,
      link: "#",
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeTab === "all") return p.isFavourite;
    return p.category === activeTab;
  });

  return (
    <div className="min-h-screen bg-[var(--color-bg)] transition-colors duration-300 flex flex-col">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 space-y-10">
        
        {/* Intro Header */}
        <FadeInUp>
          <div className="space-y-4 max-w-2xl">
            <div className="text-[10px] font-bold tracking-widest text-[var(--color-text-muted)] font-mono uppercase">
              Portfolio index
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-text)]">
              A Selection of <span className="font-serif italic text-[var(--color-accent)] font-normal">My Work</span>
            </h1>
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Led or contributed to significantly since 2022. Each project encapsulates details on the strategic problem, design iteration processes, and the actual product output.
            </p>
          </div>
        </FadeInUp>

        {/* Tab switcher */}
        <FadeInUp delay={0.05}>
          <div className="flex flex-wrap gap-x-5 gap-y-2.5 border-b border-[var(--color-border)] pb-3 text-xs font-bold relative">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`pb-2 relative transition-colors duration-250 cursor-pointer ${
                    isActive ? "text-[var(--color-text)] font-extrabold" : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                  }`}
                >
                  <span>{cat.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-text)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </FadeInUp>

        {/* Conditionally render Projects Grid or Canvas Sketchpad */}
        <div className="w-full">
          {activeTab === "sketch" ? (
            <FadeInUp delay={0.1}>
              <Sketchpad />
            </FadeInUp>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((p) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.96, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: 15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    key={p.id}
                  >
                    <Link
                      href={p.link}
                      className="group block bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-text)] rounded-3xl p-6 h-56 flex flex-col justify-between transition-all duration-300 hover:shadow-md"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-[10px] font-bold font-mono text-[var(--color-text-muted)] uppercase">
                          <span className="flex items-center gap-1">
                            <Folder className="h-3 w-3" />
                            {p.category}
                          </span>
                          <div className="flex items-center gap-1 rounded bg-[var(--color-accent-subtle)] px-2 py-0.5 text-xs text-[var(--color-accent)] font-bold font-mono border border-[var(--color-border)]">
                            <Award className="h-3 w-3" />
                            <span>{p.metric}</span>
                          </div>
                        </div>
                        <div className="space-y-0.5">
                          <h3 className="font-heading text-base font-extrabold text-[var(--color-text)]">
                            {p.title}
                          </h3>
                          <div className="font-serif italic text-xs text-[var(--color-accent)]">
                            {p.tagline}
                          </div>
                        </div>
                        <p className="text-xs leading-relaxed text-[var(--color-text-secondary)] line-clamp-3">
                          {p.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 self-start text-[10px] font-bold font-mono text-neutral-500 group-hover:text-[var(--color-text)] transition-colors">
                        <span>Inspect Project</span>
                        <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

      </main>

      <Footer />
    </div>
  );
}
