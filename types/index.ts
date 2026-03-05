export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
  category: "frontend" | "backend" | "fullstack";
  badge?: string;
  client: string;
  placeholder: string;
  images: string[];
  overview: string;
  problem: string;
  solution: string;
  results: string[];
  techStack: Record<string, string[]>;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  side: "left" | "right";
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  gradient: string;
  slug: string;
  readTime: string;
  date: string;
  intro: string;
  coverImage: string;
  sections: Array<{ title: string; content: string }>;
}
