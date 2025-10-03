'use client';

import * as React from 'react';
import {
  // Category icons
  Globe2, Cpu, Cloud, Database, Sparkles,
  // Web
  CircleDot, Atom, Braces, Wind, ServerCog, Triangle, ShoppingBag, Clapperboard,
  // AI
  BrainCircuit, FlaskConical, Flame, FileSearch, CheckCircle2,
  // Cloud
  Boxes, Network, Workflow, GitBranch,
  // Data
  LineChart, Filter as Funnel, Search
} from 'lucide-react';

/* ---------------- Types & Data ---------------- */

type Tech = { label: string; icon: React.ReactNode };
type Key = 'web' | 'ai' | 'cloud' | 'data';

const STACKS: Record<Key, Tech[]> = {
  web: [
    { label: 'Next.js',      icon: <CircleDot /> },
    { label: 'React',        icon: <Atom /> },
    { label: 'TypeScript',   icon: <Braces /> },
    { label: 'Tailwind',     icon: <Wind /> },
    { label: 'Node.js',      icon: <ServerCog /> },
    { label: 'Vercel',       icon: <Triangle /> },
    { label: 'Shopify',      icon: <ShoppingBag /> },
    { label: 'Playwright',   icon: <Clapperboard /> },
  ],
  ai: [
    { label: 'OpenAI',       icon: <BrainCircuit /> },
    { label: 'Databricks',   icon: <Database /> },
    { label: 'MLflow',       icon: <FlaskConical /> },
    { label: 'PyTorch',      icon: <Flame /> },
    { label: 'RAG',          icon: <FileSearch /> },
    { label: 'Evals',        icon: <CheckCircle2 /> },
  ],
  cloud: [
    { label: 'Docker',       icon: <Boxes /> },
    { label: 'Kubernetes',   icon: <Network /> },
    { label: 'GH Actions',   icon: <Workflow /> },
    { label: 'Vercel',       icon: <Triangle /> },
    { label: 'Net Ops',      icon: <Globe2 /> },
    { label: 'CI/CD',        icon: <GitBranch /> },
  ],
  data: [
    { label: 'PostgreSQL',   icon: <Database /> },
    { label: 'Redis',        icon: <Triangle /> },
    { label: 'Elasticsearch',icon: <Search /> },
    { label: 'DuckDB',       icon: <Database /> },
    { label: 'ETL',          icon: <Funnel /> },
    { label: 'Analytics',    icon: <LineChart /> },
  ],
};

const TAB_META: Record<Key, { label: string; icon: React.ReactNode }> = {
  web:   { label: 'Web',          icon: <Globe2 className="h-6 w-6" /> },     // ← slightly larger
  ai:    { label: 'AI',           icon: <Cpu className="h-6 w-6" /> },
  cloud: { label: 'Cloud/DevOps', icon: <Cloud className="h-6 w-6" /> },
  data:  { label: 'Data',         icon: <Database className="h-6 w-6" /> },
};

/* ---------------- Math helpers (anchors + seeded shuffle) ---------------- */

function polarToPercent(radiusPct: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  const x = 50 + radiusPct * Math.cos(rad);
  const y = 50 + radiusPct * Math.sin(rad);
  return { left: `${x}%`, top: `${y}%` };
}

function ringAngles(n: number, startDeg: number) {
  return Array.from({ length: n }, (_, i) => startDeg + (360 / n) * i);
}

function seedFromString(s: string) {
  let h = 1779033703 ^ s.length;
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(h ^ s.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return (h >>> 0) || 1;
}
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), 1 | t);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffleSeeded<T>(arr: T[], seed: number) {
  const rng = mulberry32(seed);
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---------------- UI atoms ---------------- */

function Ring({ sizePct, opacity }: { sizePct: number; opacity: number }) {
  const s = `${sizePct}%`;
  return (
    <div
      aria-hidden
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"
      style={{ width: s, height: s, opacity }}
    />
  );
}

function Node({
  label,
  icon,
  left,
  top,
  delay = 0,
}: { label: string; icon: React.ReactNode; left: string; top: string; delay?: number }) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        left,
        top,
        transition: 'transform 520ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 420ms ease',
        transitionDelay: `${delay}ms`,
      }}
      aria-label={label}
    >
      <div className="group flex select-none flex-col items-center">
        {/* Regular node icon (h-11 w-11) */}
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8af135] text-[#0a1f1a] shadow-[0_6px_20px_rgba(138,241,53,0.25)] ring-1 ring-black/10">
          <span className="text-[18px] leading-none">{icon}</span>
        </div>
        <span className="mt-2 inline-block rounded-full border border-white/15 bg-white/0 px-2.5 py-0.5 text-[11px] font-semibold text-white/80 whitespace-nowrap">
          {label}
        </span>
      </div>
    </div>
  );
}

