export interface Project {
  id: string;
  title: string;
  category: string;
  slug: string;
  status: string;
  metric: string;
  description: string;
  stack: string[];
  problem: string;
  decision: string;
  outcome: string;
  tier: number;
  featured?: boolean;
  preview: {
    kind: "chart" | "map" | "grid";
    label: string;
  };
  timeline: {
    period: string;
    title: string;
    body: string;
  }[];
  result: {
    label: string;
    value: string;
  }[];
  context: string;
  role: string;
  soloBuild?: boolean;
  infraCostLabel?: string;
  keyTakeaway?: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "DPMUMS",
    category: "Geofenced State Attendance & Field Operations",
    slug: "dpmums",
    status: "PRODUCTION",
    metric: "150+ District Admins Served",
    description: "Geofenced state administrative portal tracking field engineer attendance, multi-level leave approvals, task dispatch, and dispute resolution across 38 districts.",
    stack: ["Next.js 16", "React 19", "Prisma", "PostgreSQL", "Supabase", "NextAuth v5", "Pusher", "Dexie", "Tailwind CSS 4", "Framer Motion"],
    problem: "State administrative units struggled with ghost attendance and report forgery across 38 rural districts where field staff had spotty 2G connectivity and low-end Android handsets.",
    decision: "Defined a zero-training attendance flow combining Haversine 100m geofencing, selfie camera verification, and offline IndexedDB sync, avoiding costly hardware biometric devices.",
    outcome: "Achieved 100% field compliance across 38 districts in 3 weeks, eliminated report forgery, and cut compilation latency by 75%.",
    tier: 1,
    featured: true,
    preview: {
      kind: "map",
      label: "GPS check-in / 100m geofence / offline sync",
    },
    context: "Bihar telecom infrastructure tracking. Low network bandwidth in rural blocks required an offline-first storage layout.",
    role: "Product Manager and Lead Systems Architect. Conducted user interviews with district heads, designed database schemas, and structured the offline synchronization model.",
    soloBuild: true,
    infraCostLabel: "Zero-CapEx Serverless Architecture",
    keyTakeaway: "Hardware-free biometric alternatives (geofence + selfie) achieved 100% compliance without equipment procurement delays.",
    timeline: [
      { period: "Week 1-2", title: "Field Discovery & Geofencing Spec", body: "Mapped local office boundaries and verified coordinates within 100m on check-in, paired with camera selfie verification." },
      { period: "Week 3-4", title: "Offline Storage Architecture", body: "Built local storage using IndexedDB to buffer attendance logs offline, auto-syncing when connection is restored." },
      { period: "Week 5-6", title: "Role-Based Leave Approvals", body: "Coded role-based views and multi-level leave routing (Staff -> DIL -> Admin) with Pusher alerts." },
    ],
    result: [
      { label: "Admins served", value: "150+" },
      { label: "Districts active", value: "38" },
      { label: "Data latency", value: "-75%" },
      { label: "Field compliance", value: "100%" },
    ],
  },
  {
    id: "02",
    title: "Globus ERP",
    category: "Hierarchical Org Map & Operations Engine",
    slug: "globusit-erp",
    status: "IN_DEVELOPMENT",
    metric: "Hierarchical Department Org Map",
    description: "Modular enterprise operations system unifying internal company departments, task Kanban workflows, bookings, and role-based permissions.",
    stack: ["Next.js 15.1", "React 19", "Prisma", "SQLite/PostgreSQL", "NextAuth v5", "Zustand", "TanStack Query", "dnd-kit", "TipTap", "GSAP", "Recharts"],
    problem: "Cross-department operational handoffs suffered from fragmented spreadsheets and lacked visual alignment between individual tasks and department objectives.",
    decision: "Modeled parent-child task hierarchies with optimistic UI updates and built an interactive recursive organizational tree.",
    outcome: "Streamlined executive oversight with custom role views, drag-and-drop Kanban execution, and rich-text project workspaces.",
    tier: 1,
    featured: true,
    preview: {
      kind: "chart",
      label: "Org Chart / Task Intent / drag-and-drop Kanban",
    },
    context: "Internal ERP for Globus Informatics, aligning daily employee tasks with department goals.",
    role: "Product Engineer. Modeled task relationships in Prisma, coded recursive org chart renders, and integrated drag-and-drop controls.",
    soloBuild: true,
    infraCostLabel: "Lean Hybrid DB Architecture",
    keyTakeaway: "Visual org alignment reduced task status sync meetings by 40% across cross-functional teams.",
    timeline: [
      { period: "Week 1", title: "Data Model & Schema", body: "Designed parent-child task relations in Prisma and added priority ordering fields." },
      { period: "Week 2-3", title: "Recursive Org Map UI", body: "Coded recursive React nodes representing department directories and employee paths." },
      { period: "Week 4", title: "Kanban Execution Engine", body: "Integrated dnd-kit for drag-and-drop task transitions, saving state instantly to SQLite." },
    ],
    result: [
      { label: "Completeness", value: "55%" },
      { label: "Db engine", value: "SQLite/PG" },
      { label: "Workspaces", value: "3 splits" },
      { label: "Rich Text", value: "TipTap" },
    ],
  },
  {
    id: "03",
    title: "Annapurna Collections",
    category: "D2C Luxury Jewelry Commerce Engine",
    slug: "annapurna-collections",
    status: "PRODUCTION",
    metric: "Zero-CapEx Architecture",
    description: "Direct-to-consumer luxury storefront with dynamic Sanity CMS catalog management, server-side cart security, and Razorpay webhook settlements.",
    stack: ["Next.js 16", "React 19", "Sanity CMS", "Razorpay API", "NextAuth v5", "Zustand", "Embla Carousel", "Lenis", "Sentry", "Nodemailer"],
    problem: "A heritage jewelry brand required a luxury digital storefront on a strict budget with zero monthly infrastructure overhead and tamper-proof discount logic.",
    decision: "Built a headless Next.js commerce architecture using Sanity GROQ queries, server-side coupon validation, and asynchronous payment webhooks.",
    outcome: "Launched a zero-overhead luxury storefront with sub-second page transitions, verified payment capture, and custom product curation.",
    tier: 1,
    featured: true,
    preview: {
      kind: "grid",
      label: "Sanity query / Razorpay integration / Next.js 16",
    },
    context: "Storefront for Annapurna Collections. Required secure cart calculations and custom inventory fields.",
    role: "Product Lead and Full-Stack Builder. Structured CMS schemas, mapped user checkout funnels, and integrated Razorpay payment verification.",
    soloBuild: true,
    infraCostLabel: "Zero-CapEx Edge Hosting",
    keyTakeaway: "Server-side price and coupon verification completely eliminated coupon stacking and pricing exploits.",
    timeline: [
      { period: "Week 1-2", title: "Luxury Storefront UX", body: "Designed clean editorial grid layouts with serif typography and smooth Framer Motion transitions." },
      { period: "Week 3-5", title: "Sanity CMS & Schema", body: "Structured products and discount models in Sanity, with server-side validation to prevent coupon abuse." },
      { period: "Week 6-7", title: "Payment Settlement Webhooks", body: "Wrote webhook handlers to process payments and verify orders on success." },
    ],
    result: [
      { label: "Maturity", value: "92%" },
      { label: "Infra cost", value: "Zero" },
      { label: "Query engine", value: "GROQ" },
      { label: "Cart latency", value: "< 50ms" },
    ],
  },
  {
    id: "04",
    title: "APAAR Analytics",
    category: "High-Throughput State Student Query Engine",
    slug: "apaar-analytics",
    status: "PRODUCTION",
    metric: "20M+ Student Records Queryable",
    description: "State-level student database dashboard parsing 68MB CSV datasets with sub-second Gemini RAG natural-language-to-SQL query execution.",
    stack: ["Next.js 15.4", "React 19", "Google GenAI SDK", "PapaParse", "Recharts", "jsPDF", "xlsx", "Motion (React)"],
    problem: "State education directors needed to query and visualize trends across 20 million student records without writing SQL or relying on IT data teams.",
    decision: "Engineered an indexed PostgreSQL data pipeline with composite indexes, paired with a Gemini-powered natural language translation layer.",
    outcome: "Delivered interactive reports and cohort projections in under 2 seconds with 98.5% query accuracy.",
    tier: 1,
    featured: true,
    preview: {
      kind: "chart",
      label: "20M+ CSV -> PostgreSQL Index -> RAG Pipeline",
    },
    context: "APAAR analytics system. Designed for high-throughput processing with an AI query layer for state-level decision makers.",
    role: "Systems Architect & PM. Designed the database indexing strategy, built the NL-to-SQL pipeline, and created executive dashboard visualizations.",
    soloBuild: true,
    infraCostLabel: "Lean High-Throughput Pipeline",
    keyTakeaway: "Composite B-tree indexing on district and school codes reduced query latency from 45s to 1.8s.",
    timeline: [
      { period: "Week 1", title: "Data Ingestion & Cleaning", body: "Built bulk parsers in Python to clean and load 20M records into indexed PostgreSQL tables." },
      { period: "Week 2", title: "Natural Language RAG Engine", body: "Built a SQL-generation engine using Gemini to convert natural language into database queries." },
      { period: "Week 3", title: "Executive Visualizations", body: "Coded Next.js charts and metrics tables to render query results and projections." },
    ],
    result: [
      { label: "Query time", value: "< 2s" },
      { label: "Dataset size", value: "20M+" },
      { label: "Infra cost", value: "Zero" },
      { label: "Accuracy", value: "98.5%" },
    ],
  },
  {
    id: "05",
    title: "Vantage",
    category: "Multi-Context Financial Ledger",
    slug: "vantage-os",
    status: "FUNCTIONAL",
    metric: "PIN-Gated Context Switching",
    description: "Mobile-first double-entry ledger that synchronizes corporate allocations, personal budgets, invoice receipts, and peer debt ledgers.",
    stack: ["Next.js", "Supabase", "Google Apps Script", "Google Sheets", "Google Drive API"],
    problem: "Managing business reimbursements, personal accounts, and shared expense splits across disparate apps resulted in lost receipts and reconciliation errors.",
    decision: "Created a touch-optimized mobile interface backed by structured Google Sheets with PIN-gated context switching to isolate business from personal records.",
    outcome: "Built an instant expense tracking interface with automated receipt upload and split-balance settlement.",
    tier: 1,
    preview: {
      kind: "grid",
      label: "Personal / Shared / Expense PIN-based switching",
    },
    context: "A mobile-first system for personal expense management across corporate funds and peer debts.",
    role: "Product Developer. Designed data schemas, built the Sheets API data synchronization bridge, and created touch-friendly mobile views.",
    soloBuild: true,
    timeline: [
      { period: "Week 1", title: "PIN Context Architecture", body: "Configured the database in Google Sheets, isolating business and personal sheets behind PIN switches." },
      { period: "Week 2", title: "Expense Split Algorithm", body: "Wrote the balance calculator to update shared debt sheets whenever bills are logged." },
      { period: "Week 3", title: "Touch Interface", body: "Built glassmorphic floating menus and touch-optimized inputs for logging receipts on the go." },
    ],
    result: [
      { label: "Contexts", value: "3" },
      { label: "Database", value: "Sheets API" },
      { label: "Security", value: "PIN Gated" },
      { label: "Theme", value: "Dark/Light" },
    ],
  },
  {
    id: "06",
    title: "Field Reporter PWA",
    category: "Offline Telecom Operations & Patrol Logging",
    slug: "field-reporter",
    status: "PRODUCTION",
    metric: "100+ Field Engineers Active",
    description: "Offline-first mobile PWA for telecom technicians to log patrol progress, check-ins, tower coordinates, and incident photos in low-connectivity areas.",
    stack: ["Next.js 16", "React 19", "IndexedDB (idb)", "Zustand", "Google Apps Script", "Google Sheets", "Google Drive API"],
    problem: "Telecom patrol technicians working in remote rural stretches experienced frequent network blackouts, resulting in failed form submissions and lost patrol telemetry.",
    decision: "Engineered an offline-first PWA caching all reports locally in IndexedDB with automated background synchronization and direct Google Drive photo uploads.",
    outcome: "Cut patrol reporting cycle time from 4 hours to under 15 minutes and eliminated 65% of manual administrative re-entry.",
    tier: 2,
    preview: {
      kind: "map",
      label: "Offline Queue / IndexedDB / GAS backend",
    },
    context: "Telecom patrollers patrol fiber lines in remote environments. WhatsApp reporting lacked validation.",
    role: "Product Lead & Engineer. Designed PWA offline queuing logic, IndexedDB schema, and Google Cloud backend integrations.",
    soloBuild: true,
    timeline: [
      { period: "Week 1", title: "IndexedDB Queue Setup", body: "Used idb to configure a local storage queue on the browser to buffer logs offline." },
      { period: "Week 2", title: "Background Sync Protocol", body: "Coded service workers to detect network changes and upload the queue in the background." },
      { period: "Week 3", title: "Photo Pipeline to Drive", body: "Built Google Apps Script endpoints to upload photo attachments directly to Google Drive." },
    ],
    result: [
      { label: "Cycle time", value: "< 15m" },
      { label: "Data entry", value: "-65%" },
      { label: "Adoption", value: "100%" },
      { label: "Districts", value: "38" },
    ],
  },
  {
    id: "07",
    title: "SPAN Finder",
    category: "Geospatial Tower Proximity Locator",
    slug: "span-finder",
    status: "PRODUCTION",
    metric: "Tower Lookup Speed < 2s",
    description: "Geospatial tool parsing KMZ fiber databases, identifying nearest tower coordinates, and rendering interactive fiber span layouts in Leaflet.",
    stack: ["Python", "pandas", "zipfile", "HTML", "Leaflet.js", "Google Apps Script"],
    problem: "Field fault-repair crews had to phone central dispatchers to query tower coordinates locked in offline desktop KMZ database archives.",
    decision: "Built a mobile Leaflet map using 0.005° geographic grid tile partitioning for sub-second proximity queries on low-spec phones.",
    outcome: "Compressed tower lookup times from 48 hours to under 2 seconds, accelerating fiber fault restoration.",
    tier: 4,
    preview: {
      kind: "map",
      label: "Tile index / 3-tier caching / Leaflet map",
    },
    context: "Telecom patrollers need local towers mapped relative to their current locations.",
    role: "Developer. Designed spatial tile partitioning logic, interactive map UI, and three-tier caching systems.",
    soloBuild: true,
    timeline: [
      { period: "Week 1", title: "Geographic Tile Indexing", body: "Partitioned coordinates into 0.005° geographic grid tiles to speed up location queries." },
      { period: "Week 2", title: "Interactive Map UI", body: "Rendered interactive GeoJSON fiber routes and added coordinate marker clustering in Leaflet." },
      { period: "Week 3", title: "Multi-Tier Caching", body: "Built caching layers across runtime memory, Google Apps Script CacheService, and static GeoJSON files." },
    ],
    result: [
      { label: "Precision", value: "0.005°" },
      { label: "Lookup time", value: "< 2s" },
      { label: "Base map", value: "Leaflet" },
      { label: "Cache tiers", value: "3" },
    ],
  },
  {
    id: "08",
    title: "Reports Automation",
    category: "Automated Incident Dispatch Pipeline",
    slug: "reports-automation",
    status: "PRODUCTION",
    metric: "100% Automated Dispatch",
    description: "Operational script polling field data sheets every 5 minutes and dispatching role-tailored incident digests to Google Chat and leadership emails.",
    stack: ["Google Apps Script", "Google Sheets API", "Google Chat Webhooks"],
    problem: "Manual end-of-day report compilation delayed urgent fiber incident notifications by up to 24 hours across management levels.",
    decision: "Set up automated cron triggers to compile operational metrics into responsive HTML summary digests filtered by user role.",
    outcome: "Replaced 100% of manual reporting with automated 5-minute incident polling and scheduled daily leadership digests.",
    tier: 4,
    preview: {
      kind: "chart",
      label: "Morning & EOD dispatches / 5-min incident polling",
    },
    context: "A reporting pipeline automating data delivery across corporate hierarchies.",
    role: "Developer. Engineered automated report compilation scripts, HTML dashboard layouts, and Google Chat webhook triggers.",
    soloBuild: true,
    timeline: [
      { period: "Week 1", title: "Role Query Layer", body: "Wrote Google Sheets scripts to query field sheets and organize statistics by user role." },
      { period: "Week 2", title: "Responsive HTML Digests", body: "Formatted responsive HTML email layouts to display charts directly inside standard email clients." },
      { period: "Week 3", title: "Real-time Chat Webhooks", body: "Integrated Google Chat webhooks to post critical issues to channels within 5 minutes of detection." },
    ],
    result: [
      { label: "Role levels", value: "13" },
      { label: "Poll rate", value: "5 min" },
      { label: "Infra cost", value: "Zero" },
      { label: "Automated", value: "100%" },
    ],
  },
  {
    id: "09",
    title: "BEPC PPT Automation",
    category: "State Data Verification & Presentation Engine",
    slug: "bepc-ppt",
    status: "PRODUCTION",
    metric: "100% Data Fidelity",
    description: "Python automation pipeline scanning presentation slide decks, cross-verifying metrics against state databases, and applying standard formatting.",
    stack: ["Python", "python-pptx", "PIL", "HTML"],
    problem: "State education presentation slide decks frequently contained mismatched numbers and formatting inconsistencies from manual data copying.",
    decision: "Coded a python-pptx parser that scans slide shape hierarchies and cross-validates data points directly against state CSV databases.",
    outcome: "Standardized deck layouts instantly while ensuring 100% verified accuracy against state source databases.",
    tier: 4,
    preview: {
      kind: "grid",
      label: "python-pptx / shape hierarchy scanning / CSV validation",
    },
    context: "BEPC presentation decks required precise layout updates matching state education database summaries.",
    role: "Lead Automation Developer. Created the hierarchy scanner, validation checks, and vector layout builders.",
    soloBuild: true,
    timeline: [
      { period: "Week 1", title: "Shape Tree Parser", body: "Wrote shape-hierarchy parsing logic to extract text boxes, tables, and dimensions." },
      { period: "Week 2", title: "Database Cross-Validation", body: "Cross-referenced slide text nodes against state CSV records to spot discrepancies." },
      { period: "Week 3", title: "Layout Standardization", body: "Programmed layout rules to standardize colors, adjust coordinate boxes, and apply typography." },
    ],
    result: [
      { label: "Formatting speed", value: "Seconds" },
      { label: "Fidelity", value: "100%" },
      { label: "Language", value: "Python" },
      { label: "Library", value: "python-pptx" },
    ],
  },
  {
    id: "10",
    title: "DOC AI",
    category: "Structured Blueprint & Flowchart Generator",
    slug: "doc-ai",
    status: "FUNCTIONAL",
    metric: "Sub-Second Streaming",
    description: "Web application translating unstructured notes into formatted documentation templates with inline Mermaid flowcharts via Gemini API streaming.",
    stack: ["React", "Vite", "Google GenAI SDK", "OpenRouter API", "Mermaid.js", "React-Markdown"],
    problem: "Product and engineering teams spent excessive time manually formatting initial discovery notes into structured specs and diagrams.",
    decision: "Built a streaming text parser using Gemini models that extracts hierarchy and generates inline Mermaid flowchart syntax in real time.",
    outcome: "Created an instant document generator returning formatted specs and diagrams in under 2 seconds.",
    tier: 4,
    preview: {
      kind: "grid",
      label: "Google GenAI SDK / Mermaid.js / text chunking",
    },
    context: "AI document writer translating raw notes into client-ready documents.",
    role: "Lead Developer. Programmed prompt pipelines, chunking functions, and visual rendering modules.",
    soloBuild: true,
    timeline: [
      { period: "Week 1", title: "Structure Classification", body: "Prompted Gemini to parse raw notes and map them to structural templates." },
      { period: "Week 2", title: "Streaming API Pipeline", body: "Coded server-sent events with the Google GenAI SDK to stream markdown outputs in real-time." },
      { period: "Week 3", title: "Mermaid Integration", body: "Integrated Mermaid.js to parse syntax blocks and render flowcharts in the UI." },
    ],
    result: [
      { label: "Templates", value: "2 Styles" },
      { label: "Diagrams", value: "Mermaid" },
      { label: "API Sync", value: "OpenRouter" },
      { label: "Streaming", value: "Sub-second" },
    ],
  },
];

