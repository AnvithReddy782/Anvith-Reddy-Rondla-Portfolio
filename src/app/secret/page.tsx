import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SecretPage() {
    return (
        <main className="min-h-screen bg-[#050505] pt-32 pb-24 px-6 lg:px-12 relative overflow-hidden">
            {/* Minimalist Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container-custom relative z-10 max-w-3xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-[10px] mono-label text-text-faint uppercase tracking-[0.2em] hover:text-text-primary transition-colors mb-24 group">
                    <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                    Protocol_Home
                </Link>

                <div className="space-y-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-orange/20 bg-accent-orange/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                        <span className="text-[10px] mono-label text-accent-orange uppercase tracking-widest">UNLISTED_OPINION_LAYER</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-display font-medium text-text-primary leading-tight tracking-tight">
                        Software is a <br />
                        <span className="italic text-text-muted">moral choice.</span>
                    </h1>

                    <div className="space-y-8 text-lg md:text-xl text-text-muted leading-relaxed font-light">
                        <p>
                            Most enterprise products are built to solve internal structural failures, not user problems. We build teams of 50 to manage systems that 1 build-sovereign developer could run alone with the right documentation and AI leverage.
                        </p>
                        <p>
                            I believe in <span className="text-text-primary underline decoration-accent-teal/50 underline-offset-8">System Sovereignty</span>. A system is sovereign when it requires zero human intervention to maintain its integrity. If you need a "Process Manager" to ensure data flows from field to report, your system has failed its moral obligation to be efficient.
                        </p>
                        <p>
                            We treat "Technical Debt" as a financial metaphor, but it's actually cognitive pollution. In the Indian government context, this debt isn't just a slower build—it's a delayed social service. That’s why I document before I build. Not for the audit, but for the clarity required to build things that don't need me to stay alive.
                        </p>
                    </div>

                    <div className="pt-16 border-t border-white/5">
                        <div className="flex justify-between items-center text-[10px] mono-label text-text-faint uppercase tracking-[0.3em]">
                            <span>ENCRYPTED_LOG_001</span>
                            <span>AXIOM_PHILOSOPHY</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Vertical Cursor line for this page */}
            <div className="absolute right-12 top-0 bottom-0 w-px bg-white/5 hidden lg:block" />
        </main>
    );
}
