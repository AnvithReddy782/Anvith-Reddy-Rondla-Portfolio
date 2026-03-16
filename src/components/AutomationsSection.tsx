"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
    Database, Mail, MessageSquare, ShieldCheck,
    Smartphone, Camera, MapPin, CheckCircle2,
    ArrowRight, ChevronRight, Zap
} from "lucide-react";

const FlowNode = ({ icon: Icon, label, active = false }: any) => (
    <div className="flex flex-col items-center gap-4">
        <div className={`w-14 h-14 flex items-center justify-center border transition-all duration-500 relative group/node ${active ? 'bg-teal/10 border-teal shadow-[0_0_20px_rgba(0,180,166,0.2)]' : 'bg-surface-2 border-border-1 text-text-2 opacity-50'}`}>
            {/* Micro Decals for Nodes */}
            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-teal opacity-50" />
            <Icon size={22} className={active ? 'text-teal' : 'text-text-2'} />
        </div>
        <span className={`type-mono-label text-[8px] uppercase tracking-[0.2em] ${active ? 'text-teal font-bold' : 'text-text-2 opacity-60'}`}>{label}</span>
    </div>
);

const PulseLine = ({ active = false }: { active?: boolean }) => (
    <div className="w-16 h-px bg-border-1/40 relative overflow-hidden">
        {active && (
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-teal to-transparent w-full h-full"
            />
        )}
    </div>
);

