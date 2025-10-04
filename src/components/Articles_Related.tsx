// components/RelatedArticles.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  FiClock,
  FiArrowRight,
  FiTrendingUp,
  FiCalendar,
  FiUser,
} from 'react-icons/fi';
import { LuSparkles } from 'react-icons/lu';


type MaybeDate = string | number | Date | undefined | null;

type InputArticle = {
  id?: string | number;
  slug: string;
  title: string;
  excerpt?: string;
  description?: string;
  author?: string;
  category?: string;
  publishedDate?: MaybeDate; // preferred
  date?: MaybeDate;          // legacy
  readingTime?: string;
  readTime?: string;
  // image support (any of these may be used)
  image?: string;     // thumbnail/cover URL
  cover?: string;     // alias
  thumbnail?: string; // alias
  emoji?: string;     // fallback
  isNew?: boolean;
  trending?: boolean;
};

export type RelatedArticlesProps = {
  currentCategory: string;
  currentSlug: string;
  articles?: InputArticle[];
};

const normalize = (v: unknown) => (v ?? '').toString().trim().toLowerCase();
const isUrl = (v?: string) => !!v && /^(https?:)?\/\//.test(v) || (!!v && v.startsWith('/'));

const formatDate = (dateInput: MaybeDate): string => {
  if (!dateInput) return '';
  const d = new Date(dateInput);
  if (Number.isNaN(d.getTime())) return '';
  const now = new Date();
  const diffDays = Math.ceil(Math.abs(+now - +d) / (1000 * 60 * 60 * 24));
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const getCategoryColor = (category?: string) => {
  const map: Record<string, string> = {
    react: 'from-cyan-500 to-cyan-600',
    css: 'from-purple-500 to-purple-600',
    javascript: 'from-yellow-500 to-yellow-600',
    typescript: 'from-blue-500 to-blue-600',
    'next.js': 'from-violet-500 to-violet-600',
    'node.js': 'from-green-500 to-green-600',
    design: 'from-pink-500 to-pink-600',
    backend: 'from-emerald-500 to-emerald-600',
    animation: 'from-purple-500 to-purple-600',
    'build tools': 'from-orange-500 to-orange-600',
    a11y: 'from-pink-500 to-pink-600',
    api: 'from-indigo-500 to-indigo-600',
    architecture: 'from-teal-500 to-teal-600',
  };
  return map[normalize(category)] ?? 'from-gray-500 to-gray-600';
};

export default function RelatedArticles({
  currentCategory,
  currentSlug,
  articles = [],
}: RelatedArticlesProps) {
  const [related, setRelated] = useState<InputArticle[]>([]);
  const [stage, setStage] = useState(0);
  const [hovered, setHovered] = useState<string | number | null>(null);

  useEffect(() => {
    const filtered = (Array.isArray(articles) ? articles : [])
      .filter(
        (a) => normalize(a.category) === normalize(currentCategory) && a.slug !== currentSlug,
      )
      .sort(
        (a, b) =>
          +new Date(b.publishedDate ?? b.date ?? 0) - +new Date(a.publishedDate ?? a.date ?? 0),
      )
      .slice(0, 3);

    setRelated(filtered);

    const t1 = setTimeout(() => setStage(1), 250);
    const t2 = setTimeout(() => setStage(2), 550);
    const t3 = setTimeout(() => setStage(3), 900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [articles, currentCategory, currentSlug]);

  // Empty state
  if (related.length === 0) {
    return (
      <section className="bg-[#0a1f1a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <article className="max-w-none">
            <div className="rounded-2xl border border-white/10 bg-[#0f2f27]/60 p-8 text-center backdrop-blur-sm">
              <div className="mb-8 inline-flex items-center gap-3">
                <div className="rounded-xl border border-lime-400/30 bg-lime-400/20 p-3">
                  <LuSparkles className="h-6 w-6 text-lime-400" />
                </div>
                <h2 className="bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent">
                  Related Articles
                </h2>
              </div>

              <LuSparkles className="mx-auto mb-4 h-16 w-16 text-lime-400/30" />
              <h3 className="mb-2 text-xl font-bold">No Related Articles Found</h3>
              <p className="text-lg text-white/80">
                Nothing else in{' '}
                <span className="font-medium text-lime-400">{currentCategory}</span> yet.
              </p>

              <div className="mt-8 flex justify-center">
                <div className="h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-50" />
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }

  // List
  return (
    <section className="bg-[#0a1f1a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <article className="max-w-none">
          <div className="rounded-2xl border border-white/10 bg-[#0f2f27]/60 p-8 backdrop-blur-sm">
            {/* Header */}
            <div
              className={`mb-8 transition-all duration-700 ${
                stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <div className="mb-6 flex items-center justify-center">
                <div className="inline-flex items-center gap-3">
                  <div className="rounded-xl border border-lime-400/30 bg-lime-400/20 p-3">
                    <FiTrendingUp className="h-6 w-6 text-lime-400" />
                  </div>
                  <h2 className="bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent">
                    Related Articles
                  </h2>
                </div>
              </div>
              <p className="text-center text-lg text-white/80">
                More in <span className="font-medium text-lime-400">{currentCategory}</span>
              </p>
            </div>

            {/* List */}
            <div
              className={`mb-8 transition-all duration-700 ${
                stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <div className="space-y-6">
                {related.map((a, i) => {
                  const key = a.slug || a.id || i;
                  const dateStr = formatDate(a.publishedDate ?? a.date);
                  const read = a.readingTime ?? a.readTime ?? '';
                  const imgSrc = (a.image || a.cover || a.thumbnail) ?? '';

                  return (
                    <div
                      key={key}
                      onMouseEnter={() => setHovered(key)}
                      onMouseLeave={() => setHovered(null)}
                      className={`group relative transition-all duration-500 ${
                        hovered === key ? 'scale-[1.02]' : ''
                      }`}
                      style={{ transitionDelay: `${i * 120}ms` }}
                    >
                      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-lime-400/30 hover:bg-white/10">
                        {/* Image / Emoji banner */}
                        <div className="relative h-40 w-full overflow-hidden border-b border-white/10">
                          {isUrl(imgSrc) ? (
                            <img
                              src={imgSrc}
                              alt={a.title}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="grid h-full w-full place-items-center text-5xl">
                              {a.emoji || '📄'}
                            </div>
                          )}
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f2f27] via-transparent to-transparent opacity-60" />
                        </div>

                        <div className="p-6">
                          {/* Top row (chips) */}
                          <div className="mb-4 flex items-start justify-between">
                            <div className="flex items-center gap-2">
                              <span
                                className={`rounded-full bg-gradient-to-r px-3 py-1 text-xs font-bold text-white ${getCategoryColor(
                                  a.category,
                                )}`}
                              >
                                {a.category}
                              </span>
                              {a.isNew && (
                                <span className="rounded-full bg-lime-400 px-2 py-1 text-xs font-bold text-[#0a1f1a]">
                                  NEW
                                </span>
                              )}
                              {a.trending && (
                                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-2 py-1 text-xs font-bold">
                                  🔥 HOT
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Title + excerpt */}
                          <h3 className="line-clamp-2 mb-3 text-xl font-bold leading-tight text-white transition-colors group-hover:text-lime-300">
                            {a.title}
                          </h3>
                          {a.excerpt || a.description ? (
                            <p className="line-clamp-2 mb-6 text-lg text-white/80">
                              {a.excerpt ?? a.description}
                            </p>
                          ) : null}

                          {/* Meta (author / date / read time) */}
                          <div className="mb-6 flex items-center justify-between text-sm text-white/70">
                            <div className="flex items-center gap-4">
                              {a.author ? (
                                <span className="inline-flex items-center gap-2 hover:text-lime-300">
                                  <FiUser className="h-4 w-4" />
                                  <span className="font-medium">{a.author}</span>
                                </span>
                              ) : null}
                              {dateStr ? (
                                <span className="inline-flex items-center gap-2 hover:text-lime-300">
                                  <FiCalendar className="h-4 w-4" />
                                  {dateStr}
                                </span>
                              ) : null}
                            </div>
                            {read ? (
                              <span className="inline-flex items-center gap-2">
                                <FiClock className="h-4 w-4" />
                                {read}
                              </span>
                            ) : null}
                          </div>

                          {/* CTA */}
                          <div className="flex items-center justify-between">
                            <div />{/* spacer to balance layout */}
                            <Link
                              href={`/articles/${a.slug}`}
                              className="group/link inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-medium text-lime-400 transition-all hover:border-lime-400/50 hover:bg-white/10"
                            >
                              Read Article
                              <FiArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                          </div>
                        </div>

                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* View all */}
            <div
              className={`transition-all duration-700 ${
                stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h4 className="mb-1 text-lg font-semibold">Want to explore more?</h4>
                  <p className="text-sm text-white/60">Browse every post in this category</p>
                </div>
                <Link
                  href={`/articles`}
                  className="inline-flex items-center gap-2 rounded-lg bg-lime-400 px-6 py-3 font-semibold text-[#0a1f1a] transition-colors hover:bg-white"
                >
                  Explore All Articles
                  <FiArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex justify-center">
                <div className="h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-50" />
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Local clamp (keeps working even if line-clamp plugin isn’t enabled) */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
