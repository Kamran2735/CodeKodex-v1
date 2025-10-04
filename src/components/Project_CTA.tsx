// components/ProjectCTA.tsx
'use client';

import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Sparkles, CalendarCheck, MessageSquare } from 'lucide-react';

type CTAButton = {
  label: string;
  href: string;
  aria?: string;
};

export type ProjectCTAProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  primary: CTAButton;
  secondary?: CTAButton;
  notes?: string[]; // small trust notes under buttons
};

export default function ProjectCTA({
  eyebrow = 'READY TO BUILD?',
  title,
  subtitle,
  bullets = [],
  primary,
  secondary,
  notes = [],
}: ProjectCTAProps) {
  return (
    <section className="relative bg-[#0a1f1a] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            relative overflow-hidden rounded-3xl border border-lime-400/20
            bg-gradient-to-br from-[#0f2f27] via-[#0a1f1a] to-[#0f2f27]
            shadow-[0_20px_70px_rgba(138,241,53,0.08)]
          "
        >
          {/* soft lime glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(closest-side, rgba(163,230,53,0.35), transparent 70%)' }}
          />
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            {/* Left: Copy */}
            <div>
              <div className="text-[11px] font-bold tracking-[0.3em] text-lime-400 uppercase mb-3">
                {eyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                {title}
              </h2>
              {subtitle ? (
                <p className="mt-4 text-white/70 text-lg leading-relaxed">
                  {subtitle}
                </p>
              ) : null}

              {bullets.length ? (
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/80">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-lime-400 flex-shrink-0" />
                      <span className="text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            {/* Right: Actions */}
            <div className="rounded-2xl border border-white/10 bg-[#0a1f1a]/60 p-6">
              <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
                <Sparkles className="h-4 w-4 text-lime-400" />
                <span>Typically replies in ~1 business day</span>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href={primary.href}
                  aria-label={primary.aria ?? primary.label}
                  className="
                    inline-flex items-center justify-center gap-2 rounded-full
                    bg-lime-400 px-6 py-3 text-base font-bold text-[#0a1f1a]
                    hover:bg-white transition-all
                  "
                >
                  {primary.label}
                  <ArrowUpRight className="h-5 w-5" />
                </Link>

                {secondary ? (
                  <Link
                    href={secondary.href}
                    aria-label={secondary.aria ?? secondary.label}
                    className="
                      inline-flex items-center justify-center gap-2 rounded-full
                      border-2 border-white/10 bg-white/5 px-6 py-3 text-base font-bold text-white
                      hover:bg-white/10 transition-all
                    "
                  >
                    {secondary.label}
                  </Link>
                ) : null}
              </div>

              {notes.length ? (
                <ul className="mt-5 grid gap-2">
                  {notes.map((n, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-white/60">
                      {/* alternate icons for a little personality */}
                      {i % 2 === 0 ? (
                        <CalendarCheck className="mt-0.5 h-4 w-4 text-lime-400 flex-shrink-0" />
                      ) : (
                        <MessageSquare className="mt-0.5 h-4 w-4 text-lime-400 flex-shrink-0" />
                      )}
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
