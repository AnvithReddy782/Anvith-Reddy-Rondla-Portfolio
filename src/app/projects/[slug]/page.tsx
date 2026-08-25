import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import StatusBadge from "@/components/StatusBadge";
import CaseStudyPreview from "@/components/CaseStudyPreview";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
    title: `${project.title} — Case study`,
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
      <main className="min-h-[100dvh]">
        <article className="container-main py-14 md:py-20">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={13} />
            All work
          </Link>

          <header className="mt-10 border-b border-line pb-12">
            <div className="flex items-center gap-4">
              <span className="tabular font-mono text-xs text-faint">{project.id}</span>
              <StatusBadge status={project.status} />
              <span className="label">{project.soloBuild ? "Solo build" : "Collaborative"}</span>
            </div>
            <h1 className="display-xl mt-6 max-w-[16ch]">{project.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-secondary md:text-lg">
              {project.description}
            </p>
          </header>

          <section className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <span className="label mb-3 block">Context</span>
              <p className="text-[15px] leading-relaxed text-secondary">{project.context}</p>
            </div>
            <div>
              <span className="label mb-3 block">My role</span>
              <p className="text-[15px] leading-relaxed text-secondary">{project.role}</p>
            </div>
          </section>

          <CaseStudyPreview kind={project.preview.kind} label={project.preview.label} />

          <section className="mt-14">
            <span className="label mb-6 block">The decision trail</span>
            <ol className="space-y-9 border-l border-line pl-7">
              {project.timeline.map((step, i) => (
                <li key={i} className="relative">
                  <span
                    aria-hidden="true"
                    className="tabular absolute -left-[47px] top-0.5 flex h-6 w-6 items-center justify-center border border-accent bg-bg font-mono text-[10px] font-medium text-accent"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h2 className="font-heading text-lg font-semibold text-text">{step.title}</h2>
                    <span className="font-mono text-xs text-faint">{step.period}</span>
                  </div>
                  <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-secondary">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-14 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-line pt-10 sm:grid-cols-3">
            <div>
              <span className="label mb-2 block">Problem</span>
              <p className="text-sm leading-relaxed text-secondary">{project.problem}</p>
            </div>
            <div>
              <span className="label mb-2 block">Decision</span>
              <p className="text-sm leading-relaxed text-secondary">{project.decision}</p>
            </div>
            <div>
              <span className="label mb-2 block text-signal">Outcome</span>
              <p className="text-sm leading-relaxed text-secondary">{project.outcome}</p>
            </div>
          </section>

          <section className="mt-12">
            <span className="label mb-3 block">Stack</span>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span key={tech} className="chip">{tech}</span>
              ))}
            </div>
          </section>

          {/* Prev / Next */}
          <nav
            aria-label="More case studies"
            className="mt-16 grid grid-cols-1 border-t border-line sm:grid-cols-2"
          >
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex flex-col gap-1 border-b border-line py-6 pr-6 transition-colors hover:bg-surface sm:border-b-0 sm:border-r"
            >
              <span className="flex items-center gap-2 font-mono text-xs text-muted">
                <ArrowLeft size={13} /> Previous
              </span>
              <span className="font-heading text-lg font-semibold text-text group-hover:text-accent">
                {prev.title}
              </span>
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col items-start gap-1 py-6 pl-6 text-left transition-colors hover:bg-surface sm:items-end"
            >
              <span className="flex items-center gap-2 font-mono text-xs text-muted">
                Next <ArrowRight size={13} />
              </span>
              <span className="font-heading text-lg font-semibold text-text group-hover:text-accent">
                {next.title}
              </span>
            </Link>
          </nav>

          <footer className="mt-4 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
            <p className="text-sm text-muted">Need a system like this?</p>
            <Link
              href="/#contact"
              className="btn-primary px-5 py-2.5 text-xs"
            >
              Get in touch <ArrowUpRight size={14} />
            </Link>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
