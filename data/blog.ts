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
  {
    id: "langgraph-multi-agent",
    title: "LangGraph: Building Multi-Agent Systems That Don't Break",
    category: "AI Engineering",
    gradient: "from-blue-600 to-indigo-700",
    slug: "langgraph-multi-agent",
    readTime: "9 min read",
    date: "June 2025",
    intro:
      "LangGraph is the most powerful tool I\u2019ve added to my AI stack \u2014 and also the most misunderstood. After using it on ESG scoring agents and travel booking systems, here\u2019s how I actually structure multi-agent workflows that stay predictable in production.",
    sections: [
      {
        title: "Why LangChain alone isn\u2019t enough for complex agents",
        content:
          "Single-chain LangChain works perfectly for linear workflows. The moment you need branching logic, conditional tool calls, or multiple specialized agents collaborating, you need a state machine. That\u2019s exactly what LangGraph provides \u2014 a directed graph where each node is an agent or tool, and edges define the flow.",
      },
      {
        title: "The state schema is your contract",
        content:
          "Every LangGraph workflow starts with a TypedDict state schema. This isn\u2019t optional \u2014 it\u2019s the contract between nodes. I define the state first, before writing a single node. Every field that flows through the graph must live here. This discipline alone eliminates 80% of hard-to-debug issues.",
      },
      {
        title: "Supervisor pattern vs parallel agents",
        content:
          "For most client projects, I use a supervisor pattern: one orchestrator agent decides which specialist agent handles the current task. Parallel agents sound appealing but introduce synchronization complexity. Start with supervisor, move to parallel only when latency demands it.",
      },
      {
        title: "Human-in-the-loop without rewriting your graph",
        content:
          "LangGraph\u2019s interrupt_before and interrupt_after let you pause execution at any node for human review. For the ESG platform, we paused before final scoring to allow compliance officers to verify edge cases. This feature alone justified choosing LangGraph over a custom solution.",
      },
      {
        title: "Persisting state across sessions",
        content:
          "Use LangGraph\u2019s built-in checkpointers (PostgresSaver for production, MemorySaver for development). This gives you conversation memory, the ability to resume interrupted runs, and full audit trails \u2014 essential for client-facing AI products.",
      },
    ],
  },
  {
    id: "pgvector-vs-pinecone",
    title: "pgvector vs Pinecone: Which One Should You Actually Use?",
    category: "Databases",
    gradient: "from-orange-500 to-pink-600",
    slug: "pgvector-vs-pinecone",
    readTime: "7 min read",
    date: "May 2025",
    intro:
      "I\u2019ve shipped production systems using both pgvector and Pinecone \u2014 sometimes in the same project. The internet is full of benchmark comparisons, but what actually matters is matching the right tool to the right use case. Here\u2019s my real-world decision framework.",
    sections: [
      {
        title: "Start with pgvector \u2014 almost always",
        content:
          "If you\u2019re already using PostgreSQL, adding pgvector costs you one extension install. You get vector search inside your existing database, ACID guarantees, JOINs with relational data, and zero additional infrastructure. For 90% of RAG use cases under 10 million vectors, pgvector is the right answer.",
      },
      {
        title: "When Pinecone earns its place",
        content:
          "Pinecone becomes the right choice when you need managed infrastructure at massive scale, when your team lacks PostgreSQL expertise, or when you need built-in sparse-dense hybrid search without building it yourself. For Metabolic MD, we started with pgvector and migrated to Pinecone when the document corpus grew to multi-million entries.",
      },
      {
        title: "Hybrid search: the real performance unlock",
        content:
          "Neither pure vector search nor pure keyword search is optimal. The best retrieval combines both. With pgvector you build hybrid search manually \u2014 full-text search + vector similarity, then merge results. Pinecone\u2019s sparse-dense index handles this natively. This complexity difference is often the deciding factor.",
      },
      {
        title: "My actual decision framework",
        content:
          "Under 5M vectors + PostgreSQL already in stack \u2192 pgvector. Over 5M vectors OR need managed scaling \u2192 Pinecone. Need hybrid search fast without building it \u2192 Pinecone. Need to JOIN vectors with relational data \u2192 pgvector always. Budget-conscious project \u2192 pgvector (Pinecone costs add up).",
      },
      {
        title: "The setup that wins most often",
        content:
          "For most client projects I now use both: pgvector as the primary store for structured + vector data with relational queries, and Pinecone for the high-volume semantic search layer. They\u2019re not mutually exclusive \u2014 they\u2019re complementary.",
      },
    ],
  },
  {
    id: "fastapi-ai-backend",
    title: "Why FastAPI Is the Best Backend for AI Applications",
    category: "Backend",
    gradient: "from-teal-500 to-emerald-600",
    slug: "fastapi-ai-backend",
    readTime: "6 min read",
    date: "April 2025",
    intro:
      "I\u2019ve built backends in Node.js, Express.js, and FastAPI. For AI-adjacent work \u2014 anything involving LLMs, vector databases, embeddings, or data pipelines \u2014 FastAPI wins every time. Here\u2019s exactly why, and how I structure FastAPI projects for production AI systems.",
    sections: [
      {
        title: "Async by default \u2014 critical for LLM workloads",
        content:
          "LLM API calls are slow. A GPT-4 response might take 3\u201315 seconds. In Node.js you handle this naturally. In Flask or Django you block the thread. FastAPI\u2019s async/await with Python\u2019s asyncio means you can handle hundreds of concurrent LLM calls without spawning new threads \u2014 essential when multiple users query your AI simultaneously.",
      },
      {
        title: "Pydantic validation is built-in \u2014 not bolted on",
        content:
          "Every request body, every response schema, every LangChain structured output flows through Pydantic. FastAPI + Pydantic v2 means your API contracts are typed, validated, and auto-documented \u2014 with zero extra code. This matters enormously when your AI agent returns complex nested objects.",
      },
      {
        title: "Automatic OpenAPI docs \u2014 clients love this",
        content:
          "Every FastAPI app ships with /docs (Swagger) and /redoc out of the box. For client projects, I can share a live documentation URL the day I deploy. This alone speeds up frontend integration by days.",
      },
      {
        title: "The Python ecosystem is the AI ecosystem",
        content:
          "LangChain, LangGraph, Hugging Face, OpenAI SDK, Pinecone client, pgvector, Pandas, NumPy \u2014 all Python. Choosing FastAPI means every AI tool works natively, without wrappers, adapters, or HTTP bridges between services.",
      },
      {
        title: "Project structure I use on every FastAPI AI project",
        content:
          "app/ \u2192 main.py (FastAPI instance), routers/ (endpoints grouped by feature), services/ (business logic + LangChain chains), models/ (Pydantic schemas), db/ (database sessions), agents/ (LangGraph graphs). Keep it flat, keep it predictable.",
      },
    ],
  },
  {
    id: "ai-products-for-clients",
    title: "What I\u2019ve Learned Delivering AI Products for International Clients",
    category: "Product & Process",
    gradient: "from-rose-500 to-orange-500",
    slug: "ai-products-for-clients",
    readTime: "7 min read",
    date: "March 2025",
    intro:
      "In the last two years I\u2019ve delivered AI products end-to-end for clients in the US, Australia, and beyond \u2014 from a compliance platform in Sydney to a medical RAG system in Colorado. These are the lessons that don\u2019t show up in documentation.",
    sections: [
      {
        title: "Scope the AI component separately from the application",
        content:
          "Clients understand \u2018build a dashboard.\u2019 They do not understand \u2018the AI agent might not always return structured output.\u2019 I\u2019ve learned to scope AI components with explicit uncertainty budgets \u2014 defining what the system guarantees and what it attempts. This prevents the most common client disappointment.",
      },
      {
        title: "Deliver a working demo by day 3, always",
        content:
          "The fastest way to align with an international client is to show something working \u2014 even a stub. A FastAPI endpoint that returns mock AI responses + a basic React UI by day 3 sets the tone for the entire engagement. Clients feel confident, feedback comes early, and direction locks in.",
      },
      {
        title: "Async communication requires over-documentation",
        content:
          "Working across time zones (Pakistan \u2192 US \u2192 Australia) means you can\u2019t resolve confusion in a quick call. I maintain a living architecture document, update it after every major decision, and share it proactively. This single habit has prevented more misunderstandings than any number of meetings.",
      },
      {
        title: "Production means monitoring from day one",
        content:
          "Every AI system I build for clients ships with: LangSmith tracing for LLM calls, structured logging in FastAPI, a /health endpoint, and basic alerting. Non-negotiable. The first time something breaks at midnight and you can replay the exact trace, you\u2019ll never skip this step again.",
      },
      {
        title: "The real skill is knowing what not to build with AI",
        content:
          "Not every problem is an AI problem. I\u2019ve talked clients out of AI solutions when a deterministic algorithm would be faster, cheaper, and more reliable. This honesty builds more trust and longer relationships than saying yes to everything.",
      },
    ],
  },
  {
    id: "nextjs-fastapi-architecture",
    title: "Next.js Frontend + FastAPI Backend: The Full-Stack AI Blueprint",
    category: "Full-Stack",
    gradient: "from-sky-500 to-blue-700",
    slug: "nextjs-fastapi-architecture",
    readTime: "8 min read",
    date: "March 2025",
    intro:
      "This is the architecture I reach for when a client needs a complete AI-powered web application. Next.js 15 handles the frontend and server-side rendering. FastAPI handles the AI backend and LLM orchestration. Here\u2019s how I wire them together cleanly.",
    sections: [
      {
        title: "Why this split makes sense for AI products",
        content:
          "JavaScript excels at UI, real-time updates, and SEO. Python excels at AI, data processing, and the entire ML ecosystem. Mixing them in a single monorepo forces compromises on both. A clean split \u2014 Next.js for frontend, FastAPI for AI backend \u2014 lets each language do what it does best.",
      },
      {
        title: "API design: REST for CRUD, SSE for streaming",
        content:
          "Standard REST endpoints handle CRUD operations. For LLM responses, I use Server-Sent Events (SSE) from FastAPI to stream tokens to the Next.js frontend in real time. This creates the ChatGPT-style streaming UX that clients now expect, without WebSocket complexity.",
      },
      {
        title: "Authentication across two services",
        content:
          "I use Supabase Auth or JWT tokens issued by FastAPI and validated in Next.js middleware. Never duplicate auth logic \u2014 the FastAPI backend validates tokens on every protected route. Next.js middleware handles redirects before the page renders.",
      },
      {
        title: "Deployment: Vercel + AWS in tandem",
        content:
          "Next.js deploys to Vercel (zero config, edge functions, automatic previews). FastAPI deploys to AWS ECS with Docker. A single GitHub Actions workflow runs tests and deploys both on merge to main. Environment variables managed in Vercel dashboard and AWS Secrets Manager.",
      },
      {
        title: "The folder structure I use in every project",
        content:
          "Monorepo with /frontend (Next.js) and /backend (FastAPI). Shared /types directory with TypeScript interfaces and Pydantic schemas kept in sync. A /docs folder with architecture decisions. Docker Compose for local development running both services simultaneously with hot reload.",
      },
    ],
  },
  {
    id: "ai-agent-tool-calling",
    title: "AI Agent Tool Calling: A Deep Dive Into How I Build It",
    category: "AI Engineering",
    gradient: "from-indigo-500 to-violet-700",
    slug: "ai-agent-tool-calling",
    readTime: "8 min read",
    date: "February 2025",
    intro:
      "Tool calling (function calling) is what transforms an LLM from a text generator into an AI agent that takes real actions. After building travel booking agents, ESG scoring agents, and medical retrieval systems, here\u2019s my complete framework for designing tool-calling agents that work reliably.",
    sections: [
      {
        title: "Tools are just functions with descriptions",
        content:
          "In LangChain, a tool is a Python function decorated with @tool, with a docstring that the LLM reads to decide when to call it. The quality of that docstring determines whether the agent calls the right tool at the right time. I spend as much time writing tool descriptions as I do writing the functions themselves.",
      },
      {
        title: "Tool design principles that matter",
        content:
          "Each tool should do exactly one thing. Tools that try to be flexible confuse the LLM about when to use them. Return structured Pydantic objects, never raw strings. Include error information in the return type so the agent can handle failures gracefully without crashing the workflow.",
      },
      {
        title: "The Travel AI case study",
        content:
          "The travel assistant had 6 tools: search_flights, search_hotels, check_availability, create_booking, get_booking_status, cancel_booking. Each had a crisp one-sentence description. The LangGraph supervisor routed user intents to the correct tool sequence. This architecture handled the full booking lifecycle autonomously.",
      },
      {
        title: "Handling tool failures and retries",
        content:
          "LLMs will sometimes call tools with invalid parameters. I always wrap tool execution in try/except, return structured error responses, and configure the agent with a retry limit. LangGraph\u2019s conditional edges make it easy to route to an error handler node when a tool fails repeatedly.",
      },
      {
        title: "Testing tool-calling agents before production",
        content:
          "I test each tool in isolation first (unit tests). Then I test the full agent with a fixed set of user scenarios using LangSmith datasets. I track tool call accuracy \u2014 what percentage of the time does the agent call the right tool with valid parameters. Anything under 90% means the tool description needs rewriting.",
      },
    ],
  },
];
