"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog";

const categories = [
  "All",
  "AI Engineering",
  "Architecture",
  "Full-Stack",
  "Backend",
  "Databases",
  "Product & Process",
];

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-background-dark min-h-screen">
      {/* Hero */}
      <div className="bg-background-dark dot-grid py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/#blog"
            className="text-primary-cyan hover:underline font-mono text-sm mb-8 inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            {"Back to Home"}
          </Link>

          <h1 className="font-heading text-4xl md:text-[64px] font-extrabold text-text-primary tracking-tight text-balance">
            {"All Articles"}
            <span className="text-primary-cyan">.</span>
          </h1>
          <p className="text-slate-400 text-lg mt-4 max-w-2xl leading-relaxed">
            Thoughts on AI engineering, full-stack development, and building
            products that ship.
          </p>
        </div>
      </div>

      {/* Filter Tabs + Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-mono text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary-cyan text-background-dark"
                  : "bg-card-dark border border-border-subtle text-text-muted hover:border-primary-cyan hover:text-primary-cyan"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <article
              key={post.id}
              className="bg-card-dark rounded-xl border border-border-subtle overflow-hidden group transition-all duration-300 relative"
            >
              {/* Top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

              <Link href={`/blog/${post.slug}`}>
                {/* Cover image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-30`} />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-cyan" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary-cyan">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[11px] text-[#64748B]">
                      {post.date}
                    </span>
                    <span className="text-[#334155]">{"/"}</span>
                    <span className="font-mono text-[11px] text-[#64748B]">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading text-[16px] font-bold text-text-primary group-hover:text-primary-cyan transition-colors leading-snug mb-4">
                    {post.title}
                  </h3>

                  <span className="read-more inline-flex items-center gap-2 text-[13px] font-semibold text-primary-cyan">
                    <span className="read-more-text">READ MORE</span>
                    <ArrowRight className="w-4 h-4 arrow-icon transition-transform" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-muted font-mono text-sm">
              No articles in this category yet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
