'use client';

import Image from 'next/image';
import Link, { type LinkProps } from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type Card = {
  title: string;
  desc: string;
  img: string;
  href?: LinkProps['href'];
  category?: string;
  tags?: string[];
};

const CARDS: Card[] = [
  {
    title: 'TechVantage Solutions',
    desc:
      'Design-system Next.js app with SSR/ISR, CI/CD, and consistently green Core Web Vitals.',
    img: '/Portfolio/project1.png',
    href: '/portfolio/techvantage',
    category: 'Web',
    tags: ['Next.js', 'Tailwind'],
  },
  {
    title: 'DigitalNest Solutions',
    desc:
      'Editorial storefront on Shopify with structured PDPs and measurable conversion lift.',
    img: '/Portfolio/project2.png',
    href: '/portfolio/digitalnest',
    category: 'E-com',
    tags: ['Shopify', 'ISR'],
  },
  {
    title: 'LogicLeap Technologies',
    desc:
      'RAG assistant with eval harness, safety rails, and predictable p95 latency in production.',
    img: '/Portfolio/project3.png',
    href: '/portfolio/logicleap',
    category: 'AI',
    tags: ['RAG', 'Evals'],
  },
  {
    title: 'DataDynamo Innovations',
    desc:
      'Warehouse-native analytics with DuckDB/Postgres—dashboards that stay snappy at scale.',
    img: '/Portfolio/project4.png',
    href: '/portfolio/datadynamo',
    category: 'Data',
    tags: ['DuckDB', 'Postgres'],
  },
];

export default function ProjectsShowcaseStraddle() {
  const left: Card[] = [];
  const right: Card[] = [];
  CARDS.forEach((c, i) => (i % 2 === 0 ? left.push(c) : right.push(c)));

  return (
    <section className="relative bg-[#0a1f1a] py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-lime-400 sm:text-[11px]">
            Our Projects
          </div>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem]">
            Showcase highlights
          </h2>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            {left.map((c) => (
              <PosterStraddle key={c.title} {...c} />
            ))}
          </div>
          <div>
            {right.map((c) => (
              <PosterStraddle key={c.title} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------ Card with straddling caption (½ on image, ½ below) ------ */
function PosterStraddle({ title, desc, img, href, category, tags }: Card) {
  // helper to conditionally wrap the IMAGE ONLY with a Link
  const ImageWrap = ({ children }: { children: React.ReactNode }) =>
    href ? (
      <Link
        href={href}
        prefetch={false}
        aria-label={`${title} case study`}
        className="block focus:outline-none"
      >
        {children}
      </Link>
    ) : (
      <div className="block">{children}</div>
    );

  return (
    <article className="group/card mb-20 sm:mb-36 last:mb-0">
      <div className="relative overflow-visible">
        {/* Image frame (its own Link; never wraps caption) */}
        <ImageWrap>
          <div
            className="
              relative overflow-hidden rounded-[24px]
              border border-white/10 bg-[#0f2f27]/70
              shadow-[0_18px_60px_rgba(0,0,0,0.35)]
              transition-all duration-300
              ring-0 ring-inset
              group-hover/card:border-lime-300 group-hover/card:ring-2 group-hover/card:ring-lime-300
            "
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={img}
                alt={title}
                fill
                sizes="(min-width:1024px) 600px, 100vw"
                className="object-cover transition-transform duration-500 group-hover/card:scale-[1.02]"
                priority={false}
              />

              {/* soft veil */}
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0a1f1a] via-black/10 to-transparent opacity-75" />

              {/* stronger category pill */}
              {category && (
                <span
                  className="
                    absolute left-4 top-4 inline-flex items-center gap-1.5
                    rounded-full px-3 py-1 text-[11px] font-extrabold
                    text-[#0a1f1a] shadow
                    ring-1 ring-lime-300/70
                    bg-[radial-gradient(80%_80%_at_30%_30%,#d9f99d_0%,#a3e635_40%,#84cc16_100%)]
                    backdrop-blur
                    transition
                    group-hover/card:ring-2 group-hover/card:ring-lime-200
                  "
                >
                  {category}
                </span>
              )}

              {/* top-right arrow chip */}
              {href && (
                <span className="absolute right-4 top-4 hidden h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 backdrop-blur transition group-hover/card:border-white/30 group-hover/card:text-white sm:inline-flex">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              )}

              {/* lime corner glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full opacity-25 blur-2xl"
                style={{ background: 'radial-gradient(closest-side, rgba(163,230,53,0.35), transparent 70%)' }}
              />
            </div>
          </div>
        </ImageWrap>

        {/* Straddling caption (sibling of image; never inside a Link) */}
        <div className="absolute left-1/2 bottom-0 z-10 w-[92%] -translate-x-1/2 translate-y-1/2">
          <div
            className="
              rounded-2xl border border-white/12 bg-[#0a1f1a]/90 px-5 py-4
              backdrop-blur transition-all duration-300
              ring-0 ring-inset
              group-hover/card:border-lime-300 group-hover/card:ring-2 group-hover/card:ring-lime-300
            "
          >
            <div className="flex items-start gap-3">
              <div className="min-w-0 flex-1">
                <h3 className="text-[18px] font-extrabold leading-tight text-white sm:text-[20px]">
                  {title}
                </h3>
                <p className="mt-1 line-clamp-3 text-[14.5px] leading-relaxed text-white/70">
                  {desc}
                </p>
              </div>

              {/* View button — separate <Link>, no nesting */}
              <div className="shrink-0 my-auto">
                {href ? (
                  <Link
                    href={href}
                    prefetch={false}
                    className="
                      inline-flex items-center gap-1.5 rounded-full
                      bg-lime-400 px-3 py-1.5 text-[12px] font-bold
                      text-[#0a1f1a] transition
                      hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-lime-300
                    "
                    aria-label={`View ${title}`}
                  >
                    View
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="
                      inline-flex cursor-not-allowed items-center gap-1.5 rounded-full
                      bg-white/10 px-3 py-1.5 text-[12px] font-bold
                      text-white/60
                    "
                  >
                    View
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={`${title}-${t}`}
                    className="inline-flex items-center rounded-full border border-white/12 bg-white/0 px-2.5 py-1 text-[11px] font-semibold text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

