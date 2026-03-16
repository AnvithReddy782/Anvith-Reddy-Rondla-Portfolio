"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Zap } from "lucide-react";

interface AboutProps {
    status?: {
        status: string;
        available: boolean;
        lastUpdated: string;
    };
    metrics?: {
        employeesSaved: number;
        automationHoursMonth: number;
        infrastructureCost: number;
        commercialEquivalent: number;
    };
}

export default function AboutSection({ status, metrics }: AboutProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    // Precise 2deg tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2deg", "-2deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-2deg", "2deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    return (
        <section id="about" className="relative overflow-hidden unified-section">
            {/* Blueprint Grid Overlay (Subtle) */}
            <div className="absolute inset-0 blueprint-overlay pointer-events-none opacity-[0.4]" />

            <div className="container-axiom relative z-10">
                <div className="grid-axiom-unified">

                    {/* Left Column: 42% */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <span className="section-overline">01 // ABOUT ME</span>
                            <h2 className="text-text-0 uppercase">
                                I Find the Friction. <br />
                                <span className="text-text-1 italic font-light lowercase">Then I remove it.</span>
                            </h2>
                        </div>

                        <div className="space-y-6 type-body-lg text-text-1 max-w-[68ch]">
                            <p>
                                I started as a field reporter covering rural governance. What I found wasn't just stories—it was data being lost in translation, processes running on hope instead of systems.
                            </p>
                            <p>
                                That's where I build. I spot the <strong className="text-text-0 font-medium whitespace-nowrap">problems people accept as normal</strong>—and replace them with systems that run themselves.
                            </p>
                        </div>

                        {/* Currently / Status Block */}
                        <div className="pt-8">
                            <div className="p-6 rounded-lg glass-axiom max-w-[400px] corner-brackets group">
                                <span className="type-mono-label text-[9px] text-text-2 block mb-4">WHAT I'M UP TO</span>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-axiom-violet-dim flex items-center justify-center text-axiom-violet border border-axiom-violet-border">
                                        <Zap size={18} />
                                    </div>
                                    <div className="relative">
                                        <p className="text-sm font-medium text-text-0 leading-tight">
                                            {status?.status || "Building something new..."}
                                        </p>
                                        <span className="text-[10px] font-mono text-text-2 mt-1 block">
                                            Updated: {status?.lastUpdated || "Just now"}
                                        </span>
                                        <span className="technical-tag -top-10 -right-4">LIVE_FEED</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: 58% */}
                    <div className="space-y-20 lg:pl-12">
                        {/* Portrait Photo Card */}
                        <div className="relative group">
                            <motion.div
                                ref={cardRef}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={() => { x.set(0); y.set(0); }}
                                style={{ rotateX, rotateY, perspective: 1000 }}
                                className="relative aspect-[3/4] w-full max-w-[480px] mx-auto lg:ml-auto p-3 glass-axiom shadow-axiom-lg overflow-hidden"
                                data-cursor="card"
                            >
                                {/* Technical Tags for Photo */}
                                <span className="technical-tag top-6 left-6 z-20">REF_DECK: A.01</span>
                                <span className="technical-tag bottom-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity">AUTH: ANVITH_R</span>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute -inset-[1px] bg-gradient-to-tr from-orange/20 via-transparent to-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative w-full h-full overflow-hidden">
                                    <Image
                                        src="/assets/anvith.png"
                                        alt="Anvith Reddy"
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-bg-0/60 via-transparent to-transparent" />
                                </div>
                            </motion.div>

                            {/* Visual Guide Line */}
                            <div className="absolute -right-8 top-0 bottom-0 w-px bg-border-1 hidden xl:block" />
                        </div>

                        {/* Tier 1 Metrics Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-border-1 relative group">
                            <span className="technical-tag -top-3 right-0">LOG_METRICS.v3</span>

                            <div className="space-y-1">
                                <span className="type-mono-label text-[9px] text-text-2 block">PEOPLE HELPED</span>
                                <div className="type-metric tabular-nums">{metrics?.employeesSaved || "152"}</div>
                                <p className="text-[10px] text-text-2 uppercase tracking-tighter">Team Members</p>
                            </div>
                            <div className="space-y-1">
                                <span className="type-mono-label text-[9px] text-text-2 block">TIME SAVED</span>
                                <div className="type-metric tabular-nums">{metrics?.automationHoursMonth || "450"}</div>
                                <p className="text-[10px] text-text-2 uppercase tracking-tighter">Hours Every Month</p>
                            </div>
                            <div className="space-y-1">
                                <span className="type-mono-label text-[9px] text-text-2 block">RUNNING COST</span>
                                <div className="type-metric">₹0</div>
                                <p className="text-[10px] text-text-2 uppercase tracking-tighter">Fully Free Infra</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}