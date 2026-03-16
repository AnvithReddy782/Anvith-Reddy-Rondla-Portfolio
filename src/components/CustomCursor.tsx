"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
    const [context, setContext] = useState<"default" | "link" | "card" | "drag" | "terminal">("default");
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Weighted lag for the ring using framer-motion springs
    const springConfig = { damping: 28, stiffness: 400, mass: 0.2 };
    const ringX = useSpring(-100, springConfig);
    const ringY = useSpring(-100, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            setMousePos({ x: clientX, y: clientY });
            ringX.set(clientX);
            ringY.set(clientY);
            if (!isVisible) setIsVisible(true);

            // Context detection
            const target = e.target as HTMLElement;
            const isClickable = target.closest('a, button, [role="button"]');
            const isCard = target.closest('.project-card, .experiment-card, [data-cursor="card"]');
            const isDraggable = target.closest('[draggable="true"], .draggable, [data-cursor="drag"]');
            const isTerminal = target.closest('.terminal-window, [data-cursor="terminal"]');

            if (isClickable) setContext("link");
            else if (isDraggable) setContext("drag");
            else if (isCard) setContext("card");
            else if (isTerminal) setContext("terminal");
            else setContext("default");
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [isVisible, ringX, ringY]);

    if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
        return null;
    }

    return (
        <div className="fixed inset-0 pointer-events-none z-[99999]">
            <AnimatePresence>
                {isVisible && (
                    <>
                        {/* THE DOT - Zero Lag */}
                        <motion.div
                            className="fixed top-0 left-0 w-2 h-2 bg-axiom-orange rounded-full mix-blend-normal"
                            style={{
                                x: mousePos.x - 4,
                                y: mousePos.y - 4,
                            }}
                            animate={{
                                scale: (context === "link" || context === "drag" || context === "terminal") ? 0 : (isClicking ? 0.5 : 1),
                                opacity: (context === "link" || context === "drag" || context === "terminal") ? 0 : 1
                            }}
                            transition={{ duration: 0.2 }}
                        />

                        {/* THE RING - Lagged */}
                        <motion.div
                            className="fixed top-0 left-0 flex items-center justify-center pointer-events-none"
                            style={{
                                x: ringX,
                                y: ringY,
                                translateX: "-50%",
                                translateY: "-50%"
                            }}
                            animate={{
                                width: context === "link" ? 48 : (context === "card" ? 44 : (context === "drag" ? 56 : (isClicking ? 24 : 32))),
                                height: context === "link" ? 48 : (context === "card" ? 44 : (context === "drag" ? 40 : (isClicking ? 24 : 32))),
                                borderRadius: context === "drag" ? "8px" : "50%",
                                borderColor: (context === "link" || context === "drag") ? "var(--orange)" : (context === "card" ? "rgba(242, 237, 228, 0.20)" : "rgba(242, 237, 228, 0.40)"),
                                borderWidth: context === "terminal" ? 0 : 1.5,
                                backgroundColor: context === "terminal" ? "transparent" : "transparent"
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            {/* Ring Label */}
                            <AnimatePresence mode="wait">
                                {context === "link" && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-[9px] font-mono tracking-[0.08em] text-text-0 whitespace-nowrap"
                                    >
                                        OPEN ↗
                                    </motion.span>
                                )}
                                {context === "drag" && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-[9px] font-mono tracking-[0.08em] text-text-0 whitespace-nowrap"
                                    >
                                        DRAG
                                    </motion.span>
                                )}
                                {context === "terminal" && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="w-[2px] h-4 bg-axiom-orange animate-pulse"
                                    />
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Base Ring Layer for better border visibility */}
                        <motion.div
                            className="fixed top-0 left-0 border border-white/5 rounded-full"
                            style={{
                                x: ringX,
                                y: ringY,
                                translateX: "-50%",
                                translateY: "-50%",
                                width: 32,
                                height: 32,
                                opacity: context === "default" ? 1 : 0
                            }}
                        />
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}