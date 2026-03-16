"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Globe, Database, Terminal, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { ProjectData } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";

interface CaseStudyUIProps {
    project: ProjectData;
}

export default function CaseStudyUI({ project }: CaseStudyUIProps) {
    const { title, category, stack, metrics, story, soloBuild, zeroCost } = project.frontmatter;

    return (
        <article className="min-h-screen bg-background text-text-primary pt-32 pb-48">
            <div className="container-custom">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link
                        href="/#work"
                        className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] mono-label uppercase tracking-widest">Back to Evidence</span>
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Sticky Sidebar Info */}
                    <aside className="lg:col-span-4 space-y-12">
                        <div className="sticky top-32 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-4"
                            >
                                <span className="text-xs mono-label text-accent-teal uppercase tracking-widest">{category}</span>
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">{title}</h1>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="space-y-8"
                            >
                                <div className="p-6 rounded-2xl border border-white/5 bg-surface/50 space-y-6">
                                    <div>
                                        <span className="text-[9px] mono-label text-text-faint uppercase block mb-3">SYSTEM_IMPACT</span>
                                        <p className="text-xl font-display font-medium text-accent-teal">{metrics}</p>
                                    </div>

                                    {zeroCost && (
                                        <div className="pt-6 border-t border-white/5">
                                            <span className="text-[9px] mono-label text-accent-orange uppercase block mb-2">COST_INTEGRITY</span>
                                            <p className="text-sm font-medium text-accent-orange">ARCHITECTED AT ₹0 COST</p>
                                        </div>
                                    )}

                                    {soloBuild && (
                                        <div className="pt-6 border-t border-white/5">
                                            <span className="text-[9px] mono-label text-text-faint uppercase block mb-2">WORKLOAD_REF</span>
                                            <p className="text-sm font-medium text-text-primary uppercase">Solo-Build Protocol</p>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <span className="text-[9px] mono-label text-text-faint uppercase block px-1">TECHNICAL_STACK</span>
                                    <div className="flex flex-wrap gap-2">
                                        {stack.map((item) => (
                                            <span key={item} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] mono-label">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="lg:col-span-8 space-y-24">
                        {/* The Narrative Block */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-12"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-accent-violet/10 flex items-center justify-center text-accent-violet">
                                    <Terminal size={18} />
                                </div>
                                <span className="mono-label text-xs text-accent-violet uppercase">Internal Log // The Narrative</span>
                            </div>

                            <div className="text-xl md:text-2xl text-text-muted leading-relaxed font-light italic border-l-2 border-accent-violet/20 pl-8">
                                &quot;{story}&quot;
                            </div>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-surface/30 rounded-3xl border border-white/5 p-8 md:p-12"
                        >
                            <div className="flex items-center gap-4 mb-12">
                                <Database size={18} className="text-text-faint" />
                                <span className="mono-label text-xs text-text-faint uppercase">Raw Protocol Documentation</span>
                            </div>

                            <div className="prose prose-invert prose-axiom max-w-none">
                                <MDXRemote source={project.content} />
                            </div>
                        </motion.section>
                    </main>
                </div>
            </div>
        </article>
    );
}
