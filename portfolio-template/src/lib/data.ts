export interface Company {
  name: string;
  logoUrl?: string;
  siteUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  metric: string;
  tags: string[];
  image?: string;
  link: string;
}

export interface PersonalInfo {
  name: string;
  username: string;
  role: string;
  location: string;
  openToWork: boolean;
  about: string;
  experienceYears: string;
  experienceIncludes: Company[];
  avatar: string;
  messageUrl: string;
}

export const personalInfo: PersonalInfo = {
  name: "Harini Senthil kumar",
  username: "harinisenthilkumar",
  role: "Product Designer",
  location: "India",
  openToWork: true,
  about: "Harini is a skilled Product Designer based in Bangalore, India, with over 3 years of experience in visual design, design systems, and UI & UX. Specializing in consumer, fintech, conversational AI, and ed tech industries, Harini has contributed to innovative projects at Blubeez, enhancing user experiences and driving impactful design solutions.",
  experienceYears: "3 years",
  experienceIncludes: [
    {
      name: "Khyaal",
      siteUrl: "https://khyaal.com",
      // We'll use a high-quality SVG/CSS fallback representation for the logo
    },
    {
      name: "Blubeez",
      siteUrl: "https://blubeez.ai",
    }
  ],
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80", // Premium unsplash placeholder
  messageUrl: "mailto:hello@harinisk.com"
};

export const experiences: Experience[] = [
  {
    role: "Design Consultant / Product Designer",
    company: "Blubeez",
    period: "Dec 2025 – Present",
    description: "Leading product design and experience strategy for an AI-native conversational platform. Collaborated closely with engineering to build reusable component libraries and ensure high-fidelity UI execution.",
    highlights: [
      "Designed intelligent conversational flows reducing user response latency.",
      "Established core dark/light visual tokens for the AI dashboard.",
      "Delivered fully animated interactive micro-sessions."
    ]
  },
  {
    role: "Founding Product Designer",
    company: "Khyaal",
    period: "June 2023 – Dec 2025",
    description: "Scaled the digital platform from 50k to 5 million users. Led design for over 15 high-impact features, helping secure a $4M funding round. Directed a story-led, motion-first mobile app and marketing website redesign.",
    highlights: [
      "Crafted mobile-first screens resulting in a 40% boost in daily user retention.",
      "Built Khyaal's design system spanning 300+ accessible components.",
      "Redesigned the main landing page with interactive scroll animations."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Khyaal Redesign",
    description: "A story-led, motion-first interface upgrade helping scale active membership to 5 million seniors.",
    metric: "40% Higher Engagement",
    tags: ["Product Design", "Framer Motion", "UX Research"],
    link: "https://khyaal.com"
  },
  {
    title: "Blubeez Conversational AI",
    description: "Streamlining complex enterprise workflows into natural, fluid agent interfaces.",
    metric: "1.8s Response Rate",
    tags: ["Conversational UX", "Design Systems", "AI Dashboards"],
    link: "#"
  },
  {
    title: "Ed-Tech Assessment Console",
    description: "An intuitive layout allowing educators to build complex question trees in real time.",
    metric: "99.2% Task Completion",
    tags: ["Dashboard UX", "React Components"],
    link: "#"
  }
];

// Replicates the target iframe site. The template embeds this site when in the "Portfolio" tab.
// Users can set this to their own site to act as a wrapper, or they can disable it to use the native PortfolioView instead!
export const iframeUrl = "https://harinisk.com";
export const showIframeOnly = true; // Set to true to embed iframeUrl directly like Wall of Portfolios, or false to show native Project Cards
