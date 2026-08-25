export interface Project {
  id: string;
  title: string;
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
}

export const projects: Project[] = [
  {
    id: "01",
    title: "DPMUMS",
    slug: "dpmums",
    status: "PRODUCTION",
    metric: "150+ District Admins Served",
    description: "A geofenced portal built to track field engineer attendance, manage leave requests, assign daily tasks, compile report logs, and resolve issues via a ticketing interface.",
    stack: ["Next.js 16", "React 19", "Prisma", "PostgreSQL", "Supabase", "NextAuth v5", "Pusher", "Dexie", "Tailwind CSS 4", "Framer Motion"],
    problem: "State administrative units needed to verify field engineer attendance in remote districts on low-end devices under spotty networks, while preventing location spoofing.",
    decision: "Built a location-verification backend checking coordinates within a 100m radius of local offices (Haversine formula), paired with offline IndexedDB storage and role-based views.",
    outcome: "Reduced report compilation latency by 75% and reached 100% field adoption across 38 districts in 3 weeks.",
    tier: 1,
    featured: true,
    preview: {
      kind: "map",
      label: "GPS check-in / 100m geofence / offline sync",
    },
    context: "Bihar telecom infrastructure tracking. Low network bandwidth in rural blocks required an offline-first storage layout.",
    role: "Lead Developer. Conducted user interviews, designed database schemas, and programmed the offline synchronization and security layers.",
    soloBuild: true,
    infraCostLabel: "₹0 infra cost",
    timeline: [
      { period: "Week 1-2", title: "Geofencing Setup", body: "Mapped local office boundaries and verified coordinates within 100m on check-in, paired with camera selfie verification." },
      { period: "Week 3-4", title: "Offline Storage", body: "Built local storage using IndexedDB to buffer attendance logs offline, auto-syncing when connection is restored." },
      { period: "Week 5-6", title: "Leave Approvals", body: "Coded role-based views and multi-level leave routing (Staff -> DIL -> Admin) with Pusher alerts." },
    ],
    result: [
      { label: "Admins served", value: "150+" },
      { label: "Districts", value: "38" },
      { label: "Data Latency", value: "-75%" },
      { label: "Adoption Rate", value: "100%" },
    ],
  },
  {
    id: "02",
    title: "ERP Next.js",
    slug: "globusit-erp",
    status: "IN_DEVELOPMENT",
    metric: "Hierarchical Department Org Map",
    description: "A modular ERP system unifying internal company operations: departments, task Kanban boards, calendar bookings, and role-based permissions.",
    stack: ["Next.js 15.1", "React 19", "Prisma", "SQLite/PostgreSQL", "NextAuth v5", "Zustand", "TanStack Query", "dnd-kit", "TipTap", "GSAP", "Recharts"],
    problem: "Internal operations suffered from rigid task tracking and lacked a clear visual representation of department hierarchies.",
    decision: "Designed parent-child task relations in Prisma for custom ordering and built a recursive org chart to map department hierarchies.",
    outcome: "Created custom dashboards for executives and managers, a drag-and-drop Kanban board, and rich-text workspaces.",
    tier: 1,
    featured: true,
    preview: {
      kind: "chart",
      label: "Org Chart / Task Intent / drag-and-drop Kanban",
    },
    context: "Internal ERP for Globus Informatics, aligning daily employee tasks with department goals.",
    role: "Product Engineer. Modeled task relationships in Prisma, coded recursive org chart renders, and integrated drag-and-drop controls.",
    soloBuild: true,
    timeline: [
      { period: "Week 1", title: "Database Schema", body: "Designed parent-child task relations in Prisma and added priority ordering fields." },
      { period: "Week 2-3", title: "Org Chart UI", body: "Coded recursive React nodes representing department directories and employee paths." },
      { period: "Week 4", title: "Kanban Boards", body: "Integrated dnd-kit for drag-and-drop task transitions, saving state instantly to SQLite." },
    ],
    result: [
      { label: "Completeness", value: "55%" },
      { label: "Db engine", value: "SQLite" },
      { label: "Workspaces", value: "3 splits" },
      { label: "Rich Text", value: "TipTap" },
    ],
  },
  {
    id: "03",
    title: "The Dropshipping Website",
    slug: "annapurna-collections",
    status: "PRODUCTION",
    metric: "₹0 Infrastructure Cost",
    description: "A direct-to-consumer storefront integrated with Sanity CMS for product inventory and Razorpay for payment checkout.",
    stack: ["Next.js 16", "React 19", "Sanity CMS", "Razorpay API", "NextAuth v5", "Zustand", "Embla Carousel", "Lenis", "Sentry", "Nodemailer"],
    problem: "A heritage jewelry brand needed a luxury online storefront built on a minimal budget with zero hosting costs.",
    decision: "Built a headless Next.js site using Sanity CMS (GROQ queries), server-side cart verification, and secure Razorpay webhooks.",
    outcome: "Deployed the zero-infra storefront with secure payment checks and custom product filters.",
    tier: 1,
    featured: true,
    preview: {
      kind: "grid",
      label: "Sanity query / Razorpay integration / Next.js 16",
    },
    context: "Storefront for Annapurna Collections. Required secure cart calculations and custom inventory fields.",
    role: "Lead Developer. Structured Sanity schemas, built the cart state machine, and integrated Razorpay checkout flows.",
    soloBuild: true,
    timeline: [
      { period: "Week 1-2", title: "Storefront Design", body: "Designed clean editorial grid layouts with serif typography and smooth Framer Motion transitions." },
      { period: "Week 3-5", title: "Content CMS", body: "Structured products and discount models in Sanity, with server-side validation to prevent coupon abuse." },
      { period: "Week 6-7", title: "Payment Verification", body: "Wrote webhook handlers to process payments and verify orders on success." },
    ],
    result: [
      { label: "Maturity", value: "92%" },
      { label: "Infra Cost", value: "₹0" },
      { label: "Query Engine", value: "GROQ" },
      { label: "Cart Speed", value: "Instant" },
    ],
  },
  {
    id: "04",
    title: "APAAR Analytics",
    slug: "apaar-analytics",
    status: "PRODUCTION",
    metric: "20M+ (2Cr+) Records Queryable",
    description: "A student database dashboard that parses 68MB CSVs in the browser and queries an AI helper using model racing for sub-second responses.",
    stack: ["Next.js 15.4", "React 19", "Google GenAI SDK", "PapaParse", "Recharts", "jsPDF", "xlsx", "Motion (React)"],
    problem: "State administrators needed to query and visualize 20 million student records without writing SQL or accessing raw databases.",
    decision: "Imported the CSV into PostgreSQL, added custom indexes, and built a RAG query pipeline using Gemini and model racing.",
    outcome: "Returned natural-language reports and charts in under 2 seconds, running on a free-tier hosting layout.",
    tier: 1,
    featured: true,
    preview: {
      kind: "chart",
      label: "20M+ CSV -> PostgreSQL Index -> RAG Pipeline",
    },
    context: "APAAR analytics system. Designed for high-throughput processing with an AI query layer for state-level decision makers.",
    role: "Lead Systems Architect. Created the indexed schema, built the RAG SQL-generation pipeline, and coded the dashboard charts.",
    soloBuild: true,
    timeline: [
      { period: "Week 1", title: "Data Ingestion", body: "Built bulk parsers in Python to clean and load 20M records into indexed PostgreSQL tables." },
      { period: "Week 2", title: "RAG Engine", body: "Built a SQL-generation engine using Gemini to convert natural language into database queries." },
      { period: "Week 3", title: "Dashboard UI", body: "Coded Next.js charts and metrics tables to render query results and projections." },
    ],
    result: [
      { label: "Query Time", value: "< 2s" },
      { label: "Dataset Size", value: "20M+" },
      { label: "Infra Cost", value: "₹0" },
      { label: "Accuracy", value: "98.5%" },
    ],
  },
  {
    id: "05",
    title: "Budget Tracker GAS",
    slug: "vantage-os",
    status: "FUNCTIONAL",
    metric: "PIN-Gated Secure Contexts",
    description: "A secure double-entry ledger that syncs transactions, invoices in Google Drive, and shared debt profiles.",
    stack: ["Next.js", "Supabase", "Google Apps Script", "Google Sheets", "Google Drive API"],
    problem: "Managing corporate spending, personal budgets, and shared debts across multiple spreadsheets was slow and prone to errors.",
    decision: "Built a mobile-first interface backed by Google Sheets with a PIN-gated switch to isolate personal and business budgets.",
    outcome: "Deployed a dark-themed portal that calculates expenses, manages split balances, and logs receipts.",
    tier: 1,
    preview: {
      kind: "grid",
      label: "Personal / Shared / Expense PIN-based switching",
    },
    context: "A mobile-first system for personal expense management across corporate funds and peer debts.",
    role: "Full-Stack Developer. Built the React-Google Sheets data bridge, designed database records, and developed mobile-first interfaces.",
    soloBuild: true,
    timeline: [
      { period: "Week 1", title: "PIN Switching", body: "Configured the database in Google Sheets, isolating business and personal sheets behind PIN switches." },
      { period: "Week 2", title: "Expense Splitting", body: "Wrote the balance calculator to update shared debt sheets whenever bills are logged." },
      { period: "Week 3", title: "Mobile UI", body: "Built glassmorphic floating menus and touch-optimized inputs for logging receipts on the go." },
    ],
    result: [
      { label: "Contexts", value: "3" },
      { label: "Database", value: "Sheets API" },
      { label: "Security", value: "PIN Gated" },
      { label: "Theme", value: "Dark Glass" },
    ],
  },
  {
    id: "06",
    title: "Field Reporter Testing",
    slug: "field-reporter",
    status: "PRODUCTION",
    metric: "100+ Field Engineers Active",
    description: "An offline-first mobile web app for telecom technicians to log field progress, check-ins, check-outs, and incidents in remote zones.",
    stack: ["Next.js 16", "React 19", "IndexedDB (idb)", "Zustand", "Google Apps Script", "Google Sheets", "Google Drive API"],
    problem: "Telecom technicians working in rural areas frequently lost connection, causing failed form submissions and lost logs.",
    decision: "Built a React PWA that caches logs locally in IndexedDB, automatically uploads them when connection returns, and uploads photos to Google Drive.",
    outcome: "Cut patrol logging cycles from 4 hours to 15 minutes and reduced manual entry tasks by 65%.",
    tier: 2,
    preview: {
      kind: "map",
      label: "Offline Queue / IndexedDB / GAS backend",
    },
    context: "Telecom patrollers patrol fiber lines in remote environments. WhatsApp reporting lacked validation.",
    role: "Sole Developer. Designed the PWA architecture, IndexedDB syncing logic, and Apps Script backend APIs.",
    soloBuild: true,
    timeline: [
      { period: "Week 1", title: "IndexedDB Setup", body: "Used idb to configure a local storage queue on the browser to buffer logs offline." },
      { period: "Week 2", title: "Background Sync", body: "Coded service workers to detect network changes and upload the queue in the background." },
      { period: "Week 3", title: "Media Uploads", body: "Built Google Apps Script endpoints to upload photo attachments directly to Google Drive." },
    ],
    result: [
      { label: "Cycle Time", value: "< 15m" },
      { label: "Data Entry", value: "-65%" },
      { label: "Adoption", value: "100%" },
      { label: "Districts", value: "38" },
    ],
  },
  {
    id: "07",
    title: "SPAN Finder",
    slug: "span-finder",
    status: "PRODUCTION",
    metric: "Tower Lookup Speed < 2s",
    description: "A geospatial map scanning KMZ fiber databases, locating towers, calculating spans, and rendering layouts in Leaflet.",
    stack: ["Python", "pandas", "zipfile", "HTML", "Leaflet.js", "Google Apps Script"],
    problem: "Field crews had to call dispatchers to search for tower coordinates locked in offline KMZ database files.",
    decision: "Built a mobile Leaflet map using 0.005° grid partitioning to index coordinates for sub-second proximity queries.",
    outcome: "Cut tower lookup times from 48 hours to under 2 seconds, accelerating fiber fault repair.",
    tier: 4,
    preview: {
      kind: "map",
      label: "Tile index / 3-tier caching / Leaflet map",
    },
    context: "Telecom patrollers need local towers mapped relative to their current locations.",
    role: "Developer. Designed spatial tile partitioning logic, interactive map UI, and three-tier caching systems.",
    soloBuild: true,
    timeline: [
      { period: "Week 1", title: "Grid Indexing", body: "Partitioned coordinates into 0.005° geographic grid tiles to speed up location queries." },
      { period: "Week 2", title: "Map Interface", body: "Rendered interactive GeoJSON fiber routes and added coordinate marker clustering in Leaflet." },
      { period: "Week 3", title: "Three-Tier Cache", body: "Built caching layers across runtime memory, Google Apps Script CacheService, and static GeoJSON files." },
    ],
    result: [
      { label: "Precision", value: "0.005°" },
      { label: "Lookup", value: "< 2s" },
      { label: "Base map", value: "Leaflet" },
      { label: "Caches", value: "3 tiers" },
    ],
  },
  {
    id: "08",
    title: "Reports Automation",
    slug: "reports-automation",
    status: "PRODUCTION",
    metric: "100% Automated Dispatch",
    description: "An automated script that reads field sheets every 5 minutes and posts formatted incident updates directly to Google Chat.",
    stack: ["Google Apps Script", "Google Sheets API", "Google Chat Webhooks"],
    problem: "Compiling daily operational reports manually caused critical field incident alerts to be delayed by up to 24 hours.",
    decision: "Configured cron triggers to aggregate metrics and email role-tailored HTML summary dashboards to directors and operators.",
    outcome: "Replaced all manual reporting with 5-minute incident polls and automated EOD email dispatches.",
    tier: 4,
    preview: {
      kind: "chart",
      label: "Morning & EOD dispatches / 5-min incident polling",
    },
    context: "A reporting pipeline automating data delivery across corporate hierarchies.",
    role: "Developer. Engineered automated report compilation scripts, HTML dashboard layouts, and Google Chat webhook triggers.",
    soloBuild: true,
    timeline: [
      { period: "Week 1", title: "Data Queries", body: "Wrote Google Sheets scripts to query field sheets and organize statistics by user role." },
      { period: "Week 2", title: "HTML Templates", body: "Formatted responsive HTML email layouts to display charts directly inside standard email clients." },
      { period: "Week 3", title: "Chat Webhooks", body: "Integrated Google Chat webhooks to post critical issues to channels within 5 minutes of detection." },
    ],
    result: [
      { label: "Roles", value: "13 levels" },
      { label: "Poll Rate", value: "5 min" },
      { label: "Infra Cost", value: "₹0" },
      { label: "Automated", value: "100%" },
    ],
  },
  {
    id: "09",
    title: "BEPC PPT",
    slug: "bepc-ppt",
    status: "PRODUCTION",
    metric: "Data Fidelity Verification",
    description: "A Python script that scans slide decks, verifies data metrics against databases, and formats slide styles.",
    stack: ["Python", "python-pptx", "PIL", "HTML"],
    problem: "State presentation slides had inconsistent layouts and mismatched metrics, requiring tedious manual corrections.",
    decision: "Coded a Python parser using python-pptx to apply slide layout themes and cross-reference slide metrics against CSV databases.",
    outcome: "Re-styled slides automatically while verifying 100% data alignment against state databases.",
    tier: 4,
    preview: {
      kind: "grid",
      label: "python-pptx / shape hierarchy scanning / CSV validation",
    },
    context: "BEPC presentation decks required precise layout updates matching state education database summaries.",
    role: "Lead Automation Developer. Created the hierarchy scanner, validation checks, and vector layout builders.",
    soloBuild: true,
    timeline: [
      { period: "Week 1", title: "PPTX Parser", body: "Wrote shape-hierarchy parsing logic to extract text boxes, tables, and dimensions." },
      { period: "Week 2", title: "Data Validation", body: "Cross-referenced slide text nodes against state CSV records to spot discrepancies." },
      { period: "Week 3", title: "Style Engine", body: "Programmed layout rules to standardize colors, adjust coordinate boxes, and apply typography." },
    ],
    result: [
      { label: "Slide Speed", value: "Seconds" },
      { label: "Fidelity", value: "100%" },
      { label: "Technology", value: "Python" },
      { label: "Engine", value: "python-pptx" },
    ],
  },
  {
    id: "10",
    title: "DOC AI",
    slug: "doc-ai",
    status: "FUNCTIONAL",
    metric: "Sub-second Streaming Response",
    description: "A web app that parses raw text, generates structure blueprints, and streams formatted markdown documents with inline flowcharts.",
    stack: ["React", "Vite", "Google GenAI SDK", "OpenRouter API", "Mermaid.js", "React-Markdown"],
    problem: "Users wanted a fast way to convert unorganized draft notes into formatted templates with flowcharts without manual formatting.",
    decision: "Built a structured text parser using the Gemini API to construct layouts and render markdown with inline Mermaid diagrams.",
    outcome: "Deployed a document formatter that outputs styled text and diagrams in under 2 seconds.",
    tier: 4,
    preview: {
      kind: "grid",
      label: "Google GenAI SDK / Mermaid.js / text chunking",
    },
    context: "AI document writer translating raw notes into client-ready documents.",
    role: "Lead Developer. Programmed prompt pipelines, chunking functions, and visual rendering modules.",
    soloBuild: true,
    timeline: [
      { period: "Week 1", title: "Text Classification", body: "Prompted Gemini to parse raw notes and map them to structural templates." },
      { period: "Week 2", title: "Streaming API", body: "Coded server-sent events with the Google GenAI SDK to stream markdown outputs in real-time." },
      { period: "Week 3", title: "Mermaid Rendering", body: "Integrated Mermaid.js to parse syntax blocks and render flowcharts in the UI." },
    ],
    result: [
      { label: "Templates", value: "2 Styles" },
      { label: "Renderer", value: "Mermaid" },
      { label: "API Sync", value: "OpenRouter" },
      { label: "Response", value: "Sub-second" },
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
      "Product Roadmapping",
      "User Research",
      "Requirements Engineering",
      "ERD Design",
      "User Stories",
      "Sprint Planning",
      "RBAC",
      "SaaS Architecture",
      "Stakeholder Management",
      "OKRs & KPIs",
    ],
  },
  {
    category: "AI & Engineering",
    tier: "core",
    skills: [
      "Generative AI",
      "LLMs",
      "RAG Architecture",
      "Prompt Engineering",
      "Agentic IDEs (Cursor, Windsurf)",
      "Gemini API",
      "Next.js",
      "React",
      "JavaScript",
      "PostgreSQL",
      "REST APIs",
      "Sanity CMS",
      "Git",
    ],
  },
  {
    category: "Data & Automation",
    tier: "familiar",
    skills: [
      "Dashboard Design",
      "GPS Geofencing",
      "Biometric Verification",
      "Data Modeling",
      "Google Apps Script",
      "Cloud Automation Pipelines",
      "Real-Time Analytics",
      "Google Cloud APIs",
    ],
  },
  {
    category: "DevOps & Tools",
    tier: "explored",
    skills: [
      "Git",
      "GitHub Actions",
      "Vercel",
      "Google Cloud",
    ],
  },
];