/* ---------------- Main component ---------------- */

export default function TechOrbitAnchored() {
  const [active, setActive] = React.useState<Key>('web');

  // cap to 8 items
  const items = React.useMemo(() => STACKS[active].slice(0, 8), [active]);

  // radii (% of container width)
  const INNER_RADIUS = 24;
  const OUTER_RADIUS = 38;

  // small outward push so nodes sit just off the ring
  const PUSH_INNER = 1.5;   // %
  const PUSH_OUTER = 2.0;   // %

  // fixed anchors (8 per ring)
  const innerAngles = ringAngles(8, -90);
  const outerAngles = ringAngles(8, -90 + 22.5);

  const innerAnchors = innerAngles.map((ang) => ({ angle: ang, ring: 'inner' as const }));
  const outerAnchors = outerAngles.map((ang) => ({ angle: ang, ring: 'outer' as const }));

  const allAnchors = [...innerAnchors, ...outerAnchors];
  const chosenAnchors = shuffleSeeded(allAnchors, seedFromString(active)).slice(0, items.length);

  return (
    <section className="relative bg-[#0a1f1a] py-16 ">

      <div className="relative mx-auto w-full max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-8 text-center">
        <div className="text-[#8af135] text-[11px] font-bold tracking-[0.3em] uppercase">

  Tech Stack
          </div>
    <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight">
            What we ship with
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-[#1a3530]/50 p-1.5 border border-white/5">
            {(Object.keys(TAB_META) as Key[]).map((k) => (
              <button
                key={k}
                onClick={() => setActive(k)}
                className={[
                  'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all',
                  active === k ? 'bg-[#8af135] text-[#0a1f1a]' : 'text-white/70 hover:text-white',
                ].join(' ')}
              >
                {TAB_META[k].icon}
                {TAB_META[k].label}
              </button>
            ))}
          </div>
        </div>

        {/* Orbit canvas */}
        <div className="relative mx-auto aspect-square w-full max-w-[680px]">
          {/* rings */}
          <Ring sizePct={80} opacity={0.12} />
          <Ring sizePct={56} opacity={0.18} />

          {/* CENTER “SUN” — bigger than node icons + distinct tag style */}
{/* center “sun” */}
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
  <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-[#0d241f] shadow-[0_0_44px_rgba(163,230,53,0.18)] ring-1 ring-white/10">
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#122f27]">
      {/* Category icon — SVG gets larger but circle stays 80px (h-20 w-20) */}
      <div
        className="
          flex h-20 w-20 items-center justify-center rounded-full
          bg-[#8af135] text-[#0a1f1a] ring-1 ring-black/10
          [&>svg]:h-12 [&>svg]:w-12 [&>svg]:stroke-[2]
        "
      >
        {TAB_META[active].icon}
      </div>
    </div>

    {/* distinct category tag */}
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
      <span className="inline-flex items-center gap-2 rounded-full bg-[#8af135]/15 px-3.5 py-1.5 text-[12px] font-bold text-[#c8ff8a] ring-1 ring-[#8af135]/30">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#8af135]" />
        {TAB_META[active].label}
      </span>
    </div>
  </div>
</div>


          {/* nodes → fixed anchors with outward push */}
          {items.map((it, i) => {
            const a = chosenAnchors[i];
            const radius =
              a.ring === 'inner'
                ? INNER_RADIUS + PUSH_INNER
                : OUTER_RADIUS + PUSH_OUTER;
            const pos = polarToPercent(radius, a.angle);

            return (
              <Node
                key={`${active}-${it.label}-${i}`}
                label={it.label}
                icon={it.icon}
                left={pos.left}
                top={pos.top}
                delay={i * 40}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
