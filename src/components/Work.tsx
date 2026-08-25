"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";
import StatusBadge from "@/components/StatusBadge";

const tiers = [
  { id: 1, label: "In production", detail: "Live platforms running in the field today" },
  { id: 2, label: "Active operations", detail: "User-facing tracking tools in daily use" },
  { id: 4, label: "Automation & tooling", detail: "Scripts and internal systems that removed manual work" },
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

  const hasArchitecture =
    selected && ["dpmums", "field-reporter", "globusit-erp"].includes(selected.slug);
  const hasSpecs =
    selected && ["dpmums", "annapurna-collections", "field-reporter"].includes(selected.slug);

  return (
    <section id="work" className="scroll-mt-20 py-24 md:py-32">
      <div className="container-main">
        <motion.div
          className="mb-16 flex flex-col justify-between gap-4 border-b border-line pb-8 md:flex-row md:items-end"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="display-lg">Selected work</h2>
          <p className="max-w-md text-sm leading-relaxed text-secondary">
            Ten shipped systems, grouped by how they run. Open any card for the
            problem, the technical decision, and the verified outcome.
          </p>
        </motion.div>

        <div className="space-y-16">
          {tiers.map((tier) => {
            const tierProjects = projects.filter((project) => project.tier === tier.id);
            if (tierProjects.length === 0) return null;

            return (
              <div key={tier.id}>
                <div className="mb-5 flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent">T{tier.id}</span>
                    <h3 className="font-heading text-lg font-semibold text-text">{tier.label}</h3>
                    <span className="hidden text-sm text-muted sm:inline">— {tier.detail}</span>
                  </div>
                  <span className="tabular font-mono text-xs text-muted">
                    {tierProjects.length.toString().padStart(2, "0")}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-2">
                  {tierProjects.map((project, index) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      wide={tierProjects.length === 1 || (tier.id === 1 && index === 0)}
                      delay={index * 0.05}
                      onClick={() => setSelected(project)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

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
              className="fixed inset-0 z-[80] cursor-default bg-black/70 backdrop-blur-sm"
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
              className="fixed right-0 top-0 z-[90] flex h-full w-full max-w-2xl flex-col overflow-y-auto border-l border-line-strong bg-sunk"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-sunk px-6 py-4 md:px-10">
                <span className="label">Project evidence / {selected.id}</span>
                <button
                  ref={closeRef}
                  onClick={() => setSelected(null)}
                  className="flex h-9 w-9 items-center justify-center border border-line text-secondary transition hover:border-line-strong hover:text-text"
                  aria-label="Close project drawer"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="px-6 pb-10 pt-8 md:px-10">
                <div className="mb-3 flex items-center gap-3">
                  <StatusBadge status={selected.status} />
                  <span className="label">{selected.soloBuild ? "Solo build" : "Collaborative build"}</span>
                </div>
                <h3 id="project-drawer-title" className="display-lg text-text">
                  {selected.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-secondary md:text-[15px]">
                  {selected.description}
                </p>

                {/* Headline result */}
                <div className="mt-8 border-y border-line py-6">
                  <span className="label block">Headline result</span>
                  <span className="mt-2 block font-heading text-2xl font-semibold text-accent md:text-3xl">
                    {selected.metric}
                  </span>
                </div>

                {/* Context / Role */}
                <dl className="grid gap-6 py-6 sm:grid-cols-2">
                  <div>
                    <dt className="label mb-2">Context</dt>
                    <dd className="text-sm leading-relaxed text-secondary">{selected.context}</dd>
                  </div>
                  <div>
                    <dt className="label mb-2">My role</dt>
                    <dd className="text-sm leading-relaxed text-secondary">{selected.role}</dd>
                  </div>
                </dl>

                {/* Problem / Decision / Outcome */}
                <div className="space-y-5 border-t border-line py-6">
                  <div className="grid gap-1.5 md:grid-cols-[110px_1fr] md:gap-6">
                    <span className="label pt-0.5">Problem</span>
                    <p className="text-sm leading-relaxed text-secondary">{selected.problem}</p>
                  </div>
                  <div className="grid gap-1.5 md:grid-cols-[110px_1fr] md:gap-6">
                    <span className="label pt-0.5 text-text">Decision</span>
                    <p className="text-sm leading-relaxed text-secondary">{selected.decision}</p>
                  </div>
                  <div className="grid gap-1.5 md:grid-cols-[110px_1fr] md:gap-6">
                    <span className="label pt-0.5 text-signal">Outcome</span>
                    <p className="text-sm leading-relaxed text-secondary">{selected.outcome}</p>
                  </div>
                </div>

                {/* Stack */}
                <div className="border-t border-line py-6">
                  <span className="label mb-3 block">Technologies shipped</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.stack.map((tech) => (
                      <span key={tech} className="chip">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Architecture */}
                {hasArchitecture && (
                  <div className="border-t border-line py-6">
                    <span className="label mb-4 block">Architecture</span>
                    {selected.slug === "dpmums" && <AttendanceFlow />}
                    {selected.slug === "field-reporter" && <ReportsFlow />}
                    {selected.slug === "globusit-erp" && <ErpFlow />}
                  </div>
                )}

                {/* Specs */}
                {hasSpecs && (
                  <div className="border-t border-line py-6">
                    <span className="label mb-4 block">Specification record</span>
                    <SpecsDocument slug={selected.slug} />
                  </div>
                )}
              </div>

              <div className="sticky bottom-0 mt-auto flex flex-col gap-3 border-t border-line bg-surface px-6 py-4 sm:flex-row sm:items-center sm:justify-between md:px-10">
                <span className="text-sm text-muted">Want the full case study?</span>
                <Link
                  href={`/projects/${selected.slug}`}
                  onClick={() => setSelected(null)}
                  className="btn-primary px-5 py-2.5 text-xs"
                >
                  Open case study <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  wide,
  delay,
  onClick,
}: {
  project: Project;
  wide?: boolean;
  delay: number;
  onClick: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex cursor-pointer flex-col bg-bg p-6 text-left transition-colors duration-300 hover:bg-surface md:p-7 ${
        wide ? "md:col-span-2" : ""
      }`}
      aria-label={`Open details for ${project.title}`}
    >
      <div className="mb-6 flex items-center justify-between gap-3">
        <span className="tabular font-mono text-xs text-faint">{project.id}</span>
        <StatusBadge status={project.status} />
      </div>

      <h4 className="font-heading text-xl font-semibold text-text transition-colors duration-300 group-hover:text-accent md:text-[22px]">
        {project.title}
      </h4>
      <p className={`mt-2.5 text-sm leading-relaxed text-secondary ${wide ? "max-w-2xl" : ""}`}>
        {project.description}
      </p>

      {wide && (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <span key={tech} className="chip">{tech}</span>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-end justify-between gap-4 pt-8">
        <div>
          <span className="label block">Key result</span>
          <span className="mt-1 block font-mono text-[13px] font-medium text-accent">
            {project.metric}
          </span>
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-line text-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-[#16120c]">
          <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </motion.button>
  );
}

/* ---------------- Architecture diagrams ---------------- */

function FlowNode({ x, y, title, sub, subColor = "var(--color-muted)" }: {
  x: number; y: number; title: string; sub: string; subColor?: string;
}) {
  return (
    <>
      <rect x={x} y={y} width={200} height={50} fill="var(--color-surface)" stroke="var(--color-line-strong)" strokeWidth="1" />
      <text x={x + 100} y={y + 21} textAnchor="middle" fontFamily="var(--font-body)" fontSize="12.5" fontWeight="600" fill="var(--color-text)">
        {title}
      </text>
      <text x={x + 100} y={y + 38} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill={subColor}>
        {sub}
      </text>
    </>
  );
}

function FlowArrow({ x1, y1, y2 }: { x1: number; y1: number; y2: number }) {
  return (
    <line x1={x1} y1={y1} x2={x1} y2={y2} stroke="var(--color-line-strong)" strokeWidth="1.5" markerEnd="url(#flow-arrow)" />
  );
}

function FlowFrame({ title, body, viewBox, children }: {
  title: string; body: string; viewBox: string; children: React.ReactNode;
}) {
  return (
    <div className="border border-line bg-sunk p-5">
      <h4 className="font-heading text-sm font-semibold text-text">{title}</h4>
      <p className="mt-1.5 text-xs leading-relaxed text-muted">{body}</p>
      <svg viewBox={viewBox} className="mt-4 h-auto w-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={title}>
        <defs>
          <marker id="flow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--color-muted)" />
          </marker>
        </defs>
        {children}
      </svg>
    </div>
  );
}

function AttendanceFlow() {
  return (
    <FlowFrame
      title="Geofenced attendance verification"
      body="Check-ins require strict spatial validation and photo logs before database sync."
      viewBox="0 0 400 340"
    >
      <FlowNode x={100} y={10} title="GPS coordinate capture" sub="Device location services" />
      <FlowArrow x1={200} y1={60} y2={88} />
      <FlowNode x={100} y={90} title="100m geofence gate" sub="Haversine verification" subColor="var(--color-signal)" />
      <FlowArrow x1={200} y1={140} y2={168} />
      <FlowNode x={100} y={170} title="Selfie identification" sub="Photo integrity check" subColor="var(--color-accent)" />
      <FlowArrow x1={200} y1={220} y2={248} />
      <FlowNode x={100} y={250} title="PostgreSQL database" sub="Offline IndexedDB sync" />
    </FlowFrame>
  );
}

function ReportsFlow() {
  return (
    <FlowFrame
      title="Field report state pipeline"
      body="Tower log compilation runs automatically, formats digests, and dispatches by role."
      viewBox="0 0 400 360"
    >
      <FlowNode x={100} y={10} title="Time trigger — 6:00 IST" sub="Apps Script cron service" subColor="var(--color-accent)" />
      <FlowArrow x1={200} y1={60} y2={88} />
      <FlowNode x={100} y={90} title="Data compilation" sub="Gather & filter coordinates" />
      <FlowArrow x1={200} y1={140} y2={168} />
      <FlowNode x={100} y={170} title="Role access filters" sub="13 dashboard splits" subColor="var(--color-signal)" />
      <line x1={200} y1={220} x2={200} y2={248} stroke="var(--color-line-strong)" strokeWidth="1.5" markerEnd="url(#flow-arrow)" />
      <FlowNode x={30} y={250} title="Gmail HTML dispatch" sub="Director digests" />
      <line x1={370} y1={248} x2={370} y2={248} stroke="none" />
      <FlowNode x={230} y={250} title="Chat webhook alerts" sub="Real-time incidents" subColor="var(--color-accent)" />
      <path d="M 200 220 L 130 220 L 130 248" stroke="var(--color-line-strong)" strokeWidth="1.5" fill="none" markerEnd="url(#flow-arrow)" />
      <path d="M 200 220 L 330 220 L 330 248" stroke="var(--color-line-strong)" strokeWidth="1.5" fill="none" markerEnd="url(#flow-arrow)" />
    </FlowFrame>
  );
}

function ErpFlow() {
  return (
    <FlowFrame
      title="ERP hierarchy & task flow"
      body="Departments, Kanban boards, bookings, and role-based permissions unified."
      viewBox="0 0 400 340"
    >
      <FlowNode x={100} y={10} title="Org chart / department map" sub="Recursive directory nodes" subColor="var(--color-accent)" />
      <FlowArrow x1={200} y1={60} y2={88} />
      <FlowNode x={100} y={90} title="Kanban board / bookings" sub="dnd-kit task engine" subColor="var(--color-signal)" />
      <FlowArrow x1={200} y1={140} y2={168} />
      <FlowNode x={100} y={170} title="Zustand & TanStack Query" sub="Optimistic updates" />
      <FlowArrow x1={200} y1={220} y2={248} />
      <FlowNode x={100} y={250} title="Prisma schema (DB layer)" sub="SQLite / PostgreSQL sync" />
    </FlowFrame>
  );
}

/* ---------------- Specification records ---------------- */

function SpecTable({ head, children }: { head: string[]; children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto border border-line bg-sunk">
      <table className="w-full border-collapse text-left font-mono text-xs">
        <thead>
          <tr className="border-b border-line">
            {head.map((h) => (
              <th key={h} className="label px-4 py-3 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

function SpecsDocument({ slug }: { slug: string }) {
  if (slug === "dpmums") {
    return (
      <SpecTable head={["ID", "Requirement"]}>
        {[
          ["SCOPE", "Tracks field employee operations across multiple state districts."],
          ["FR-1", "Location geofencing — mobile GPS validated within a 100m radius of the local office."],
          ["FR-2", "Four-slot attendance — morning (09–10), midday (13–14), evening (16–17), exit (18–19)."],
          ["PERSONAS", "Field engineer (check-in + selfie), district head (approval routing), admin (benchmarks)."],
        ].map(([id, req]) => (
          <tr key={id} className="border-b border-line last:border-0">
            <td className="px-4 py-3 align-top font-semibold text-accent">{id}</td>
            <td className="py-3 pr-4 text-secondary">{req}</td>
          </tr>
        ))}
      </SpecTable>
    );
  }

  if (slug === "annapurna-collections") {
    return (
      <SpecTable head={["Table", "Attributes", "Relations"]}>
        {[
          ["Users", "id (PK), email (unique), password_hash, role", "—"],
          ["Products", "id (PK), title, slug (unique), price, inventory_count, sanity_ref_id", "—"],
          ["Coupons", "id (PK), code (unique), discount_percentage, usage_limit, times_used, expires_at", "—"],
          ["Orders", "id (PK), user_id, coupon_id, razorpay_order_id, razorpay_payment_id, status, total", "user_id → Users, coupon_id → Coupons"],
          ["OrderItems", "id (PK), order_id, product_id, quantity, unit_price", "order_id → Orders, product_id → Products"],
        ].map(([t, attrs, rel]) => (
          <tr key={t} className="border-b border-line last:border-0">
            <td className="px-4 py-3 align-top font-semibold text-accent">{t}</td>
            <td className="py-3 pr-4 align-top text-secondary">{attrs}</td>
            <td className="py-3 pr-4 align-top text-muted">{rel}</td>
          </tr>
        ))}
      </SpecTable>
    );
  }

  return (
    <SpecTable head={["Source state", "Trigger", "Destination"]}>
      {[
        ["IDLE", "Check-in triggered", "CHECKING LOCATION"],
        ["CHECKING LOCATION", "Coordinate accuracy > 85%", "ACTIVE"],
        ["CHECKING LOCATION", "GPS signal poor", "PENDING SYNC (localDB)"],
        ["ACTIVE", "Technician submits report", "SUBMITTED (syncing sheets)"],
        ["SUBMITTED", "Sync success / failure", "IDLE / PENDING SYNC"],
        ["PENDING SYNC", "Network restored", "IDLE"],
      ].map(([src, trig, dest]) => (
        <tr key={src + trig} className="border-b border-line last:border-0">
          <td className="px-4 py-3 align-top font-semibold text-accent">{src}</td>
          <td className="py-3 pr-4 align-top text-secondary">{trig}</td>
          <td className="py-3 pr-4 align-top text-secondary">{dest}</td>
        </tr>
      ))}
    </SpecTable>
  );
}
