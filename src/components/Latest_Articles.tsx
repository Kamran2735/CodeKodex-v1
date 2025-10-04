'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { IconType } from 'react-icons';
import { FiClock, FiUser, FiTag, FiTrendingUp, FiCode, FiFeather, FiLayout } from 'react-icons/fi';

type Article = {
  id: number | string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  gradient?: string;
  isNew?: boolean;
  trending?: boolean;
  position: { x: number; y: number; rotate: number };
  href?: string;
  imageUrl?: string;
};

type LatestArticlesProps = {
  articles?: Article[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  browseAllHref?: string;
  onSubscribe?: () => void;
};

const categoryIcon: Record<string, IconType> = {
  React: FiCode,
  TypeScript: FiFeather,
  CSS: FiLayout,
};

export default function LatestArticlesSection({
  articles,
  eyebrow = 'JUST PUBLISHED',
  title = 'Latest Articles',
  subtitle = 'Fresh insights from the leading edge. Three handpicked articles—updated regularly.',
  browseAllHref = '/blog',
  onSubscribe,
}: LatestArticlesProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [spread, setSpread] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | string | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const data: Article[] =
    articles ?? [
      {
        id: 1,
        title: 'React Server Components Revolution',
        excerpt:
          'How React Server Components are changing the game for full-stack development. Patterns that will define 2025.',
        category: 'React',
        author: 'Sarah Chen',
        date: '2 hours ago',
        readTime: '8 min read',
        gradient: 'from-lime-400/15 via-white/5 to-transparent',
        isNew: true,
        trending: true,
        position: { x: -50, y: 8, rotate: -8 },
        href: '/blog/rsc-revolution',
        imageUrl: '/Portfolio/project1.png',
      },
      {
        id: 2,
        title: 'TypeScript 5.x: Advanced Patterns',
        excerpt:
          'Master the latest TS features with real-world examples—from const assertions to template literal types.',
        category: 'TypeScript',
        author: 'Michael Torres',
        date: '6 hours ago',
        readTime: '12 min read',
        gradient: 'from-lime-400/15 via-white/5 to-transparent',
        isNew: true,
        trending: false,
        position: { x: 0, y: 0, rotate: 0 },
        href: '/blog/typescript-advanced-patterns',
        imageUrl: '/Portfolio/project2.png',
      },
      {
        id: 3,
        title: 'CSS Container Queries in Practice',
        excerpt:
          "Responsive design leveled up. Container queries solve layout issues grid/flex couldn't—here's how.",
        category: 'CSS',
        author: 'Emma Rodriguez',
        date: '1 day ago',
        readTime: '10 min read',
        gradient: 'from-lime-400/15 via-white/5 to-transparent',
        trending: true,
        position: { x: 50, y: 8, rotate: 8 },
        href: '/blog/container-queries-practice',
        imageUrl: '/Portfolio/project3.png',
      },
    ];

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => setSpread(true), 600);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [isVisible]);

  const getTransform = (a: Article): string => {
    if (!spread) return 'translate(0, 12vh) rotate(0deg) scale(0.92)';
    return `translate(${a.position.x}vh, ${a.position.y}vh) rotate(${a.position.rotate}deg) scale(1)`;
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#0a1f1a] text-white flex flex-col justify-center pt-20 overflow-hidden"
    >
      {/* background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-10 h-80 w-80 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(163,230,53,0.18), transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 right-10 h-80 w-80 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(163,230,53,0.14), transparent 70%)' }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* header */}
<div className="text-center mb-16">
  <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-lime-400 uppercase">
    {eyebrow}
  </div>
  <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem]">
    {title}
  </h2>

  <p className="mx-auto max-w-4xl text-xl leading-relaxed text-white/70">
    {subtitle}
  </p>
</div>


        {/* cards */}
        {/* Increased stage height so larger cards + image fit without clipping */}
        <div className="relative mb-12 flex h-[780px] items-center justify-center">
          {data.map((article, idx) => {
            const Icon = categoryIcon[article.category] ?? FiTag;
            return (
              <div
                key={article.id}
                onMouseEnter={() => setHoveredCard(article.id)}
                onMouseLeave={() => setHoveredCard(null)}
                // Wider + Taller card; responsive bumps on md+
                className={`absolute w-[22rem] md:w-[24rem] h-[34rem] md:h-[36rem] cursor-pointer transition-all duration-700 ease-out ${
                  hoveredCard === article.id ? 'z-50 scale-105' : 'z-40'
                } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  transform: getTransform(article),
                  transitionDelay: isVisible ? `${idx * 120}ms` : '0ms',
                }}
              >
                <article className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f2f27] shadow-xl">
                  {/* image section — decent height, not a strip */}
                  {article.imageUrl && (
                    <div className="relative h-56 md:h-64 w-full overflow-hidden border-b border-white/10">
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        sizes="(min-width: 768px) 384px, 352px"
                        className="object-cover"
                        priority={idx === 0}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f2f27] via-transparent to-transparent opacity-60" />
                    </div>
                  )}

                  {/* content */}
                  <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
                    {/* category row */}
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white">
                          <FiTag className="h-3.5 w-3.5 text-lime-300" />
                          {article.category}
                        </span>
                        {article.isNew && (
                          <span className="rounded-full bg-lime-400 px-2 py-1 text-xs font-bold text-[#0a1f1a]">
                            NEW
                          </span>
                        )}
                        {article.trending && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-xs font-bold text-white">
                            <FiTrendingUp className="h-3.5 w-3.5 text-lime-300" />
                            Trending
                          </span>
                        )}
                      </div>
                      <Icon className="h-6 w-6 text-lime-300/80" />
                    </div>

                    <h3 className="mb-2 text-xl font-extrabold text-white">{article.title}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-white/80">{article.excerpt}</p>

                    {/* meta row */}
                    <div className="mb-4 grid grid-cols-2 gap-3 text-xs text-white/70">
                      <span className="inline-flex items-center gap-2">
                        <FiUser className="h-4 w-4 text-lime-300/80" />
                        <span className="font-medium">{article.author}</span>
                      </span>
                      <span className="inline-flex items-center justify-end gap-2">
                        <FiClock className="h-4 w-4 text-lime-300/80" />
                        {article.date}
                      </span>
                      <span className="col-span-2 text-right text-white/60">{article.readTime}</span>
                    </div>

                    {/* CTA – full width */}
                    <div className="mt-auto">
                      {article.href ? (
                        <Link
                          href={article.href}
                          className="block w-full rounded-lg bg-lime-400 py-3 text-center text-sm font-bold text-[#0a1f1a] transition-all duration-200 hover:scale-[1.02] hover:bg-white hover:shadow-lg hover:shadow-lime-400/20"
                        >
                          Read Article <span className="ml-2 inline-block">→</span>
                        </Link>
                      ) : (
                        <button
                          type="button"
                          className="block w-full rounded-lg bg-lime-400 py-3 text-sm font-bold text-[#0a1f1a] transition-all duration-200 hover:scale-[1.02] hover:bg-white hover:shadow-lg hover:shadow-lime-400/20"
                        >
                          Read Article <span className="ml-2 inline-block">→</span>
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
