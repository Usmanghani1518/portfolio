import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "esg-ai-platform",
    title: "ESG AI Platform",
    description:
      "A full-stack AI compliance platform automating ESG scoring across Environmental, Social, and Governance categories \u2014 delivered to production within 2 months.",
    tags: ["FastAPI", "LangChain", "React.js", "Pinecone", "pgvector"],
    liveUrl: "#",
    repoUrl: "https://github.com/Usmanghani1518",
    featured: true,
    category: "fullstack",
    badge: "FEATURED PROJECT",
    client: "Sydney, Australia",
    placeholder: "from-cyan-500 to-blue-700",
    images: [
      "/images/projects/esg/esgai.png",
      "/images/projects/esg/esgai1.png",
      "/images/projects/esg/esgai2.png",
      "/images/projects/esg/esgai3.png",
    ],
    overview:
      "Delivered a complete AI-powered ESG compliance platform for a client based in Sydney, Australia. The system automates ESG scoring across three categories \u2014 Environmental, Social, and Governance \u2014 eliminating manual evaluation entirely. Built end-to-end: backend AI agent, intelligent web scraping pipeline, and a clean production-ready frontend dashboard.",
    problem:
      "The client needed to evaluate hundreds of companies for ESG compliance manually \u2014 a process that was slow, inconsistent, and unscalable. They needed an automated, intelligent system that could scrape, analyze, and score companies in real time.",
    solution:
      "Built a FastAPI backend with a LangChain-powered AI agent that orchestrates web scraping, data extraction, and AI scoring. Used pgvector and Pinecone for semantic search and document retrieval. Delivered a React.js dashboard for clients to view and export scores.",
    results: [
      "Eliminated 100% of manual ESG evaluation",
      "Delivered full production system in 2 months",
      "Covers Environmental, Social, and Governance scoring",
      "Scales to hundreds of companies simultaneously",
    ],
    techStack: {
      Backend: ["FastAPI", "LangChain", "LangGraph", "Python"],
      "AI/Data": ["pgvector", "Pinecone", "Web Scraping"],
      Frontend: ["React.js", "TypeScript"],
      DevOps: ["AWS", "Docker"],
    },
  },
  {
    id: "travel-advances",
    title: "Travel Advances AI",
    description:
      "A full-stack AI travel assistant with real-time integrations for flights, hotels, and bookings \u2014 enabling 24/7 automated customer operations.",
    tags: ["FastAPI", "LangChain", "React.js", "Flight APIs"],
    liveUrl: "#",
    repoUrl: "https://github.com/Usmanghani1518",
    featured: false,
    category: "fullstack",
    client: "Texas, USA",
    placeholder: "from-violet-500 to-purple-800",
    images: [
      "/images/projects/travel/travel.png",
      "/images/projects/travel/travel1.png",
    ],
    overview:
      "Built a complete AI travel assistant platform for a client in Texas. The system handles real-time flight searches, hotel bookings, and customer queries autonomously \u2014 end-to-end, from backend orchestration to the user-facing interface.",
    problem:
      "The client\u2019s travel operations required constant human agents to handle booking queries, search flights, and manage hotel reservations \u2014 creating high overhead and slow response times.",
    solution:
      "Developed a multi-tool LangChain AI agent connected to live Flight and Hotel APIs. The FastAPI backend orchestrates tool calls, manages conversation state, and handles real-time booking data. The React.js frontend provides a clean conversational UI.",
    results: [
      "24/7 automated customer operations (zero manual intervention)",
      "Real-time flight and hotel availability",
      "Multi-turn conversation with full booking capability",
      "Reduced operational overhead significantly",
    ],
    techStack: {
      Backend: ["FastAPI", "LangChain", "LangGraph", "Python"],
      APIs: ["Flight APIs", "Hotel APIs", "Booking APIs"],
      Frontend: ["React.js", "TypeScript"],
      DevOps: ["AWS", "Docker"],
    },
  },
  {
    id: "buycex",
    title: "BuyCEX",
    description:
      "A crypto trading platform frontend built with React, Tailwind CSS, and Framer Motion, integrated with live APIs and state management via Redux Toolkit.",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "Redux Toolkit", "API Integration"],
    liveUrl: "#",
    repoUrl: "https://github.com/Usmanghani1518",
    featured: false,
    category: "frontend",
    client: "Remote",
    placeholder: "from-violet-500 to-purple-800",
    images: [
      "/images/projects/buycex/buycex.png",
      "/images/projects/buycex/buycex1.png",
      "/images/projects/buycex/buycex2.png",
    ],
    overview:
      "Frontend development for BuyCEX, a cryptocurrency trading dashboard. Implemented responsive UI components, animated transitions, and integrated multiple API endpoints for price feeds and user actions.",
    problem:
      "The client needed a modern, performant frontend interface for their crypto platform that could handle real-time data updates and complex user interactions.",
    solution:
      "Built the interface using React.js with Tailwind CSS for rapid styling and Framer Motion for smooth animations. State management and API communication were handled through Redux Toolkit slices and async thunks.",
    results: [
      "Fully responsive, polished user interface",
      "Real-time price updates and order handling",
      "Smooth animated interactions across the app",
      "Scalable Redux architecture for future features",
    ],
    techStack: {
      Frontend: ["React.js", "Tailwind CSS", "Framer Motion", "Redux Toolkit"],
      APIs: ["Crypto price feeds", "Trading endpoints"],
    },
  },
];
