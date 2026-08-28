"use client";

import { motion, useReducedMotion } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiPostgresql, 
  SiGooglecloud,
  SiWhatsapp 
} from "react-icons/si";
import { ArrowRight, AlertTriangle, CheckCircle2, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const stages = [
  {
    step: "01",
    date: "Late 2024",
    title: "Unstructured WhatsApp Logs",
    scale: "~24 Field Patrollers",
    tag: "Origin State",
    icon: SiWhatsapp,
    brandColor: "#25D366",
    bottleneck: "Field coordinates lost in unstructured chat text. Supervisors had zero auditability or location verification.",
    resolution: "Forced the need for a structured field data capture tool with coordinate validation.",
    statusVariant: "secondary" as const,
  },
  {
    step: "02",
    date: "Dec 2024",
    title: "Google Apps Script & Sheets",
    scale: "~100 Field Operators",
    tag: "Spreadsheet Ceiling",
    icon: SiGooglecloud,
    brandColor: "#4285F4",
    bottleneck: "6-minute execution limits and Google Sheet row locking caused sync crashes as state reporting scaled.",
    resolution: "Migrated from spreadsheet macros to dedicated relational database architecture.",
    statusVariant: "secondary" as const,
  },
  {
    step: "03",
    date: "Jan 2025",
    title: "React + Vite SPA",
    scale: "Office Scale",
    tag: "Client-Only Limit",
    icon: SiReact,
    brandColor: "#61DAFB",
    bottleneck: "Client-side execution exposed secret API keys and could not process secure Razorpay payment webhooks.",
    resolution: "Adopted full-stack server runtimes with server-side validation and signed webhooks.",
    statusVariant: "secondary" as const,
  },
  {
    step: "04",
    date: "Mar 2025",
    title: "Next.js 16 + IndexedDB + PostgreSQL",
    scale: "38 Districts / State Scale",
    tag: "Production Standard",
    icon: SiNextdotjs,
    bottleneck: "Rural 2G/3G connectivity drops across Bihar caused mobile check-in loss in the field.",
    resolution: "Built offline-first IndexedDB buffer with auto-sync, 100m Haversine gate, and sub-2s query speeds.",
    statusVariant: "signal" as const,
    active: true,
  },
];

export default function Path() {
  const reduce = useReducedMotion();

  return (
    <section id="path" className="dotfield scroll-mt-20 border-t border-line py-14 md:py-18">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          className="flex flex-col justify-between gap-3 border-b border-line pb-5 md:flex-row md:items-end"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent mb-1.5 block">
              Architectural Evolution
            </span>
            <h2 className="display-lg">From WhatsApp Chats to State Systems</h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-secondary">
            Every architectural migration was forced by a concrete field failure under live contracts, never a tutorial.
          </p>
        </motion.div>

        {/* 4-Stage Evolution Grid */}
        <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((st, i) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.step}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card
                  className={`group flex h-full flex-col justify-between p-4 transition-all duration-200 hover:border-line-strong hover:shadow-xs ${
                    st.active ? "border-accent/60 bg-surface shadow-xs ring-1 ring-accent/20" : "bg-surface/80"
                  }`}
                >
                  <div>
                    {/* Header: Step Number, Date & Icon */}
                    <div className="flex items-center justify-between border-b border-line/60 pb-3">
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-xs font-bold ${st.active ? "text-accent" : "text-muted"}`}>
                          {st.step}
                        </span>
                        <span className="font-mono text-[11px] text-muted">/ {st.date}</span>
                      </div>
                      <div className="text-text transition-transform duration-200 group-hover:scale-110">
                        <Icon size={18} style={st.brandColor ? { color: st.brandColor } : undefined} />
                      </div>
                    </div>

                    {/* Stage Title & Scale */}
                    <div className="mt-3">
                      <Badge variant={st.statusVariant} className="text-[9px] px-1.5 py-0 mb-1.5">
                        {st.tag}
                      </Badge>
                      <h3 className="font-heading text-sm font-semibold text-text group-hover:text-accent transition-colors">
                        {st.title}
                      </h3>
                      <span className="font-mono text-[10px] text-muted block mt-0.5">
                        Scale: {st.scale}
                      </span>
                    </div>

                    {/* The Bottleneck / Problem */}
                    <div className="mt-3 rounded-xs border border-line/50 bg-sunk/60 p-2 text-[11px]">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-muted flex items-center gap-1 font-semibold">
                        <AlertTriangle size={10} className="text-accent" />
                        The Breaking Point:
                      </span>
                      <p className="mt-1 text-secondary leading-snug">
                        {st.bottleneck}
                      </p>
                    </div>
                  </div>

                  {/* The Architecture Fix / Result */}
                  <div className="mt-3 pt-2.5 border-t border-line/60">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-signal flex items-center gap-1 font-semibold">
                      <CheckCircle2 size={10} className="text-signal" />
                      Architecture Shift:
                    </span>
                    <p className="mt-0.5 text-[11px] text-text font-medium leading-snug">
                      {st.resolution}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
