"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { 
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiTailwindcss,
  SiPython,
  SiPandas,
  SiGooglecloud,
  SiVercel,
  SiSanity,
  SiGit,
  SiGithub,
  SiLeaflet,
  SiFigma,
  SiFramer,
  SiPostman,
  SiSqlite,
  SiGoogle
} from "react-icons/si";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

interface TechLogo {
  name: string;
  category: string;
  icon: React.ElementType;
  desc: string;
  provenIn: string;
  proficiency: string;
  brandColor?: string;
  tag: "product" | "systems" | "data" | "infra";
}

const track1Logos: TechLogo[] = [
  { 
    name: "Next.js 16", 
    category: "Full-Stack", 
    icon: SiNextdotjs, 
    desc: "App Router & SSR streaming for state portals.", 
    provenIn: "DPMUMS (38 districts)", 
    proficiency: "Core", 
    tag: "systems" 
  },
  { 
    name: "React 19", 
    category: "UI Architecture", 
    icon: SiReact, 
    desc: "Server components & optimistic state hooks.", 
    provenIn: "Globus ERP & Field PWA", 
    proficiency: "Core", 
    brandColor: "#61DAFB", 
    tag: "systems" 
  },
  { 
    name: "TypeScript", 
    category: "Type Safety", 
    icon: SiTypescript, 
    desc: "End-to-end type contracts across API layers.", 
    provenIn: "State Portals", 
    proficiency: "Core", 
    brandColor: "#3178C6", 
    tag: "systems" 
  },
  { 
    name: "PostgreSQL", 
    category: "Database", 
    icon: SiPostgresql, 
    desc: "Composite B-tree indexing on 20M+ records.", 
    provenIn: "APAAR Analytics (20M+)", 
    proficiency: "Core", 
    brandColor: "#4169E1", 
    tag: "data" 
  },
  { 
    name: "Prisma ORM", 
    category: "Data Layer", 
    icon: SiPrisma, 
    desc: "Type-safe migrations & recursive org relations.", 
    provenIn: "Globus ERP", 
    proficiency: "Core", 
    tag: "systems" 
  },
  { 
    name: "Google Gemini", 
    category: "AI & RAG", 
    icon: SiGoogle, 
    desc: "Natural-language-to-SQL query pipeline.", 
    provenIn: "APAAR RAG & DOC AI", 
    proficiency: "AI", 
    brandColor: "#4285F4", 
    tag: "systems" 
  },
  { 
    name: "Figma", 
    category: "Design System", 
    icon: SiFigma, 
    desc: "PRD wireframing & component tokens.", 
    provenIn: "DPMUMS & ERP Specs", 
    proficiency: "Design", 
    brandColor: "#F24E1E", 
    tag: "product" 
  },
  { 
    name: "Tailwind CSS", 
    category: "Styling", 
    icon: SiTailwindcss, 
    desc: "Zero-FOUC theme systems & design variables.", 
    provenIn: "All Systems", 
    proficiency: "Core", 
    brandColor: "#06B6D4", 
    tag: "systems" 
  },
  { 
    name: "Framer Motion", 
    category: "Animation", 
    icon: SiFramer, 
    desc: "Gesture springs & accessible layout transitions.", 
    provenIn: "Case Drawers", 
    proficiency: "Motion", 
    brandColor: "#0055FF", 
    tag: "systems" 
  },
  { 
    name: "Sanity CMS", 
    category: "Headless CMS", 
    icon: SiSanity, 
    desc: "GROQ structured schemas & product catalogs.", 
    provenIn: "Annapurna Collections", 
    proficiency: "CMS", 
    brandColor: "#F03E2F", 
    tag: "systems" 
  },
];

