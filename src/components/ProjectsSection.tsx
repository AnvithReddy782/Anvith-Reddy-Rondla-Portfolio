"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectData } from "@/lib/content";

interface ProjectsProps {
    projects: ProjectData[];
}

export default function ProjectsSection({ projects }: ProjectsProps) {
    const tier1 = projects.filter(p => p.frontmatter.tier === 1);
    const tier2 = projects.filter(p => p.frontmatter.tier === 2);

    return (
        <section id="work" className="unified-section relative overflow-hidden">
            {/* Visual Guide Line */}
            <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-border-1 hidden xl:block opacity-50" />

            <div className="container-axiom relative z-10">
                {/* Section Header: Unified Split */}
                <header className="grid-axiom-unified mb-24 pb-12 border-b border-border-1">
                    <div className="space-y-4">
                        <span className="section-overline">02 // MY WORK</span>
                        <h2 className="uppercase text-text-0">Products I've <br />Shipped.</h2>
                    </div>
                    <div className="lg:pl-12 lg:pt-8">
                        <div className="relative group inline-block">
                            <span className="type-mono-label text-orange mb-2 block">FLAGSHIP PRODUCTS</span>
                            <span className="technical-tag -top-4 -right-12">DECK_LOADED</span>
                        </div>
                        <p className="text-sm text-text-1 max-w-[40ch] mt-4 leading-relaxed">
                            Real products solving real problems. From idea to documentation to live deployment—each one built end to end.
                        </p>
                    </div>
                </header>

                {/* Tier 1 Grid: Core Architecture (2-col) */}
                <div className="mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {tier1.map((project) => (
                            <ProductCard key={project.slug} project={project} tier={1} />
                        ))}
                    </div>
                </div>

                {/* Tier 2 Grid: Tooling & Experiments (3-col) */}
                <div className="pt-24 border-t border-border-1 relative">
                    <span className="technical-tag -top-3 left-0">SIDE PROJECTS & EXPERIMENTS</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tier2.map((project) => (
                            <ProductCard key={project.slug} project={project} tier={2} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProductCard({ project, tier }: { project: ProjectData, tier: 1 | 2 }) {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            className={`group glass-axiom transition-all duration-500 flex flex-col relative corner-brackets ${tier === 1 ? 'min-h-[520px]' : 'min-h-[400px]'
                }`}
            data-cursor="card"
        >
            {/* Technical Tags */}
            <span className="technical-tag top-4 right-4 z-20">PRD_REF: {project.slug.substring(0, 2).toUpperCase()}.24</span>

            {/* Dynamic Glow Layer */}
            <div className="absolute -inset-[2px] bg-gradient-to-tr from-orange/15 via-transparent to-teal/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* 16/9 Media Section */}
            <div className="aspect-[16/9] bg-bg-0/60 relative overflow-hidden border-b border-border-1">
                {/* Cinematic Fragment Simulation */}
                <div className="absolute inset-0 bg-gradient-to-br from-surface-3/30 to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0.1 }}
                        whileHover={{ opacity: 0.25, scale: 1.05 }}
                        className="w-[85%] aspect-video border border-text-1/30 rotate-[-1deg] transition-all duration-700"
                    />
                    <motion.div
                        initial={{ opacity: 0.1, rotate: 12 }}
                        whileHover={{ opacity: 0.4, rotate: 15, x: 8, y: -4 }}
                        className="absolute w-[45%] aspect-square border border-orange/40 transition-all duration-700"
                    />
                </div>

                {/* Float Category */}
                <div className="absolute bottom-4 left-4">
                    <span className="type-mono-label text-[8px] glass-axiom px-2 py-1 text-text-0 opacity-90 border-border-1">
                        {project.frontmatter.category}
                    </span>
                </div>
            </div>

            {/* Content: 32px Padding for high-end feel */}
            <div className="p-8 flex-1 flex flex-col justify-between relative z-10">
                <div className="space-y-6">
                    <div className="flex justify-between items-start gap-4">
                        <h3 className="text-xl md:text-2xl font-semibold uppercase group-hover:shimmer-text tracking-tight transition-all duration-500">
                            {project.frontmatter.title}
                        </h3>
                        <ArrowUpRight size={20} className="text-text-2 group-hover:text-orange transition-colors shrink-0" />
                    </div>

                    <p className="text-sm text-text-1 line-clamp-3 leading-relaxed opacity-80">
                        {project.frontmatter.story}
                    </p>
                </div>

                <div className="pt-8 mt-6 border-t border-border-1 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="type-mono-label text-[8px] text-text-2 lowercase mb-1 opacity-60">Key Result</span>
                        <span className="text-sm font-mono text-orange font-semibold uppercase tracking-tight tabular-nums">{project.frontmatter.metrics}</span>
                    </div>
                    <Link
                        href={`/products/${project.slug}`}
                        className="btn-axiom-ghost !px-4 !py-2 !text-[10px] border border-border-1 hover:border-orange/60 uppercase tracking-widest text-text-0 transition-all group-hover:bg-white/5"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}