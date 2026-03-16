"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Search } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 max-w-md w-full space-y-12">
                {/* Simulated Map UI */}
                <div className="aspect-square w-full bg-surface border border-white/5 rounded-3xl relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-20"
                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #888 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                    {/* Pulsing Orange Marker */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                        <div className="w-12 h-12 rounded-full bg-accent-orange/20 border border-accent-orange/50 flex items-center justify-center">
                            <MapPin className="text-accent-orange" size={24} />
                        </div>
                    </motion.div>

                    {/* Scanning Line */}
                    <motion.div
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                        className="absolute left-0 right-0 h-px bg-accent-teal/30 z-20"
                    />

                    <div className="absolute top-6 left-6 text-[10px] mono-label text-text-faint uppercase font-bold text-left space-y-1">
                        <div>SEARCH_QUERY: INVALID_URL</div>
                        <div>COORD: 40.4_NOT_FOUND</div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h1 className="text-3xl font-display font-medium text-text-primary uppercase tracking-tight">
                        No infrastructure found.
                    </h1>
                    <p className="text-text-muted text-sm leading-relaxed max-w-xs mx-auto font-light">
                        The protocol returned an empty set at this coordinate. No OLT or ONT active in this directory.
                    </p>
                </div>

                <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-orange text-background font-bold uppercase text-[10px] tracking-widest hover:scale-105 transition-transform group">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Return to Base
                </Link>
            </div>

            {/* Faint log entries in background */}
            <div className="absolute bottom-12 left-12 text-[10px] mono-label text-text-faint/20 text-left hidden lg:block uppercase font-bold space-y-1">
                <div>[ERROR] PROTOCOL_FAILURE</div>
                <div>[WARN] RESOURCE_LOCATOR_MISMATCH</div>
                <div>[INFO] REDIRECT_SUGGESTED</div>
            </div>
        </main>
    );
}
