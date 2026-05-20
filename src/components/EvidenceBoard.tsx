"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { useMouseTilt } from "@/hooks/useMouseTilt";

type ThreadType = "tech" | "problem" | "outcome";

export default function EvidenceBoard() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeThread, setActiveThread] = useState<ThreadType>("problem");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  const connectedIds = useCallback(() => {
    if (!activeId) return new Set<string>();
    const project = projects.find((p) => p.id === activeId);
    if (!project) return new Set<string>();
    return new Set([activeId, ...(project.connections[activeThread] || [])]);
  }, [activeId, activeThread]);

  const connected = connectedIds();

  const getBadgeClass = (status: string) => {
    switch (status) {
      case "PRODUCTION": return "badge-production";
      case "FUNCTIONAL": return "badge-functional";
      case "TESTING": return "badge-testing";
      case "IN DEVELOPMENT": return "badge-development";
      default: return "badge-development";
    }
  };

  const threadDescriptions: Record<ThreadType, string> = {
    tech: "Same foundation, different use",
    problem: "Same problem, different product",
    outcome: "Same impact, different path",
  };

  const filteredProjects = projects.filter((p) => p.tier <= 3);

  return (
    <section id="evidence" className="py-10 md:py-14 relative transition-all duration-500 audit-wireframe">
      <span className="audit-hud-tag absolute top-4 left-4 bg-[#00B4A6]/20 text-[#00B4A6] border border-[#00B4A6]/40 px-2 py-0.5 rounded text-[8px] z-20">
        COMP: EVIDENCE_BOARD // FILTER: TIER &lt;= 3 // ACTIVE_THREAD: {activeThread.toUpperCase()}
      </span>
      <div className="container-main">
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25 } } }}
        >
          <span className="section-label">01 / The Work</span>
          <h2 className="section-heading">Ten products. Zero permission.</h2>
          <p className="section-desc">
            Every product here started as a problem I noticed and nobody else was solving. I did not wait for a ticket. I did not ask for a budget. I built the thing and let the results speak.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex gap-1 bg-[var(--color-bg-elevated)] rounded-lg p-1">
            {(["problem", "tech", "outcome"] as ThreadType[]).map((type) => (
              <motion.button
                key={type}
                onClick={() => { setActiveThread(type); setActiveId(null); }}
                layout
                className={`px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-colors ${
                  activeThread === type
                    ? "bg-[var(--color-surface)] text-[var(--color-text)] shadow-sm"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                }`}
              >
                {type}
              </motion.button>
            ))}
          </div>
          <motion.span
            key={activeThread}
            className="text-xs text-[var(--color-text-muted)]"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {threadDescriptions[activeThread]}
          </motion.span>
        </motion.div>

        <div ref={boardRef} className="relative">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 relative z-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const isActive = activeId === project.id;
                const isConnected = connected.has(project.id);
                const isDimmed = activeId && !isConnected;
                const isExpanded = expandedId === project.id;
                const tilt = useMouseTilt({ maxRotation: 5, perspective: 800, scale: 1.01 });

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: isDimmed ? 0.2 : 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ type: "spring", stiffness: 200, damping: 25, delay: index * 0.04 }}
                    whileHover={!isDimmed ? { y: -2, transition: { duration: 0.15 } } : {}}
                    className={`card p-4 cursor-pointer overflow-hidden relative transition-all duration-500 audit-wireframe-orange ${
                      isActive ? "ring-1 ring-[var(--color-accent)]" : ""
                    } ${isDimmed ? "opacity-20 pointer-events-none" : ""}`}
                    onMouseEnter={() => { setActiveId(project.id); tilt.handlers.onMouseEnter?.(); }}
                    onMouseLeave={() => { setActiveId(null); tilt.handlers.onMouseLeave?.(); }}
                    onMouseMove={tilt.handlers.onMouseMove}
                    onClick={() => setExpandedId(isExpanded ? null : project.id)}
                    ref={tilt.ref}
                    style={tilt.style}
                  >
                    <span className="audit-hud-tag absolute top-1 right-2 bg-[#FF6B00]/25 text-[#FF6B00] border border-[#FF6B00]/40 px-1.5 py-0.2 rounded text-[7px] font-mono select-none z-10">
                      ID: {project.id} // INDEX: {index} // TILT: 5deg
                    </span>
                    {/* Abstract Pattern Strip */}
                    <div className={`-mx-4 -mt-4 mb-3 h-12 ${project.pattern} relative overflow-hidden rounded-t-lg`}>
                      <span className="absolute inset-0 flex items-center justify-center text-4xl font-heading font-light text-white/25 select-none">
                        {project.monogram}
                      </span>
                    </div>

                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="label text-[var(--color-text-faint)]">{project.id}</span>
                        <span className={getBadgeClass(project.status)}>
                          {project.status === "PRODUCTION" && (
                            <span className="w-1 h-1 rounded-full bg-[var(--color-signal)]" />
                          )}
                          {project.status}
                        </span>
                        {project.untold && <span className="badge badge-untold">Untold</span>}
                      </div>
                      <span className="text-lg font-heading font-medium text-[var(--color-text)] tabular-nums">
                        {project.metric}
                      </span>
                    </div>

                    <h3 className="text-[var(--color-text)] mb-0.5">{project.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] mb-2">{project.description}</p>

                    {/* Connection indicators */}
                    <AnimatePresence>
                      {activeId && !isDimmed && project.connections[activeThread]?.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-wrap gap-1.5 mb-2 overflow-hidden"
                        >
                          {project.connections[activeThread].map((connId) => {
                            const conn = projects.find((p) => p.id === connId);
                            return conn ? (
                              <span
                                key={connId}
                                className="text-[10px] font-mono text-[var(--color-accent)] bg-[var(--color-accent-subtle)] px-1.5 py-0.5 rounded"
                              >
                                {conn.title}
                              </span>
                            ) : null;
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Expanded: Decision Trail */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 pt-3 border-t border-[var(--color-border)] space-y-2.5">
                            <div>
                              <span className="label-accent">What I noticed</span>
                              <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">{project.problem}</p>
                            </div>
                            <div>
                              <span className="label-signal">What I chose</span>
                              <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">{project.decision}</p>
                            </div>
                            <div>
                              <span className="label">What happened</span>
                              <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">{project.outcome}</p>
                            </div>
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {project.stack.map((tech) => (
                                <span key={tech} className="text-[10px] font-mono text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] px-2 py-0.5 rounded">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!isExpanded && (
                      <div className="mt-2 flex items-center gap-1.5 text-[10px] font-mono text-[var(--color-text-faint)]">
                        <span>See how I thought about this</span>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M3 1l4 4-4 4" />
                        </svg>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
