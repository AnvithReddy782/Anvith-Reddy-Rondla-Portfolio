"use strict";

"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FadeInUp from "../../components/FadeInUp";
import { Mail, Clock, Send, Sparkles, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] transition-colors duration-300 flex flex-col">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 space-y-12">
        {/* Intro */}
        <FadeInUp>
          <div className="space-y-4 max-w-xl">
            <div className="text-[10px] font-bold tracking-widest text-[var(--color-text-muted)] font-mono uppercase">
              Let's connect
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-text)]">
              Say Hi! Let's <span className="font-serif italic text-[var(--color-accent)] font-normal">Talk.</span>
            </h1>
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Please use the form below to submit details regarding your project, collaboration, or inquiry, and I will get back to you as soon as possible.
            </p>
          </div>
        </FadeInUp>

        {/* Layout Grid: Form (Left) vs Sidebar info (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Form Column (2 Cols) */}
          <div className="md:col-span-2">
            <FadeInUp delay={0.05}>
              <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-3xl p-8 shadow-sm hover:border-[var(--color-border-hover)] transition-all duration-300">
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                    <CheckCircle2 className="h-14 w-14 text-[var(--color-signal)]" />
                    <h3 className="font-heading text-xl font-bold text-[var(--color-text)]">Message Sent!</h3>
                    <p className="text-xs text-[var(--color-text-secondary)] max-w-xs leading-relaxed">
                      Thanks for reaching out, {formData.name}. I usually reply within a few hours. Speak soon!
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: "", email: "", message: "" });
                      }}
                      className="rounded-full border border-[var(--color-border)] px-5 py-2 text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors mt-4 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-[10px] font-bold font-mono uppercase text-[var(--color-text-muted)]">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your name"
                          className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-xs text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-text-muted)] transition-colors font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-[10px] font-bold font-mono uppercase text-[var(--color-text-muted)]">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter your email"
                          className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-xs text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-text-muted)] transition-colors font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-[10px] font-bold font-mono uppercase text-[var(--color-text-muted)]">
                        What are you reaching out for?
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your project, timeline, or job details..."
                        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-xs text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-text-muted)] transition-colors font-medium resize-none text-[var(--color-text)]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black px-6 py-3.5 text-xs font-bold hover:opacity-90 transition-opacity duration-200 shadow-sm cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </FadeInUp>
          </div>

          {/* Direct contact info sidebar (1 col) */}
          <div className="space-y-6">
            
            {/* Direct shoot */}
            <FadeInUp delay={0.1}>
              <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-2xl p-5 space-y-3 shadow-sm hover:border-[var(--color-border-hover)] transition-all duration-300">
                <h3 className="text-[10px] font-bold tracking-widest text-[var(--color-text-muted)] font-mono uppercase border-b border-[var(--color-border)] pb-2 flex items-center gap-1.5">
                  <Mail className="h-4 w-4" />
                  <span>Shoot Directly</span>
                </h3>
                <div className="space-y-2 text-xs">
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    Prefer direct emails over filling forms? Drop a brief line anytime.
                  </p>
                  <a
                    href="mailto:harinikumarwork@gmail.com"
                    className="block font-mono text-[11px] font-bold text-[var(--color-accent)] hover:underline"
                  >
                    harinikumarwork@gmail.com
                  </a>
                </div>
              </div>
            </FadeInUp>

            {/* Status indicators */}
            <FadeInUp delay={0.15}>
              <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-2xl p-5 space-y-4 shadow-sm hover:border-[var(--color-border-hover)] transition-all duration-300">
                <h3 className="text-[10px] font-bold tracking-widest text-[var(--color-text-muted)] font-mono uppercase border-b border-[var(--color-border)] pb-2">
                  Availability Status
                </h3>
                <div className="space-y-3.5 text-xs font-semibold">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--color-text-muted)] font-mono text-[10px]">STATUS</span>
                    <span className="inline-flex items-center gap-1 text-[var(--color-signal)]">
                      <Sparkles className="h-3 w-3 animate-pulse" />
                      <span>Open to work</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--color-text-muted)] font-mono text-[10px]">BASED IN</span>
                    <span className="text-[var(--color-text)]">Bangalore, India</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--color-text-muted)] font-mono text-[10px]">TIMEZONE</span>
                    <span className="text-[var(--color-text)] flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-[var(--color-text-muted)]" />
                      <span>IST • UTC +5:30</span>
                    </span>
                  </div>
                </div>
              </div>
            </FadeInUp>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
