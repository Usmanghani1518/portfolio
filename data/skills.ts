import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "Monitor",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "Server",
    skills: ["Node.js", "Express.js", "FastAPI", "REST API", "Microservices"],
  },
  {
    id: "ai-llm",
    label: "AI / LLM",
    icon: "Bot",
    skills: ["LangChain", "LangGraph", "OpenAI", "DeepSeek", "Gemini", "Vapi", "N8N"],
  },
  {
    id: "databases",
    label: "Databases",
    icon: "Database",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "pgvector", "Pinecone", "Redis"],
  },
  {
    id: "devops",
    label: "DevOps & Tools",
    icon: "Cloud",
    skills: ["AWS", "Docker", "Git", "GitHub", "CI/CD", "Linux"],
  },
];
