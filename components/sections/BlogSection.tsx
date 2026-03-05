"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";

export default function BlogSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="blog" className="py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-10">
          <h2 className="font-heading text-4xl md:text-[64px] font-extrabold text-text-primary">
            {"Latest Articles"}
            <span className="text-primary-cyan">.</span>
          </h2>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-1 text-primary-cyan font-mono text-sm font-semibold hover:underline group"
          >
            {"View All Posts"}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc(33.333%-1rem)] min-w-0 bg-card-dark rounded-xl border border-border-subtle overflow-hidden group transition-all duration-300 relative"
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
          </div>

          {/* Prev Button */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute top-1/2 -translate-y-1/2 -left-5 w-10 h-10 rounded-full bg-card-dark border border-border-subtle flex items-center justify-center hover:border-primary-cyan hover:text-primary-cyan transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed text-text-primary z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute top-1/2 -translate-y-1/2 -right-5 w-10 h-10 rounded-full bg-card-dark border border-border-subtle flex items-center justify-center hover:border-primary-cyan hover:text-primary-cyan transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed text-text-primary z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {blogPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-6 bg-primary-cyan"
                  : "w-2 bg-border-subtle hover:bg-text-muted"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile View All link */}
        <div className="flex justify-center mt-8 md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-primary-cyan font-mono text-sm font-semibold hover:underline group"
          >
            {"View All Posts"}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
