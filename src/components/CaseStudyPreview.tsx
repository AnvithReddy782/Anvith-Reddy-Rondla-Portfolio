"use client";

import { projects } from "@/lib/data";

type Props = {
  kind: "chart" | "map" | "grid";
  label: string;
};

export default function CaseStudyPreview({ kind, label }: Props) {
  const project =
    projects.find((p) => p.preview.kind === kind && p.preview.label === label) ||
    projects.find((p) => p.preview.label === label);

  if (!project) return null;

  return (
    <section aria-label="Key results" className="mt-12">
      <span className="label mb-4 block">System brief</span>

      <div className="border border-line bg-surface">
        <div className="flex flex-col justify-between gap-4 border-b border-line p-6 md:flex-row md:items-center md:p-8">
          <div>
            <span className="label block">Headline result</span>
            <span className="mt-2 block font-heading text-2xl font-semibold text-accent md:text-[1.75rem]">
              {project.metric}
            </span>
          </div>
          <p className="tabular max-w-md font-mono text-xs leading-relaxed text-muted">
            {label}
          </p>
        </div>

        <dl className="grid grid-cols-2 md:grid-cols-4">
          {project.result.map((r, i) => (
            <div
              key={r.label}
              className={`p-5 md:p-6 ${i % 2 === 1 ? "border-l" : ""} ${
                i >= 2 ? "max-md:border-t" : ""
              } ${i > 0 ? "md:border-l" : ""} border-line`}
            >
              <dd className="tabular font-heading text-xl font-semibold text-text md:text-2xl">
                {r.value}
              </dd>
              <dt className="label mt-2 normal-case tracking-normal">{r.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