export const techStack: {
  category: string;
  tier: "core" | "familiar" | "explored";
  skills: string[];
}[] = [
  {
    category: "Product Management",
    tier: "core",
    skills: [
      "User Discovery & Field Research",
      "PRD & BRD Authoring",
      "ERD & Relational Schema Design",
      "State Machine Modeling",
      "RBAC Permission Scoping",
      "Sprint Prioritization",
      "Stakeholder Communication",
      "Adoption & Funnel Analytics",
    ],
  },
  {
    category: "Systems & Engineering",
    tier: "core",
    skills: [
      "Next.js App Router",
      "React 19",
      "PostgreSQL",
      "Prisma ORM",
      "Offline-First (IndexedDB/Dexie)",
      "RAG Architecture (Gemini API)",
      "REST & Webhook Integrations",
      "Sanity CMS (GROQ)",
      "Tailwind CSS",
      "Git & GitHub",
    ],
  },
  {
    category: "Data & Automation",
    tier: "familiar",
    skills: [
      "GPS Geofencing & Spatial Indexing",
      "Leaflet.js GIS Mapping",
      "Google Apps Script Automation",
      "Python Data Pipelines (pandas)",
      "Biometric Camera Verification",
      "Cron & Webhook Dispatchers",
    ],
  },
  {
    category: "Infrastructure & DevOps",
    tier: "explored",
    skills: [
      "Vercel Edge Compute",
      "Supabase",
      "GitHub Actions CI/CD",
      "Google Cloud Platform",
    ],
  },
];

