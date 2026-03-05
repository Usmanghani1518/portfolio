import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "langchain-production",
    title: "How I Ship LangChain Apps to Production",
    category: "AI Engineering",
    gradient: "from-cyan-500 to-blue-600",
    slug: "langchain-production",
    readTime: "6 min read",
    date: "June 2025",
    intro:
      "After shipping 4\u20135 LangChain-based AI systems to production for international clients, I\u2019ve developed a repeatable process that avoids the common pitfalls. Here\u2019s exactly how I structure a LangChain project from day one through deployment.",
    sections: [
      {
        title: "Start with the agent graph, not the prompt",
        content:
          "Most developers start writing prompts before they understand the flow. I start with a LangGraph state machine \u2014 defining nodes, edges, and tool calls first. This makes debugging and iteration dramatically faster.",
      },
      {
        title: "Use structured outputs everywhere",
        content:
          "LLMs that return unstructured text are a maintenance nightmare in production. I use Pydantic models with .with_structured_output() on every chain that feeds into application logic.",
      },
      {
        title: "Make observability non-negotiable",
        content:
          "Every LangChain chain in production should have LangSmith tracing enabled. When something fails at 2am for a client in Texas, you need to replay the exact trace \u2014 not guess.",
      },
      {
        title: "Separate retrieval from generation",
        content:
          "For RAG systems, the retrieval quality determines everything. I always evaluate retrieval independently before ever touching the generation step. Pinecone + pgvector for hybrid search is my current default.",
      },
      {
        title: "Deploy on FastAPI, not Jupyter",
        content:
          "Ship FastAPI from day one. Async endpoints, proper error handling, and a clean /health route. Never let a notebook make it to production.",
      },
    ],
  },
  {
    id: "rag-architecture",
    title: "RAG Architecture That Actually Works at Scale",
    category: "Architecture",
    gradient: "from-violet-500 to-purple-700",
    slug: "rag-architecture",
    readTime: "8 min read",
    date: "May 2025",
    intro:
      "RAG sounds simple \u2014 chunk documents, embed them, retrieve, generate. In practice, naive RAG fails in production in predictable ways. Here\u2019s what I\u2019ve learned building RAG systems for medical, legal, and compliance use cases.",
    sections: [
      {
        title: "Chunking strategy matters more than model choice",
        content:
          "Most teams spend hours picking between GPT-4 and Claude while using fixed 512-token chunks. The chunking strategy \u2014 recursive, semantic, or document-aware \u2014 has a bigger impact on retrieval quality than the LLM you choose.",
      },
      {
        title: "Hybrid search: sparse + dense",
        content:
          "Pure vector search misses exact keyword matches. Pure keyword search misses semantic similarity. Combining both (pgvector + full-text search in PostgreSQL, or Pinecone with sparse vectors) consistently outperforms either alone.",
      },
      {
        title: "Reranking is not optional for serious applications",
        content:
          "Adding a Cohere or cross-encoder reranker after initial retrieval improved answer quality in the Metabolic MD project noticeably. The cost is minimal; the gain is significant.",
      },
      {
        title: "Evaluate retrieval and generation separately",
        content:
          "Use RAGAS or a custom eval set to score retrieval@k before you even write the generation prompt. If retrieval is broken, no prompt engineering will save you.",
      },
    ],
  },
  {
    id: "fullstack-ai-stack",
    title: "My Full-Stack AI Stack in 2025",
    category: "Full-Stack",
    gradient: "from-emerald-400 to-cyan-600",
    slug: "fullstack-ai-stack",
    readTime: "5 min read",
    date: "April 2025",
    intro:
      "After 3 years building full-stack applications and the last 2 years shipping AI products end-to-end, this is the exact stack I reach for in 2025 when a client needs a production AI system built fast and built right.",
    sections: [
      {
        title: "Frontend: Next.js + TypeScript + Tailwind",
        content:
          "Next.js 15 App Router for the frontend. TypeScript strict mode from day one. Tailwind for styling. This combination ships fast, types everything, and deploys to Vercel in minutes.",
      },
      {
        title: "Backend: FastAPI + Python",
        content:
          "FastAPI is my default for any AI-adjacent backend. Async by nature, Pydantic validation built-in, and the Python ecosystem means every AI library works without adapters.",
      },
      {
        title: "AI Layer: LangChain + LangGraph",
        content:
          "LangChain for chains and tool calling. LangGraph for any workflow that has branching, loops, or multi-agent coordination. LangSmith for tracing in production.",
      },
      {
        title: "Databases: PostgreSQL + pgvector + Pinecone",
        content:
          "PostgreSQL with pgvector handles most RAG use cases. Pinecone when you need managed vector search at scale. Supabase when you need auth + database + realtime quickly.",
      },
      {
        title: "Deployment: AWS + Docker + GitHub Actions",
        content:
          "Docker containers, ECS or EC2 depending on traffic, GitHub Actions for CI/CD. Simple, reliable, and every DevOps engineer understands it.",
      },
    ],
  },
];
