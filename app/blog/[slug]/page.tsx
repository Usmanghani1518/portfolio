import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import AuthorCard from "@/components/ui/AuthorCard";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Usman Ghani`,
    description: post.intro.slice(0, 160),
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <main className="bg-background-dark min-h-screen">
      {/* Hero block */}
      <div className="bg-background-dark py-20 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            href="/#blog"
            className="text-primary-cyan hover:underline font-mono text-sm mb-8 inline-block"
          >
            {"<- Back to Blog"}
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-cyan" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-primary-cyan">
              {post.category}
            </span>
          </div>

          <h1 className="font-heading text-[36px] md:text-[48px] font-extrabold text-text-primary tracking-tight mb-4 text-balance">
            {post.title}
          </h1>

          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-[#64748B]">
              {post.date}
            </span>
            <span className="text-[#334155]">{"/"}</span>
            <span className="font-mono text-sm text-[#64748B]">
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Gradient thumbnail */}
      <div className={`w-full h-[320px] bg-gradient-to-br ${post.gradient}`} />

      {/* Article content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Intro */}
        <p className="text-lg text-[#cbd5e1] leading-[1.8] mb-12 border-l-[3px] border-primary-cyan pl-4">
          {post.intro}
        </p>

        {/* Sections */}
        {post.sections.map((section, i) => (
          <div key={i} className="mt-12">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-primary-cyan font-mono text-sm">
                {String(i + 1).padStart(2, "0")}.
              </span>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                {section.title}
              </h2>
            </div>
            <p className="text-[#94a3b8] leading-[1.8] text-base">
              {section.content}
            </p>
          </div>
        ))}

        {/* Author card */}
        <AuthorCard />

        {/* Bottom nav */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-border-subtle">
          <div>
            {prevPost && (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="text-primary-cyan hover:underline font-mono text-sm"
              >
                {"<- Previous Post"}
              </Link>
            )}
          </div>
          <Link
            href="/#blog"
            className="text-[#64748B] hover:text-primary-cyan transition-colors font-mono text-sm"
          >
            View All Posts
          </Link>
          <div>
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="text-primary-cyan hover:underline font-mono text-sm"
              >
                {"Next Post ->"}
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
