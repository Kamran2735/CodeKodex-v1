'use client';

import { ArrowRight, ShieldCheck, Clock, Rocket, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0a1f1a] py-16 sm:py-20 md:py-24">
      <div className="relative mx-auto w-full max-w-7xl px-6">
        {/* Badge */}
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-[#8af135] bg-white/5 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-[#8af135]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/80">
            Let’s build something real
          </span>
        </div>

        {/* Card */}
        <div className="relative overflow-hidden rounded-3xl border border-[#8af135] bg-[#0e2a23]/60 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          {/* Decorative background */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
          </div>

          {/* inner accent ring */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5" />

          {/* Centered content */}
          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mb-3 text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-[#8af135] uppercase">
              Your next sprint starts here
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Ship faster. Scale smarter. <span className="text-[#8af135]">Own the outcome.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-400">
              From discovery to delivery, we partner with you to design, build, and launch
              software that actually moves the needle—clean architecture, clear comms,
              and zero fluff.
            </p>

            {/* Trust row */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <TrustItem icon={<Clock className="h-4 w-4" />} title="48h response" subtitle="Kickoff plan in two days" />
              <TrustItem icon={<Rocket className="h-4 w-4" />} title="7-day kickoff" subtitle="Start design & spikes" />
              <TrustItem icon={<ShieldCheck className="h-4 w-4" />} title="Quality first" subtitle="Reviews & test coverage" />
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact" // ← adjust route
                className="group inline-flex items-center gap-2 rounded-full bg-[#8af135] hover:bg-white px-6 py-3 font-semibold text-[#0a1f1a] transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8af135]/40"
                aria-label="Start a project"
              >
                Start a project
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/case-studies" // ← adjust route
                className="inline-flex items-center gap-2 rounded-full border border-[#8af135] bg-white/0 px-6 py-3 font-semibold text-white/90 backdrop-blur transition-colors hover:bg-[#8af135] hover:text-[#0a1f1a] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                aria-label="See case studies"
              >
                See case studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— Small building blocks ——— */

function TrustItem({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-[#8af135] bg-white/5 p-3.5">
      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg border border-[#8af135] text-[#8af135]">
        {icon}
      </div>
      <div className="text-left">
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="text-xs text-white/60">{subtitle}</div>
      </div>
    </div>
  );
}
