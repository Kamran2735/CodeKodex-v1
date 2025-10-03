'use client';

import * as React from 'react';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

/* ------------------ Data ------------------ */
type FAQ = { q: string; a: string };

const FAQS: FAQ[] = [
  {
    q: 'How do your chatbots connect to our stack?',
    a: 'We integrate via APIs/webhooks with your CRM/helpdesk and index your docs (site, PDFs, Notion). The bot supports human handoff, conversation logs, and guardrails for tone & safety.',
  },
  {
    q: 'What does web development include?',
    a: 'Next.js 15 + Tailwind/shadcn codebase, SSR/ISR strategy, CI/CD, Playwright smoke tests, and a performance budget so Core Web Vitals stay green after launch.',
  },
  {
    q: 'Do you build AI beyond Q&A?',
    a: 'Yes—guided onboarding, form copilots, retrieval pipelines (RAG), eval harnesses for quality, and cost/latency control designed for production traffic.',
  },
  {
    q: 'Can you handle SEO for dynamic sites?',
    a: 'We ship the technical baseline (sitemaps, structured data, canonical URLs), stabilize routing, and run content ops—briefs, outlines, and measurement that compounds.',
  },
  {
    q: 'What does a typical engagement look like?',
    a: 'Day 1–2 discovery → 1-week architecture/first preview → weekly delivery with clear demos. You always have a single owner and a shared roadmap.',
  },
];

/* -------------- Motion helper -------------- */
function usePrefersReducedMotion() {
  const [prefers, setPrefers] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setPrefers(mq.matches);
    onChange();
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);
  return prefers;
}

/* ----------- Toggle Icon ( + / − ) ----------- */
function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span
      className={[
        'inline-flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300',
        open
          ? 'border-[#8af135] bg-[#8af135]/10'
          : 'border-white/15 bg-white/0 group-hover:border-white/25',
      ].join(' ')}
      aria-hidden="true"
    >
      {open ? (
        <Minus className="h-4 w-4 text-[#8af135]" />
      ) : (
        <Plus className="h-4 w-4 text-white/70 group-hover:text-white" />
      )}
    </span>
  );
}

/* -------------- Single FAQ Item -------------- */
function FAQItem({
  index,
  q,
  a,
  isOpen,
  onToggle,
  headerRef,
}: {
  index: number;
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
  headerRef: (el: HTMLButtonElement | null) => void;
}) {
  const panelId = `faq-panel-${index}`;
  const headerId = `faq-header-${index}`;
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  // Initialize no-flash state
  React.useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.transition = 'none';
    el.style.overflow = 'hidden';
    if (isOpen) {
      el.style.maxHeight = `${el.scrollHeight}px`;
      el.style.opacity = '1';
      requestAnimationFrame(() => {
        el.style.maxHeight = 'none';
        el.style.overflow = 'visible';
      });
    } else {
      el.style.maxHeight = '0px';
      el.style.opacity = '0';
    }
  }, []);

  // Animate open/close smoothly
  React.useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const DUR = prefersReduced ? 0 : 320;
    const EASE = 'cubic-bezier(0.4, 0, 0.2, 1)';
    el.style.transition = `max-height ${DUR}ms ${EASE}, opacity ${DUR}ms ease`;
    el.style.overflow = 'hidden';

    if (isOpen) {
      // open: 0 -> scrollHeight -> none
      el.style.maxHeight = '0px';
      el.style.opacity = '0';
      // force reflow
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      el.offsetHeight;
      el.style.maxHeight = `${el.scrollHeight}px`;
      el.style.opacity = '1';
      const onEnd = () => {
        el.style.transition = 'none';
        el.style.maxHeight = 'none';
        el.style.overflow = 'visible';
        el.removeEventListener('transitionend', onEnd);
      };
      el.addEventListener('transitionend', onEnd);
    } else {
      // close: from current height -> 0
      if (getComputedStyle(el).maxHeight === 'none') {
        el.style.maxHeight = `${el.scrollHeight}px`;
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        el.offsetHeight;
      }
      el.style.opacity = '0';
      el.style.maxHeight = '0px';
      const onEnd = () => {
        el.style.transition = 'none';
        el.style.overflow = 'hidden';
        el.removeEventListener('transitionend', onEnd);
      };
      el.addEventListener('transitionend', onEnd);
    }
  }, [isOpen, prefersReduced]);

  return (
    <div
      className={[
        'rounded-xl border bg-[#0f2f27]/60 transition-colors',
        isOpen
          ? 'border-[#8af135] outline outline-2 outline-[#8af135] outline-offset-0'
          : 'border-white/12',
      ].join(' ')}
    >
      <h3 id={headerId}>
        <button
          ref={headerRef}
          aria-controls={panelId}
          aria-expanded={isOpen}
          onClick={onToggle}
          className={[
            'group flex w-full items-center justify-between gap-6 rounded-xl px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8af135]/40',
            isOpen ? 'text-white' : 'text-white/80 hover:text-white',
            'min-h-[64px]', // keeps row height consistent and vertically centered
          ].join(' ')}
        >
          {/* Left: icon + question (perfect vertical centering) */}
          <span className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#8af135]/30 bg-[#8af135]/10 text-[#8af135]">
              <HelpCircle className="h-4 w-4" />
            </span>
            <span className="text-base sm:text-lg font-semibold leading-normal">
              {q}
            </span>
          </span>

          {/* Right: + / − control */}
          <ToggleIcon open={isOpen} />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        ref={contentRef}
        className="overflow-hidden px-5 pb-4 pt-0"
      >
        <p className="text-[15px] leading-relaxed text-white/75">{a}</p>
      </div>
    </div>
  );
}

/* ------------------ Section (65/35) ------------------ */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const itemRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  const onToggle = (idx: number) => setOpenIndex((cur) => (cur === idx ? null : idx));

  // Roving focus across headers
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const headers = itemRefs.current.filter(Boolean) as HTMLButtonElement[];
    if (!headers.length) return;
    const active = document.activeElement as HTMLButtonElement;
    const i = headers.indexOf(active);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      headers[(i + 1) % headers.length]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      headers[(i - 1 + headers.length) % headers.length]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      headers[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      headers[headers.length - 1]?.focus();
    }
  };

  return (
    <section className="relative bg-[#0a1f1a] py-16 sm:py-20 md:py-24">
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[35%_65%]">
          {/* Left 35% */}
          <aside className="self-start lg:sticky lg:top-24">
            <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-lime-400 uppercase">
              <HelpCircle className="mr-2 inline h-4 w-4 text-[#8af135]" />
              FAQ
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem]">
              Answers that help you decide
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-white/75">
              Below are the most common questions we get around AI solutions, SEO, web design,
              web development, and chatbots. If you don’t see your question, we’ll answer it on a quick call.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#8af135] px-5 py-2.5 text-sm font-bold text-[#0a1f1a] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8af135]/40"
              >
                Talk to us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>

          {/* Right 65% */}
          <div
            id="faq"
            role="region"
            aria-label="Frequently Asked Questions"
            onKeyDown={onKeyDown}
            className="space-y-4"
          >
            {FAQS.map((item, idx) => (
              <FAQItem
                key={idx}
                index={idx}
                q={item.q}
                a={item.a}
                isOpen={openIndex === idx}
                onToggle={() => onToggle(idx)}
                headerRef={(el) => (itemRefs.current[idx] = el)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
