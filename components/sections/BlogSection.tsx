"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" className="py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-heading text-4xl md:text-[64px] font-extrabold text-text-primary mb-12">
          {"Latest Articles"}
          <span className="text-primary-cyan">.</span>
        </h2>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              className="bg-card-dark rounded-xl border border-border-subtle overflow-hidden group transition-all duration-300 relative"
            >
              {/* Top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

              <Link href={`/blog/${post.slug}`}>
                {/* Gradient thumbnail */}
                <div
                  className={`h-40 bg-gradient-to-br ${post.gradient}`}
                />

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
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
