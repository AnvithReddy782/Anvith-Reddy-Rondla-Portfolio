"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Search, X, Command, Zap, Folder, Terminal, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Action {
    label: string;
    description: string;
    shortcut: string;
    action: () => void;
    icon: React.ReactNode;
}

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const router = useRouter();

    const actions: Action[] = [
        {
            label: "Home",
            description: "Go back to the top.",
            shortcut: "H",
            action: () => { router.push('/'); setIsOpen(false); },
            icon: <Home size={18} />
        },
        {
            label: "My Work",
            description: "Browse projects and products.",
            shortcut: "W",
            action: () => { window.location.hash = 'work'; setIsOpen(false); },
            icon: <Folder size={18} />
        },
        {
            label: "Terminal",
            description: "Open the interactive terminal.",
            shortcut: "T",
            action: () => { window.location.hash = 'contact'; setIsOpen(false); },
            icon: <Terminal size={18} />
        },
        {
            label: "Now",
            description: "See what I'm working on right now.",
            shortcut: "N",
            action: () => { router.push('/now'); setIsOpen(false); },
            icon: <Zap size={18} />
        },
    ];

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen((open) => !open);
            }
            if (e.key === "Escape") setIsOpen(false);
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex((prev) => (prev + 1) % actions.length);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex((prev) => (prev - 1 + actions.length) % actions.length);
            } else if (e.key === "Enter") {
                e.preventDefault();
                actions[selectedIndex].action();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, selectedIndex, actions]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[1000] bg-bg-0/90 backdrop-blur-md flex flex-col items-center pt-[10%] px-6"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="w-full max-w-[640px] glass-axiom shadow-axiom-lg flex flex-col overflow-hidden"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Header Bar */}
                        <div className="h-10 bg-surface-2 backdrop-blur-md border-b border-border-1 flex items-center justify-between px-4">
                            <div className="flex items-center gap-2">
                                <Command size={14} className="text-text-2" />
                                <span className="type-mono-label text-[9px] text-text-2 uppercase">Command_Interface_V1.0</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-text-2 hover:text-text-0 transition-colors">
                                <X size={16} />
                            </button>
                        </div>

                        {/* Search Input */}
                        <div className="flex items-center gap-4 px-6 py-6 border-b border-border-1 bg-surface-1">
                            <Search size={22} className="text-text-2" />
                            <input
                                autoFocus
                                placeholder="Type a command..."
                                className="flex-1 bg-transparent border-none outline-none text-2xl font-display font-medium text-text-0 placeholder:text-text-2"
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    setSelectedIndex(0);
                                }}
                            />
                        </div>

                        {/* Actions List */}
                        <div className="flex-1 max-h-[400px] overflow-y-auto no-scrollbar py-2">
                            {actions.map((action, index) => (
                                <div
                                    key={action.label}
                                    className={`px-6 py-4 flex items-center justify-between cursor-none transition-colors ${selectedIndex === index ? 'bg-surface-2' : 'hover:bg-surface-2/50'
                                        }`}
                                    onMouseEnter={() => setSelectedIndex(index)}
                                    onClick={action.action}
                                >
                                    <div className="flex items-center gap-5">
                                        <div className={`w-10 h-10 flex items-center justify-center border ${selectedIndex === index ? 'border-orange text-orange' : 'border-border-1 text-text-2'}`}>
                                            {action.icon}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className={`text-base font-semibold uppercase tracking-tight ${selectedIndex === index ? 'text-text-0' : 'text-text-1'}`}>
                                                {action.label}
                                            </span>
                                            <span className="text-[11px] text-text-2 uppercase">{action.description}</span>
                                        </div>
                                    </div>
                                    <div className="px-2 py-1 bg-bg-0 border border-border-1 rounded font-mono text-[10px] text-text-2 uppercase">
                                        {action.shortcut}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer Help */}
                        <div className="p-4 bg-surface-2 border-t border-border-1 flex justify-between">
                            <div className="flex gap-4">
                                <span className="type-mono-label text-[8px] text-text-2">↑↓ NAVIGATE</span>
                                <span className="type-mono-label text-[8px] text-text-2">↵ EXECUTE</span>
                            </div>
                            <span className="type-mono-label text-[8px] text-axiom-teal">SYSTEM_STATUS: NOMINAL</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}