"use client";

import { motion } from "framer-motion";

const epochs = [
    {
        period: "Q4 2024",
        title: "WhatsApp Era",
        stack: "Manual Data Entry",
        forcingProblem: "Bihar contract needed fast, reliable data — manual entry couldn't keep up."
    },
    {
        period: "DEC 2024",
        title: "Google Apps Script",
        stack: "Google Apps Script",
        forcingProblem: "Field Reporter needed real state management beyond spreadsheets."
    },
    {
        period: "JAN 2025",
        title: "React + Vite",
        stack: "React 18 + Vite",
        forcingProblem: "DPMUMS Admin needed server-side rendering for audit-log speed."
    },
    {
        period: "MAR 2025",
        title: "Next.js + Supabase",
        stack: "Next.js 16 + Supabase",
        forcingProblem: "Building zero-cost infrastructure at government scale."
    }
];

export default function MigrationStory() {
    return (
        <section id="migration" className="unified-section relative overflow-hidden border-b border-border-1">
            {/* Blueprint Overlay */}
            <div className="absolute inset-0 blueprint-overlay pointer-events-none opacity-[0.2]" />

            <div className="container-axiom relative z-10">
                {/* Unified Header Split */}
                <div className="grid-axiom-unified mb-24">
                    <div className="space-y-4">
                        <span className="section-overline">02 // MY JOURNEY</span>
                        <h2 className="uppercase text-text-0">From WhatsApp <br />to Production.</h2>
                    </div>
                    <div className="lg:pt-14">
                        <p className="type-body-lg text-text-1 max-w-[54ch] leading-relaxed">
                            A real story of outgrowing tools. Each phase was forced by a problem the previous stack couldn't solve.
                        </p>
                    </div>
                </div>

                <div className="relative pt-12 pb-12">
                    {/* Technical Metadata for Timeline */}
                    <span className="technical-tag -top-4 left-0">TRAJECTORY_SYNC: ACTIVE</span>
                    <span className="technical-tag -top-4 right-0">DATAPOINTS: 04</span>

                    {/* The Full-Width Track */}
                    <div className="absolute top-[48px] left-0 w-full h-px bg-border-1/40" />

                    {/* The Progress Fill */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-[48px] left-0 h-px bg-orange z-10"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 relative z-20">
                        {epochs.map((epoch, index) => (
                            <motion.div
                                key={epoch.period}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.8 }}
                                className="relative pt-16 group"
                            >
                                {/* Node Marker */}
                                <div className="absolute top-[44px] left-0 md:left-0 w-2 h-2 rounded-full bg-bg-0 border border-orange z-30 group-hover:scale-150 transition-transform duration-500 shadow-[0_0_10px_rgba(255,107,0,0.5)]" />

                                {/* Vertical Stem */}
                                <div className="absolute top-[48px] bottom-full left-1 w-px bg-border-1/20" />

                                <div className="space-y-6">
                                    <span className="type-mono-label text-[9px] text-text-2 tracking-widest">{epoch.period}</span>

                                    <div>
                                        <h3 className="text-base font-bold text-text-0 uppercase tracking-tight group-hover:text-orange transition-colors">{epoch.title}</h3>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="w-1 h-1 rounded-full bg-teal/50" />
                                            <span className="type-mono-label text-[8px] text-teal/80 uppercase">{epoch.stack}</span>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-border-1/30 relative">
                                        {/* Section Marker Decal */}
                                        <div className="absolute -top-px left-0 w-4 h-px bg-orange" />

                                        <span className="type-mono-label text-[8px] text-text-2 block mb-3 uppercase opacity-50">Why I Switched</span>
                                        <p className="text-[12px] text-text-1 leading-relaxed font-medium">
                                            &quot;{epoch.forcingProblem}&quot;
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
