"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EasterEggs() {
    const [konamiActive, setKonamiActive] = useState(false);
    const [isTenthVisit, setIsTenthVisit] = useState(false);

    useEffect(() => {
        // Konami Code: Up, Up, Down, Down, Left, Right, Left, Right, B, A
        const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
        let index = 0;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === code[index]) {
                index++;
                if (index === code.length) {
                    activateKonami();
                    index = 0;
                }
            } else {
                index = 0;
            }

            // "hire" easter egg
            if (e.key === 'h') {
                checkHireCode(e);
            }
        };

        const activateKonami = () => {
            setKonamiActive(true);
            document.documentElement.classList.add("konami-mode");
            console.log("%c protocol_shift: active ", "background: #ff6b00; color: #000; font-weight: bold;");
            setTimeout(() => {
                setKonamiActive(false);
                document.documentElement.classList.remove("konami-mode");
            }, 10000); // 10 seconds of chaos
        };

        let hireBuffer = "";
        const checkHireCode = (e: KeyboardEvent) => {
            // Very simple buffer check for "hire"
            // For production, this would be more robust
        };

        window.addEventListener("keydown", handleKeyDown);

        // Tenth Visit Logic
        const visitCount = parseInt(localStorage.getItem("portfolio_visits") || "0");
        const newCount = visitCount + 1;
        localStorage.setItem("portfolio_visits", newCount.toString());
        if (newCount === 10) {
            setIsTenthVisit(true);
        }

        // Console Message
        console.log(
            "%c Anvith Reddy Rondla %c\nLooking for the code behind the portfolio? Check src/ or type 'help' in the terminal.\n\nBuilt by Anvith Reddy Rondla.",
            "background: #00B4A6; color: #fff; padding: 4px 8px; border-radius: 4px; font-weight: bold;",
            "color: #888; font-family: monospace;"
        );

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <AnimatePresence>
                {konamiActive && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] pointer-events-none bg-accent-orange/10 flex items-center justify-center"
                    >
                        <div className="text-[10px] mono-label text-accent-orange uppercase tracking-[1em] animate-pulse">
                            AESTHETIC_SHIFT_RECOGNIZED
                        </div>
                    </motion.div>
                )}

                {isTenthVisit && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-24 left-8 z-[60] p-4 rounded-xl bg-surface border border-accent-teal/30 shadow-2xl max-w-xs"
                    >
                        <div className="text-[10px] mono-label text-accent-teal uppercase mb-2">Welcome Back!</div>
                        <p className="text-xs text-text-muted leading-relaxed">
                            This is your 10th visit. Thanks for checking back!
                        </p>
                        <button
                            onClick={() => setIsTenthVisit(false)}
                            className="mt-3 text-[9px] mono-label text-text-faint hover:text-text-primary uppercase"
                        >
                            [DISMISS]
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .konami-mode {
                    filter: invert(1) hue-rotate(180deg) contrast(1.2);
                    transition: filter 0.5s ease;
                }
                .konami-mode * {
                    cursor: crosshair !important;
                }
            `}</style>
        </>
    );
}
