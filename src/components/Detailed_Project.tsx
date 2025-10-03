'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight, ExternalLink, Github, Calendar, Users, Building2,
  CheckCircle2, TrendingUp, Zap, Shield, Eye, Code2, Gauge,
  Target, Lightbulb, Wrench, Award, Share2, Star
} from 'lucide-react';

import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFramer,
  SiNodedotjs, SiPostgresql, SiRedis, SiPrisma, SiOpenapiinitiative,
  SiVercel, SiGithubactions, SiDocker, SiSentry
} from 'react-icons/si';
import type { IconType } from 'react-icons';

import Breadcrumb from './Breadcrumb';

/* ----------------------------- Tech Icon Setup ---------------------------- */
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

function TechIcon({ name, className = 'w-6 h-6' }: { name: TechName; className?: string }) {
  const Icon = techIconMap[name];
  return <Icon className={className} />;
}

/* --------------------------------- Page ---------------------------------- */
export default function ProjectCaseStudy() {
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="min-h-screen bg-[#0a1f1a]">
      <Breadcrumb title="Project Case Study" />

      {/* Hero */}
      <section className="relative bg-[#0a1f1a] mt-12 pt-12 pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="text-[11px] font-bold tracking-[0.3em] text-lime-400 uppercase mb-4">
                  TECHVANTAGE SOLUTIONS
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                  TechVantage Solutions provides innovative tech solutions.
                </h1>
                <p className="text-white/70 text-lg leading-relaxed">
                  A comprehensive enterprise platform built with cutting-edge technology that transformed operations,
                  improving efficiency by 300% and reducing operational costs significantly.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <QuickFact icon={<Users />} label="Name" value="Edward Ummen" />
                <QuickFact icon={<Building2 />} label="Categories" value="IT Solutions" />
                <QuickFact icon={<Building2 />} label="Location" value="California, USA" />
                <QuickFact icon={<Calendar />} label="Date" value="30 Oct, 2023" />
                <QuickFact icon={<CheckCircle2 />} label="Status" value="100% Satisfied" />
                <QuickFact icon={<Calendar />} label="Duration" value="03 Months" />
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-8 py-3.5 text-base font-bold text-[#0a1f1a] hover:bg-white transition-all"
                >
                  View Live Site
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-lime-400/30 bg-lime-400/5 px-8 py-3.5 text-base font-bold text-white hover:bg-lime-400/10 transition-all"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-lime-400/30 shadow-[0_20px_70px_rgba(138,241,53,0.15)]">
                <Image src="/Portfolio/project1.png" alt="TechVantage Solutions" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1a] via-transparent to-transparent opacity-60" />
              </div>
              <div className="absolute -bottom-12 -right-6 bg-lime-400 rounded-2xl px-6 py-4 shadow-xl">
                <div className="text-[#0a1f1a] text-3xl font-extrabold">300%</div>
                <div className="text-[#0a1f1a] text-sm font-bold">Growth</div>
              </div>
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
                <p className="text-white/70 leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna
                  pellentesque sit amet. Pellentesque sit amet sapien fringilla, mattis I consectetur, ultrices mauris.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa Aliquam in hendrerit urna
                  pellentesque.
                </p>
              </div>

              <div className="bg-[#1a3530] border border-lime-400/20 rounded-2xl p-6">
                <h4 className="text-[11px] font-bold tracking-[0.2em] text-lime-400 mb-4">OBJECTIVES & CONSTRAINTS</h4>
                <ul className="space-y-3">
                  <ObjectiveItem text="Increase conversion rate by 45% within 6 months" />
                  <ObjectiveItem text="Reduce page load time to under 1.5 seconds" />
                  <ObjectiveItem text="Maintain 99.9% uptime with existing infrastructure" />
                  <ObjectiveItem text="Implement accessibility standards (WCAG 2.1 AA)" />
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#0a1f1a] border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-extrabold text-white mb-6">My Responsibilities</h3>
                <div className="space-y-4">
                  <ResponsibilityItem icon={<Code2 />} text="Full-stack development using Next.js and TypeScript" />
                  <ResponsibilityItem icon={<Eye />} text="UI/UX design and implementation with Tailwind CSS" />
                  <ResponsibilityItem icon={<Gauge />} text="Performance optimization & Core Web Vitals" />
                  <ResponsibilityItem icon={<Shield />} text="Security hardening & API integration" />
                  <ResponsibilityItem icon={<Users />} text="Cross-functional collaboration" />
                  <ResponsibilityItem icon={<Wrench />} text="CI/CD pipeline & deployment automation" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="relative bg-[#0a1f1a] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader label="OUTCOMES" title="Results & Impact" />

          {/* KPIs */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <KpiCard icon={<TrendingUp className="w-5 h-5" />} label="Revenue Growth" value="300%" delta="+18% QoQ" />
            <KpiCard icon={<Zap className="w-5 h-5" />} label="Load Time" value="0.8s" delta="-1.5s vs baseline" />
            <KpiCard icon={<Users className="w-5 h-5" />} label="Active Users" value="10,000+" delta="+2.1k MoM" />
            <KpiCard icon={<CheckCircle2 className="w-5 h-5" />} label="Uptime" value="99.9%" delta="+0.2% QoQ" />
          </div>

          {/* Circular Gauges */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <CircularGauge label="Lighthouse Perf" value={98} />
            <CircularGauge label="Accessibility" value={100} />
            <CircularGauge label="Best Practices" value={95} />
            <CircularGauge label="SEO Score" value={100} />
          </div>

          {/* Impact bullets */}
          <div className="bg-[#0f2f27] rounded-3xl p-8 border border-white/5">
            <h3 className="text-2xl font-extrabold text-white mb-6">What Changed (Highlights)</h3>
            <div className="grid lg:grid-cols-2 gap-6">
              <ImpactList
                items={[
                  '0 → automated CI/CD with gated releases',
                  'Core Web Vitals consistently green across pages',
                  'Edge caching + ISR reduced TTFB regionally',
                  'DX improved — PR lead time down 35%',
                ]}
              />
              <ImpactList
                items={[
                  'Support tickets down 42% after redesign',
                  'A/B tests: +27% to PDP add-to-cart rate',
                  'Error budget respected for 12 consecutive weeks',
                  'Observability with Sentry → MTTD down 53%',
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="relative bg-[#0f2f27] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader label="WORKING PROCESS" title="Challenge of this Case" />

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <p className="text-white/70 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa Aliquam in hendrerit urna. Pellentesque
                sit amet sapien fringilla, mattis I consectetur, ultrices mauris. Maecenas vitae mattis tellus.
              </p>
              <p className="text-white/70 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa Aliquam in hendrerit urna pellentesque.
              </p>

              <div className="space-y-3 mt-8">
                <InsightItem text="Sed tempor magna et risus ornare, a lobortis." />
                <InsightItem text="Vivamus tempus urna sit amet ante imperdiet." />
                <InsightItem text="Mauris sit amet eros ac tellus egestas placerat." />
                <InsightItem text="Aliquam at leo pretium of consecteteter." />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                <Image src="/Portfolio/project1.png" alt="Process 1" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                <Image src="/Portfolio/project1.png" alt="Process 2" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="bg-[#1a3530] rounded-2xl p-8 border border-lime-400/20 mb-12">
            <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-lime-400" />
              Key Decisions & Trade-offs
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <DecisionCard
                title="Why Next.js over Create React App"
                reason="Server-side rendering improved SEO and initial load performance by 60%. SSG for static pages reduced hosting costs."
              />
              <DecisionCard
                title="Tailwind CSS vs Styled Components"
                reason="Tailwind's utility-first approach reduced CSS bundle size by 40% and improved development velocity."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final Result */}
      <section className="relative bg-[#0a1f1a] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader label="FINAL RESULT" title="Excellence in Our Service Final Results" />

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <p className="text-white/70 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa Aliquam in hendrerit urna. Pellentesque
                sit amet sapien fringilla, mattis I consectetur, ultrices mauris.
              </p>
              <p className="text-white/70 leading-relaxed">
                Pellentesque commodo lacus at sodales sodales. Quisque lorem sagittis orci ut diam condimentum, vel euismod.
              </p>
            </div>
            <div className="bg-[#0f2f27] rounded-2xl p-8 border border-white/5">
              <h4 className="text-[11px] font-bold tracking-[0.2em] text-lime-400 mb-4">PERFORMANCE METRICS</h4>
              <div className="space-y-4">
                <PerformanceBar label="Lighthouse Performance" value={98} />
                <PerformanceBar label="Accessibility Score" value={100} />
                <PerformanceBar label="Best Practices" value={95} />
                <PerformanceBar label="SEO Score" value={100} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack (react-icons) */}
      <section className="relative bg-[#0f2f27] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader label="TECHNOLOGY" title="Tech Stack & Process" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <TechCard title="Frontend" items={[
              { name: 'next', label: 'Next.js 14' },
              { name: 'react', label: 'React 18' },
              { name: 'ts', label: 'TypeScript' },
              { name: 'tailwind', label: 'Tailwind CSS' },
              { name: 'framer', label: 'Framer Motion' },
            ]} />
            <TechCard title="Backend" items={[
              { name: 'node', label: 'Node.js' },
              { name: 'postgres', label: 'PostgreSQL' },
              { name: 'redis', label: 'Redis' },
              { name: 'prisma', label: 'Prisma ORM' },
              { name: 'rest', label: 'REST / OpenAPI' },
            ]} />
            <TechCard title="DevOps" items={[
              { name: 'vercel', label: 'Vercel' },
              { name: 'gha', label: 'GitHub Actions' },
              { name: 'docker', label: 'Docker' },
              { name: 'sentry', label: 'Sentry' },
            ]} />
            <TechCard title="Standards" items={[
              { name: 'ts', label: 'Strict Types' },
              { name: 'rest', label: 'API Contracts' },
              { name: 'sentry', label: 'Observability' },
              { name: 'docker', label: 'Containers' },
              { name: 'gha', label: 'CI Policies' },
            ]} />
          </div>

          {/* Challenges */}
          <div className="bg-[#0a1f1a] rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-extrabold text-white mb-6">Challenges & Solutions</h3>
            <div className="space-y-6">
              <ChallengeItem
                challenge="Legacy database migration with zero downtime"
                solution="Implemented blue-green deployment with real-time sync, successfully migrating 2M+ records."
              />
              <ChallengeItem
                challenge="Complex state management across 50+ components"
                solution="Adopted Zustand for global state and React Query for server state, reducing re-renders by 70%."
              />
              <ChallengeItem
                challenge="Meeting WCAG 2.1 AA standards without design compromise"
                solution="Semantic HTML, ARIA, and full keyboard navigation. Achieved 100% Lighthouse accessibility."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
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
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
                <Image
                  src="/Portfolio/project1.png"
                  alt={`Screen ${i}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
{/* Client Feedback (single highlight) */}
<section className="relative bg-[#0f2f27] py-16">
  <div className="mx-auto max-w-7xl px-6">
    <SectionHeader label="FEEDBACK" title="What the Client Said" />
    <div className="mx-auto max-w-3xl">
      <TestimonialHighlight
        quote={`From kickoff to launch, the team worked as an extension of ours. They migrated 2M records with zero downtime, dropped LCP below 1s globally, and shipped a design that finally converts. It's the most stress-free release we've had.`}
        name="Sarah Thompson"
        role="VP Engineering"
        company="TechVantage"
        rating={5}
        date="Nov 2023"
        highlights={[
          '+27% PDP → Add-to-Cart',
          '0 Downtime during migration',
          '0.8s median LCP worldwide',
          '3× faster release cadence'
        ]}
      />
    </div>
  </div>
</section>


      {/* Conclusion & CTAs */}
      <section className="relative bg-[#0f2f27] py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Lessons Learned & Next Steps
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              This project reinforced the importance of early performance optimization and stakeholder communication.
              If starting fresh, we'd add visual regression tests from day one and use feature flags for safer rollouts.
            </p>
            <p className="text-white/70 leading-relaxed">
              Next up: real-time collaboration, broader i18n coverage, and more edge execution for global speed.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-8 py-3.5 text-base font-bold text-[#0a1f1a] hover:bg-white transition-all"
            >
              Let's Work Together
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/10 bg-white/5 px-8 py-3.5 text-base font-bold text-white hover:bg-white/10 transition-all"
            >
              View More Projects
            </Link>
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

      {/* Related */}
      <section className="relative bg-[#0a1f1a] py-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-2xl font-extrabold text-white mb-8 text-center">Related Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {['DigitalNest', 'LogicLeap', 'DataDynamo'].map((project) => (
              <Link
                key={project}
                href={`/portfolio/${project.toLowerCase()}`}
                className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10 hover:border-lime-400/30 transition-all"
              >
                <Image src="/Portfolio/project1.png" alt={project} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1a] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-extrabold text-lg">{project} Solutions</h4>
                  <p className="text-white/70 text-sm">View Case Study →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ----------------------------- Atoms & Molecules ----------------------------- */

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

/* KPI Card */
function KpiCard({ icon, value, label, delta }: { icon: React.ReactNode; value: string; label: string; delta: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-lime-400/20 bg-[#0f2f27] p-6">
      <div
        className="absolute -top-8 -right-8 h-24 w-24 rounded-full opacity-20 blur-2xl"
        style={{ background: 'radial-gradient(closest-side, rgba(163,230,53,0.35), transparent 70%)' }}
      />
      <div className="flex items-center justify-between mb-2">
        <div className="text-lime-400">{icon}</div>
        <span className="text-[11px] font-semibold text-lime-300/90 bg-lime-300/10 border border-lime-300/20 rounded-full px-2 py-0.5">
          {delta}
        </span>
      </div>
      <div className="text-3xl font-extrabold text-white">{value}</div>
      <div className="text-[11px] font-semibold text-white/70 tracking-wide uppercase mt-1">{label}</div>
    </div>
  );
}

/* Circular gauge (no deps) */
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
  avatar,         // optional: /images/client.png
  highlights = [],// optional: string[]
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
      {/* soft lime glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(163,230,53,0.35), transparent 70%)' }}
      />
      <div className="p-6 sm:p-8">
        {/* Header: rating + verified + date */}
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

        {/* Quote */}
        <blockquote className="text-lg sm:text-xl leading-relaxed text-white/90">
          “{quote}”
        </blockquote>

        {/* Author */}
        <figcaption className="mt-6 flex items-center gap-3">
          {avatar ? (
            // image avatar
            <img
              src={avatar}
              alt={name}
              className="h-10 w-10 rounded-full border border-lime-400/30 object-cover"
            />
          ) : (
            // fallback initials
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

        {/* Project-specific highlights */}
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