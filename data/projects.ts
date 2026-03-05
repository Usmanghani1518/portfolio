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
      "/images/projects/esgai.png",
      "/images/projects/esgai1.png",
      "/images/projects/esgai2.png",
      "/images/projects/esgai3.png",
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
    id: "metabolic-md",
    title: "Metabolic MD",
    description:
      "A RAG-based medical document retrieval system reducing search time by 70% with source-level attribution across PDFs, websites, and video.",
    tags: ["FastAPI", "LangChain", "Pinecone", "RAG"],
    liveUrl: "#",
    repoUrl: "https://github.com/Usmanghani1518",
    featured: false,
    category: "backend",
    client: "Colorado, USA",
    placeholder: "from-emerald-500 to-teal-700",
    overview:
      "Developed a full-stack RAG-based medical document retrieval system for a healthcare client in Colorado. The system allows medical professionals to search across large document libraries \u2014 PDFs, websites, and video transcripts \u2014 with accurate, source-attributed answers in seconds.",
    problem:
      "Medical staff spent excessive time manually searching through PDFs, clinical documents, and online resources to answer patient and staff queries. Search was slow, inaccurate, and provided no source traceability.",
    solution:
      "Implemented a Retrieval-Augmented Generation (RAG) pipeline using LangChain, Pinecone for vector storage, and FastAPI for the backend. Documents are chunked, embedded, and indexed. Queries retrieve the most relevant chunks and a LLM generates precise, source-attributed answers.",
    results: [
      "70% reduction in document search time",
      "Full source-level attribution for every answer",
      "Supports PDFs, websites, and video as knowledge sources",
      "Clean production-ready interface delivered",
    ],
    techStack: {
      Backend: ["FastAPI", "LangChain", "Python"],
      "AI/Data": ["Pinecone", "RAG Architecture", "OpenAI Embeddings"],
      Sources: ["PDFs", "Websites", "Video Transcripts"],
      DevOps: ["AWS", "Docker"],
    },
  },
];
