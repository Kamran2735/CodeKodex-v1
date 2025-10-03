'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  CalendarClock,
  MessageSquare,
  FileText,
  CheckCircle2,
  Star,
  Globe2,
} from 'lucide-react';

export default function CTASectionV2() {
  return (
    <section className="relative overflow-hidden bg-[#0a1f1a] py-16 sm:py-20 md:py-24">

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f2f27]/60 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
            {/* LEFT: copy + actions */}
            <div>
              {/* badge */}
            <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-lime-400 uppercase">
                  Partnership-ready
              </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem]">
                Turn scope into shipped outcomes
              </h2>

              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400">
                We become your delivery lane—design systems that scale, CI that catches bugs,
                and AI that stays on budget. Clear comms, tight loops, measurable results.
              </p>

              {/* highlights row (different from your first CTA) */}
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <Highlight icon={<Clock className="h-4 w-4" />} title="Lead time < 7 days" />
                <Highlight icon={<ShieldCheck className="h-4 w-4" />} title="Code ownership" />
                <Highlight icon={<Star className="h-4 w-4" />} title="4.9/5 satisfaction" />
              </div>

              {/* actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact" // ← adjust
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#8af135] px-6 py-3 font-semibold text-[#0a1f1a] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8af135]/40"
                  aria-label="Get a proposal"
                >
                  Get a proposal
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/book" // ← adjust
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white/90 backdrop-blur transition-colors hover:border-white/30 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                  aria-label="Book an intro call"
                >
                  Book intro call
                  <CalendarClock className="h-5 w-5" />
                </Link>
              </div>

              {/* meta strip */}
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold text-white/50">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/0 px-3 py-1">
                  <Globe2 className="h-3.5 w-3.5 text-[#8af135]" />
                  Time-zone overlap guaranteed
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/0 px-3 py-1">
                  <FileText className="h-3.5 w-3.5 text-[#8af135]" />
                  SOW in 48h
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/0 px-3 py-1">
                  <MessageSquare className="h-3.5 w-3.5 text-[#8af135]" />
                  Weekly demos
                </span>
              </div>
            </div>

            {/* RIGHT: kickoff steps card */}
            <aside className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#0a1f1a]/60 p-5 sm:p-6">
                {/* corner glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full opacity-30 blur-2xl"
                  style={{ background: 'radial-gradient(closest-side, rgba(138,241,53,0.28), transparent 70%)' }}
                />

                <div className="mb-3 text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-[#8af135] uppercase">
                  Kickoff plan
                </div>

                <ol className="space-y-3">
                  <Step
                    number="01"
                    title="Discovery & scope map"
                    desc="90-minute workshop + asset review. Risks, constraints, and KPIs agreed."
                  />
                  <Step
                    number="02"
                    title="Architecture preview"
                    desc="One-week spike. Repo, CI, and first screens or API stubs ready."
                  />
                  <Step
                    number="03"
                    title="Ship & iterate"
                    desc="Weekly demos, perf budgets enforced, and clear acceptance criteria."
                  />
                </ol>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Tag label="Test coverage" />
                  <Tag label="Perf budgets" />
                  <Tag label="Secure by default" />
                  <Tag label="Docs included" />
                </div>

                {/* assurance */}
                <div className="mt-5 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  <CheckCircle2 className="h-4 w-4 text-[#8af135]" />
                  <span className="text-xs font-semibold text-white/80">
                    Fixed scope or sprint-based—your choice.
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Small building blocks ===== */

function Highlight({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#8af135]/10 text-[#8af135]">
        {icon}
      </div>
      <div className="text-sm font-semibold text-white">{title}</div>
    </div>
  );
}

function Step({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) {
  return (
    <li className="rounded-lg border border-white/10 bg-white/0 p-3.5">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-xs font-bold tracking-widest text-[#8af135]">{number}</span>
        <span className="inline-block h-[2px] w-10 rounded-full bg-[#8af135]/40" />
      </div>
      <div className="text-sm font-semibold text-white">{title}</div>
      <p className="mt-1 text-[13px] leading-relaxed text-white/70">{desc}</p>
    </li>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/0 px-2.5 py-1 text-[11px] font-semibold text-white/70">
      {label}
    </span>
  );
}
