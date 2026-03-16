"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="py-16 md:py-24 border-t border-border-1 bg-bg-0 relative overflow-hidden">
            {/* Background Blueprint/Dot Blend */}
            <div className="absolute inset-0 blueprint-overlay pointer-events-none opacity-[0.2]" />
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="container-axiom relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">

                    {/* Left: Name & Version */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="text-base font-bold tracking-tighter uppercase text-text-0">Anvith Reddy Rondla</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_8px_rgba(0,180,166,0.5)]" />
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="type-mono-label text-[9px] text-text-2 uppercase tracking-[0.2em] font-medium">Portfolio // v1.2</span>
                            <span className="technical-tag !static border-teal/20 text-teal/80">ONLINE</span>
                        </div>
                    </div>

                    {/* Center: Socials with technical wrap */}
                    <div className="flex items-center gap-10">
                        <a href="https://github.com/anvithreddy" target="_blank" className="text-text-2 hover:text-text-0 transition-all hover:-translate-y-1 duration-300">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/anvithreddy" target="_blank" className="text-text-2 hover:text-text-0 transition-all hover:-translate-y-1 duration-300">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:anvithreddy.r@gmail.com" className="text-text-2 hover:text-text-0 transition-all hover:-translate-y-1 duration-300">
                            <Mail size={20} />
                        </a>
                    </div>

                    {/* Right: Back to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 group"
                    >
                        <span className="type-mono-label text-[10px] text-text-2 uppercase tracking-[0.3em] group-hover:text-text-0 transition-colors">Back to Top</span>
                        <div className="w-10 h-10 border border-border-1 flex items-center justify-center group-hover:border-teal transition-all group-hover:shadow-[0_0_15px_rgba(0,180,166,0.1)]">
                            <ArrowUp size={16} className="text-text-2 group-hover:text-teal group-hover:scale-110 transition-all" />
                        </div>
                    </motion.button>

                </div>

                {/* Final Decal Strip */}
                <div className="mt-16 md:mt-24 pt-10 border-t border-border-1/40 flex flex-col md:flex-row justify-between items-center gap-8 text-[8px] type-mono-label text-text-2 uppercase tracking-[0.4em] opacity-60">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                        <span className="hover:text-teal transition-colors">Built Solo</span>
                        <span className="opacity-20 hidden md:block">|</span>
                        <span className="hover:text-teal transition-colors">Docs First</span>
                        <span className="opacity-20 hidden md:block">|</span>
                        <span className="hover:text-teal transition-colors">Always Shipping</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="w-1 h-1 bg-orange rounded-full animate-pulse" />
                        © 2025 Anvith Reddy Rondla. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
