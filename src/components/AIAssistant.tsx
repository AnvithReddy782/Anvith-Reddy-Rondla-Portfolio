"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

const STARTER_PROMPTS = [
    "Why were you promoted in two months?",
    "Tell me about a product you built.",
    "What is DPMUMS?",
    "Why do you document before you build?",
    "What tools do you use?"
];

export default function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
        { role: 'assistant', content: "Hi! I'm Anvith's portfolio assistant. Ask me anything about his work, products, or approach." }
    ]);
    const [input, setInput] = useState("");

    const handleSend = (text: string) => {
        if (!text.trim()) return;
        const userMsg = { role: 'user' as const, content: text };
        setMessages(prev => [...prev, userMsg]);
        setInput("");

        setTimeout(() => {
            const assistantMsg = { role: 'assistant' as const, content: "Thanks for asking! This is a demo of the conversational interface. In the full version, this would connect to an AI backend with knowledge about Anvith's work." };
            setMessages(prev => [...prev, assistantMsg]);
        }, 600);
    };

    return (
        <>
            <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-10 right-10 w-16 h-16 rounded-full bg-teal flex items-center justify-center z-50 group border border-teal-border shadow-[0_0_20px_rgba(0,180,166,0.3)]"
            >
                <MessageSquare className="text-bg-0" size={28} />
                {/* Notification Badge */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange rounded-full border-2 border-bg-0 animate-ping" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 40 }}
                        className="fixed bottom-32 right-10 w-[calc(100vw-3rem)] md:w-[420px] h-[600px] max-h-[calc(100vh-14rem)] glass-axiom-dark border border-border-1 shadow-axiom-lg z-50 flex flex-col overflow-hidden corner-brackets"
                    >
                        {/* Blueprint Background */}
                        <div className="absolute inset-0 blueprint-overlay opacity-[0.05] pointer-events-none" />

                        <div className="h-12 bg-surface-3/80 backdrop-blur-xl border-b border-border-1 flex items-center justify-between px-6 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                                <span className="type-mono-label text-[10px] text-text-0 tracking-[0.2em]">CORE_SYSTEM_PROXY</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="p-2 text-text-2 hover:text-orange transition-all hover:rotate-90">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar relative z-10 custom-terminal-scroll">
                            {/* CRT Scanline */}
                            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(255,255,255,0.02)_50%)] bg-[length:100%_4px] opacity-10" />

                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} relative z-10`}
                                >
                                    <div className={`max-w-[90%] p-5 border text-[13px] font-mono leading-relaxed ${msg.role === 'user'
                                        ? 'bg-teal-dim border-teal/40 text-text-0 text-right'
                                        : 'bg-white/5 border-border-1 text-text-1'
                                        }`}>
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}

                            {messages.length === 1 && (
                                <div className="space-y-4 pt-6 relative z-10 border-t border-border-1/30">
                                    <div className="flex items-center gap-3 px-1 mb-2">
                                        <div className="h-px bg-orange flex-1 opacity-40" />
                                        <span className="type-mono-label text-[8px] text-text-2 uppercase tracking-widest px-2">Diagnostic_Options</span>
                                        <div className="h-px bg-orange flex-1 opacity-40" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {STARTER_PROMPTS.map((prompt) => (
                                            <button
                                                key={prompt}
                                                onClick={() => handleSend(prompt)}
                                                className="text-left text-[11px] p-4 bg-surface-2 border border-border-1 hover:border-teal/50 hover:bg-teal/5 transition-all text-text-1 hover:text-text-0 font-mono tracking-tight"
                                            >
                                                {`_> EXECUTE: ${prompt}`}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <form
                            onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                            className="p-6 border-t border-border-1 bg-surface-3/50 relative z-10"
                        >
                            <div className="relative flex items-center gap-4 bg-bg-0/50 border border-border-1 px-4 py-3">
                                <span className="type-mono-label text-teal animate-pulse">?</span>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Input signal..."
                                    className="flex-1 bg-transparent text-[13px] font-mono outline-none text-text-0 placeholder:text-text-2 tracking-tight"
                                />
                                <button type="submit" className="text-teal hover:text-orange transition-colors">
                                    <Send size={18} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}