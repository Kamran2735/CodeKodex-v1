'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Sparkles, Tag } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  category: string;
  readTime: string;
  date: string;
  cover?: string;       // thumbnail / hero image
  gradient: string;
  tags: string[];
  featured: boolean;
  href?: string;
}

export default function ArticlesFeaturedSection() {
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  // Data (unchanged)
  const articles: Article[] = [
    {
      id: 1,
      title: 'Advanced React Performance Optimization',
      excerpt:
        'Master React performance with memoization, virtualization, and bundle optimization to make apps feel instant—without over-engineering.',
      author: 'Alex Chen',
      authorRole: 'Senior React Developer',
      category: 'React',
      readTime: '12 min read',
      date: 'Dec 18, 2024',
      cover: '/Portfolio/project1.png',
      gradient: 'from-[#0f2f27] to-[#1a3530]',
      tags: ['React', 'Performance', 'Optimization'],
      featured: true,
      href: '/blog/react-performance-optimization',
    },
    {
      id: 2,
      title: 'Building Microservices with Node.js',
      excerpt:
        'Guide to architecting scalable microservices using Node.js, Docker, and Kubernetes.',
      author: 'Sarah Johnson',
      authorRole: 'Backend Architect',
      category: 'Backend',
      readTime: '18 min read',
      date: 'Dec 15, 2024',
      cover: '/Portfolio/project2.png',
      gradient: 'from-[#0f2f27] to-[#1a3530]',
      tags: ['Node.js', 'Microservices'],
      featured: true,
      href: '/blog/microservices-node',
    },
    {
      id: 3,
      title: 'TypeScript Design Patterns for 2024',
      excerpt:
        'Modern TypeScript patterns that improve maintainability and type-safety in real projects.',
      author: 'Michael Torres',
      authorRole: 'TS Evangelist',
      category: 'TypeScript',
      readTime: '15 min read',
      date: 'Dec 12, 2024',
      cover: '/Portfolio/project3.png',
      gradient: 'from-[#0f2f27] to-[#1a3530]',
      tags: ['TypeScript', 'Patterns'],
      featured: true,
      href: '/blog/ts-design-patterns-2024',
    },
  ];

  const current = articles[selected];


  // Autoplay every 5s, paused when user hovers the entire section
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setSelected((prev) => (prev + 1) % articles.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused, articles.length]);

  return (
    <section
      ref={containerRef}
      className="bg-[#0a1f1a] text-white py-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
<div className="text-center mb-16">
  <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-lime-400 uppercase">
    FEATURED
  </div>
  <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem]">
    Featured
    Articles
  </h2>

  <p className="mx-auto mt-3 max-w-3xl text-lg md:text-xl text-white/70">
    Deep dives into cutting-edge concepts, curated for developers who want to stay ahead.
  </p>
</div>


        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Sidebar — vertically centered on lg, with image per row */}
          <div className="space-y-4 lg:col-span-4 lg:self-center">
            {articles.map((a, i) => (
              <button
                key={a.id}
                onClick={() => setSelected(i)}
                className={`group w-full text-left transition-transform ${
                  i === selected ? 'scale-[1.01]' : 'hover:scale-[1.01]'
                }`}
                aria-pressed={i === selected}
              >
                <div
                  className={`relative flex items-center gap-3 rounded-xl border p-3 ${
                    i === selected
                      ? 'border-lime-400/50 bg-[#0f2f27]'
                      : 'border-white/10 bg-[#0f2f27]/40 hover:border-white/20'
                  }`}
                >
                  {/* Sidebar image — centered */}
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-white/10">
                    {a.cover ? (
                      <Image
                        src={a.cover}
                        alt={a.title}
                        fill
                        className="object-cover"
                        sizes="48px"
                        priority={i === 0}
                      />
                    ) : null}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wide text-lime-400">
                        {a.category}
                      </span>
                    </div>
                    <h3
                      className={`line-clamp-2 text-sm font-semibold leading-snug ${
                        i === selected ? 'text-lime-400' : 'text-white/85'
                      }`}
                    >
                      {a.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-2 text-[11px] text-white/55">
                      <span>{a.readTime}</span>
                      <span>•</span>
                      <span>{a.date}</span>
                    </div>
                  </div>

                  {i === selected && (
                    <span className="absolute -left-1 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-lime-400" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Featured card */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-lime-400/20 bg-gradient-to-br from-[#0f2f27] to-[#1a3530] shadow-lg">
              {/* Cover image */}
              {current.cover && (
                <div className="relative h-48 w-full overflow-hidden md:h-56">
                  <Image src={current.cover} alt={current.title} fill className="object-cover" />
                </div>
              )}

              <div className="p-6 md:p-8">
                {/* badges/top meta */}
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {current.featured && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-lime-400 px-2.5 py-0.5 text-[10px] font-bold text-[#0a1f1a]">
                        <Sparkles className="h-3 w-3" />
                        FEATURED
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-bold text-white">
                      <Tag className="h-3 w-3 text-lime-300" />
                      {current.category}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs text-white/70">
                    <Clock className="h-3.5 w-3.5 text-lime-300/80" />
                    {current.readTime}
                  </span>
                </div>

                {/* title/excerpt */}
                <h2 className="mb-2 text-2xl font-extrabold md:text-3xl">{current.title}</h2>
                <p className="mb-4 max-w-3xl text-base leading-relaxed text-white/85 line-clamp-3">
                  {current.excerpt}
                </p>

                {/* tags */}
                <div className="mb-6 flex flex-wrap gap-1.5">
                  {current.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-xs text-white"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                {/* footer meta + read link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-full border border-lime-400/30 bg-lime-400/15">
                      <span className="text-sm font-bold text-lime-400">
                        {current.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{current.author}</p>
                      <p className="text-xs text-white/70">{current.authorRole}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xs text-white/60">{current.date}</span>
                    {current.href && (
                      <Link
                        href={current.href}
                        className="text-sm font-semibold text-lime-300 underline-offset-4 hover:text-white hover:underline"
                      >
                        Read Article →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /featured */}
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
