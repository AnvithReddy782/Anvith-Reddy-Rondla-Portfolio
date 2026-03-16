"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
    status?: {
        building?: string;
        reading?: string;
        thinking?: string;
        available?: boolean;
    }
}

export default function HeroSection({ status }: HeroProps) {
    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center pt-[160px] pb-[120px] overflow-hidden unified-section">
            {/* Background Fragments - Scattered & Ghosted */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <motion.div
                    animate={{
                        opacity: [0.04, 0.08, 0.04],
                        y: [-10, 10, -10],
                        rotate: [-12, -10, -12]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-[-10%] top-[20%] w-[500px] h-[300px] blur-sm group"
                >
                    <Image src="/assets/hero-premium.png" alt="" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-bg-0 via-transparent to-transparent" />
                    <span className="technical-tag top-4 left-4">FRAGMENT_ID: 001.X</span>
                </motion.div>
                <motion.div
                    animate={{
                        opacity: [0.03, 0.06, 0.03],
                        y: [15, -15, 15],
                        rotate: [8, 10, 8]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-[-10%] bottom-[10%] w-[450px] h-[280px] blur-md group"
                >
                    <Image src="/assets/hero-premium.png" alt="" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-bl from-bg-0 via-transparent to-transparent" />
                    <span className="technical-tag bottom-4 right-4">SYNC_LINK: 44.02</span>
                </motion.div>
            </div>

            <div className="container-axiom relative z-10">
                <div className="max-w-[760px] corner-brackets group">
                    <div className="p-8 md:p-0"> {/* Corner bracket offset padding */}
                        {/* Name: Display Size */}
                        <div className="overflow-hidden mb-6">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="type-display uppercase text-text-0"
                            >
                                Anvith Reddy <br className="hidden md:block" /> Rondla
                            </motion.h1>
                        </div>

                        {/* Triple Taglines */}
                        <div className="space-y-1 mb-8">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="type-body-lg text-text-0"
                            >
                                Product Manager
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="type-body-lg text-text-0"
                            >
                                I build systems <span className="text-text-2 mx-1">·</span> I ship products
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="type-body-lg text-text-1 italic font-light"
                            >
                                Results speak. I just build.
                            </motion.p>
                        </div>

                        {/* Status Strip */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 font-mono text-[12px] text-text-2 tracking-tight"
                        >
                            <div className="flex items-center gap-2">
                                <span>BUILDING</span>
                                <span className="text-orange">→</span>
                                <span className="text-text-1 uppercase">{status?.building || "This Portfolio"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>EXPLORING</span>
                                <span className="text-orange">→</span>
                                <span className="text-text-1 uppercase">{status?.thinking || "AI-Driven Products"}</span>
                            </div>
                        </motion.div>

                        {/* Impact Line */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                            className="mb-12 font-mono text-[13px] text-orange tracking-tight h-6 flex items-center gap-3"
                        >
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                                <span>10 PRODUCTS SHIPPED</span>
                            </div>
                            <span className="text-text-2">·</span>
                            <span>2 STATES IMPACTED</span>
                            <span className="text-text-2">·</span>
                            <span>ZERO COST INFRA</span>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
                        >
                            <Link href="#work" className="btn-axiom animate-flicker">
                                See My Work
                            </Link>
                            <Link href="#contact" className="btn-axiom-ghost !text-[11px] font-mono tracking-widest uppercase text-text-2 hover:text-text-0 transition-colors">
                                Get In Touch
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}