export const personalInfo = {
  name: "Anvith Reddy Rondla",
  title: "Junior Product Manager | AI Engineer | SaaS Builder",
  location: "Patna, Bihar",
  email: "anvith782@gmail.com",
  linkedin: "https://linkedin.com/in/anvith-reddy-rondla",
  github: "https://github.com/anvith-reddy-rondla",
  twitter: "",
  currently: {
    building: "DPMUMS: offline geofencing and synchronization layers",
    reading: "High-Growth Product Development",
    thinking: "Relational database models for regional tracking systems",
    lastDeploy: "Annapurna Collections storefront",
  },
  stats: {
    currentlyBuilding: "DPMUMS: offline geofencing and synchronization layers",
    currentlyReading: "High-Growth Product Development",
    currentlyThinking: "Relational database models for regional tracking systems",
    products: 10,
    employees: 150,
    recordsQueryable: "20M+",
    infraCost: "Zero",
    schools: "75,000+",
    lookupSpeed: "< 2s",
  },
  philosophy: [
    "Proactive Building: Designing and shipping tools that solve field operations bottlenecks before they disrupt delivery—like geofenced check-ins and offline data caches.",
    "Fast-Track Growth: Promoted from Data Analyst to Junior PM in 14 months by coding systems that replaced manual coordination and paper-based tracking.",
    "Pragmatic AI: Integrating LLMs as reliable, direct UI features. Built RAG (Retrieval-Augmented Generation) pipelines that convert natural language into secure SQL queries on 20M+ records.",
    "Zero-Cost Infrastructure: Hosting database, auth, and frontend layers entirely on free-tier cloud services to achieve scale on a $0 budget.",
  ],
  story: [
    "Started at Globus Informatics as a Data Analyst, mapping field reporting bottlenecks and tracking logs reported via WhatsApp chats.",
    "Proactively built location-verified check-in web apps, Leaflet mapping tools, and Google Chat email notifications.",
    "Promoted to Junior PM within 14 months, owning state-level tracking portals and telecom dashboards for Bihar and Telangana.",
    "Documentation-First Approach: Authoring BRDs, ERD database schemas, and state machine transitions before coding to ensure clean alignment.",
  ],
};
