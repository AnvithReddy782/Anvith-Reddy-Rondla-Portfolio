"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X, ArrowRight, Check } from "lucide-react";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";
import StatusBadge from "@/components/StatusBadge";
import { DpmumsMockup, AnnapurnaMockup, ApaarMockup, FieldReporterMockup } from "@/components/ProductMockups";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const tiers = [
  { id: 1, label: "Production Platforms", detail: "Flagship systems deployed for state governments & live commerce" },
  { id: 2, label: "Field Operations", detail: "Tools in daily use by active field engineers" },
  { id: 4, label: "Automation & Tooling", detail: "Pipelines eliminating manual reporting overhead" },
];

export default function Work() {
  const [selected, setSelected] = useState<Project | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
        return;
      }
      if (event.key === "Tab" && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <section id="work" className="scroll-mt-20 py-14 md:py-18">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          className="mb-8 flex flex-col justify-between gap-3 border-b border-line pb-5 md:flex-row md:items-end"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent mb-1.5 block">
              Selected Case Studies
            </span>
            <h2 className="display-lg">Systems Built for Scale</h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-secondary">
            Shipped products across Indian state administration, high-throughput analytics,
            and commerce. Open any system for user constraints, architecture, and verified metrics.
          </p>
        </motion.div>

        {/* Tiers Container */}
        <div className="space-y-10">
          {tiers.map((tier) => {
            const tierProjects = projects.filter((project) => project.tier === tier.id);
            if (tierProjects.length === 0) return null;

            return (
              <div key={tier.id}>
                {/* Tier Title */}
                <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-line pb-3">
                  <div className="flex items-baseline gap-3">
                    <Badge variant="accent">Tier {tier.id}</Badge>
                    <h3 className="font-heading text-lg font-semibold text-text">{tier.label}</h3>
                    <span className="hidden text-xs text-muted sm:inline">/ {tier.detail}</span>
                  </div>
                  <span className="tabular font-mono text-xs text-muted">
                    {tierProjects.length.toString().padStart(2, "0")} systems
                  </span>
                </div>

                {/* Cards Layout */}
                {tier.id === 1 ? (
                  /* Tier 1 Flagship Grid: Asymmetric Highlight Layout */
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    {/* Hero Flagship: DPMUMS (Span 12) */}
                    {tierProjects[0] && (
                      <div className="lg:col-span-12">
                        <FlagshipCard
                          project={tierProjects[0]}
                          onClick={() => setSelected(tierProjects[0])}
                        />
                      </div>
                    )}

                    {/* Secondary Flagships (Span 6 each) */}
                    {tierProjects.slice(1).map((project, idx) => (
                      <div key={project.slug} className="lg:col-span-6 flex flex-col">
                        <StandardProjectCard
                          project={project}
                          delay={idx * 0.08}
                          onClick={() => setSelected(project)}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Tier 2 & 4: Compact High-Density Grid */
                  <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-2">
                    {tierProjects.map((project, index) => (
                      <CompactProjectCard
                        key={project.slug}
                        project={project}
                        delay={index * 0.05}
                        onClick={() => setSelected(project)}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Drawer (Fast System Brief) */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.button
              type="button"
              aria-label="Close project details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-[80] cursor-default bg-black/40 dark:bg-black/70 backdrop-blur-xs"
            />
            <motion.aside
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-drawer-title"
              initial={reduce ? { opacity: 0 } : { x: "100%" }}
              animate={reduce ? { opacity: 1 } : { x: 0 }}
              exit={reduce ? { opacity: 0 } : { x: "100%" }}
              transition={{ type: "spring", damping: 34, stiffness: 300 }}
              className="fixed right-0 top-0 z-[90] flex h-full w-full max-w-2xl flex-col overflow-y-auto border-l border-line-strong bg-sunk shadow-2xl"
            >
              {/* Drawer Top Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-sunk/95 backdrop-blur-md px-6 py-3.5 md:px-8">
                <span className="font-mono text-xs text-accent font-semibold">System Brief / {selected.id}</span>
                <Button
                  ref={closeRef}
                  variant="secondary"
                  size="icon"
                  onClick={() => setSelected(null)}
                  aria-label="Close project drawer"
                >
                  <X size={16} />
                </Button>
              </div>

              <div className="px-6 pb-12 pt-6 md:px-8 space-y-7">
                {/* Meta Header */}
                <div>
                  <div className="mb-2.5 flex items-center gap-3">
                    <StatusBadge status={selected.status} />
                    <span className="font-mono text-xs text-muted">{selected.category}</span>
                  </div>
                  <h3 id="project-drawer-title" className="display-lg text-text">
                    {selected.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-secondary">
                    {selected.description}
                  </p>
                </div>

                {/* Simulated UI Artifact Preview */}
                <div className="border border-line bg-surface p-1.5 shadow-xs">
                  <div className="mb-2 flex items-center justify-between px-2 pt-1 font-mono text-[10px] text-muted uppercase tracking-wider">
                    <span>Interface Preview</span>
                    <span className="text-signal font-medium">Production Spec</span>
                  </div>
                  {selected.slug === "dpmums" && <DpmumsMockup />}
                  {selected.slug === "annapurna-collections" && <AnnapurnaMockup />}
                  {selected.slug === "apaar-analytics" && <ApaarMockup />}
                  {selected.slug === "field-reporter" && <FieldReporterMockup />}
                  {selected.slug !== "dpmums" &&
                    selected.slug !== "annapurna-collections" &&
                    selected.slug !== "apaar-analytics" &&
                    selected.slug !== "field-reporter" && (
                      <div className="border border-line bg-sunk p-6 text-center">
                        <span className="font-mono text-xs text-muted">System Architecture Active</span>
                        <h4 className="mt-1 font-heading text-base font-semibold text-text">{selected.metric}</h4>
                      </div>
                    )}
                </div>

                {/* Key Result Banner */}
                <div className="border-y border-line py-4">
                  <span className="font-mono text-[10px] uppercase text-muted block">Headline Achievement</span>
                  <span className="mt-1 block font-heading text-2xl font-semibold text-accent md:text-3xl">
                    {selected.metric}
                  </span>
                  {selected.keyTakeaway && (
                    <p className="mt-1.5 text-xs leading-relaxed text-secondary">
                      Key Takeaway: {selected.keyTakeaway}
                    </p>
                  )}
                </div>

                {/* Problem, Decision, Outcome (Product Perspective) */}
                <div className="space-y-3.5 border border-line bg-surface p-5 shadow-xs">
                  <div>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted">
                      01. The Operational Problem
                    </span>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-secondary">{selected.problem}</p>
                  </div>
                  <Separator />
                  <div>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-text">
                      02. Product Decision & Trade-Offs
                    </span>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-secondary">{selected.decision}</p>
                  </div>
                  <Separator />
                  <div>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-signal">
                      03. Measured Outcome
                    </span>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-secondary">{selected.outcome}</p>
                  </div>
                </div>

                {/* Responsive Pipeline Flow */}
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted mb-2.5 block">Pipeline Flow</span>
                  <PipelineFlow slug={selected.slug} />
                </div>

                {/* Product Requirements Document (PRD) Spec Table */}
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted mb-2.5 block">Product Requirement Specification</span>
                  <PrdSpecTable slug={selected.slug} />
                </div>

                {/* Tech Stack Chips */}
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted mb-2 block">Technologies</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.stack.map((tech) => (
                      <span key={tech} className="chip">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Drawer Bottom Action */}
              <div className="sticky bottom-0 mt-auto flex flex-col gap-3 border-t border-line bg-surface px-6 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8">
                <span className="text-xs text-muted">Want the full discovery story and retrospective?</span>
                <Button asChild variant="default" size="sm">
                  <Link
                    href={`/projects/${selected.slug}`}
                    onClick={() => setSelected(null)}
                  >
                    Open full PRD case study <ArrowUpRight size={14} />
                  </Link>
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- Card Components ---------------- */

function FlagshipCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card className="group relative border-line p-5 md:p-6 transition-all duration-300 hover:border-line-strong hover:shadow-xs">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <Badge variant="accent">FLAGSHIP / {project.id}</Badge>
                <StatusBadge status={project.status} />
              </div>

              <span className="font-mono text-[11px] uppercase tracking-wider text-muted">{project.category}</span>
              <h4 className="mt-1 font-heading text-2xl font-semibold text-text group-hover:text-accent md:text-3xl transition-colors">
                {project.title}
              </h4>

              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-secondary">
                {project.description}
              </p>

              <div className="mt-5 border-y border-line py-3">
                <span className="font-mono text-[10px] uppercase text-muted block">Primary Impact</span>
                <span className="mt-0.5 font-heading text-xl font-semibold text-accent md:text-2xl">
                  {project.metric}
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                variant="default"
                size="sm"
                onClick={onClick}
              >
                Quick System Brief <ArrowRight size={13} />
              </Button>
              <Button asChild variant="secondary" size="sm">
                <Link href={`/projects/${project.slug}`}>
                  Deep PRD Case Study <ArrowUpRight size={13} />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Simulated UI Mockup Preview */}
          <div className="lg:col-span-6 cursor-pointer" onClick={onClick}>
            <DpmumsMockup />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function StandardProjectCard({
  project,
  delay,
  onClick,
}: {
  project: Project;
  delay: number;
  onClick: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Card className="group flex flex-col justify-between h-full p-6 transition-all duration-300 hover:border-line-strong hover:shadow-xs">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-xs text-muted">{project.id}</span>
            <StatusBadge status={project.status} />
          </div>

          <span className="font-mono text-[10px] uppercase tracking-wider text-accent">{project.category}</span>
          <h4 className="mt-1 font-heading text-xl font-semibold text-text group-hover:text-accent md:text-[22px] transition-colors">
            {project.title}
          </h4>

          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-secondary">
            {project.description}
          </p>

          {/* Small Embedded Preview Box */}
          <div className="mt-4 border border-line bg-sunk/60 p-3 font-mono text-xs">
            <div className="flex items-center justify-between text-muted">
              <span className="text-[10px] uppercase">Key Metric</span>
              <span className="text-signal font-semibold">{project.result[0]?.value}</span>
            </div>
            <span className="mt-0.5 block font-heading text-base font-semibold text-accent">
              {project.metric}
            </span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
          <Button
            variant="link"
            size="sm"
            onClick={onClick}
            className="text-accent hover:underline flex items-center gap-1"
          >
            System Brief <ArrowRight size={12} />
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link
              href={`/projects/${project.slug}`}
              className="text-muted hover:text-text flex items-center gap-1"
            >
              PRD <ArrowUpRight size={12} />
            </Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

function CompactProjectCard({
  project,
  delay,
  onClick,
}: {
  project: Project;
  delay: number;
  onClick: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex cursor-pointer flex-col bg-surface p-6 text-left transition-colors duration-300 hover:bg-raised/40 md:p-7"
      aria-label={`Open details for ${project.title}`}
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="font-mono text-xs text-faint">{project.id}</span>
        <StatusBadge status={project.status} />
      </div>

      <span className="font-mono text-[10px] uppercase text-muted">{project.category}</span>
      <h4 className="font-heading text-lg font-semibold text-text group-hover:text-accent md:text-xl transition-colors">
        {project.title}
      </h4>
      <p className="mt-1.5 text-xs leading-relaxed text-secondary">
        {project.description}
      </p>

      <div className="mt-auto flex items-end justify-between gap-4 pt-5">
        <div>
          <span className="font-mono text-[10px] uppercase text-muted block">Headline Metric</span>
          <span className="mt-0.5 block font-mono text-xs font-semibold text-accent">
            {project.metric}
          </span>
        </div>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-line text-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-[var(--color-accent-contrast)]">
          <ArrowUpRight size={14} />
        </span>
      </div>
    </motion.button>
  );
}

/* ---------------- Responsive Pipeline Flows ---------------- */

function PipelineFlow({ slug }: { slug: string }) {
  if (slug === "dpmums") {
    return (
      <div className="space-y-2 border border-line bg-surface p-3.5">
        {[
          { step: "01", title: "Device GPS Capture", desc: "Native browser Geolocation API queries mobile device coordinates.", tag: "Input Gate" },
          { step: "02", title: "100m Haversine Radius Check", desc: "Calculates spherical distance from registered district office center.", tag: "Security Gate", signal: true },
          { step: "03", title: "Camera Identity Check", desc: "Front camera selfie verified against staff profile image hash.", tag: "Biometric Gate" },
          { step: "04", title: "IndexedDB Buffer / Sync", desc: "Stores punch locally if offline, syncing to PostgreSQL when connection returns.", tag: "Database Layer", accent: true },
        ].map((s) => (
          <div key={s.step} className="flex items-start gap-3 border border-line/60 bg-sunk/60 p-2.5 text-xs">
            <span className="font-mono font-semibold text-accent">{s.step}</span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-heading font-semibold text-text">{s.title}</span>
                <Badge variant={s.signal ? "signal" : s.accent ? "accent" : "secondary"} className="text-[9px] py-0 px-1.5">
                  {s.tag}
                </Badge>
              </div>
              <p className="mt-0.5 text-xs text-secondary">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (slug === "annapurna-collections") {
    return (
      <div className="space-y-2 border border-line bg-surface p-3.5">
        {[
          { step: "01", title: "Sanity GROQ Catalog", desc: "Headless CMS manages product inventory, weights, and high-res media.", tag: "CMS Layer" },
          { step: "02", title: "Server Cart State Machine", desc: "Server-side price verification and coupon eligibility checks.", tag: "Security Gate", signal: true },
          { step: "03", title: "Razorpay Checkout Modal", desc: "Client triggers payment gateway with signed server order ID.", tag: "Payment Gate" },
          { step: "04", title: "Webhook Settlement", desc: "HMAC SHA256 signature verified before order commitment in database.", tag: "Order Sync", accent: true },
        ].map((s) => (
          <div key={s.step} className="flex items-start gap-3 border border-line/60 bg-sunk/60 p-2.5 text-xs">
            <span className="font-mono font-semibold text-accent">{s.step}</span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-heading font-semibold text-text">{s.title}</span>
                <Badge variant={s.signal ? "signal" : s.accent ? "accent" : "secondary"} className="text-[9px] py-0 px-1.5">
                  {s.tag}
                </Badge>
              </div>
              <p className="mt-0.5 text-xs text-secondary">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2 border border-line bg-surface p-3.5">
      {[
        { step: "01", title: "Data Collection Trigger", desc: "Field logs and coordinates captured via mobile interface.", tag: "Input" },
        { step: "02", title: "Validation Engine", desc: "Role-based filters and boundary constraints verified.", tag: "Rules Engine", signal: true },
        { step: "03", title: "Automated Dispatch", desc: "Dispatched to directors via summary email and chat webhooks.", tag: "Output Pipeline", accent: true },
      ].map((s) => (
        <div key={s.step} className="flex items-start gap-3 border border-line/60 bg-sunk/60 p-2.5 text-xs">
          <span className="font-mono font-semibold text-accent">{s.step}</span>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-heading font-semibold text-text">{s.title}</span>
              <Badge variant="secondary" className="text-[9px] py-0 px-1.5">{s.tag}</Badge>
            </div>
            <p className="mt-0.5 text-xs text-secondary">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- PRD Requirement Specification Tables ---------------- */

function PrdSpecTable({ slug }: { slug: string }) {
  if (slug === "dpmums") {
    return (
      <div className="overflow-x-auto border border-line bg-surface">
        <table className="w-full border-collapse text-left font-mono text-xs">
          <thead>
            <tr className="border-b border-line bg-sunk">
              <th className="px-3.5 py-2 text-muted font-medium uppercase text-[10px]">Requirement</th>
              <th className="px-3.5 py-2 text-muted font-medium uppercase text-[10px]">Product Rule / Constraint</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {[
              ["Target User", "Field patrol engineers on entry-level Android phones in 38 districts."],
              ["Field Constraint", "Hardware biometric devices rejected due to ₹40L+ procurement cost & 4-month delay."],
              ["Geofencing Gate", "Haversine formula validates distance < 100m from registered district office."],
              ["Offline Sync", "IndexedDB buffers punch logs locally; auto-synchronizes upon 3G/4G signal recovery."],
              ["Punch Windows", "4 daily check-in slots (09:00, 13:00, 16:00, 18:00) with GPS timestamps."],
            ].map(([req, rule]) => (
              <tr key={req}>
                <td className="px-3.5 py-2.5 align-top font-semibold text-accent whitespace-nowrap">{req}</td>
                <td className="px-3.5 py-2.5 text-secondary text-xs leading-relaxed">{rule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (slug === "annapurna-collections") {
    return (
      <div className="overflow-x-auto border border-line bg-surface">
        <table className="w-full border-collapse text-left font-mono text-xs">
          <thead>
            <tr className="border-b border-line bg-sunk">
              <th className="px-3.5 py-2 text-muted font-medium uppercase text-[10px]">Requirement</th>
              <th className="px-3.5 py-2 text-muted font-medium uppercase text-[10px]">Product Rule / Constraint</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {[
              ["Target Customer", "High-intent luxury jewellery buyers requiring fast mobile catalogue browsing."],
              ["Cost Constraint", "Zero monthly hosting budget; entirely powered by Vercel Edge + Sanity Free Tier."],
              ["Cart Integrity", "Server-side price verification on every mutation to eliminate client-side tampering."],
              ["Coupon Logic", "Exclusive coupon rules with server expiration checks to prevent coupon stacking."],
              ["Payment Gate", "Razorpay webhook HMAC signature validation before database order creation."],
            ].map(([req, rule]) => (
              <tr key={req}>
                <td className="px-3.5 py-2.5 align-top font-semibold text-accent whitespace-nowrap">{req}</td>
                <td className="px-3.5 py-2.5 text-secondary text-xs leading-relaxed">{rule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border border-line bg-surface">
      <table className="w-full border-collapse text-left font-mono text-xs">
        <thead>
          <tr className="border-b border-line bg-sunk">
            <th className="px-3.5 py-2 text-muted font-medium uppercase text-[10px]">Specification</th>
            <th className="px-3.5 py-2 text-muted font-medium uppercase text-[10px]">System Constraint</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {[
            ["Primary User", "State operational directors & district field officers."],
            ["Network Constraint", "Designed for rural low-bandwidth connections with offline fallback buffers."],
            ["Data Privacy", "Role-based access control isolating district and state administrative views."],
          ].map(([k, v]) => (
            <tr key={k}>
              <td className="px-3.5 py-2.5 align-top font-semibold text-accent whitespace-nowrap">{k}</td>
              <td className="px-3.5 py-2.5 text-secondary text-xs leading-relaxed">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
