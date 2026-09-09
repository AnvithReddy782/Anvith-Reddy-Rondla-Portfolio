import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import StatusBadge from "@/components/StatusBadge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { DpmumsMockup, AnnapurnaMockup, ApaarMockup, FieldReporterMockup } from "@/components/ProductMockups";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not found" };
  return {
    title: `${project.title} - PRD Case Study`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Navigation />
      <main className="min-h-[100dvh] pt-20 pb-16">
        <article className="container-main max-w-4xl py-6 md:py-10">
          {/* Back button */}
          <Button asChild variant="ghost" size="sm" className="mb-4 -ml-2 text-muted hover:text-text rounded-full px-3">
            <Link href="/#work">
              <ArrowLeft size={13} className="mr-1.5" />
              Back to selected work
            </Link>
          </Button>

          {/* Header */}
          <header className="border-b border-line pb-8">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="accent">PRD Case Study / {project.id}</Badge>
              <StatusBadge status={project.status} />
              <span className="font-mono text-xs text-muted">/ {project.category}</span>
            </div>

            <h1 className="display-xl mt-4 max-w-[20ch]">{project.title}</h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-secondary">
              {project.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-5 sm:grid-cols-4 font-mono text-xs">
              {project.result.map((r) => (
                <div key={r.label} className="border border-line/60 bg-sunk/60 p-3 shadow-2xs">
                  <span className="block text-[10px] uppercase text-muted">{r.label}</span>
                  <span className="mt-0.5 block font-heading text-lg font-semibold text-accent md:text-xl">
                    {r.value}
                  </span>
                </div>
              ))}
            </div>
          </header>

          {/* Context & Role Section */}
          <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card className="p-5 shadow-2xs bg-surface/90">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted mb-2 block">
                Field Environment & Context
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-secondary">{project.context}</p>
            </Card>
            <Card className="p-5 shadow-2xs bg-surface/90">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted mb-2 block">
                My Role & Ownership
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-secondary">{project.role}</p>
            </Card>
          </section>

          {/* High-Fidelity UI Mockup Showcase */}
          <section className="mt-10">
            <div className="mb-2.5 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-muted">Production Interface Preview</span>
              <Badge variant="signal">Interactive Spec</Badge>
            </div>

            <div className="border border-line bg-surface p-2 sm:p-3 shadow-2xs">
              {project.slug === "dpmums" && <DpmumsMockup />}
              {project.slug === "annapurna-collections" && <AnnapurnaMockup />}
              {project.slug === "apaar-analytics" && <ApaarMockup />}
              {project.slug === "field-reporter" && <FieldReporterMockup />}
              {project.slug !== "dpmums" &&
                project.slug !== "annapurna-collections" &&
                project.slug !== "apaar-analytics" &&
                project.slug !== "field-reporter" && (
                  <div className="border border-line bg-sunk p-8 text-center">
                    <span className="font-mono text-xs text-muted">System Benchmark</span>
                    <div className="mt-2 font-heading text-2xl font-semibold text-text">{project.metric}</div>
                    <p className="mt-2 text-xs text-secondary">{project.preview.label}</p>
                  </div>
                )}
            </div>
          </section>

          {/* The PM Narrative: Discovery, Constraints, Decisions */}
          <section className="mt-12 space-y-6">
            {/* 01. The Problem */}
            <Card className="p-6 border-l-4 border-l-accent shadow-2xs bg-surface/90">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                01. Operational Discovery & Field Pain
              </span>
              <h2 className="mt-1 font-heading text-xl font-semibold text-text">
                What was broken before this system existed?
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-secondary">
                {project.problem}
              </p>
            </Card>

            {/* 02. The Constraints */}
            <Card className="p-6 border-l-4 border-l-text shadow-2xs bg-surface/90">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text">
                02. Constraints & Key Product Decisions
              </span>
              <h2 className="mt-1 font-heading text-xl font-semibold text-text">
                Why we chose this architecture over alternatives
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-secondary">
                {project.decision}
              </p>
              {project.keyTakeaway && (
                <div className="mt-3.5 border border-line bg-sunk p-3 font-mono text-xs text-secondary">
                  <span className="font-semibold text-accent">Key Decision Insight:</span> {project.keyTakeaway}
                </div>
              )}
            </Card>

            {/* 03. The Outcome */}
            <Card className="p-6 border-l-4 border-l-signal shadow-2xs bg-surface/90">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-signal">
                03. Measurable Impact
              </span>
              <h2 className="mt-1 font-heading text-xl font-semibold text-text">
                Field adoption & verified results
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-secondary">
                {project.outcome}
              </p>
            </Card>
          </section>

          {/* Chronological Decision Trail */}
          <section className="mt-14 border-t border-line pt-10">
            <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-6 block">
              Chronological Roadmap & Execution
            </span>
            <ol className="space-y-8 border-l border-line pl-7">
              {project.timeline.map((step, i) => (
                <li key={i} className="relative">
                  <span
                    aria-hidden="true"
                    className="tabular absolute -left-[45px] top-0.5 flex h-6 w-6 items-center justify-center border border-accent bg-bg font-mono text-[10px] font-medium text-accent"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-text">{step.title}</h3>
                    <span className="font-mono text-xs text-accent">{step.period}</span>
                  </div>
                  <p className="mt-1.5 max-w-[64ch] text-xs sm:text-sm leading-relaxed text-secondary">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* Tech Stack */}
          <section className="mt-12 border-t border-line pt-8">
            <span className="font-mono text-xs uppercase tracking-wider text-muted mb-2.5 block">
              Technologies & Infrastructure
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span key={tech} className="chip">{tech}</span>
              ))}
            </div>
          </section>

          {/* Prev / Next Navigation */}
          <nav
            aria-label="More case studies"
            className="mt-14 grid grid-cols-1 border-t border-line sm:grid-cols-2"
          >
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex flex-col gap-1 border-b border-line py-5 pr-5 transition-colors hover:bg-surface sm:border-b-0 sm:border-r"
            >
              <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
                <ArrowLeft size={13} /> Previous System
              </span>
              <span className="font-heading text-base font-semibold text-text group-hover:text-accent">
                {prev.title}
              </span>
              <span className="text-xs text-muted">{prev.category}</span>
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col items-start gap-1 py-5 pl-5 text-left transition-colors hover:bg-surface sm:items-end"
            >
              <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
                Next System <ArrowRight size={13} />
              </span>
              <span className="font-heading text-base font-semibold text-text group-hover:text-accent">
                {next.title}
              </span>
              <span className="text-xs text-muted">{next.category}</span>
            </Link>
          </nav>

          {/* Footer Contact CTA */}
          <footer className="mt-4 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
            <div>
              <h4 className="font-heading text-base font-semibold text-text">Looking for a systems-minded PM?</h4>
              <p className="text-xs text-muted mt-0.5">Let&apos;s discuss product strategy, field operations, and database architecture.</p>
            </div>
            <Button asChild variant="default" size="default" className="group rounded-full pl-5 pr-3">
              <Link href="/#contact" className="flex items-center gap-2">
                <span>Get in touch</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10 dark:bg-white/20 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight size={12} />
                </span>
              </Link>
            </Button>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
