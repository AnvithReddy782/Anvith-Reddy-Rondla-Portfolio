"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, FileText, Database, GitBranch } from "lucide-react";

const artifacts = [
    {
        id: "brd",
        title: "BRD_DPMUMS_BIHAR",
        type: "Business Requirements Document",
        description: "Problem statement mapping to system architecture.",
        icon: FileText,
        content: "The core challenge was to █████ data velocity across 38 districts. The system required a ██████ architecture to handle the concurrent sync of ██████ records per hour without manual oversight."
    },
    {
        id: "erd",
        title: "ERD_FIELD_REPORTER",
        type: "Entity Relationship Diagram",
        description: "Normalization applied to GAS backends.",
        icon: Database,
        content: "Table: P_AUTH_LOGS { id: UUID, district_id: FK, status: ENUM }. Relationship: 1:N between District and ██████. Mandatory ██████ validation enforced at edge."
    },
    {
        id: "flow",
        title: "FLOW_PROTOCOL_V2",
        type: "User Flow Architecture",
        description: "6-state FSM defining offline synchronization.",
        icon: GitBranch,
        content: "If Connectivity === Low { Cache(State); Trigger(█████); } Else { Push(State); Verify(█████); }. Retry interval set to █████ ms to preserve battery life."
    }
];

export default function PMLayer() {
    const [expanded, setExpanded] = useState<string | null>("brd");

    return (
        <section id="pm-layer" className="unified-section relative overflow-hidden border-y border-border-1">
            {/* Blueprint Overlay */}
            <div className="absolute inset-0 blueprint-overlay pointer-events-none opacity-[0.3]" />

            <div className="container-axiom relative z-10">
                <div className="grid-axiom-unified">

                    {/* Left Column: 42% */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <span className="section-overline">03 // HOW I WORK</span>
                            <h2 className="uppercase text-text-0">Documentation <br />Before Code.</h2>
                        </div>

                        <div className="space-y-6 type-body-lg text-text-1 max-w-[68ch]">
                            <p>
                                Every product I ship starts with a document. Not because someone asked me to—because I learned what happens when you skip it.
                            </p>

                            <div className="pt-8">
                                <div className="p-8 glass-axiom corner-brackets group max-w-[400px]">
                                    <span className="type-mono-label text-[9px] text-text-2 block mb-4 uppercase">Evidence Ratio</span>
                                    <div className="text-2xl md:text-3xl font-bold text-text-0 tracking-tight group-hover:shimmer-text transition-all duration-700">10 PRODUCTS : 10 BRDs</div>
                                    <p className="text-[10px] text-orange mt-4 uppercase tracking-widest font-mono">Every single one. No shortcuts.</p>
                                    <span className="technical-tag -bottom-3 right-4">AUDIT_LOG_01</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: 58% - Accordion Documents */}
                    <div className="space-y-6 lg:pl-12 relative group">
                        {/* Guide Line */}
                        <div className="absolute -left-6 top-0 bottom-0 w-px bg-border-1 hidden xl:block opacity-30" />

                        {artifacts.map((artifact) => (
                            <div
                                key={artifact.id}
                                className={`group/item border transition-all duration-500 relative ${expanded === artifact.id ? 'border-border-3 bg-surface-1/40 shadow-axiom-md backdrop-blur-sm' : 'border-border-1 bg-transparent hover:border-border-2 hover:bg-white/5'}`}
                            >
                                <button
                                    onClick={() => setExpanded(expanded === artifact.id ? null : artifact.id)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`w-10 h-10 flex items-center justify-center border transition-all duration-500 ${expanded === artifact.id ? 'border-orange bg-orange/5 text-orange' : 'border-border-1 text-text-2 group-hover/item:text-text-0 transition-colors'}`}>
                                            <artifact.icon size={18} />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-semibold uppercase tracking-tight text-text-0 group-hover/item:shimmer-text">{artifact.title}</h3>
                                            <span className="type-mono-label text-[9px] text-text-2">{artifact.type}</span>
                                        </div>
                                    </div>
                                    <ChevronDown
                                        size={18}
                                        className={`text-text-2 transition-transform duration-500 ${expanded === artifact.id ? 'rotate-180 text-orange' : ''}`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {expanded === artifact.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            <div className="px-6 pb-6 pt-2">
                                                {/* Document Preview Component */}
                                                <div className="bg-bg-0 border border-border-1 overflow-hidden relative corner-brackets">
                                                    {/* Rigid 24px Header Bar */}
                                                    <div className="h-6 bg-surface-3/80 border-b border-border-1 flex items-center justify-between px-3">
                                                        <span className="type-mono-label text-[8px] text-text-2 tracking-widest uppercase pt-0.5">PREVIEW // SECURE_REF: {artifact.id.toUpperCase()}</span>
                                                        <div className="flex gap-1.5 grayscale opacity-50">
                                                            <div className="w-1.5 h-1.5 bg-text-2 rounded-full" />
                                                            <div className="w-1.5 h-1.5 bg-text-2 rounded-full" />
                                                        </div>
                                                    </div>

                                                    {/* Preview Content */}
                                                    <div className="p-8 font-mono text-[11px] leading-relaxed text-text-1">
                                                        <p className="max-w-[100%]">
                                                            {artifact.content.split('█████').map((part, i, arr) => (
                                                                <span key={i}>
                                                                    {part}
                                                                    {i < arr.length - 1 && (
                                                                        <span className="relative inline-block px-4 mx-1 bg-text-0/10 text-transparent select-none overflow-hidden rounded-sm align-middle">
                                                                            █████
                                                                            <motion.div
                                                                                animate={{ x: ["-100%", "100%"] }}
                                                                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                                                                className="absolute inset-y-0 w-4 bg-orange/40 blur-md pointer-events-none"
                                                                            />
                                                                        </span>
                                                                    )}
                                                                </span>
                                                            ))}
                                                        </p>
                                                        <div className="mt-12 flex items-center gap-6 text-[9px] text-text-2 uppercase tracking-widest border-t border-border-1/30 pt-4">
                                                            <div className="flex items-center gap-2">
                                                                <span className="w-1 h-1 bg-teal rounded-full" />
                                                                <span>Confidence: 98.4%</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <span className="w-1 h-1 bg-teal rounded-full" />
                                                                <span>Status: Audit_Passed</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
