'use client';

import { Lightbulb, Workflow, Code2, Rocket, ArrowRight, Gauge } from 'lucide-react';
import Link from 'next/link';

type Step = {
  id: number;
  icon: React.ReactNode;
  title: string;
  blurb: string;
  meta: string;     // tiny timing/expectation hint
  tags: string[];   // 1–3 deliverable chips
};

const STEPS: Step[] = [
  {
    id: 1,
    icon: <Lightbulb className="h-5 w-5" />,
    title: 'Discovery',
    blurb: 'Align on goals, risks, and success metrics. Cut noise, lock scope, and set a clear plan.',
    meta: '48h plan',
    tags: ['Discovery brief', 'Roadmap', 'Risks map'],
  },
  {
    id: 2,
    icon: <Workflow className="h-5 w-5" />,
    title: 'Architecture',
    blurb: 'Design a thin vertical slice and choose the right stack. De-risk data, auth, and perf.',
    meta: '1 week',
    tags: ['System diagram', 'Decision log', 'Spike plan'],
  },
  {
    id: 3,
    icon: <Code2 className="h-5 w-5" />,
    title: 'Build',
    blurb: 'Weekly outcomes, previews, and automated QA. Velocity stays high—quality stays tight.',
    meta: 'weekly demos',
    tags: ['Preview links', 'CI/CD', 'QA suite'],
  },
  {
    id: 4,
    icon: <Rocket className="h-5 w-5" />,
    title: 'Launch',
    blurb: 'Rollout with monitors and a clean handover. Stabilize, measure, and keep improving.',
    meta: 'stabilize',
    tags: ['Runbook', 'Monitors', 'SLA'],
  },
];

export default function ProcessTeaser() {
  return (
    <section className="relative bg-[#0a1f1a] py-14 sm:py-16 md:pt-20 md:pb-28">

      <div className="relative mx-auto w-full max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
        <div className="text-[#8af135] text-[11px] font-bold tracking-[0.3em] uppercase">
              How we work
          </div>
    <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight">
            A calm, outcome-driven process
          </h2>
        </div>

        {/* FLOW RAIL + CARDS */}
        <div className="relative pt-10 lg:pt-14">
          {/* Horizontal rail with nodes (desktop only) */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-[-56px] hidden lg:block"
          >
            {/* rail line */}
            <div
              className="h-[2px] w-full"
              style={{
                background:
                  'linear-gradient(90deg, rgba(163,230,53,0) 0%, rgba(163,230,53,0.35) 12%, rgba(163,230,53,0.35) 88%, rgba(163,230,53,0) 100%)',
              }}
            />
            {/* nodes aligned to columns */}
            <div className="mt-[-14px] grid grid-cols-4">
              {STEPS.map((s) => (
                <div key={s.id} className="flex items-center justify-center">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#8af135] bg-[#0a1f1a] text-sm font-extrabold text-[#8af135] shadow-[0_0_20px_rgba(163,230,53,0.25)]">
                    {String(s.id).padStart(2, '0')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <ol role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.id} role="listitem">
                <StepCard
                  {...s}
                  nextTitle={i < STEPS.length - 1 ? STEPS[i + 1].title : undefined}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- Step Card ---------- */
function StepCard({
  id,
  icon,
  title,
  blurb,
  meta,
  tags,
  nextTitle,
}: Step & { nextTitle?: string }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-white/12 bg-[#0f2f27]/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8af135] hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      {/* corner glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30"
        style={{ background: 'radial-gradient(closest-side, rgba(138,241,53,0.35), transparent 70%)' }}
      />

      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[#8af135]/30 bg-[#0a1f1a] text-[#8af135]">
            {icon}
          </span>
          <h3 className="text-lg font-extrabold text-white">{title}</h3>
        </div>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#8af135]/40 text-sm font-bold text-[#8af135]">
          {String(id).padStart(2, '0')}
        </span>
      </div>

      {/* Body */}
      <p className="text-[14px] leading-relaxed text-white/75">{blurb}</p>

      {/* Tags / deliverables */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t, i) => (
          <span
            key={i}
            className="rounded-full border border-white/15 bg-white/0 px-2.5 py-1 text-[11px] font-semibold text-white/70"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer strip: pace + next step hint */}
      <div className="mt-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/60">
          <Gauge className="h-3.5 w-3.5 text-[#8af135]" />
          Pace: steady outcomes
        </span>
        {nextTitle ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70">
            Next up:
            <span className="text-white">{nextTitle}</span>
            <ArrowRight className="h-3.5 w-3.5 text-[#8af135]" />
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8af135]">
            Ready to launch
          </span>
        )}
      </div>
    </article>
  );
}
