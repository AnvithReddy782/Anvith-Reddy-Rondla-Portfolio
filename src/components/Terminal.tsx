"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, MapPin, Send } from "lucide-react";

const COMMANDS: Record<string, any> = {
    help: {
        output: `Available commands:
  help      →  lists all commands
  email     →  copies email to clipboard
  linkedin  →  opens LinkedIn profile
  github    →  opens GitHub profile
  hire      →  opens contact protocol
  projects  →  lists all 10 products with status
  clear     →  clears terminal output

Revealing Character:
  whoami    →  where I'm going and why
  promoted  →  the real story of December 2024
  tools     →  honest position on using AI`,
    },
    email: {
        output: "Email: anvithreddy.r@gmail.com (Copied to clipboard)",
        action: () => navigator.clipboard.writeText("anvithreddy.r@gmail.com")
    },
    linkedin: {
        output: "Opening LinkedIn profile...",
        action: () => window.open("https://linkedin.com/in/anvithreddy", "_blank")
    },
    github: {
        output: "Opening GitHub profile...",
        action: () => window.open("https://github.com/anvithreddy", "_blank")
    },
    projects: {
        output: `TOTAL_PRODUCTS: 10
  1. DPMUMS          →  PRODUCTION (152 users)
  2. Field Reporter  →  PRODUCTION (8 districts)
  3. Annapurna       →  FUNCTIONAL
  4. DOC AI          →  TESTING
  5. Vantage OS      →  REWRITE
  6. Reports Auto    →  ACTIVE
  ... and 4 others.`,
    },
    whoami: {
        output: "I build systems that turn messy, manual workflows into something that runs itself. Moving towards product leadership where building ability drives strategy.",
    },
    promoted: {
        output: "December 2024. Hired as a developer. Saw a broken manual process. Built an automation without being asked. Saved 300+ hours. Got promoted in two months.",
    },
    tools: {
        output: "I use AI to move faster, not to skip thinking. It handles the repetitive 80% so I can focus on the 20% that actually matters.",
    }
};

export default function Terminal() {
    const [history, setHistory] = useState<{ cmd: string, out: string }[]>([
        { cmd: "", out: "Welcome! Type 'help' to see available commands." }
    ]);
    const [input, setInput] = useState("");
    const terminalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.toLowerCase().trim();
        let output = "";

        if (cmd === "clear") {
            setHistory([]);
            setInput("");
            return;
        }

        if (COMMANDS[cmd]) {
            output = COMMANDS[cmd].output;
            if (COMMANDS[cmd].action) COMMANDS[cmd].action();
        } else if (cmd !== "") {
            output = `Command error: '${cmd}' not recognized.`;
        }

        if (cmd) {
            setHistory([...history, { cmd: input, out: output }]);
        }
        setInput("");
    };

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    return (
        <div
            className="w-full glass-axiom-dark shadow-axiom-lg overflow-hidden corner-brackets group flex flex-col min-h-[440px] relative"
            onClick={() => inputRef.current?.focus()}
            data-cursor="terminal"
        >
            {/* CRT Glass Distortion Overlay */}
            <div className="absolute inset-0 pointer-events-none z-50 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] opacity-40 mix-blend-overlay" />

            {/* Scanning Animation */}
            <div className="absolute inset-0 pointer-events-none z-40 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.02)_50%,transparent_51%)] bg-[length:100%_4px] animate-scanline opacity-[0.15]" />

            {/* Header */}
            <div className="h-10 bg-surface-2/80 backdrop-blur-md border-b border-border-1 flex items-center justify-between px-4 relative z-10">
                <div className="flex items-center gap-4">
                    <div className="flex gap-1.5 px-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-border-3/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-border-2/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-orange/40" />
                    </div>
                    <span className="type-mono-label text-[9px] text-text-2 uppercase tracking-[0.2em] pt-0.5">Terminal</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                    <span className="text-[8px] font-mono text-teal opacity-80 uppercase tracking-widest">ONLINE</span>
                </div>
            </div>

            {/* Body */}
            <div ref={terminalRef} className="h-[400px] p-8 font-mono text-sm overflow-y-auto no-scrollbar relative z-10 custom-terminal-scroll">
                <div className="space-y-6">
                    {history.map((entry, i) => (
                        <div key={i} className="space-y-1">
                            {entry.cmd && (
                                <div className="flex items-center gap-3">
                                    <span className="text-teal text-xs">➜</span>
                                    <span className="text-xs uppercase tracking-widest font-bold text-teal">guest@anvith</span>
                                    <span className="text-text-0 font-medium">{entry.cmd}</span>
                                </div>
                            )}
                            <div className="text-text-1 whitespace-pre-wrap leading-relaxed opacity-90 text-sm">
                                {entry.out}
                            </div>
                        </div>
                    ))}

                    <form onSubmit={handleCommand} className="flex items-center gap-3 group/input">
                        <span className="text-teal text-xs">➜</span>
                        <span className="text-xs uppercase tracking-widest font-bold text-teal">guest@anvith</span>
                        <span className="text-text-2 animate-pulse mt-0.5">_</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="bg-transparent border-none outline-none flex-1 text-text-0 caret-orange text-sm"
                            autoFocus
                            spellCheck={false}
                            placeholder="Type 'help'..."
                        />
                    </form>
                </div>
            </div>

            {/* Footer */}
            <div className="h-10 bg-surface-2/60 border-t border-border-1 flex items-center px-6 justify-between relative z-10">
                <div className="text-[9px] font-mono text-text-2 uppercase tracking-widest">
                    ENCODE: UTF-8 // SESSION_SECURE
                </div>
                <div className="text-[9px] font-mono text-text-2 uppercase tracking-widest">
                    LATENCY: 12ms
                </div>
            </div>
        </div>
    );
}
