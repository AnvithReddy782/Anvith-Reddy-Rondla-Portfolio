"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/lib/store";

interface LogLine {
  text: string;
  type: "input" | "output" | "system" | "success" | "error";
}

const COMMAND_SUGGESTIONS = ["whoami", "promoted", "gap", "tools", "hire"];

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<LogLine[]>([
    { text: "ANVITH_OS [Version 2.6.0]", type: "system" },
    { text: "Initializing narrative modules... SUCCESS", type: "system" },
    { text: "Type a command below or click a suggestion to execute.", type: "system" },
  ]);
  const [isMerging, setIsMerging] = useState(false);
  const [mergeStep, setMergeStep] = useState(0);
  const [showContract, setShowContract] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTelemetryLog } = useStore();

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    // Add input to history
    setHistory((prev) => [...prev, { text: `> ${cmd}`, type: "input" }]);
    addTelemetryLog(`CLI Executed: ${trimmed}`);

    let response: LogLine[] = [];

    switch (trimmed) {
      case "help":
        response = [
          { text: "Available commands:", type: "system" },
          { text: "  whoami   - Personal background and transition story", type: "output" },
          { text: "  promoted - The 2-month promotion chronicle at GlobusIT", type: "output" },
          { text: "  gap      - GlobusIT system architecture gap assessment", type: "output" },
          { text: "  tools    - Full engineering and product skill architecture", type: "output" },
          { text: "  hire     - Initiate the cinematic Git-merge hiring script", type: "output" },
          { text: "  clear    - Clear console display logs", type: "output" },
        ];
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "whoami":
        response = [
          { text: "ANVITH REDDY RONDLA // BUILDER & PM", type: "success" },
          { text: "I am a Product Manager who codes, or an engineer who understands conversion psychology. I don't write spreadsheets and throw specs over the wall. I build the first version myself to see if it's correct.", type: "output" },
          { text: "My philosophy: Ship fast, gather telemetry, adjust the roadmap, repeat. The best specs are working software.", type: "output" },
        ];
        break;
      case "promoted":
        response = [
          { text: "PROMOTION TIMELINE // GLOBUSIT ERP SYSTEM", type: "success" },
          { text: "  [Month 1] Noticed field workers wasting 4+ hours daily compiling Excel files manually.", type: "output" },
          { text: "  [Month 1.5] Designed and coded a deterministic local-first synchronizer without permission.", type: "output" },
          { text: "  [Month 2.0] Shipped 10 modules, reducing report generation times by 98% (from 4 hours to 4 minutes).", type: "output" },
          { text: "  [Outcome] Promoted to Junior PM in exactly 60 days. The results made it inevitable.", type: "success" },
        ];
        break;
      case "gap":
        response = [
          { text: "SYSTEM GAP ASSESSMENT // ERP METRICS", type: "error" },
          { text: "  - Problem: High latency and data loss in field zones with weak cell connections.", type: "output" },
          { text: "  - Action: Implemented custom client-side database layer with offline queueing.", type: "output" },
          { text: "  - Infrastructure: Utilized lightweight local-first sync over ₹0 cost serverless backends.", type: "output" },
          { text: "  - Result: 100% data integrity reached across all 10 active deployment zones.", type: "success" },
        ];
        break;
      case "tools":
        response = [
          { text: "SYSTEM STACK MATRIX", type: "success" },
          { text: "  [Core] JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL", type: "output" },
          { text: "  [Frameworks] Next.js 14/15, React 18/19, TailwindCSS, Express.js", type: "output" },
          { text: "  [Integrations] Google Apps Script, PostgreSQL, Offline Sync Hubs", type: "output" },
          { text: "  [Methods] User Journey Telemetry, Agile Scrum, Rapid Prototyping", type: "output" },
        ];
        break;
      case "hire":
        triggerHireSequence();
        setInput("");
        return;
      default:
        response = [
          { text: `Command not found: '${cmd}'. Type 'help' for options.`, type: "error" },
        ];
    }

    setHistory((prev) => [...prev, ...response]);
    setInput("");
  };

  const triggerHireSequence = () => {
    setIsMerging(true);
    setMergeStep(0);
  };

  useEffect(() => {
    if (!isMerging) return;

    const steps = [
      "git checkout -b feat/anvith-reddy",
      "git add . && git commit -m 'feat: add extreme ownership and product velocity'",
      "git checkout main",
      "git merge feat/anvith-reddy --no-ff",
      "Auto-merging... 10 modules synced.",
      "Resolving conflicts... NONE (Perfect technical alignment found)",
      "Syncing telemetry meters... DONE",
      "git push origin main",
      "DEPL_COMPLETED: Anvith has been merged into your engineering organization!",
    ];

    if (mergeStep < steps.length) {
      const timer = setTimeout(() => {
        setHistory((prev) => [
          ...prev,
          {
            text: steps[mergeStep],
            type: mergeStep === steps.length - 1 ? "success" : "system",
          },
        ]);
        setMergeStep((prev) => prev + 1);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsMerging(false);
        setShowContract(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isMerging, mergeStep]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="w-full max-w-2xl mx-auto mt-6">
      {/* Terminal Display */}
      <div
        className="w-full h-80 rounded-t-lg bg-[#0C0C0C]/90 border border-[var(--color-border)] backdrop-blur-lg flex flex-col overflow-hidden shadow-2xl relative"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#161616] border-b border-[var(--color-border)]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[10px] font-mono text-[var(--color-text-muted)] select-none">
            guest@anvith: ~
          </span>
          <span className="w-4" />
        </div>

        {/* Output lines */}
        <div
          ref={containerRef}
          className="flex-1 p-4 overflow-y-auto space-y-2 font-mono text-xs select-text scrollbar-thin"
        >
          {history.map((line, i) => (
            <div
              key={i}
              className={`leading-relaxed whitespace-pre-wrap ${
                line.type === "input" ? "text-white" :
                line.type === "system" ? "text-[var(--color-text-muted)]" :
                line.type === "success" ? "text-[#00B4A6] font-bold" :
                line.type === "error" ? "text-[#FF6B00]" :
                "text-[var(--color-text-secondary)]"
              }`}
            >
              {line.text}
            </div>
          ))}
        </div>

        {/* Input prompt */}
        <div className="p-3 bg-[#0C0C0C] border-t border-[var(--color-border)] flex items-center gap-2">
          <span className="text-[#00B4A6] font-mono text-xs select-none animate-pulse">&gt;</span>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              executeCommand(input);
            }}
            className="flex-1"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isMerging}
              className="w-full bg-transparent outline-none border-none font-mono text-xs text-white placeholder-neutral-700"
              placeholder={isMerging ? "Executing pipeline..." : "Type 'help' or commands..."}
              autoComplete="off"
              autoCapitalize="off"
            />
          </form>
        </div>
      </div>

      {/* Suggested Actions row */}
      <div className="w-full flex flex-wrap gap-1.5 justify-center py-2.5 px-4 bg-[#161616]/60 border-x border-b border-[var(--color-border)] rounded-b-lg">
        <span className="text-[10px] font-mono text-[var(--color-text-faint)] flex items-center mr-1">
          QUICK:
        </span>
        {COMMAND_SUGGESTIONS.map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            disabled={isMerging}
            className="text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-white hover:border-[#00B4A6] transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Hire Offer Modal Overlay */}
      <AnimatePresence>
        {showContract && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 25 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 25 }}
              className="w-full max-w-md bg-[#0C0C0C] border border-[#00B4A6] p-6 rounded-lg relative shadow-[0_0_30px_rgba(0,180,166,0.25)] font-mono text-xs"
            >
              {/* Close */}
              <button
                onClick={() => setShowContract(false)}
                className="absolute top-3 right-3 text-neutral-500 hover:text-white transition-colors text-base"
              >
                &times;
              </button>

              <div className="text-center mb-4">
                <span className="bg-[#00B4A6]/20 text-[#00B4A6] px-2.5 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase">
                  CONTRACT OF INTENTION
                </span>
                <h3 className="text-white mt-2 mb-1">Anvith Reddy Rondla</h3>
                <span className="text-neutral-500 text-[10px]">Product Manager & Engineer</span>
              </div>

              <div className="space-y-3 text-[11px] text-[var(--color-text-secondary)] border-y border-[var(--color-border)] py-4 my-4 leading-relaxed">
                <p>
                  <span className="text-[#00B4A6]">&gt;</span> Congratulations! You have successfully merged Anvith into your local repository.
                </p>
                <p>
                  <span className="text-[#00B4A6]">&gt;</span> **Next Action**: Initiate face-to-face telemetry verification (interview).
                </p>
                <p>
                  <span className="text-[#FF6B00]">&gt;</span> **Commit Guarantee**: Shipped 10 production-ready products, saved 98% manual report compilation time, zero permission.
                </p>
              </div>

              <div className="flex gap-2">
                <a
                  href="mailto:rondlaanvithreddy@gmail.com?subject=Let's merge Anvith into our engineering team!&body=Hi Anvith, I executed the merge script on your portfolio and want to schedule a technical chat."
                  className="flex-1 px-4 py-2.5 bg-[#00B4A6] hover:bg-[#009b8e] text-black font-bold text-center rounded transition-colors text-[10px]"
                >
                  CONFIRM MERGE (EMAIL)
                </a>
                <button
                  onClick={() => setShowContract(false)}
                  className="px-4 py-2.5 border border-[var(--color-border)] hover:border-white text-white rounded transition-colors text-[10px]"
                >
                  DISMISS
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