const track2Logos: TechLogo[] = [
  { 
    name: "Python", 
    category: "Automation", 
    icon: SiPython, 
    desc: "Database verification & CSV cleansing pipelines.", 
    provenIn: "BEPC PPT & Parsers", 
    proficiency: "Core", 
    brandColor: "#3776AB", 
    tag: "data" 
  },
  { 
    name: "Supabase", 
    category: "Cloud Backend", 
    icon: SiSupabase, 
    desc: "PostgreSQL edge instances & real-time sync.", 
    provenIn: "DPMUMS & Vantage", 
    proficiency: "Infra", 
    brandColor: "#3ECF8E", 
    tag: "infra" 
  },
  { 
    name: "Leaflet.js", 
    category: "Spatial GIS", 
    icon: SiLeaflet, 
    desc: "0.005° tile index for instant offline queries.", 
    provenIn: "SPAN Finder Locator", 
    proficiency: "GIS", 
    brandColor: "#199900", 
    tag: "data" 
  },
  { 
    name: "Pandas", 
    category: "Data Analysis", 
    icon: SiPandas, 
    desc: "In-memory transformation of 68MB+ CSV datasets.", 
    provenIn: "APAAR Pipeline", 
    proficiency: "Data", 
    brandColor: "#150458", 
    tag: "data" 
  },
  { 
    name: "Google Cloud", 
    category: "Cloud APIs", 
    icon: SiGooglecloud, 
    desc: "Drive API media uploads & cron triggers.", 
    provenIn: "Field Reporter", 
    proficiency: "Cloud", 
    brandColor: "#4285F4", 
    tag: "infra" 
  },
  { 
    name: "Vercel Edge", 
    category: "Edge Hosting", 
    icon: SiVercel, 
    desc: "Zero-CapEx serverless global edge deployments.", 
    provenIn: "Annapurna & Portals", 
    proficiency: "Edge", 
    tag: "infra" 
  },
  { 
    name: "GitHub Actions", 
    category: "CI/CD", 
    icon: SiGithub, 
    desc: "Automated continuous build & lint verification.", 
    provenIn: "Production Repos", 
    proficiency: "DevOps", 
    tag: "infra" 
  },
  { 
    name: "Git", 
    category: "Version Control", 
    icon: SiGit, 
    desc: "Trunk-based delivery & semantic release trees.", 
    provenIn: "Daily Workflow", 
    proficiency: "Core", 
    brandColor: "#F05032", 
    tag: "infra" 
  },
  { 
    name: "Postman", 
    category: "API Testing", 
    icon: SiPostman, 
    desc: "Webhook HMAC security & contract verification.", 
    provenIn: "Razorpay Webhooks", 
    proficiency: "Testing", 
    brandColor: "#FF6C37", 
    tag: "systems" 
  },
  { 
    name: "SQLite", 
    category: "Embedded DB", 
    icon: SiSqlite, 
    desc: "Local embedded database for offline caching.", 
    provenIn: "Globus ERP Local", 
    proficiency: "DB", 
    brandColor: "#003B57", 
    tag: "data" 
  },
];

const allLogos = [...track1Logos, ...track2Logos];

