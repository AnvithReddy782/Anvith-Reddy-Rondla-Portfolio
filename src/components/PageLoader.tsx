"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LOG = [
    "Loading portfolio...",
    "Connecting to services...",
    "Preparing interface...",
    "Loading projects...",
    "Almost ready...",
    "Ready."
];

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [visibleLogs, setVisibleLogs] = useState<string[]>([]);

    useEffect(() => {
        let currentLogIndex = 0;
        const logInterval = setInterval(() => {
            if (currentLogIndex < BOOT_LOG.length) {
                setVisibleLogs(prev => [...prev, BOOT_LOG[currentLogIndex]]);
                currentLogIndex++;
            } else {
                clearInterval(logInterval);
                setTimeout(() => setIsLoading(false), 1200);
            }
        }, 250);

        return () => clearInterval(logInterval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[99999] bg-bg-0 flex flex-col items-center justify-center overflow-hidden"
                >
                    <div className="w-full max-w-[400px] px-8">
                        <div className="mb-12">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-text-0 tracking-tight uppercase">
                                Anvith Reddy <span className="text-orange">Portfolio</span>
                            </h2>
                            <div className="h-[1px] w-full bg-border-1 mt-2 overflow-hidden relative">
                                <motion.div
                                    className="absolute inset-0 bg-orange"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5 font-mono text-[10px] text-text-2 uppercase tracking-wider">
                            {visibleLogs.map((log, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -4 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex items-center gap-3"
                                >
                                    <span className={i === visibleLogs.length - 1 ? "text-orange" : "text-axiom-teal"}>
                                        {i === visibleLogs.length - 1 ? ">" : "✓"}
                                    </span>
                                    <span>{log}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Branding Decal */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                        <span className="type-mono-label text-[8px] text-text-2 opacity-30">anvithreddy.com</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}