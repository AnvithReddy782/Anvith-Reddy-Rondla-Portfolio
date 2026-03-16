"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe2, IndianRupee, Users2, ShieldCheck } from "lucide-react";

const scaleMetrics = [
    { label: "States with systems in production", value: "2", icon: Globe2 },
    { label: "Districts tracked (Telangana T-Fiber)", value: "8", icon: CheckCircle2 },
    { label: "Positions placed (Bihar DPMU project)", value: "64", icon: Users2 },
    { label: "Employees tracked across geographies", value: "152", icon: Users2 },
    { label: "Roles receiving automated reports daily", value: "13", icon: ShieldCheck },
    { label: "Developer maintaining the entire stack", value: "1", icon: ShieldCheck },
    { label: "Total infrastructure cost (₹)", value: "0", icon: IndianRupee, isZero: true },
];

export default function SystemsAtScale() {
    return (
        <section id="scale" className="unified-section relative overflow-hidden border-b border-border-1">
            {/* Blueprint Overlay */}
            <div className="absolute inset-0 blueprint-overlay pointer-events-none opacity-[0.3]" />

            <div className="container-axiom relative z-10">
                <div className="grid-axiom-unified items-center">

                    {/* Map/Visual Column: 42% (Left) */}
                    <div className="relative group">
                        {/* Technical Metadata for Map */}
                        <span className="technical-tag -top-8 left-0">GEO_SYNC: ACTIVE</span>
                        <span className="technical-tag -top-8 right-0">NODES: 02_PROD</span>

                        <div className="aspect-square relative flex items-center justify-center glass-axiom-dark border-border-1 corner-brackets overflow-hidden bg-surface-3/30">
                            {/* Abstract India Outline with technical grid */}
                            <svg viewBox="0 0 500 500" className="w-[80%] h-[80%] opacity-30 fill-none stroke-border-2 stroke-[0.5]">
                                <path d="M150 100 L350 100 L400 250 L350 400 L150 400 L100 250 Z" />

                                {/* Scanning Circle for Bihar */}
                                <motion.circle
                                    animate={{ r: [6, 12, 6], opacity: [0.3, 0.8, 0.3] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    cx="320" cy="180" stroke="#FF6B00" strokeWidth="1"
                                />
                                <circle cx="320" cy="180" r="3" fill="#FF6B00" />

                                {/* Scanning Circle for Telangana */}
                                <motion.circle
                                    animate={{ r: [6, 12, 6], opacity: [0.3, 0.8, 0.3] }}
                                    transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
                                    cx="240" cy="320" stroke="#FF6B00" strokeWidth="1"
                                />
                                <circle cx="240" cy="320" r="3" fill="#FF6B00" />
                            </svg>

                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-12">
                                <span className="type-mono-label text-[10px] text-orange uppercase tracking-[0.3em] mb-4">LIVE DEPLOYMENTS</span>
                                <div className="text-3xl md:text-5xl font-bold text-text-0 text-center tracking-tighter shimmer-text">
                                    BIHAR + <br />TELANGANA
                                </div>
                            </div>

                            {/* Visual Scanline */}
                            <div className="absolute inset-0 animate-scanline bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,180,166,0.05)_50%,transparent_51%)] bg-[length:100%_8px] pointer-events-none opacity-20" />
                        </div>

                        <div className="mt-8 p-6 glass-axiom border-border-1 rounded-sm max-w-sm ml-auto relative">
                            {/* Small Decal */}
                            <div className="absolute top-2 right-2 w-1 h-1 bg-border-3 rounded-full opacity-30" />
                            <p className="text-[11px] text-text-2 italic leading-relaxed">
                                &quot;Dashboards built for these projects have been reviewed and validated by State Project Directors.&quot;
                            </p>
                        </div>
                    </div>

                    {/* Metrics Column: 58% (Right) */}
                    <div className="lg:pl-16 space-y-12">
                        <div className="space-y-4">
                            <span className="section-overline">04 // SCALE</span>
                            <h2 className="uppercase text-text-0 text-3xl md:text-5xl">Impact Log.</h2>
                        </div>

                        <div className="space-y-3">
                            {scaleMetrics.map((metric, i) => (
                                <motion.div
                                    key={metric.label}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="group flex items-center justify-between py-5 border-b border-border-1/30 last:border-0 hover:bg-orange/5 px-6 -mx-6 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="w-10 h-10 border border-border-1 flex items-center justify-center text-text-2 group-hover:border-teal group-hover:text-teal transition-all duration-500">
                                            <metric.icon size={18} />
                                        </div>
                                        <span className="type-mono-label text-[10px] text-text-1 uppercase tracking-widest group-hover:text-text-0">{metric.label}</span>
                                    </div>
                                    <div className={`text-3xl font-bold tracking-tighter ${metric.isZero ? 'text-orange shimmer-text' : 'text-text-0'}`}>
                                        {metric.value}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
