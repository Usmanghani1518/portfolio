"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/data/projects";

const filterTabs = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Fullstack", value: "fullstack" },
] as const;

type FilterValue = (typeof filterTabs)[number]["value"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const featuredProject = projects.find((p) => p.featured);
  const gridProjects = projects.filter((p) => !p.featured);

  const filteredFeatured =
    activeFilter === "all" || featuredProject?.category === activeFilter
      ? featuredProject
      : null;

  const filteredGrid = gridProjects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h2 className="font-heading text-4xl font-extrabold text-text-primary mb-2 text-balance">
              {"Projects."}
            </h2>
            <p className="text-[#94a3b8]">
              {"Hand-picked collection of my favorite work."}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-[#1e293b] p-1.5 rounded-xl border border-[#334155]">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${
                  activeFilter === tab.value
                    ? "bg-primary-cyan text-background-dark"
                    : "text-[#64748B] hover:text-primary-cyan"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project */}
        {filteredFeatured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16 rounded-2xl overflow-hidden bg-card-dark border border-border-subtle group hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(6,182,212,0.15)] hover:border-primary-cyan"
          >
            <Link href={`/projects/${filteredFeatured.id}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Gradient Placeholder or image */}
                <div className="browser-mockup relative">
                  {filteredFeatured.images && filteredFeatured.images.length > 0 ? (
                    <>
                      <img
                        src={filteredFeatured.images[0]}
                        alt={filteredFeatured.title}
                        className="aspect-video object-cover w-full h-full"
                      />
                      {/* overlay to show title + tags */}
                      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6">
                        <span className="font-heading text-2xl font-bold text-white">
                          {filteredFeatured.title}
                        </span>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {filteredFeatured.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-mono font-bold uppercase text-white bg-[#00000040] px-[6px] py-[2px] rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div
                      className={`aspect-video bg-gradient-to-br ${filteredFeatured.placeholder} flex items-center justify-center`}
                    >
                      <span className="font-mono text-lg text-white/30">
                        {filteredFeatured.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col justify-center">
                  {filteredFeatured.badge && (
                    <span className="text-primary-cyan font-mono text-[11px] font-bold uppercase tracking-[2px] mb-4 block">
                      {filteredFeatured.badge}
                    </span>
                  )}
                  <h3 className="font-heading text-3xl font-bold text-text-primary mb-2">
                    {filteredFeatured.title}
                  </h3>
                  <span className="font-mono text-xs text-primary-cyan mb-4 block">
                    {"Client: "}{filteredFeatured.client}
                  </span>
                  <p className="text-[#94a3b8] text-lg leading-relaxed mb-8">
                    {filteredFeatured.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {filteredFeatured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono font-bold uppercase text-primary-cyan bg-[#06B6D415] px-[10px] py-[3px] rounded-[4px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="flex items-center gap-2 font-bold text-sm text-text-primary group-hover:text-primary-cyan transition-colors">
                      {"View Live"}
                      <ExternalLink className="w-4 h-4" />
                    </span>
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(filteredFeatured.repoUrl, "_blank");
                      }}
                      className="flex items-center gap-2 font-bold text-sm text-text-primary hover:text-primary-cyan transition-colors cursor-pointer"
                    >
                      {"View Code"}
                      <FaGithub className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGrid.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.15 * (index + 1),
              }}
              className="rounded-xl overflow-hidden bg-[#1e293b] border border-border-subtle hover:-translate-y-[4px] transition-all duration-300 hover:border-primary-cyan hover:shadow-[0_8px_32px_rgba(6,182,212,0.12)] group"
            >
              <Link href={`/projects/${project.id}`}>
                {/* Gradient Placeholder or image */}
                {project.images && project.images.length > 0 ? (
                  <div className="relative">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="aspect-video object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4">
                      <span className="font-heading text-lg font-bold text-white">
                        {project.title}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`aspect-video bg-gradient-to-br ${project.placeholder} flex items-center justify-center`}
                  >
                    <span className="font-mono text-lg text-white/30">
                      {project.title}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-1 group-hover:text-primary-cyan transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-primary-cyan mb-3 block">
                    {"Client: "}{project.client}
                  </span>
                  <p className="text-[#94a3b8] text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