export default function Stack() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const reduce = useReducedMotion();

  const filtered = activeTab === "all"
    ? allLogos
    : allLogos.filter((c) => c.tag === activeTab);

  return (
    <section id="stack" className="scroll-mt-20 border-t border-line py-14 md:py-18 overflow-hidden">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          className="flex flex-col justify-between gap-3 border-b border-line pb-5 md:flex-row md:items-end"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent mb-1.5 block">
              Capabilities & Stack
            </span>
            <h2 className="display-lg">Tools & Technologies</h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-secondary">
            Production toolset powering state government platforms, offline PWAs, and high-throughput data pipelines.
          </p>
        </motion.div>

        {/* Domain Filter Tabs */}
        <div className="mt-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
              <TabsList className="bg-surface border-line">
                <TabsTrigger value="all">Continuous Rail</TabsTrigger>
                <TabsTrigger value="systems">Systems & Frameworks</TabsTrigger>
                <TabsTrigger value="data">Data & GIS</TabsTrigger>
                <TabsTrigger value="infra">Cloud & DevOps</TabsTrigger>
                <TabsTrigger value="product">Product & Design</TabsTrigger>
              </TabsList>

              <span className="font-mono text-xs text-muted hidden sm:inline">
                Hover logos to inspect
              </span>
            </div>

            {/* TAB: CONTINUOUS PURE FLOATING LOGOS (NO CONTAINERS, NO TEXT) */}
            <TabsContent value="all" className="mt-8 focus-visible:outline-none">
              <div className="marquee-rail marquee-mask relative space-y-8 py-2">
                {/* Track 1: Scrolling Left */}
                <div className="overflow-hidden py-1">
                  <div className="animate-marquee-left gap-14 md:gap-20 items-center">
                    {[...track1Logos, ...track1Logos].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={`t1-${item.name}-${idx}`}
                          title={`${item.name} (${item.category})`}
                          className="group relative flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
                        >
                          <div className="text-secondary/75 transition-all duration-300 group-hover:scale-125 group-hover:text-text">
                            <Icon
                              size={36}
                              style={item.brandColor ? { "--brand-color": item.brandColor } as React.CSSProperties : undefined}
                              className="transition-colors duration-300 group-hover:opacity-100 group-hover:[color:var(--brand-color,currentColor)]"
                            />
                          </div>
                          <span className="mt-2 font-mono text-[10px] tracking-wide text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100 absolute -bottom-5 whitespace-nowrap">
                            {item.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Track 2: Scrolling Right */}
                <div className="overflow-hidden py-1">
                  <div className="animate-marquee-right gap-14 md:gap-20 items-center">
                    {[...track2Logos, ...track2Logos].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={`t2-${item.name}-${idx}`}
                          title={`${item.name} (${item.category})`}
                          className="group relative flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
                        >
                          <div className="text-secondary/75 transition-all duration-300 group-hover:scale-125 group-hover:text-text">
                            <Icon
                              size={36}
                              style={item.brandColor ? { "--brand-color": item.brandColor } as React.CSSProperties : undefined}
                              className="transition-colors duration-300 group-hover:opacity-100 group-hover:[color:var(--brand-color,currentColor)]"
                            />
                          </div>
                          <span className="mt-2 font-mono text-[10px] tracking-wide text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100 absolute -bottom-5 whitespace-nowrap">
                            {item.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* TAB: COMPACT ELEGANT CARDS (NO LOGO BOXES, TIGHT LOW-PROFILE HEIGHT) */}
            {["systems", "data", "infra", "product"].map((tabKey) => (
              <TabsContent key={tabKey} value={tabKey} className="mt-6 focus-visible:outline-none">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Card 
                        key={item.name} 
                        className="group relative flex flex-col justify-between p-3.5 transition-all duration-200 hover:border-line-strong hover:bg-raised/30 shadow-2xs"
                      >
                        <div className="flex items-start gap-3">
                          {/* Bare Brand Logo without any container box */}
                          <div className="text-text shrink-0 pt-0.5 transition-transform duration-200 group-hover:scale-115">
                            <Icon size={24} style={item.brandColor ? { color: item.brandColor } : undefined} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1.5">
                              <h4 className="font-heading text-sm font-semibold text-text group-hover:text-accent transition-colors truncate">
                                {item.name}
                              </h4>
                              <Badge variant="secondary" className="text-[9px] px-1.5 py-0 shrink-0">
                                {item.category}
                              </Badge>
                            </div>

                            <p className="mt-1 text-[11px] leading-relaxed text-secondary">
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        {/* Compact Proven In footer */}
                        <div className="mt-3 pt-2 border-t border-line/60 flex items-center justify-between font-mono text-[10px] text-muted">
                          <span className="flex items-center gap-1">
                            <CheckCircle2 size={11} className="text-signal" />
                            Proven in:
                          </span>
                          <span className="font-medium text-accent truncate max-w-[160px]">
                            {item.provenIn}
                          </span>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
