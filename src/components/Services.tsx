'use client';

import {
  Bot,
  Code2,
  BrainCircuit,
  Search,
  Layout,
  ArrowRight,
  Check,
} from 'lucide-react';
import Link from 'next/link';

type Service = {
  id: string;            // used only for React key (NOT spread)
  title: string;
  icon: React.ReactNode;
  blurb: string;         // a bit longer now
  bullets: string[];     // max 3
  tags: string[];        // 2–3 pills
  href?: string;
};

/* --- Services (top row: Chatbots + Web Dev; bottom row: AI + SEO + Web Design) --- */
const CHATBOTS: Service = {
  id: 'chatbots',
  title: 'Chatbots',
  icon: <Bot className="w-6 h-6" />,
  blurb:
    'Automate support and pre-sales with an on-brand assistant that actually knows your docs. Clear analytics and human handoff built in.',
  bullets: ['RAG knowledge base', 'Multi-channel (web, WhatsApp)', 'Human fallback'],
  tags: ['Automation', 'Support', 'Sales'],
  href: '/services/chatbots',
};

const WEBDEV: Service = {
  id: 'webdev',
  title: 'Web Development',
  icon: <Code2 className="w-6 h-6" />,
  blurb:
    'Production-grade builds with clean architecture and Core Web Vitals in the green. CI/CD and QA guardrails from day one.',
  bullets: ['Next.js 15 • Tailwind', 'SSR/ISR + caching', 'QA & CI/CD baked in'],
  tags: ['Performance', 'Scalable', 'Secure'],
  href: '/services/web-development',
};

const AI: Service = {
  id: 'ai',
  title: 'AI Solutions',
  icon: <BrainCircuit className="w-6 h-6" />,
  blurb:
    'Practical AI features that drive outcomes—not demos. Retrieval, evals, and cost controls tuned to your workload.',
  bullets: ['RAG pipelines', 'Evals & guardrails', 'Cost control'],
  tags: ['LLM', 'Production', 'RAG'],
  href: '/services/ai',
};

const SEO: Service = {
  id: 'seo',
  title: 'SEO',
  icon: <Search className="w-6 h-6" />,
  blurb:
    'Technical SEO plus content ops for durable, compounding traffic. Ship fixes fast, brief content well, measure what matters.',
  bullets: ['Site health & CWV', 'Schema & sitemaps', 'Content briefs'],
  tags: ['Technical', 'Content', 'Analytics'],
  href: '/services/seo',
};

const WEBDESIGN: Service = {
  id: 'webdesign',
  title: 'Web Design',
  icon: <Layout className="w-6 h-6" />,
  blurb:
    'Conversion-led UI that speaks your brand language. Systems, responsiveness, and motion that earns its keep.',
  bullets: ['Design system', 'Responsive states', 'Measured motion'],
  tags: ['UI/UX', 'Brand', 'Conversion'],
  href: '/services/web-design',
};

export default function ServicesMasonry() {
  return (
    <section className="relative bg-[#0a1f1a] py-14 sm:py-16 md:py-20">


      <div className="relative mx-auto w-full max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10 text-center">
          <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-lime-400 uppercase">
            Services
          </div>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem]">
            Services Tailored to Your Needs
          </h2>
        </div>

        {/* Row 1: Chatbots + Web Development */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ServiceCard key={CHATBOTS.id} {...CHATBOTS} index={0} />
          <ServiceCard key={WEBDEV.id} {...WEBDEV} index={1} />
        </div>

        {/* Row 2: AI + SEO + Web Design */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <ServiceCard key={AI.id} {...AI} index={2} />
          <ServiceCard key={SEO.id} {...SEO} index={3} />
          <ServiceCard key={WEBDESIGN.id} {...WEBDESIGN} index={4} />
        </div>

        {/* Section CTA */}
        <div className="mt-10 flex items-center justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#8af135] px-5 py-2.5 text-sm font-bold text-[#0a1f1a] transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none hover:bg-white focus-visible:ring-2 focus-visible:ring-[#8af135]/40"
          >
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --- Compact Card --- */
function ServiceCard({
  icon,
  title,
  blurb,
  bullets,
  tags,
  href,
  index,
}: Service & { index: number }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/12 hover:border-[#8af135] bg-[#0f2f27]/60 p-5">
      {/* header */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[#8af135]/30 bg-[#0a1f1a] text-[#8af135]">
            {icon}
          </div>
          <h3 className="text-lg font-extrabold text-white">{title}</h3>
        </div>
        <span className="text-sm font-extrabold tracking-wider text-[#8af135]">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* blurb (slightly longer) */}
      <p className="text-[14px] leading-relaxed text-white/80">{blurb}</p>

      {/* bullets */}
      <ul className="mt-3 space-y-1.5">
        {bullets.slice(0, 3).map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-[13px] text-white/85">
            <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-[#8af135]/10 text-[#8af135]">
              <Check className="h-3.5 w-3.5" />
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t, i) => (
          <span
            key={i}
            className="rounded-full border border-white/12 bg-white/0 px-2.5 py-1 text-[11px] font-semibold text-white/70"
          >
            {t}
          </span>
        ))}
      </div>

      {/* action */}
      {href && (
        <div className="mt-4">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-white/90 transition-colors hover:border-[#8af135] hover:text-white"
          >
            Learn more
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </article>
  );
}