export default function AutomationsSection() {
    const counterRef = useRef(null);
    const counterInView = useInView(counterRef, { once: true });
    const [revealX, setRevealX] = useState(50);

    return (
        <section id="automations" className="unified-section relative overflow-hidden border-t border-border-1">
            {/* Blueprint Overlay */}
            <div className="absolute inset-0 blueprint-overlay pointer-events-none opacity-[0.2]" />

            <div className="container-axiom relative z-10">

                <div className="grid-axiom-unified mb-24">
                    <div className="space-y-4">
                        <span className="section-overline">03 // AUTOMATION</span>
                        <h2 className="uppercase text-text-0">Systems That <br />Run Themselves.</h2>
                    </div>
                    <div className="lg:pt-14">
                        <p className="type-body-lg text-text-1 max-w-[50ch] leading-relaxed">
                            I automate the boring stuff. These systems handle government-scale data daily—no one has to push a button.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-32 relative">
                    {/* Technical Section Tag */}
                    <span className="technical-tag -top-8 left-0">RESOURCES_OPTIMIZED: ACTIVE</span>

                    {/* Reports Hierarchy Flow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-10 lg:p-12 glass-axiom-dark border-border-1 relative overflow-hidden group corner-brackets"
                    >
                        <div className="flex items-center gap-4 mb-16">
                            <Database size={20} className="text-teal" />
                            <h3 className="text-xl font-bold uppercase tracking-tight text-text-0">Daily Reports System</h3>
                            <span className="technical-tag top-10 right-10">REF: CRON_0600</span>
                        </div>

                        <div className="flex items-center justify-between max-w-lg mx-auto py-12">
                            <FlowNode icon={Database} label="Field Data" active />
                            <PulseLine active />
                            <FlowNode icon={ShieldCheck} label="13 Roles" active />
                            <PulseLine active />
                            <FlowNode icon={Mail} label="Dispatch" active />
                        </div>

                        <p className="text-sm text-text-1 leading-relaxed mt-16 max-w-sm">
                            Runs every morning at 6 AM. Creates 13 custom reports and sends each one to the right person—automatically.
                        </p>
                    </motion.div>

                    {/* DPMUMS Attendance Flow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-10 lg:p-12 glass-axiom-dark border-border-1 relative overflow-hidden group corner-brackets"
                    >
                        <div className="flex items-center gap-4 mb-16">
                            <Smartphone size={20} className="text-orange" />
                            <h3 className="text-xl font-bold uppercase tracking-tight text-text-0">Smart Attendance Tracker</h3>
                            <span className="technical-tag top-10 right-10">REF: EDGE_VALIDATE</span>
                        </div>

                        <div className="flex items-center justify-between max-w-lg mx-auto py-12">
                            <FlowNode icon={MapPin} label="GPS_LOCK" active />
                            <PulseLine active />
                            <FlowNode icon={Camera} label="PHOTO_AUTH" active />
                            <PulseLine active />
                            <FlowNode icon={CheckCircle2} label="LEDGER" active />
                        </div>

                        <p className="text-sm text-text-1 leading-relaxed mt-16 max-w-sm">
                            GPS check-in within 100m + selfie verification for 152 employees. Multi-level approvals with real-time fraud detection.
                        </p>
                    </motion.div>

                    {/* T-Fiber Data Evolution - Reveal Handle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="xl:col-span-2 p-10 lg:p-12 glass-axiom-dark border-border-1 relative overflow-hidden corner-brackets"
                    >
                        <div className="flex items-center gap-4 mb-12">
                            <Zap size={20} className="text-teal" />
                            <h3 className="text-xl font-bold uppercase tracking-tight text-text-0">Before & After</h3>
                            <span className="technical-tag top-12 right-12">LEGACY_VS_ACTIVE</span>
                        </div>

                        <div className="relative h-72 rounded-sm overflow-hidden border border-border-1 bg-surface-3">
                            {/* New State (Front) */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-12">
                                <span className="type-mono-label text-[10px] text-teal tracking-[0.3em]">ACTIVE_AUTOMATED_PROTOCOL</span>
                                <div className="text-2xl md:text-5xl font-bold text-text-0 text-center tracking-tighter shimmer-text">
                                    Forms → Script → Sheets → Reports
                                </div>
                                <div className="px-6 py-2 border border-teal/30 bg-teal/5 text-teal text-[10px] type-mono-label uppercase tracking-widest">
                                    [STATUS] 100% RELIABILITY ACHIEVED
                                </div>
                            </div>

                            {/* Old State (Behind Reveal) */}
                            <div
                                className="absolute inset-0 bg-bg-0 flex flex-col items-center justify-center gap-8 p-12 z-10 transition-all duration-100 border-r border-orange/40"
                                style={{ clipPath: `inset(0 ${100 - revealX}% 0 0)` }}
                            >
                                <span className="type-mono-label text-[10px] text-text-2 tracking-[0.3em]">LEGACY_MANUAL_PROCESS</span>
                                <div className="text-2xl md:text-5xl font-bold text-text-2 text-center grayscale line-through decoration-orange/60 tracking-tighter">
                                    WhatsApp → Excel → No Validation
                                </div>
                                <div className="px-6 py-2 border border-border-1 bg-black/40 text-text-2 text-[10px] type-mono-label uppercase tracking-widest">
                                    [STATUS] FAILURE_PRONE
                                </div>
                            </div>

                            {/* Reveal Handle */}
                            <div
                                className="absolute top-0 bottom-0 w-px bg-orange/40 z-20 cursor-ew-resize group"
                                style={{ left: `${revealX}%` }}
                                onMouseDown={(e) => {
                                    const handleMove = (moveEvent: any) => {
                                        const rect = e.currentTarget.parentElement?.getBoundingClientRect();
                                        if (rect) {
                                            const x = ((moveEvent.clientX - rect.left) / rect.width) * 100;
                                            setRevealX(Math.min(Math.max(x, 0), 100));
                                        }
                                    };
                                    window.addEventListener('mousemove', handleMove);
                                    window.addEventListener('mouseup', () => window.removeEventListener('mousemove', handleMove), { once: true });
                                }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-orange bg-surface-2 flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.3)] group-hover:scale-110 transition-transform duration-300">
                                    <div className="flex gap-1">
                                        <div className="w-0.5 h-4 bg-orange/60" />
                                        <div className="w-0.5 h-4 bg-orange/60" />
                                    </div>
                                </div>
                                {/* Scanning Line Glow */}
                                <div className="absolute inset-y-0 -left-1 w-2 bg-orange/10 blur-sm pointer-events-none" />
                            </div>
                        </div>

                        <div className="mt-12 flex justify-between items-center px-4">
                            <span className="type-mono-label text-[9px] text-text-2 uppercase tracking-widest animate-pulse">DRAG TO SEE THE DIFFERENCE</span>
                            <div className="flex gap-12">
                                <div className="flex flex-col items-end">
                                    <span className="type-mono-label text-[8px] text-text-2 mb-1">LEGACY</span>
                                    <span className="text-xs font-bold text-text-2 uppercase tracking-tighter">Manual & Error-Prone</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="type-mono-label text-[8px] text-teal mb-1">NOW</span>
                                    <span className="text-xs font-bold text-teal uppercase tracking-tighter">Fully Automated</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Impact Counter */}
                <div ref={counterRef} className="pt-32 border-t border-border-1 flex flex-col items-center text-center relative group">
                    <span className="technical-tag -top-4 left-1/2 -translate-x-1/2">ACCUMULATED_MONTHLY_IMPACT</span>

                    <div className="flex items-baseline gap-6 mb-12">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={counterInView ? { opacity: 1 } : {}}
                            className="text-8xl md:text-[200px] font-bold tracking-tight text-text-0 leading-none shimmer-text"
                        >
                            {counterInView ? "320" : "0"}
                        </motion.span>
                        <span className="text-4xl md:text-7xl italic font-light text-text-2 uppercase tracking-tighter">Hours</span>
                    </div>

                    <p className="text-2xl md:text-3xl text-text-1 font-light max-w-2xl leading-relaxed">
                        of manual work eliminated every month. <br />
                        <span className="text-text-0 font-bold block mt-4 uppercase text-lg tracking-widest">Giving people time for work that matters.</span>
                    </p>
                </div>

            </div>
        </section>
    );
}
