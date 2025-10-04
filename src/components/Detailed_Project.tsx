'use client';

import type { ComponentType, ReactNode } from 'react';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight, ExternalLink, Github, Calendar, Users, Building2,
  CheckCircle2, TrendingUp, Zap, Shield, Eye, Code2, Gauge,
  Target, Lightbulb, Wrench, Award, Share2, Star, MapPin
} from 'lucide-react';

import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFramer,
  SiNodedotjs, SiPostgresql, SiRedis, SiPrisma, SiOpenapiinitiative,
  SiVercel, SiGithubactions, SiDocker, SiSentry
} from 'react-icons/si';
import type { IconType } from 'react-icons';

import Breadcrumb from './Project_Breadcrumb';

/* ----------------------------- Types & Mappers ---------------------------- */

type TechName =
  | 'next' | 'react' | 'ts' | 'tailwind' | 'framer'
  | 'node' | 'postgres' | 'redis' | 'prisma' | 'rest'
  | 'vercel' | 'gha' | 'docker' | 'sentry';

const techIconMap: Record<TechName, IconType> = {
  next: SiNextdotjs,
  react: SiReact,
  ts: SiTypescript,
  tailwind: SiTailwindcss,
  framer: SiFramer,
  node: SiNodedotjs,
  postgres: SiPostgresql,
  redis: SiRedis,
  prisma: SiPrisma,
  rest: SiOpenapiinitiative,
  vercel: SiVercel,
  gha: SiGithubactions,
  docker: SiDocker,
  sentry: SiSentry,
};

type LucideName =
  | 'users' | 'building' | 'calendar' | 'status' | 'location';

const lucideMap: Record<LucideName, ComponentType<{ className?: string }>> = {
  users: Users,
  building: Building2,
  calendar: Calendar,
  status: CheckCircle2,
  location: MapPin,
};


function TechIcon({ name, className = 'w-6 h-6' }: { name: TechName; className?: string }) {
  const Icon = techIconMap[name];
  return <Icon className={className} />;
}

/* ----------------------------- CaseStudy Schema --------------------------- */

export type CaseStudy = {
  breadcrumbTitle?: string;
  slug?: string; // for related links
  hero: {
    badge?: string;
    title: string;
    description: string;
    image: string; // /public path or remote allowed
    growthBadge?: { value: string; label: string };
    ctas?: {
      live?: { label?: string; url: string };
      code?: { label?: string; url: string };
    };
    quickFacts?: Array<{ icon?: LucideName; label: string; value: string }>;
  };
  overview: {
    context: string[];
    objectives?: string[];
    responsibilities?: Array<{ icon?: 'code'|'eye'|'gauge'|'shield'|'users'|'wrench'; text: string }>;
  };
  outcomes?: {
    kpis?: Array<{ icon?: 'trend'|'zap'|'users'|'status'; label: string; value: string; delta?: string }>;
    gauges?: Array<{ label: string; value: number }>;
    impacts?: { left: string[]; right: string[] };
  };
  process?: {
    paragraphs?: string[];
    insights?: string[];
    images?: string[]; // 0..n (shown as two tall thumbs if >=2)
    decisions?: Array<{ title: string; reason: string }>;
  };
  finalResult?: {
    paragraphs?: string[];
    performance?: Array<{ label: string; value: number }>;
  };
  techStack?: Array<{
    title: string;
    items: Array<{ name: TechName; label: string }>;
  }>;
  challenges?: Array<{ challenge: string; solution: string }>;
  gallery?: {
    desktop?: string[]; // images for desktop tab
    mobile?: string[];  // images for mobile tab
  };
  testimonial?: {
    quote: string;
    name: string;
    role: string;
    company?: string;
    rating?: number;
    date?: string;
    avatar?: string;
    highlights?: string[];
  };
  conclusion?: {
    lessons?: string[];
    next?: string[];
    ctas?: {
      primary?: { label: string; href: string };
      secondary?: { label: string; href: string };
    };
  };
  related?: Array<{ slug: string; title: string; image: string }>;
  meta?: {
    // optional, e.g. dates, location for quickFacts fallback
    date?: string;
    location?: string;
  };
};

/* --------------------------------- Page ---------------------------------- */