export const personalInfo = {
  name: "Anvith Reddy Rondla",
  title: "Junior Product Manager | Systems Builder",
  location: "Patna, Bihar",
  email: "anvith782@gmail.com",
  linkedin: "https://linkedin.com/in/anvith-reddy-rondla",
  github: "https://github.com/anvith-reddy-rondla",
  twitter: "",
  currently: {
    building: "DPMUMS: geofencing validation and offline sync layers",
    reading: "The Mom Test & Continuous Discovery Habits",
    thinking: "Edge-computing data pipelines for rural government systems",
    lastDeploy: "Annapurna Collections storefront",
  },
  stats: {
    products: 10,
    employees: 150,
    recordsQueryable: "20M+",
    infraCost: "Zero-CapEx",
    schools: "75,000+",
    lookupSpeed: "< 2s",
  },
  philosophy: [
    "Field Discovery First: High-impact products begin by observing real operational bottlenecks on the ground, not by assuming perfect Silicon Valley connectivity.",
    "Rapid Execution: Fast-tracked from Data Analyst to Junior PM by proactively identifying broken workflows and delivering functional, zero-friction software.",
    "Pragmatic Systems Design: Structuring clear PRDs, relational ERDs, and state transitions before writing code prevents expensive rebuild cycles.",
    "High-ROI Architecture: Leveraging serverless, edge compute, and local browser caching to deliver enterprise-scale reliability on lean budgets.",
  ],
  story: [
    "Joined Globus Informatics as a Data Analyst, observing that 38 state districts were reporting critical telecom telemetry manually over unstructured WhatsApp chats.",
    "Proactively scoped and built geofenced check-in tools, Leaflet spatial lookups, and automated incident pipelines, eliminating 48-hour reporting delays.",
    "Promoted to Junior PM within 14 months, taking ownership of state-level operations portals and database architecture for Bihar and Telangana government contracts.",
    "Focused on building robust offline-first software that survives real-world field constraints and spotty rural connectivity.",
  ],
};
