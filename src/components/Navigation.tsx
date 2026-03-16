"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Terminal } from "lucide-react";
import Link from "next/link";

const navItems = [
    { name: "Home", href: "#", code: "0x00" },
    { name: "About", href: "#about", code: "0x01" },
    { name: "Systems", href: "#automations", code: "0x02" },
    { name: "Artifacts", href: "#work", code: "0x03" },
    { name: "Protocol", href: "#pm-layer", code: "0x04" },
    { name: "Contact", href: "#contact", code: "0x05" },
];

function DecodingText({ text, isHovered }: { text: string; isHovered: boolean }) {
    const [display, setDisplay] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";

    useEffect(() => {
        if (!isHovered) {
            setDisplay(text);
            return;
        }

        let iteration = 0;
        const interval = setInterval(() => {
            setDisplay(prev =>
                text.split("").map((c, i) => {
                    if (i < iteration) return text[i];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );
            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);
        return () => clearInterval(interval);
    }, [isHovered, text]);

    return <span>{display}</span>;
}

function NavLink({ item, isActive, auditMode }: { item: any; isActive: boolean; auditMode: boolean }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={item.href}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group relative py-2 transition-all duration-300 flex items-center gap-2 ${isActive ? "text-text-0" : "text-text-2 hover:text-text-0"}`}
        >
            {auditMode && (
                <motion.span
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 0.5, x: 0 }}
                    className="type-mono-label text-[7px] text-orange"
                >
                    {item.code}
                </motion.span>
            )}
            <span className="type-mono-label text-[10px] uppercase tracking-[0.3em] font-medium">
                <DecodingText text={item.name} isHovered={isHovered} />
            </span>
            {isActive && (
                <motion.div
                    layoutId="nav-underline-spatial"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange shadow-[0_0_10px_rgba(255,92,0,0.5)]"
                />
            )}
        </a>
    );
}

function SyncToken() {
    const [token, setToken] = useState("0x" + Math.random().toString(16).slice(2, 6).toUpperCase());

    useEffect(() => {
        const interval = setInterval(() => {
            setToken("0x" + Math.random().toString(16).slice(2, 6).toUpperCase());
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hidden sm:flex items-center gap-2 px-2 py-0.5 border-l border-border-1/30 ml-2 group/token">
            <div className="w-1 h-1 bg-teal rounded-full animate-pulse shadow-[0_0_5px_rgba(0,180,166,0.5)]" />
            <span className="type-mono-label text-[7px] text-text-2 group-hover/token:text-teal transition-colors tracking-[0.2em] font-medium">{token}</span>
        </div>
    );
}

function NavBackdrop({ isScrolled, auditMode }: { isScrolled: boolean; auditMode: boolean }) {
    return (
        <div className="absolute inset-0 pointer-events-none transition-all duration-700">
            {/* Grain Texture Overflow */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

            {/* Morphing Background */}
            <div className={`absolute inset-0 transition-all duration-700 ${isScrolled ? "glass-axiom-dark" : "bg-transparent"
                } ${auditMode ? "!bg-orange/[0.03] shadow-[inset_0_0_20px_rgba(255,92,0,0.05)]" : ""}`} />

            {/* Blueprint Grid - Only in Scrolled State for Polishing */}
            <div className={`absolute inset-0 blueprint-overlay transition-opacity duration-1000 ${isScrolled ? "opacity-[0.08]" : "opacity-0"
                }`} />
        </div>
    );
}

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const [auditMode, setAuditMode] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
            setScrollProgress(scrollPercent);
            setIsScrolled(window.scrollY > 100);

            const sections = ["about", "automations", "work", "pm-layer", "contact"];
            const scrollPos = window.scrollY + 200;

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
                    setActiveSection(section);
                    break;
                }
            }
            if (window.scrollY < 100) setActiveSection("");
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="fixed top-0 left-0 w-full z-[150] pointer-events-none flex justify-center py-6 md:py-10"
            >
                <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className={`pointer-events-auto flex items-center justify-between relative overflow-hidden transition-all duration-500 ${isScrolled
                        ? "w-[92%] lg:w-auto h-14 md:h-16 px-6 md:px-10 rounded-full border border-border-1 shadow-axiom-lg translate-y-[-10px] md:translate-y-0"
                        : "w-full h-16 md:h-20 px-8 md:px-16 bg-transparent"
                        } ${auditMode ? "border-orange/40" : ""}`}
                >
                    <NavBackdrop isScrolled={isScrolled} auditMode={auditMode} />

                    {/* Progress Tracker Layer */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-border-1/10" />
                    <motion.div
                        className="absolute bottom-0 left-0 h-[1.5px] bg-orange z-20 shadow-[0_0_10px_rgba(255,92,0,0.4)]"
                        animate={{ width: `${scrollProgress}%` }}
                        transition={{ type: "spring", stiffness: 80, damping: 15 }}
                    />

                    {/* Audit Geometry Overlays */}
                    <AnimatePresence>
                        {auditMode && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 pointer-events-none overflow-hidden"
                            >
                                <div className="w-full h-px bg-orange/10 absolute top-1/2" />
                                <div className="h-full w-px bg-orange/10 absolute left-1/2" />
                                <div className="absolute top-2 left-6 flex flex-col gap-1">
                                    <span className="type-mono-label text-[6px] text-orange/40 uppercase">System_Load: Nominal</span>
                                    <span className="type-mono-label text-[6px] text-orange/40 uppercase">Sync_Pct: {Math.round(scrollProgress)}%</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <Link href="/" className="group flex items-center relative z-10">
                        <div className="relative flex items-center gap-4">
                            <div className="relative">
                                <div className="w-2.5 h-2.5 bg-orange rounded-full animate-pulse shadow-[0_0_15px_rgba(255,107,0,0.6)]" />
                                <div className="absolute inset-0 w-2.5 h-2.5 bg-orange rounded-full blur-[4px] opacity-30 animate-ping" />
                            </div>
                            <span className="font-bold text-xs md:text-sm tracking-[0.3em] uppercase text-text-0">
                                ANVITH <span className="opacity-20 font-light ml-2 border-l border-border-1 pl-2">Portfolio</span>
                            </span>
                        </div>
                        <SyncToken />
                    </Link>

                    {/* Navigation Cluster */}
                    <div className="hidden lg:flex items-center gap-8 lg:gap-10 relative z-10 ml-12">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                item={item}
                                isActive={activeSection === item.href.substring(1) || (item.href === "#" && !activeSection)}
                                auditMode={auditMode}
                            />
                        ))}
                    </div>

                    {/* Technical Interface Controls */}
                    <div className="flex items-center gap-4 md:gap-8 relative z-10">
                        <button
                            onClick={() => setAuditMode(!auditMode)}
                            className="hidden md:flex items-center gap-3 group px-3 py-1.5 rounded-full border border-border-1/50 hover:border-orange/50 transition-all"
                        >
                            <div className={`w-7 h-3.5 rounded-full border border-border-1 relative transition-all duration-500 ${auditMode ? "bg-orange/20 border-orange shadow-[0_0_10px_rgba(255,92,0,0.2)]" : "bg-transparent"}`}>
                                <motion.div
                                    animate={{ x: auditMode ? 14 : 2 }}
                                    className={`absolute top-0.5 w-2 h-2 rounded-full transition-colors ${auditMode ? "bg-orange" : "bg-text-2 group-hover:bg-text-1"}`}
                                />
                            </div>
                            <span className="type-mono-label text-[8px] uppercase tracking-[0.3em] text-text-2 group-hover:text-text-0">
                                {auditMode ? "AUDIT_ON" : "AUDIT_OFF"}
                            </span>
                        </button>

                        <button
                            className="lg:hidden text-text-0 p-2 hover:bg-white/5 transition-colors rounded-sm"
                            onClick={() => setIsOpen(true)}
                        >
                            <Menu size={22} className="stroke-[1.5px]" />
                        </button>
                    </div>
                </motion.div>
            </motion.nav>

            {/* Mobile Interface Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[300] bg-bg-0 flex flex-col p-8 md:p-16 border-l border-border-1"
                    >
                        <div className="absolute inset-0 blueprint-overlay opacity-[0.1] pointer-events-none" />

                        <div className="relative z-10 flex justify-between items-center h-16 border-b border-border-1/30 mb-20">
                            <div className="flex items-center gap-3">
                                <Terminal size={16} className="text-orange" />
                                <span className="type-mono-label text-[10px] tracking-[0.4em] text-text-2 uppercase">Menu</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="p-3 text-text-0 hover:rotate-90 transition-transform duration-500">
                                <X size={32} className="stroke-[1px]" />
                            </button>
                        </div>

                        <div className="relative z-10 flex-1 flex flex-col gap-6 md:gap-10">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, scale: 0.9, x: -50 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    transition={{ delay: 0.15 + i * 0.04, duration: 0.6 }}
                                    onClick={() => setIsOpen(false)}
                                    className="group flex items-baseline gap-6"
                                >
                                    <span className="type-mono-label text-xs md:text-sm text-orange opacity-40 group-hover:opacity-100 transition-opacity">0{i}</span>
                                    <span className="text-5xl md:text-8xl font-bold text-text-0 tracking-tighter uppercase group-hover:shimmer-text group-hover:translate-x-8 transition-all duration-700 block">
                                        {item.name}
                                    </span>
                                </motion.a>
                            ))}
                        </div>

                        <div className="relative z-10 mt-auto pt-10 border-t border-border-1/20 flex flex-col md:flex-row justify-between items-center gap-12">
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-teal rounded-full animate-pulse shadow-[0_0_8px_rgba(0,180,166,0.4)]" />
                                <span className="type-mono-label text-[10px] text-text-2 tracking-[0.2em] uppercase">Status: System_Sovereign // 2025</span>
                            </div>
                            <div className="flex gap-10">
                                <a href="https://github.com/anvithreddy" target="_blank" className="text-text-2 hover:text-text-0 transition-all hover:scale-110">
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com/in/anvithreddy" target="_blank" className="text-text-2 hover:text-text-0 transition-all hover:scale-110">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}