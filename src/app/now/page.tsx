import { getGlobalData } from '@/lib/content';
import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen, Lightbulb, Zap } from 'lucide-react';

export default function NowPage() {
    const status = getGlobalData('status');

    if (!status) {
        return (
            <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
                <div className="text-[10px] mono-label text-accent-orange uppercase tracking-widest mb-4">PROTOCOL_ERROR: STATUS_DATA_MISSING</div>
                <Link href="/" className="text-text-faint hover:text-text-primary transition-colors uppercase text-[10px] mono-label">Return to Base</Link>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background pt-32 pb-24 px-6 lg:px-12 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-teal/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="container-custom relative z-10">
                <Link href="/" className="inline-flex items-center gap-2 text-[10px] mono-label text-text-faint uppercase tracking-[0.2em] hover:text-text-primary transition-colors mb-16 group">
                    <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                    Return to Base
                </Link>

                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-teal/20 bg-accent-teal/5 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse" />
                        <span className="text-[10px] mono-label text-accent-teal uppercase tracking-widest">LIVE_STATUS_PROTOCOL</span>
                    </div>

                    <h1 className="text-6xl md:text-[120px] font-bold tracking-tighter leading-[0.85] mb-24">
                        What I'm <br />
                        <span className="italic font-light text-text-muted">Doing Now.</span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-12">
                            {/* Building */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-[10px] mono-label text-accent-teal uppercase tracking-[0.2em]">
                                    <Zap size={14} />
                                    Building
                                </div>
                                <p className="text-xl md:text-3xl font-display font-medium text-text-primary leading-tight">
                                    {status.building || "System Refinements"}
                                </p>
                            </div>

                            {/* Reading */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-[10px] mono-label text-text-muted uppercase tracking-[0.2em]">
                                    <BookOpen size={14} />
                                    Reading
                                </div>
                                <p className="text-xl md:text-3xl font-display font-medium text-text-primary leading-tight lowercase italic">
                                    {status.reading || "Building the Future"}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-12">
                            {/* Thinking */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-[10px] mono-label text-text-muted uppercase tracking-[0.2em]">
                                    <Lightbulb size={14} />
                                    Thinking
                                </div>
                                <p className="text-xl md:text-3xl font-display font-medium text-text-primary leading-tight">
                                    {status.thinking || "AI Autonomy"}
                                </p>
                            </div>

                            {/* Meta */}
                            <div className="pt-12 border-t border-white/5 space-y-6">
                                <div className="flex justify-between items-center text-[10px] mono-label text-text-faint uppercase tracking-widest">
                                    <span>Last Verified</span>
                                    <span>{status.lastUpdated || "Live"}</span>
                                </div>
                                <div className="flex justify-between items-center text-[10px] mono-label text-text-faint uppercase tracking-widest">
                                    <span>Location</span>
                                    <span>India, IST</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-32 p-8 rounded-2xl border border-white/5 bg-surface/30 max-w-2xl">
                        <p className="text-sm text-text-muted leading-relaxed">
                            This page is inspired by the <a href="https://nownownow.com/about" target="_blank" className="text-accent-teal hover:underline underline-offset-4">/now page</a> movement. It exists to provide a live snapshot of priorities and focus, reflecting the belief that product management is a continuous state of evolution.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
