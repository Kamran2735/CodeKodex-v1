// components/BlogHead.tsx
'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Calendar, User, Tag as TagIcon } from 'lucide-react';

export type BlogHeadProps = {
  blogData?: {
    title?: string;
    slug?: string;
    author?: string;
    category?: string;
    publishedDate?: string;
    readingTime?: string;
    featuredImage?: string;
  };
};

function formatDate(dateString?: string): string {
  if (!dateString) return '';
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function categoryGradient(cat?: string): string {
  const map: Record<string, string> = {
    'Web Development': 'from-blue-500 to-blue-600',
    React: 'from-cyan-500 to-cyan-600',
    CSS: 'from-purple-500 to-purple-600',
    JavaScript: 'from-yellow-500 to-yellow-600',
    TypeScript: 'from-indigo-500 to-indigo-600',
    Backend: 'from-emerald-500 to-emerald-600',
    Design: 'from-pink-500 to-pink-600',
    Tutorial: 'from-orange-500 to-orange-600',
    'Next.js': 'from-gray-200 to-slate-300',
  };
  return cat && map[cat] ? map[cat] : 'from-gray-500 to-gray-600';
}

export default function BlogHead({ blogData }: BlogHeadProps) {
  const [stage, setStage] = useState(0);

  // unique id for SVG gradient (prevents id clashes if used multiple times)
  const uid = useMemo(() => Math.random().toString(36).slice(2), []);

  useEffect(() => {
    const steps = [
      { s: 1, d: 100 }, // breadcrumbs
      { s: 2, d: 300 }, // meta chips
      { s: 3, d: 500 }, // image
      { s: 4, d: 700 }, // title
    ];
    const timers = steps.map(({ s, d }) => setTimeout(() => setStage(s), d));
    return () => timers.forEach(clearTimeout);
  }, []);

  // safe field reads
  const title = blogData?.title?.toString().trim() ?? '';
  const slug = blogData?.slug?.toString().trim() ?? '';
  const author = blogData?.author?.toString().trim() ?? '';
  const category = blogData?.category?.toString().trim() ?? '';
  const publishedDate = blogData?.publishedDate ?? '';
  const readingTime = blogData?.readingTime ?? '';
  const featuredImage = blogData?.featuredImage ?? '';

  const prettyDate = formatDate(publishedDate);

  // split title so the last two words get the lime gradient
  const words = title ? title.split(/\s+/).filter(Boolean) : [];
  const firstPart = words.length > 2 ? words.slice(0, -2).join(' ') : title;
  const lastTwo = words.length > 2 ? words.slice(-2).join(' ') : '';

  return (
    <div className="bg-[#0a1f1a] text-white pt-20">
      <div className="relative mx-auto max-w-6xl px-6 pb-12">

        {/* Meta chips */}
        <div
          className={`mb-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-200 ${
            stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {author && (
            <div className="group flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-lime-400/50">
              <User className="h-4 w-4 text-white/60 transition-colors duration-300 group-hover:text-lime-400" />
              <span className="text-sm font-medium text-white/80 group-hover:text-white">{author}</span>
            </div>
          )}

          {category && (
            <div
              className={`group flex cursor-pointer items-center space-x-2 rounded-full bg-gradient-to-r ${categoryGradient(
                category
              )} px-4 py-2 transition-transform duration-300 hover:scale-105`}
              title={category}
            >
              <TagIcon className="h-4 w-4 text-white transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-sm font-bold text-white">{category}</span>
            </div>
          )}

          {prettyDate && (
            <div className="group flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-lime-400/50">
              <Calendar className="h-4 w-4 text-white/60 transition-colors duration-300 group-hover:text-lime-400" />
              <span className="text-sm font-medium text-white/80 group-hover:text-white">{prettyDate}</span>
            </div>
          )}

          {blogData?.readingTime && (
            <div className="flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
              <span className="text-sm font-medium text-white/80">{blogData.readingTime}</span>
            </div>
          )}
        </div>

        {/* Featured image */}
        {featuredImage && (
          <div
            className={`relative mb-10 transition-all duration-1000 delay-400 ${
              stage >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f2f27]">
              <img
                src={featuredImage}
                alt={title || 'article image'}
                className="h-64 w-full object-cover sm:h-80 lg:h-[34rem] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute inset-0 -translate-x-full transition-transform duration-1000 group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          </div>
        )}

        {/* Title */}
        {title && (
          <div
            className={`text-center transition-all duration-1000 delay-600 ${
              stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
              {lastTwo ? (
                <>
                  <span className="text-white">{firstPart}</span>{' '}
                  <span className="bg-gradient-to-r from-[#39FF14] to-cyan-400 bg-clip-text text-transparent">
                    {lastTwo}
                  </span>
                </>
              ) : (
                <span className="text-white">{title}</span>
              )}
            </h1>

            <div className="flex justify-center">
              <div className="h-1 w-20 animate-pulse rounded-full bg-gradient-to-r from-[#39FF14] to-cyan-400" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
