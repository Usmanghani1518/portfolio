import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Usman Ghani`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  const sections = [
    { heading: "Overview", body: project.overview },
    { heading: "Problem", body: project.problem },
    { heading: "Solution", body: project.solution },
  ];

  return (
    <main className="bg-background-dark min-h-screen">
      {/* Hero block */}
      <div className="bg-background-dark py-20 dot-grid relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            href="/#projects"
            className="text-primary-cyan hover:underline font-mono text-sm mb-8 inline-block"
          >
            {"<- Back to Projects"}
          </Link>

          <span className="text-primary-cyan font-mono text-[11px] font-bold uppercase tracking-[2px] mb-4 block">
            {project.category.toUpperCase()} PROJECT
          </span>

          <h1 className="font-heading text-[40px] md:text-[56px] font-extrabold text-text-primary tracking-tight mb-4 text-balance">
            {project.title}
          </h1>

          <span className="font-mono text-sm text-primary-cyan mb-6 block">
            {"Client: "}{project.client}
          </span>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono font-bold uppercase text-primary-cyan bg-[#06B6D415] px-[10px] py-[3px] rounded-[4px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Image gallery or gradient fallback */}
      {project.images && project.images.length > 0 ? (
        <div className="w-full flex overflow-x-auto gap-4 py-8">
          {project.images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${project.title} screenshot ${idx + 1}`}
              className="h-[400px] object-cover flex-shrink-0 rounded-lg"
            />
          ))}
        </div>
      ) : (
        <div
          className={`w-full h-[400px] bg-gradient-to-br ${project.placeholder} flex flex-col items-center justify-center`}
        >
          <span className="font-mono text-lg text-white/20">
            {project.title}
          </span>
          <span className="text-white/10 text-xs font-mono mt-2">
            Upload your own project screenshot here
          </span>
        </div>
      )}

      {/* Content sections */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {sections.map((section) => (
          <div key={section.heading} className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4 border-l-[3px] border-primary-cyan pl-4">
              {section.heading}
            </h2>
            <p className="text-[#94a3b8] leading-[1.75]">{section.body}</p>
          </div>
        ))}

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-text-primary mb-4 border-l-[3px] border-primary-cyan pl-4">
            Tech Stack
          </h2>
          <div className="flex flex-col gap-4">
            {Object.entries(project.techStack).map(([category, techs]) => (
              <div key={category}>
                <span className="text-[#64748B] font-mono text-xs uppercase tracking-wider mb-2 block">
                  {category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="skill-badge px-[14px] py-[8px] bg-[#0F172A] border border-border-subtle text-[12px] font-mono rounded-[8px] text-[#cbd5e1]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Results */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-text-primary mb-4 border-l-[3px] border-primary-cyan pl-4">
            Key Results
          </h2>
          <ul className="space-y-3">
            {project.results.map((result, i) => (
              <li
                key={i}
                className="text-[#94a3b8] leading-[1.75] flex items-start gap-3"
              >
                <span className="text-primary-cyan mt-1 shrink-0">
                  {"\u25CF"}
                </span>
                {result}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-wrap items-center gap-4 mt-12 pt-8 border-t border-border-subtle">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-primary-cyan text-background-dark font-bold rounded-lg hover:bg-primary-cyan/90 transition-all text-sm inline-flex items-center gap-2"
          >
            {"View Live"}
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-primary-cyan text-primary-cyan font-bold rounded-lg hover:bg-primary-cyan/10 transition-all text-sm inline-flex items-center gap-2"
          >
            {"View on GitHub"}
            <FaGithub className="w-4 h-4" />
          </a>
          <Link
            href="/#projects"
            className="text-primary-cyan hover:underline font-mono text-sm ml-auto"
          >
            {"<- All Projects"}
          </Link>
        </div>
      </div>
    </main>
  );
}
