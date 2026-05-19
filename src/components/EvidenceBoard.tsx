"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { projects } from "@/lib/data";
import { useMouseTilt } from "@/hooks/useMouseTilt";
import { fadeInUp, staggerContainer, springSoft, springMedium } from "@/lib/animations";

type ThreadType = "tech" | "problem" | "outcome";

export default function EvidenceBoard() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeThread, setActiveThread] = useState<ThreadType>("problem");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-2, 2]);

  const handleBoardMove = useCallback((e: React.MouseEvent) => {
    if (!boardRef.current) return;
    const rect = boardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

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
    tech: "Projects that share the same technical foundation",
    problem: "Projects that solve the same category of problem",
    outcome: "Projects that produced similar types of impact",
  };

  const filteredProjects = projects.filter((p) => p.tier <= 3);

  return (
    <section id="evidence" className="py-14 md:py-20">
      <div className="container-main">
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <span className="section-label">01 — Evidence</span>
          <h2 className="section-heading">What I have actually shipped</h2>
          <p className="section-desc">
            Not a list. Proof. Every product started with a problem I noticed, a decision I made, and an outcome that matters.
          </p>
        </motion.div>

        {/* Thread selector */}
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

        {/* Board with parallax */}
        <motion.div
          ref={boardRef}
          onMouseMove={handleBoardMove}
          onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          className="relative"
        >
          {/* SVG connection threads */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: "visible" }}>
            {activeId && filteredProjects.map((project) => {
              if (!connected.has(project.id)) return null;
              const connIds = project.connections[activeThread] || [];
              return connIds.map((connId) => {
                if (!connected.has(connId)) return null;
                return (
                  <motion.line
                    key={`${project.id}-${connId}`}
                    x1="0" y1="0" x2="0" y2="0"
                    stroke="var(--color-accent)"
                    strokeWidth={1}
                    opacity={0.15}
                    className="thread-pulse"
                  />
                );
              });
            })}
          </svg>

          {/* Project grid */}
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
                    transition={{ ...springSoft, delay: index * 0.04 }}
                    whileHover={!isDimmed ? { y: -2, transition: { duration: 0.15 } } : {}}
                    className={`card p-4 cursor-pointer ${
                      isActive ? "ring-1 ring-[var(--color-accent)]" : ""
                    } ${isDimmed ? "opacity-20 pointer-events-none" : ""}`}
                    onMouseEnter={() => { setActiveId(project.id); tilt.handlers.onMouseEnter?.(); }}
                    onMouseLeave={() => { setActiveId(null); tilt.handlers.onMouseLeave?.(); }}
                    onMouseMove={tilt.handlers.onMouseMove}
                    onClick={() => setExpandedId(isExpanded ? null : project.id)}
                    ref={tilt.ref}
                    style={tilt.style}
                  >
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
                          transition={springMedium}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 pt-3 border-t border-[var(--color-border)] space-y-2.5">
                            <div>
                              <span className="label-accent">The problem</span>
                              <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">{project.problem}</p>
                            </div>
                            <div>
                              <span className="label-signal">The decision</span>
                              <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">{project.decision}</p>
                            </div>
                            <div>
                              <span className="label">The outcome</span>
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
                        <span>Click for decision trail</span>
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
        </motion.div>
      </div>
    </section>
  );
}
