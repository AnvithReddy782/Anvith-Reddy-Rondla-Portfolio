"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Terminal as TerminalIcon } from "lucide-react";
import Terminal from "./Terminal";

const contactLinks = [
    { label: "Email", value: "anvithreddy.r@gmail.com", icon: Mail, href: "mailto:anvithreddy.r@gmail.com" },
    { label: "LinkedIn", value: "anvithreddy", icon: Linkedin, href: "https://linkedin.com/in/anvithreddy" },
    { label: "GitHub", value: "anvithreddy", icon: Github, href: "https://github.com/anvithreddy" }
];

export default function ContactSection() {
    return (
        <section id="contact" className="unified-section relative overflow-hidden">
            {/* Blueprint Grid Overlay */}
            <div className="absolute inset-0 blueprint-overlay pointer-events-none opacity-[0.2]" />

            <div className="container-axiom relative z-10">
                <div className="grid-axiom-unified items-center">

                    {/* Left Column: 42% */}
                    <div className="space-y-12 lg:pr-12">
                        <div className="space-y-4">
                            <span className="section-overline">04 // CONTACT</span>
                            <h2 className="uppercase text-text-0">Let's <br />Connect.</h2>
                        </div>
                        <p className="text-sm text-text-1 max-w-[36ch] leading-relaxed">
                            I'm always open to new conversations. Drop me a message or try the terminal on the right.
                        </p>

                        <div className="flex flex-col gap-3 max-w-[300px]">
                            {contactLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-axiom-ghost !justify-start gap-4 px-6 py-4 group glass-axiom border-border-1 hover:border-orange/40 transition-all duration-300"
                                >
                                    <link.icon size={16} className="text-text-2 group-hover:text-orange transition-colors shrink-0" />
                                    <div className="flex flex-col items-start translate-y-[1px]">
                                        <span className="type-mono-label text-[8px] text-text-2 opacity-60 uppercase">{link.label}</span>
                                        <span className="text-xs font-medium text-text-0 leading-none">{link.value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="p-6 bg-orange/5 border border-orange/10 rounded-lg corner-brackets group max-w-[300px]">
                            <div className="flex items-center gap-3 mb-2 relative">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
                                <span className="type-mono-label text-[9px] text-text-0">Open to Opportunities</span>
                                <span className="technical-tag -top-8 -right-4">LIVE_STATUS</span>
                            </div>
                            <p className="text-[12px] text-text-1 leading-relaxed">
                                Looking for Product Manager roles where I can build, automate, and ship. Ready to start.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: 58% - The Terminal */}
                    <div className="relative group">
                        {/* Technical Tags */}
                        <span className="technical-tag -top-4 right-0 z-20">TTY_CHANNEL: SECURE</span>

                        <div className="relative">
                            <Terminal />

                            {/* Visual Guide Line Extension */}
                            <div className="absolute -right-8 top-0 bottom-0 w-px bg-border-1 hidden xl:block opacity-30" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}