export default function ProjectCaseStudy({ data }: { data: CaseStudy }) {
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile'>('desktop');

  const quickFacts = data.hero.quickFacts ?? [
    { icon: 'users', label: 'Team', value: '—' },
    { icon: 'building', label: 'Category', value: '—' },
    { icon: 'location', label: 'Location', value: data.meta?.location ?? '—' },
    { icon: 'calendar', label: 'Date', value: data.meta?.date ?? '—' },
    { icon: 'status', label: 'Status', value: '—' },
  ];

  return (
    <div className="min-h-screen bg-[#0a1f1a]">
        <Breadcrumb title={data.breadcrumbTitle ?? 'Project Case Study'} slug={data.slug ?? ''} />


      {/* Hero */}
      <section className="relative bg-[#0a1f1a] mt-12 pt-12 pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                {data.hero.badge ? (
                  <div className="text-[11px] font-bold tracking-[0.3em] text-lime-400 uppercase mb-4">
                    {data.hero.badge}
                  </div>
                ) : null}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                  {data.hero.title}
                </h1>
                <p className="text-white/70 text-lg leading-relaxed">
                  {data.hero.description}
                </p>
              </div>

              {/* Quick Facts */}
              {quickFacts?.length ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {quickFacts.map((qf, i) => (
                    <QuickFact
                      key={`${qf.label}-${i}`}
                      icon={qf.icon ? renderLucide(qf.icon) : <CheckCircle2 />}
                      label={qf.label}
                      value={qf.value}
                    />
                  ))}
                </div>
              ) : null}

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                {data.hero.ctas?.live?.url ? (
                  <a
                    href={data.hero.ctas.live.url}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-8 py-3.5 text-base font-bold text-[#0a1f1a] hover:bg-white transition-all"
                  >
                    {data.hero.ctas.live.label ?? 'View Live Site'}
                    <ExternalLink className="w-5 h-5" />
                  </a>
                ) : null}
                {data.hero.ctas?.code?.url ? (
                  <a
                    href={data.hero.ctas.code.url}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-lime-400/30 bg-lime-400/5 px-8 py-3.5 text-base font-bold text-white hover:bg-lime-400/10 transition-all"
                  >
                    <Github className="w-5 h-5" />
                    {data.hero.ctas.code.label ?? 'View Code'}
                  </a>
                ) : null}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-lime-400/30 shadow-[0_20px_70px_rgba(138,241,53,0.15)]">
                <Image src={data.hero.image} alt={data.hero.title} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1a] via-transparent to-transparent opacity-60" />
              </div>
              {data.hero.growthBadge ? (
                <div className="absolute -bottom-12 -right-6 bg-lime-400 rounded-2xl px-6 py-4 shadow-xl">
                  <div className="text-[#0a1f1a] text-3xl font-extrabold">{data.hero.growthBadge.value}</div>
                  <div className="text-[#0a1f1a] text-sm font-bold">{data.hero.growthBadge.label}</div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="relative bg-[#0f2f27] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader label="PROJECT OVERVIEW" title="Context & Objectives" />
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-extrabold text-white mb-4">The Context</h3>
                {data.overview.context.map((p, i) => (
                  <p key={i} className="text-white/70 leading-relaxed mb-4">{p}</p>
                ))}
              </div>

              {data.overview.objectives?.length ? (
                <div className="bg-[#1a3530] border border-lime-400/20 rounded-2xl p-6">
                  <h4 className="text-[11px] font-bold tracking-[0.2em] text-lime-400 mb-4">OBJECTIVES & CONSTRAINTS</h4>
                  <ul className="space-y-3">
                    {data.overview.objectives.map((o, i) => <ObjectiveItem key={i} text={o} />)}
                  </ul>
                </div>
              ) : null}
            </div>

            <div className="space-y-6">
              {data.overview.responsibilities?.length ? (
                <div className="bg-[#0a1f1a] border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-extrabold text-white mb-6">My Responsibilities</h3>
                  <div className="space-y-4">
                    {data.overview.responsibilities.map((r, i) => (
                      <ResponsibilityItem key={i} icon={renderRespIcon(r.icon)} text={r.text} />
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      {data.outcomes ? (
        <section className="relative bg-[#0a1f1a] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader label="OUTCOMES" title="Results & Impact" />
            {data.outcomes.kpis?.length ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {data.outcomes.kpis.map((k, i) => (
                  <KpiCard
                    key={i}
                    icon={renderKpiIcon(k.icon)}
                    label={k.label}
                    value={k.value}
                    delta={k.delta ?? ''}
                  />
                ))}
              </div>
            ) : null}

            {data.outcomes.gauges?.length ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {data.outcomes.gauges.map((g, i) => <CircularGauge key={i} label={g.label} value={g.value} />)}
              </div>
            ) : null}

            {data.outcomes.impacts ? (
              <div className="bg-[#0f2f27] rounded-3xl p-8 border border-white/5">
                <h3 className="text-2xl font-extrabold text-white mb-6">What Changed (Highlights)</h3>
                <div className="grid lg:grid-cols-2 gap-6">
                  <ImpactList items={data.outcomes.impacts.left} />
                  <ImpactList items={data.outcomes.impacts.right} />
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* Working Process */}
      {data.process ? (
        <section className="relative bg-[#0f2f27] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader label="WORKING PROCESS" title="Challenge of this Case" />

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                {data.process.paragraphs?.map((p, i) => (
                  <p key={i} className="text-white/70 leading-relaxed">{p}</p>
                ))}
                {data.process.insights?.length ? (
                  <div className="space-y-3 mt-8">
                    {data.process.insights.map((t, i) => <InsightItem key={i} text={t} />)}
                  </div>
                ) : null}
              </div>

              {data.process.images?.length ? (
                <div className="grid grid-cols-2 gap-6">
                  {data.process.images.slice(0,2).map((src, i) => (
                    <div key={i} className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                      <Image src={src} alt={`Process ${i+1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            {data.process.decisions?.length ? (
              <div className="bg-[#1a3530] rounded-2xl p-8 border border-lime-400/20 mb-12">
                <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-lime-400" />
                  Key Decisions & Trade-offs
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {data.process.decisions.map((d, i) => <DecisionCard key={i} title={d.title} reason={d.reason} />)}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* Final Result */}
      {data.finalResult ? (
        <section className="relative bg-[#0a1f1a] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader label="FINAL RESULT" title="Excellence in Our Service Final Results" />
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                {data.finalResult.paragraphs?.map((p, i) => (
                  <p key={i} className="text-white/70 leading-relaxed">{p}</p>
                ))}
              </div>
              {data.finalResult.performance?.length ? (
                <div className="bg-[#0f2f27] rounded-2xl p-8 border border-white/5">
                  <h4 className="text-[11px] font-bold tracking-[0.2em] text-lime-400 mb-4">PERFORMANCE METRICS</h4>
                  <div className="space-y-4">
                    {data.finalResult.performance.map((m, i) => (
                      <PerformanceBar key={i} label={m.label} value={m.value} />
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {/* Tech Stack */}
      {data.techStack?.length ? (
        <section className="relative bg-[#0f2f27] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader label="TECHNOLOGY" title="Tech Stack & Process" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {data.techStack.map((bucket, i) => (
                <TechCard key={i} title={bucket.title} items={bucket.items} />
              ))}
            </div>

            {data.challenges?.length ? (
              <div className="bg-[#0a1f1a] rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-extrabold text-white mb-6">Challenges & Solutions</h3>
                <div className="space-y-6">
                  {data.challenges.map((c, i) => (
                    <ChallengeItem key={i} challenge={c.challenge} solution={c.solution} />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* Gallery */}
      {data.gallery?.desktop?.length || data.gallery?.mobile?.length ? (
        <section className="relative bg-[#0a1f1a] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader label="GALLERY" title="Visual Showcase" />

            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-full bg-[#1a3530]/50 p-1.5 border border-white/5">
                <button
                  onClick={() => setActiveTab('desktop')}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeTab === 'desktop' ? 'bg-lime-400 text-[#0a1f1a]' : 'text-white/70 hover:text-white'
                  }`}
                >
                  Desktop View
                </button>
                <button
                  onClick={() => setActiveTab('mobile')}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeTab === 'mobile' ? 'bg-lime-400 text-[#0a1f1a]' : 'text-white/70 hover:text-white'
                  }`}
                >
                  Mobile View
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {(activeTab === 'desktop' ? (data.gallery?.desktop ?? []) : (data.gallery?.mobile ?? []))
                .slice(0,4)
                .map((src, i) => (
                  <div key={`${activeTab}-${i}`} className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
                    <Image
                      src={src}
                      alt={`${activeTab} screen ${i+1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Testimonial */}
      {data.testimonial ? (
        <section className="relative bg-[#0f2f27] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader label="FEEDBACK" title="What the Client Said" />
            <div className="mx-auto max-w-3xl">
              <TestimonialHighlight
                quote={data.testimonial.quote}
                name={data.testimonial.name}
                role={data.testimonial.role}
                company={data.testimonial.company}
                rating={data.testimonial.rating ?? 5}
                date={data.testimonial.date}
                avatar={data.testimonial.avatar}
                highlights={data.testimonial.highlights ?? []}
              />
            </div>
          </div>
        </section>
      ) : null}

      {/* Conclusion & CTAs */}
      {data.conclusion ? (
        <section className="relative bg-[#0f2f27] py-16">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Lessons Learned & Next Steps</h2>
              {data.conclusion.lessons?.map((p, i) => (
                <p key={i} className="text-white/70 leading-relaxed mb-4">{p}</p>
              ))}
              {data.conclusion.next?.map((p, i) => (
                <p key={`n-${i}`} className="text-white/70 leading-relaxed">{p}</p>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {data.conclusion.ctas?.primary ? (
                <Link
                  href={data.conclusion.ctas.primary.href}
                  className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-8 py-3.5 text-base font-bold text-[#0a1f1a] hover:bg-white transition-all"
                >
                  {data.conclusion.ctas.primary.label}
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              ) : null}
              {data.conclusion.ctas?.secondary ? (
                <Link
                  href={data.conclusion.ctas.secondary.href}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/10 bg-white/5 px-8 py-3.5 text-base font-bold text-white hover:bg-white/10 transition-all"
                >
                  {data.conclusion.ctas.secondary.label}
                </Link>
              ) : null}
            </div>

            <div className="flex justify-center gap-4">
              <button
                className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-lime-400 hover:border-lime-400/30 transition-all"
                aria-label="Share"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {/* Related */}
      {data.related?.length ? (
        <section className="relative bg-[#0a1f1a] py-16 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6">
            <h3 className="text-2xl font-extrabold text-white mb-8 text-center">Related Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {data.related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/portfolio/${p.slug}`}
                  className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10 hover:border-lime-400/30 transition-all"
                >
                  <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1a] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-extrabold text-lg">{p.title}</h4>
                    <p className="text-white/70 text-sm">View Case Study →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}

/* ----------------------------- Helpers & UI atoms ----------------------------- */

function renderLucide(name: LucideName) {
  const Icon = lucideMap[name] ?? CheckCircle2;
  return <Icon className="w-5 h-5" />;
}

function renderRespIcon(kind?: 'code'|'eye'|'gauge'|'shield'|'users'|'wrench') {
  const map: Record<string, ReactNode> = {
    code: <Code2 />,
    eye: <Eye />,
    gauge: <Gauge />,
    shield: <Shield />,
    users: <Users />,
    wrench: <Wrench />,
  };
  return map[kind ?? 'code'];
}


function renderKpiIcon(kind?: 'trend'|'zap'|'users'|'status') {
  const map: Record<string, ReactNode> = {
    trend: <TrendingUp className="w-5 h-5" />,
    zap: <Zap className="w-5 h-5" />,
    users: <Users className="w-5 h-5" />,
    status: <CheckCircle2 className="w-5 h-5" />,
  };
  return map[kind ?? 'trend'];
}


function QuickFact({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-[#0f2f27] border border-white/10 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-2 text-lime-400">
        <span className="text-sm">{icon}</span>
        <span className="text-[11px] font-semibold text-white/70 tracking-wide uppercase">{label}</span>
      </div>
      <div className="text-white font-bold text-sm">{value}</div>
    </div>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12 text-center">
      <div className="text-[11px] font-bold tracking-[0.3em] text-lime-400 uppercase mb-4">{label}</div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">{title}</h2>
    </div>
  );
}

function ObjectiveItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-white/80 text-sm">
      <Target className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
      {text}
    </li>
  );
}

function InsightItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
      <p className="text-white/80 text-sm">{text}</p>
    </div>
  );
}

function ResponsibilityItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400">
        {icon}
      </div>
      <p className="text-white/80 text-sm pt-2">{text}</p>
    </div>
  );
}

function KpiCard({ icon, value, label, delta }: { icon: React.ReactNode; value: string; label: string; delta?: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-lime-400/20 bg-[#0f2f27] p-6">
      <div
        className="absolute -top-8 -right-8 h-24 w-24 rounded-full opacity-20 blur-2xl"
        style={{ background: 'radial-gradient(closest-side, rgba(163,230,53,0.35), transparent 70%)' }}
      />
      <div className="flex items-center justify-between mb-2">
        <div className="text-lime-400">{icon}</div>
        {delta ? (
          <span className="text-[11px] font-semibold text-lime-300/90 bg-lime-300/10 border border-lime-300/20 rounded-full px-2 py-0.5">
            {delta}
          </span>
        ) : <span />}
      </div>
      <div className="text-3xl font-extrabold text-white">{value}</div>
      <div className="text-[11px] font-semibold text-white/70 tracking-wide uppercase mt-1">{label}</div>
    </div>
  );
}

function CircularGauge({ label, value }: { label: string; value: number }) {
  const angle = Math.max(0, Math.min(100, value)) * 3.6;
  return (
    <div className="bg-[#0f2f27] border border-white/10 rounded-2xl p-6 text-center">
      <div
        className="mx-auto mb-4 h-24 w-24 rounded-full grid place-items-center"
        style={{ background: `conic-gradient(#a3e635 ${angle}deg, rgba(255,255,255,0.08) ${angle}deg)` }}
      >
        <div className="h-20 w-20 rounded-full bg-[#0a1f1a] grid place-items-center border border-white/10">
          <span className="text-2xl font-extrabold text-lime-400">{value}%</span>
        </div>
      </div>
      <div className="text-sm font-semibold text-white/80">{label}</div>
    </div>
  );
}

function ImpactList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((t, i) => (
        <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
          <CheckCircle2 className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function DecisionCard({ title, reason }: { title: string; reason: string }) {
  return (
    <div>
      <h5 className="text-white font-bold text-sm mb-2">{title}</h5>
      <p className="text-white/70 text-sm leading-relaxed">{reason}</p>
    </div>
  );
}

function PerformanceBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-white text-sm font-semibold">{label}</span>
        <span className="text-lime-400 text-sm font-bold">{value}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-lime-400 rounded-full transition-all" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function TechCard({ title, items }: { title: string; items: { name: TechName; label: string }[] }) {
  return (
    <div className="bg-[#0a1f1a] border border-white/10 rounded-2xl p-6">
      <h4 className="text-white font-extrabold text-lg mb-5">{title}</h4>
      <div className="grid grid-cols-2 gap-3">
        {items.map((it) => (
          <div
            key={it.label}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0f2f27] px-3 py-2 hover:border-lime-400/30 transition"
          >
            <div className="text-lime-400"><TechIcon name={it.name} className="w-6 h-6" /></div>
            <span className="text-[13px] font-semibold text-white/80">{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChallengeItem({ challenge, solution }: { challenge: string; solution: string }) {
  return (
    <div className="pb-6 border-b border-white/10 last:border-0 last:pb-0">
      <div className="flex items-start gap-3 mb-3">
        <Award className="w-5 h-5 text-lime-400 flex-shrink-0 mt-1" />
        <h5 className="text-white font-bold text-sm">{challenge}</h5>
      </div>
      <p className="text-white/70 text-sm leading-relaxed ml-8">{solution}</p>
    </div>
  );
}

function TestimonialHighlight({
  quote,
  name,
  role,
  company,
  rating = 5,
  date,
  avatar,
  highlights = [],
}: {
  quote: string;
  name: string;
  role: string;
  company?: string;
  rating?: number;
  date?: string;
  avatar?: string;
  highlights?: string[];
}) {
  const initials = name.split(' ').map(n => n[0]).slice(0,2).join('');
  return (
    <figure
      className="
        relative overflow-hidden rounded-2xl
        border border-lime-400/20 bg-[#0a1f1a]
        shadow-[0_20px_70px_rgba(138,241,53,0.08)]
      "
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(163,230,53,0.35), transparent 70%)' }}
      />
      <div className="p-6 sm:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-lime-400">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < rating ? 'text-lime-400' : 'text-white/15'}`}
                aria-hidden
              />
            ))}
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-lime-400/30 bg-lime-400/10 px-2 py-0.5 text-[11px] font-semibold text-lime-300">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Verified Client
          </span>
          {date ? (
            <span className="text-[11px] font-semibold text-white/50">• {date}</span>
          ) : null}
        </div>

        <blockquote className="text-lg sm:text-xl leading-relaxed text-white/90">
          “{quote}”
        </blockquote>

        <figcaption className="mt-6 flex items-center gap-3">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="h-10 w-10 rounded-full border border-lime-400/30 object-cover"
            />
          ) : (
            <div className="grid h-10 w-10 place-items-center rounded-full border border-lime-400/30 bg-lime-400/15 text-[12px] font-extrabold text-lime-400">
              {initials}
            </div>
          )}
          <div>
            <div className="text-white font-semibold text-sm">{name}</div>
            <div className="text-white/50 text-xs">
              {role}{company ? `, ${company}` : ''}
            </div>
          </div>
        </figcaption>

        {highlights.length ? (
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-[13px] text-white/80">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-lime-400" />
                {h}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </figure>
  );
}
