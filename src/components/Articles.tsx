'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tag, Clock, Star, Flame } from 'lucide-react';

export type Article = {
  id: number | string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;          // ISO string
  readTime: string;      // e.g. "12 min"
  featured?: boolean;
  trending?: boolean;
  imageUrl?: string;
};

type AllArticlesProps = {
  initialActiveTab?: string;
  articles?: Article[];
};

export default function AllArticlesSection({
  initialActiveTab = 'All',
  articles,
}: AllArticlesProps) {
  const [activeTab, setActiveTab] = useState<string>(initialActiveTab);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [stage, setStage] = useState<number>(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Demo data if none provided
  const allArticles: Article[] =
    articles ?? [
      {
        id: 1,
        slug: 'nextjs-blog-system-complete-guide',
        title:
          'Build a Polished Blog System in Next.js (App Router) — A Complete Guide',
        excerpt:
          'From routing and data modeling to UX flourishes like TOC, code copy, notes, and TL;DR—this guide builds a full-featured blog you can ship.',
        category: 'Next.js',
        author: 'Kamran Khan',
        date: '2024-12-18',
        readTime: '12 min',
        featured: true,
        trending: true,
        imageUrl: '/Portfolio/project1.png',
      },
      {
        id: 2,
        slug: 'typescript-design-patterns-enterprise',
        title: 'TypeScript Design Patterns for Enterprise Applications',
        excerpt:
          'Learn enterprise-grade TypeScript patterns that scale with your team and codebase.',
        category: 'TypeScript',
        author: 'Michael Torres',
        date: '2024-12-17',
        readTime: '15 min',
        trending: true,
        imageUrl: '/Portfolio/project2.png',
      },
      {
        id: 3,
        slug: 'modern-css-grid-beyond-basics',
        title: 'Modern CSS Grid: Beyond the Basics',
        excerpt:
          'Explore advanced CSS Grid techniques that will transform your layout capabilities.',
        category: 'CSS',
        author: 'Emma Rodriguez',
        date: '2024-12-16',
        readTime: '8 min',
        imageUrl: '/Portfolio/project3.png',
      },
    ];

  // Reveal animation
  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    [250, 550, 850].forEach((d, i) => setTimeout(() => setStage(i + 1), d));
  }, [isVisible]);

  const formatDate = (dateString: string): string => {
    const d = new Date(dateString);
    const now = new Date();
    const diff = Math.abs(+now - +d);
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.ceil(days / 7)} weeks ago`;
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Categories built locally (no external deps)
  const categories = useMemo(() => {
    const map = new Map<string, number>();
    allArticles.forEach((a) => map.set(a.category, (map.get(a.category) ?? 0) + 1));
    const rows = Array.from(map.entries()).map(([name, count]) => ({ name, count }));
    return [{ name: 'All', count: allArticles.length }, ...rows];
  }, [allArticles]);

  const filtered = useMemo(() => {
    if (activeTab === 'All') return allArticles;
    return allArticles.filter((a) => a.category === activeTab);
  }, [allArticles, activeTab]);

  // --- Layout constants to force identical card sizes
  // Card total height (desktop): image 192px + content fills remaining. Adjust if needed.
  const CARD_HEIGHT = 'h-[420px]'; // consistent height across grid
  const IMAGE_HEIGHT = 'h-48';     // 192px image area

  return (
    <section ref={sectionRef} className="relative bg-[#0a1f1a] text-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
<div className="text-center mb-16">
  <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-lime-400 uppercase">
    COMPLETE COLLECTION
  </div>
  <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem]">
    All Articles
  </h2>
</div>


        {/* Category tabs only */}
        <div
          className={`mb-8 flex flex-wrap justify-center gap-2 transition-all duration-700 ${
            stage >= 2 ? 'opacity-100' : 'opacity-0 translate-y-3'
          }`}
        >
          {categories.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setActiveTab(c.name)}
              className={`group rounded-xl px-4 py-2 text-sm transition-all ${
                activeTab === c.name
                  ? 'scale-105 border border-lime-400/40 bg-lime-400 text-[#0a1f1a] font-bold'
                  : 'border border-white/10 bg-[#0f2f27]/60 text-white hover:border-lime-400/40 hover:text-lime-300'
              }`}
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <span className="inline-flex items-center gap-2">
                <Tag
                  className={`h-4 w-4 ${
                    activeTab === c.name ? 'text-[#0a1f1a]' : 'text-lime-300'
                  }`}
                />
                {c.name}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[11px] ${
                    activeTab === c.name
                      ? 'bg-[#0a1f1a]/20 text-[#0a1f1a]'
                      : 'bg-white/10 text-white/70'
                  }`}
                >
                  {c.count}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          className={`transition-all duration-700 ${
            stage >= 3 ? 'opacity-100' : 'opacity-0 translate-y-3'
          }`}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a, idx) => (
              <Link key={a.id} href={`/articles/${a.slug}`} className="group">
                <article
                  className={`flex ${CARD_HEIGHT} flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f2f27] shadow-sm transition-all hover:-translate-y-0.5 hover:border-lime-400/40 hover:shadow-[0_20px_60px_rgba(0,0,0,.35)]`}
                  style={{ transitionDelay: `${idx * 40}ms` }}
                >
                  {/* image (fixed height) */}
                  {a.imageUrl && (
                    <div className={`relative w-full ${IMAGE_HEIGHT}`}>
                      <Image
                        src={a.imageUrl}
                        alt={a.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        priority={idx < 3}
                      />
                    </div>
                  )}

                  {/* content fills the rest */}
                  <div className="flex min-h-0 flex-1 flex-col p-5">
                    {/* badges */}
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-lime-400 px-2.5 py-0.5 text-[10px] font-bold text-[#0a1f1a]">
                          {a.category}
                        </span>
                        {a.featured && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white">
                            <Star className="h-3 w-3 text-yellow-300" />
                            Featured
                          </span>
                        )}
                        {a.trending && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white">
                            <Flame className="h-3 w-3 text-orange-400" />
                            Trending
                          </span>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs text-white/70">
                        <Clock className="h-3.5 w-3.5 text-lime-300/80" />
                        {a.readTime}
                      </span>
                    </div>

                    {/* title & excerpt with clamps to keep card heights consistent */}
                    <h3 className="mb-2 line-clamp-2 text-lg font-extrabold text-white transition-colors group-hover:text-lime-300">
                      {a.title}
                    </h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-white/75">
                      {a.excerpt}
                    </p>

                    {/* spacer pushes meta to bottom */}
                    <div className="mt-auto" />

                    {/* meta bottom row */}
                    <div className="mt-4 flex items-center justify-between text-xs text-white/60">
                      <div className="flex items-center gap-2">
                        <span className="grid h-6 w-6 place-items-center rounded-full border border-lime-400/30 bg-lime-400/15 text-lime-300">
                          {a.author.charAt(0)}
                        </span>
                        <span className="font-medium text-white/80">{a.author}</span>
                      </div>
                      <span>{formatDate(a.date)}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
