"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useStore } from "@/lib/store";

interface GitNode {
  id: string;
  label: string;
  branch: "main" | "feature/audit" | "feature/telemetry" | "feature/systems";
  tag?: string;
  commitHash: string;
  gridY: number; // 0 to 100 percentage layout
}

const NODES: GitNode[] = [
  { id: "hero", label: "system: init", branch: "main", commitHash: "e39a04f", gridY: 10 },
  { id: "evidence", label: "feat: evidence-board", branch: "feature/audit", tag: "v1.1.0-rc", commitHash: "7b15ca2", gridY: 32 },
  { id: "thinking", label: "feat: problem-solving", branch: "main", commitHash: "4ffca98", gridY: 54 },
  { id: "systems", label: "feat: tech-ecosystem", branch: "feature/systems", tag: "v1.2.0", commitHash: "1ccb5d9", gridY: 76 },
  { id: "about", label: "docs: hire-handshake", branch: "main", commitHash: "da8f77c", gridY: 92 }
];

export default function GitScrollbar() {
  const { activeSection, setActiveSection, addTelemetryLog } = useStore();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Monitor real scroll progress to map git head accurately
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = window.scrollY / totalHeight;
        setScrollProgress(progress);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active section based on scroll heights (Intersection Observer alternative)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -60% 0px",
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    NODES.forEach((node) => {
      const el = document.getElementById(node.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);

  const handleNodeClick = (nodeId: string, label: string) => {
    const el = document.getElementById(nodeId);
    if (el) {
      addTelemetryLog(`Initiated scroll deployment to anchor '#${nodeId}'`);
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Convert scroll progress (0-1) to vertical positioning (10% to 92%)
  const startY = 10;
  const endY = 92;
  const headY = startY + scrollProgress * (endY - startY);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center bg-[#0C0C0C]/40 backdrop-blur-sm border border-neutral-900 px-3 py-6 rounded-full shadow-2xl font-mono text-[10px] select-none">
      <div className="text-[8px] text-neutral-500 uppercase tracking-widest mb-4 vertical-text select-none">
        DEPLOYMENT_BRANCH
      </div>

      <div className="relative w-12 h-64">
        {/* SVG Graph rendering the beautiful git branches */}
        <svg className="w-full h-full" viewBox="0 0 48 256" fill="none">
          {/* Main trunk branch */}
          <line 
            x1="24" y1="15" 
            x2="24" y2="245" 
            stroke="var(--color-border)" 
            strokeWidth="2" 
            strokeDasharray="4 2"
          />

          {/* Feature branch line curves */}
          {/* Node 2 (evidence) - left branch */}
          <path
            d="M 24,25 C 10,50 10,70 24,90"
            stroke="#7C6FF7"
            strokeWidth="1.5"
            fill="none"
            opacity="0.75"
          />

          {/* Node 4 (systems) - right branch */}
          <path
            d="M 24,140 C 38,160 38,180 24,200"
            stroke="#FF6B00"
            strokeWidth="1.5"
            fill="none"
            opacity="0.75"
          />

          {/* Live scrolling master trunk progress highlight */}
          <line
            x1="24" y1="15"
            x2="24" y2={headY * 2.56}
            stroke="#00B4A6"
            strokeWidth="2"
          />

          {/* HEAD pointer commit node indicator */}
          <circle
            cx="24"
            cy={headY * 2.56}
            r="4"
            fill="#00B4A6"
            className="animate-pulse"
          />
        </svg>

        {/* Nodes layer for interaction overlays */}
        {NODES.map((node) => {
          const isActive = activeSection === node.id;
          const nodeColor = node.branch === "feature/audit" 
            ? "#7C6FF7" 
            : node.branch === "feature/systems" 
            ? "#FF6B00" 
            : "#00B4A6";

          return (
            <div
              key={node.id}
              className="absolute left-1/2 -translate-x-1/2 cursor-pointer flex items-center group"
              style={{ top: `${node.gridY}%` }}
              onClick={() => handleNodeClick(node.id, node.label)}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Dot */}
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                  isActive 
                    ? "bg-black scale-125" 
                    : "bg-[#0C0C0C] group-hover:scale-110"
                }`}
                style={{ 
                  borderColor: isActive ? nodeColor : "var(--color-border)",
                  boxShadow: isActive ? `0 0 8px ${nodeColor}` : "none"
                }}
              >
                {isActive && (
                  <div 
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: nodeColor }}
                  />
                )}
              </div>

              {/* Float popovers and tag info */}
              <div 
                className={`absolute left-6 whitespace-nowrap bg-[#0C0C0C]/90 border border-neutral-900 px-2 py-1 rounded shadow-xl pointer-events-none transition-all duration-200 ${
                  hoveredNode === node.id || isActive
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 -translate-x-2"
                }`}
              >
                <div className="flex items-center gap-1.5 text-[9px]">
                  <span className="text-neutral-500 font-mono">{node.commitHash}</span>
                  <span className={`${isActive ? "text-white font-bold" : "text-neutral-400"}`}>
                    {node.label}
                  </span>
                  {node.tag && (
                    <span className="bg-[#1C1C1C] border border-[#00B4A6]/20 text-[#00B4A6] px-1 rounded text-[7px]">
                      {node.tag}
                    </span>
                  )}
                  {isActive && (
                    <span className="text-neutral-500 font-semibold animate-pulse">
                      (HEAD)
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="text-[8px] text-[#00B4A6] uppercase mt-4 text-center select-none font-bold">
        v1.2.0
      </div>
    </div>
  );
}
