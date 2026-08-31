"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Radio, Database, CheckCircle2, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease },
  });

  return (
    <section id="top" className="relative flex items-center pt-28 pb-12 md:pt-36 md:pb-16">
      <div className="container-main w-full">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
          {/* Left Column: Manifesto & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div {...rise(0)} className="mb-2.5">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                Anvith Reddy Rondla / Junior Product Manager
              </span>
            </motion.div>

            <h1 className="font-heading text-[clamp(2.2rem,4vw,3.7rem)] font-semibold uppercase leading-[1.04] tracking-[-0.02em] text-text">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "108%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.08, ease }}
                >
                  Systems that survive&nbsp;
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "108%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.18, ease }}
                >
                  bad networks<span className="text-accent">.</span>
                </motion.span>
              </span>
            </h1>

            <motion.p {...rise(0.32)} className="mt-4 max-w-[54ch] text-sm sm:text-base leading-relaxed text-secondary">
              Data analyst promoted to PM in 14 months. I discover field operational bottlenecks,
              author PRD specifications, and ship production software for Indian state
              governments.
            </motion.p>

            <motion.div {...rise(0.42)} className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild variant="default" size="lg" className="group rounded-full pl-5 pr-3">
                <a href="#work" className="flex items-center gap-2">
                  <span>View selected work</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10 dark:bg-white/20 transition-transform duration-300 group-hover:translate-y-0.5">
                    <ArrowDown size={12} />
                  </span>
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="rounded-full px-5">
                <a href={`mailto:${personalInfo.email}`}>
                  Email me
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="group rounded-full pl-4 pr-2.5">
                <a href="/resume.pdf" download className="flex items-center gap-2">
                  <span>Resume</span>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sunk text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                    <ArrowUpRight size={11} />
                  </span>
                </a>
              </Button>
            </motion.div>

            <motion.div {...rise(0.52)} className="mt-6 border-t border-line pt-4">
              <p className="tabular font-mono text-xs tracking-wide text-muted">
                <span className="font-semibold text-accent">10</span> products shipped
                <span className="mx-2 text-faint">/</span>
                <span className="font-semibold text-accent">2</span> state contracts
                <span className="mx-2 text-faint">/</span>
                <span className="font-semibold text-accent">150+</span> admins served
                <span className="mx-2 text-faint">/</span>
                <span className="font-semibold text-accent">20M+</span> records queryable
              </p>
            </motion.div>
          </div>

          {/* Right Column: Executive PM Production Summary */}
          <motion.div
            className="lg:col-span-5"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease }}
          >
            <Card className="shadow-2xs border-line bg-surface/90 backdrop-blur-xs">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 border-b border-line">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
                  <CardTitle className="text-xs font-mono font-semibold uppercase tracking-wider text-text">
                    Executive PM Summary
                  </CardTitle>
                </div>
                <Badge variant="signal">Live In Production</Badge>
              </CardHeader>

              <CardContent className="pt-3.5 space-y-3">
                {/* State Deployments Record */}
                <div className="space-y-2.5 divide-y divide-line/60">
                  <div className="pt-0.5 first:pt-0">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-heading font-semibold text-text">DPMUMS Attendance Platform</span>
                      <span className="font-mono text-[10px] text-accent font-medium">Bihar State</span>
                    </div>
                    <div className="mt-0.5 flex items-center justify-between font-mono text-[10px] text-muted">
                      <span>38 districts · 150+ admins</span>
                      <span className="text-signal flex items-center gap-1 font-medium">
                        <CheckCircle2 size={10} /> 100% field adoption
                      </span>
                    </div>
                  </div>

                  <div className="pt-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-heading font-semibold text-text">T-Fiber Field Dispatch PWA</span>
                      <span className="font-mono text-[10px] text-accent font-medium">Telangana State</span>
                    </div>
                    <div className="mt-0.5 flex items-center justify-between font-mono text-[10px] text-muted">
                      <span>100+ active field engineers</span>
                      <span className="text-signal flex items-center gap-1 font-medium">
                        <Radio size={10} /> Offline IndexedDB sync
                      </span>
                    </div>
                  </div>

                  <div className="pt-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-heading font-semibold text-text">APAAR Education Analytics</span>
                      <span className="font-mono text-[10px] text-accent font-medium">State Education</span>
                    </div>
                    <div className="mt-0.5 flex items-center justify-between font-mono text-[10px] text-muted">
                      <span>20M+ student records indexed</span>
                      <span className="text-signal flex items-center gap-1 font-medium">
                        <Database size={10} /> &lt; 2s SQL RAG
                      </span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Status Footer */}
                <div className="border border-line/80 bg-sunk/60 p-2.5 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-muted text-[11px]">Availability:</span>
                    <span className="font-semibold text-accent text-[11px]">Open to PM Roles</span>
                  </div>
                  <div className="mt-0.5 text-[10px] text-secondary flex items-center gap-1">
                    <MapPin size={10} className="text-accent shrink-0" />
                    Base: {personalInfo.location} · Remote / Relocation
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
