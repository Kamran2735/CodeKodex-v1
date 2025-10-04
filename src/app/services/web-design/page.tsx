'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight, Check, X, Zap, Eye, Code2, Gauge, Shield,
  Sparkles, Users, TrendingUp, FileCheck, Palette, Layout,
  Figma, Chrome, Smartphone, MonitorSmartphone, Clock,
  CheckCircle2, Globe2, MousePointerClick, Target, Lightbulb, Rocket
} from 'lucide-react';
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiFigma } from 'react-icons/si';
import Image from 'next/image';

export default function WebDesignService() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', goal: '' });
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);


  return (
    <div className="min-h-screen bg-[#0a1f1a]">
      {/* Hero Section */}
      <section className="relative bg-[#0a1f1a] pt-20 pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full bg-lime-400/10 border border-lime-400/30 px-4 py-2 text-[11px] font-bold tracking-[0.3em] text-lime-400 uppercase">
                <Sparkles className="w-4 h-4" />
                SERVICE
              </div>

              {/* Service Name */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Web Design & Development
              </h1>

              {/* Value Promise */}
              <p className="text-xl text-white/90 leading-relaxed">
                We craft lightning-fast, conversion-optimized websites that turn visitors into customers—without sacrificing design.
              </p>

              {/* Proof Points */}
              <div className="flex flex-wrap gap-4">
                <ProofBadge icon={<Zap />} text="<1s Load Time" />
                <ProofBadge icon={<Target />} text="Conversion-Focused" />
                <ProofBadge icon={<Shield />} text="Zero-Downtime Launches" />
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-8 py-4 text-base font-bold text-[#0a1f1a] hover:bg-white transition-all hover:gap-3 group"
                >
                  Book Discovery Call
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </a>
                <Link 
                  href="/portfolio" 
                  className="inline-flex items-center gap-2 rounded-full border-2 border-lime-400/30 bg-lime-400/5 px-8 py-4 text-base font-bold text-white hover:bg-lime-400/10 transition-all"
                >
                  See Our Work
                </Link>
              </div>

              {/* Client Logos Strip */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase mb-6">
                  Trusted by Forward-Thinking Companies
                </p>
                <div className="flex flex-wrap items-center gap-8 opacity-50">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="text-white/70 text-sm font-bold">
                      CLIENT {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Hero Visual */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-lime-400/30 shadow-[0_20px_70px_rgba(138,241,53,0.15)]">
                <Image
                  src="/Portfolio/project1.png"
                  alt="Web Design Service"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1a] via-transparent to-transparent opacity-60" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-lime-400 rounded-2xl px-6 py-4 shadow-xl">
                <div className="text-[#0a1f1a] text-3xl font-extrabold">Fast</div>
                <div className="text-[#0a1f1a] text-sm font-bold">& Beautiful</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="relative bg-[#0f2f27] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeader label="IDEAL FOR" title="Who This Service Is For" />
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Good Fit */}
              <div className="bg-[#1a3530] border border-lime-400/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lime-400">
                    <Check className="w-6 h-6 text-[#0a1f1a]" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Perfect Fit</h3>
                </div>
                <ul className="space-y-4">
                  <FitItem icon={<Check />} text="Launching a new product or brand that needs a stunning web presence" positive />
                  <FitItem icon={<Check />} text="Redesigning an outdated site that's hurting conversions" positive />
                  <FitItem icon={<Check />} text="Scaling a business that needs enterprise-grade performance" positive />
                  <FitItem icon={<Check />} text="Building a content-heavy site (blog, docs, marketing pages)" positive />
                  <FitItem icon={<Check />} text="Need both design vision and technical excellence in one partner" positive />
                </ul>
              </div>

              {/* Not a Fit */}
              <div className="bg-[#0a1f1a] border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10">
                    <X className="w-6 h-6 text-white/70" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Not Right For</h3>
                </div>
                <ul className="space-y-4">
                  <FitItem icon={<X />} text="Complex SaaS apps requiring full backend infrastructure" positive={false} />
                  <FitItem icon={<X />} text="Budget under $5K (we have minimum project thresholds)" positive={false} />
                  <FitItem icon={<X />} text="Need it done in under 2 weeks (quality takes time)" positive={false} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative bg-[#0a1f1a] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader label="OUTCOMES" title="Business Results You Can Expect" />
          
          {/* KPI Tiles - More Generic */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <KPITile icon={<TrendingUp />} label="Higher Conversions" description="Turn more visitors into customers" />
            <KPITile icon={<Zap />} label="Lightning Fast" description="Sub-second page loads" />
            <KPITile icon={<MousePointerClick />} label="Better Engagement" description="Keep users on your site longer" />
            <KPITile icon={<CheckCircle2 />} label="Reliable Uptime" description="Always available for customers" />
          </div>

          {/* Impact Statement */}
          <div className="max-w-3xl mx-auto bg-[#0f2f27] border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white/80 text-lg leading-relaxed">
              Our clients typically see <span className="text-lime-400 font-bold">significant ROI within 6 months</span> through improved conversion rates, reduced bounce rates, and better SEO rankings. We don't just build websites—we build revenue engines optimized for growth.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="relative bg-[#0f2f27] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader label="DELIVERABLES" title="What's Included" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DeliverableCard 
              icon={<Figma />}
              title="Design System"
              description="Complete Figma file with components, tokens, and documentation"
              tag="Included"
            />
            <DeliverableCard 
              icon={<Code2 />}
              title="Production Code"
              description="Clean, documented Next.js/React codebase ready to deploy"
              tag="Included"
            />
            <DeliverableCard 
              icon={<Gauge />}
              title="Performance Audit"
              description="Lighthouse reports, Core Web Vitals optimization"
              tag="Included"
            />
            <DeliverableCard 
              icon={<Eye />}
              title="Accessibility Check"
              description="WCAG 2.1 AA compliance testing and fixes"
              tag="Included"
            />
            <DeliverableCard 
              icon={<FileCheck />}
              title="SEO Foundation"
              description="Meta tags, sitemap, structured data, Open Graph"
              tag="Included"
            />
            <DeliverableCard 
              icon={<Globe2 />}
              title="CI/CD Pipeline"
              description="GitHub Actions, automated testing, preview deploys"
              tag="Optional"
            />
            <DeliverableCard 
              icon={<Chrome />}
              title="Browser Testing"
              description="Cross-browser compatibility (Chrome, Safari, Firefox, Edge)"
              tag="Included"
            />
            <DeliverableCard 
              icon={<Smartphone />}
              title="Mobile Optimization"
              description="Responsive design, touch-friendly interactions"
              tag="Included"
            />
            <DeliverableCard 
              icon={<Users />}
              title="Training Session"
              description="2-hour walkthrough for your team on content updates"
              tag="Add-on"
            />
          </div>
        </div>
      </section>

      {/* Process - Updated with rail design */}
      <section className="relative bg-[#0a1f1a] py-16 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader label="PROCESS" title="How We Work Together" />
          
          {/* Process Rail */}
          <div className="relative">
            {/* Horizontal rail with nodes (desktop only) */}
{/* Process Rail (desktop only) */}
<div aria-hidden className="absolute inset-x-0 bottom-[-56px] hidden lg:block">
  {/* The same gradient strip as before */}
  <div
    className="h-[2px] w-full"
    style={{
      background:
        'linear-gradient(90deg, rgba(138,241,53,0) 0%, rgba(138,241,53,0.35) 12%, rgba(138,241,53,0.35) 88%, rgba(138,241,53,0) 100%)',
    }}
  />

  {/* Number nodes (hoverable + reactive) */}
  <div className="mt-[-14px] grid grid-cols-6">
    {['01', '02', '03', '04', '05', '06'].map((num) => (
      <div
        key={num}
        className="flex items-center justify-center transition-all duration-300"
      >
        <span
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-extrabold shadow-[0_0_20px_rgba(138,241,53,0.25)] transition-all duration-300
            ${
              hoveredStep === num
                ? 'border-lime-400 bg-lime-400 text-[#0a1f1a] scale-110'
                : 'border-lime-400 bg-[#0a1f1a] text-lime-400 opacity-90'
            }`}
        >
          {num}
        </span>
      </div>
    ))}
  </div>
</div>


            {/* Process Steps */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProcessCard 
                number="01"
                icon={<Lightbulb />}
                title="Discovery"
                blurb="Understand your business, users, and goals through research and competitive analysis"
                meta="1 week"
                tags={['Research doc', 'Personas', 'Roadmap']}
                onHover={setHoveredStep}
              />
              <ProcessCard 
                number="02"
                icon={<Layout />}
                title="Strategy & Planning"
                blurb="Define sitemap, user flows, and technical architecture for optimal results"
                meta="1 week"
                tags={['Sitemap', 'Wireframes', 'Tech stack']}
                onHover={setHoveredStep}
              />
              <ProcessCard 
                number="03"
                icon={<Palette />}
                title="Design"
                blurb="Create high-fidelity designs and interactive prototypes that wow users"
                meta="2-3 weeks"
                tags={['Figma designs', 'Design system', 'Prototype']}
                onHover={setHoveredStep}
              />
              <ProcessCard 
                number="04"
                icon={<Code2 />}
                title="Development"
                blurb="Build production-ready code with best practices and clean documentation"
                meta="3-4 weeks"
                tags={['Next.js app', 'Components', 'Docs']}
                onHover={setHoveredStep}
              />
              <ProcessCard 
                number="05"
                icon={<Gauge />}
                title="QA & Testing"
                blurb="Ensure quality across devices, browsers, and edge cases with rigorous testing"
                meta="1 week"
                tags={['Test reports', 'Bug fixes', 'Performance']}
                onHover={setHoveredStep}
              />
              <ProcessCard 
                number="06"
                icon={<Rocket />}
                title="Launch & Iterate"
                blurb="Deploy to production and monitor performance with ongoing support"
                meta="1 week"
                tags={['Live site', 'Analytics', '30-day support']}
                onHover={setHoveredStep}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech & Standards */}
      <section className="relative bg-[#0f2f27] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader label="TECHNOLOGY" title="Our Stack & Standards" />
          
          {/* Tech Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <TechBadge icon={<SiNextdotjs size={24} />} label="Next.js 14" />
            <TechBadge icon={<SiReact size={24} />} label="React 18" />
            <TechBadge icon={<SiTypescript size={24} />} label="TypeScript" />
            <TechBadge icon={<SiTailwindcss size={24} />} label="Tailwind CSS" />
            <TechBadge icon={<SiFigma size={24} />} label="Figma" />
          </div>

          {/* Standards List */}
          <div className="max-w-3xl mx-auto bg-[#0a1f1a] border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-extrabold text-white mb-6">What You Get by Default</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <StandardItem text="WCAG 2.1 AA accessibility" />
              <StandardItem text="Core Web Vitals optimization" />
              <StandardItem text="Mobile-first responsive design" />
              <StandardItem text="SEO best practices" />
              <StandardItem text="Semantic HTML structure" />
              <StandardItem text="Performance budgets" />
              <StandardItem text="Type-safe codebase" />
              <StandardItem text="Component documentation" />
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Case - With Case Study Card */}
      <section className="relative bg-[#0a1f1a] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader label="CASE STUDY" title="Real Results" />
          
          <div className="max-w-5xl mx-auto">
            {/* Case Study Card */}
            <div className="bg-[#0f2f27] border border-white/10 rounded-3xl overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Left - Project Info */}
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-lime-400/10 border border-lime-400/30 px-3 py-1.5 text-[11px] font-bold text-lime-400 uppercase mb-4">
                    <Sparkles className="w-3 h-3" />
                    Case Study
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                    TechVantage Solutions
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    A comprehensive enterprise platform that transformed their business operations through modern web design and development.
                  </p>
                  
                  {/* Project Image */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 mb-6">
                    <Image 
                      src="/Portfolio/project1.png" 
                      alt="TechVantage Solutions" 
                      fill 
                      className="object-cover" 
                    />
                  </div>

                  <Link 
                    href="/portfolio/techvantage" 
                    className="inline-flex items-center gap-2 text-lime-400 hover:text-white transition-colors font-semibold"
                  >
                    Read Full Case Study
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Right - Before/After */}
                <div className="flex flex-col justify-center">
                  <div className="space-y-8">
                    {/* Before */}
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/30 px-3 py-1.5 text-[11px] font-bold text-red-400 uppercase mb-4">
                        Before
                      </div>
                      <ul className="space-y-3">
                        <BeforeAfterItem negative text="4.2s average page load" />
                        <BeforeAfterItem negative text="58% mobile bounce rate" />
                        <BeforeAfterItem negative text="2.3% conversion rate" />
                        <BeforeAfterItem negative text="Poor accessibility (45 violations)" />
                      </ul>
                    </div>

                    {/* After */}
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-lime-400/10 border border-lime-400/30 px-3 py-1.5 text-[11px] font-bold text-lime-400 uppercase mb-4">
                        After
                      </div>
                      <ul className="space-y-3">
                        <BeforeAfterItem positive text="0.8s average page load" />
                        <BeforeAfterItem positive text="24% mobile bounce rate" />
                        <BeforeAfterItem positive text="5.7% conversion rate" />
                        <BeforeAfterItem positive text="100% accessibility score" />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* FAQ */}
<section className="relative bg-[#0f2f27] py-16">
  <div className="mx-auto max-w-7xl px-6">
    <SectionHeader label="FAQ" title="Common Questions" />

    {(() => {
      const faqs = [
        {
          q: "What's the typical timeline?",
          a: "Most projects take 6–10 weeks end-to-end (Discovery → Launch). We’ll confirm a milestone plan in the SOW.",
        },
        {
          q: "Do we own the code and designs?",
          a: "Yes. Repos live under your org and Figma is transferred at completion. Everything is yours.",
        },
        {
          q: "How do we collaborate?",
          a: "Async-first. Slack for daily updates, weekly Zoom for alignment, and preview deployments for every PR.",
        },
        {
          q: "What’s included in QA?",
          a: "Cross-browser matrix, responsive checks, a11y pass to WCAG 2.1 AA, and perf budgets on key pages.",
        },
        {
          q: "Do you handle deployment and hosting?",
          a: "We set up CI/CD and deploy to your infra (often Vercel). We don’t provide long-term hosting, but we can hand off cleanly.",
        },
        {
          q: "What happens after launch?",
          a: "30-day stabilization window is included. After that, we offer retainers for ongoing improvements and features.",
        },
        {
          q: "What about content and assets?",
          a: "We can work with your team or connect you with copy/design partners. Content creation is a separate track.",
        },
        {
          q: "How are changes and scope managed?",
          a: "Each phase includes 2 revision rounds. Bigger changes are estimated as scoped add-ons so we stay predictable.",
        },
      ];

      return (
        <>
          {/* Two-column list on desktop */}
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            {faqs.map((f, i) => (
              <FAQItem key={i} question={f.q} answer={f.a} />
            ))}
          </div>

          {/* JSON-LD for FAQ rich results */}
          <script
            type="application/ld+json"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: server-controlled content
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              }),
            }}
          />
        </>
      );
    })()}
  </div>
</section>


      {/* CTA Section */}
      <section className="relative bg-[#0a1f1a] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Ready to Build Something Exceptional?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            Let's discuss your project and see if we're a good fit. Book a free 30-minute discovery call—no sales pitch, just strategic insights.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-10 py-5 text-lg font-bold text-[#0a1f1a] hover:bg-white transition-all hover:gap-3 group"
            >
              Start Your Project
              <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
            </a>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/10 bg-white/5 px-10 py-5 text-lg font-bold text-white hover:bg-white/10 transition-all"
            >
              Download Sample SOW
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="relative bg-[#0f2f27] py-16 pb-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="bg-[#0a1f1a] border border-white/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-extrabold text-white mb-2">Get in Touch</h3>
            <p className="text-white/70 mb-8">Tell us about your project and we'll get back within 24 hours.</p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Name</label>
                  <input 
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-[#0f2f27] border border-white/10 text-white placeholder:text-white/40 focus:border-lime-400 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Email</label>
                  <input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-[#0f2f27] border border-white/10 text-white placeholder:text-white/40 focus:border-lime-400 focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Company</label>
                <input 
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-[#0f2f27] border border-white/10 text-white placeholder:text-white/40 focus:border-lime-400 focus:outline-none transition-colors"
                  placeholder="Acme Inc."
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Project Goals</label>
                <textarea 
                  value={formData.goal}
                  onChange={(e) => setFormData({...formData, goal: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-[#0f2f27] border border-white/10 text-white placeholder:text-white/40 focus:border-lime-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project, timeline, and goals..."
                />
              </div>
              
              <button 
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-8 py-4 text-base font-bold text-[#0a1f1a] hover:bg-white transition-all group"
              >
                Send Message
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// Component Atoms
function ProofBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-[#0f2f27] border border-lime-400/30 px-5 py-2.5">
      <span className="text-lime-400">{icon}</span>
      <span className="text-white font-bold text-sm">{text}</span>
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

function FitItem({ icon, text, positive }: { icon: React.ReactNode; text: string; positive: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <span className={positive ? 'text-lime-400' : 'text-white/40'}>{icon}</span>
      <span className="text-white/80 text-sm leading-relaxed">{text}</span>
    </li>
  );
}

function KPITile({ icon, label, description }: { icon: React.ReactNode; label: string; description: string }) {
  return (
    <div className="bg-[#0f2f27] border border-lime-400/30 rounded-2xl p-6 text-center group hover:scale-105 transition-transform">
      <div className="flex justify-center mb-3 text-lime-400">{icon}</div>
      <div className="text-xl font-extrabold text-lime-400 mb-2">{label}</div>
      <div className="text-[13px] font-medium text-white/70">{description}</div>
    </div>
  );
}

function DeliverableCard({ icon, title, description, tag }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  tag: string;
}) {
  const tagColors = {
    'Included': 'bg-lime-400/10 border-lime-400/30 text-lime-400',
    'Optional': 'bg-blue-400/10 border-blue-400/30 text-blue-400',
    'Add-on': 'bg-orange-400/10 border-orange-400/30 text-orange-400'
  };

  return (
    <div className="bg-[#0a1f1a] border border-white/10 rounded-2xl p-6 hover:border-lime-400/30 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/30 text-lime-400">
          {icon}
        </div>
        <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${tagColors[tag as keyof typeof tagColors]}`}>
          {tag}
        </span>
      </div>
      <h4 className="text-white font-extrabold text-base mb-2">{title}</h4>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function ProcessStep({ number, title, objective, artifacts, timeframe }: {
  number: string;
  title: string;
  objective: string;
  artifacts: string;
  timeframe: string;
}) {
  return (
    <div className="bg-[#0f2f27] border border-white/10 rounded-2xl p-6 hover:border-lime-400/30 transition-colors">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-lime-400 text-[#0a1f1a] font-extrabold text-xl">
          {number}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-white font-extrabold text-lg">{title}</h4>
            <span className="inline-flex items-center gap-1.5 text-lime-400 text-sm font-semibold">
              <Clock className="w-4 h-4" />
              {timeframe}
            </span>
          </div>
          <p className="text-white/70 text-sm mb-3">{objective}</p>
          <div className="flex items-start gap-2">
            <FileCheck className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
            <p className="text-white/60 text-xs">{artifacts}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0a1f1a] border border-white/10 text-lime-400 group-hover:border-lime-400/30 transition-colors">
        {icon}
      </div>
      <span className="text-white/80 text-xs font-semibold">{label}</span>
    </div>
  );
}

function StandardItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 className="w-5 h-5 text-lime-400 flex-shrink-0" />
      <span className="text-white/80 text-sm">{text}</span>
    </div>
  );
}

function BeforeAfterItem({ text, positive, negative }: { text: string; positive?: boolean; negative?: boolean }) {
  return (
    <li className="flex items-start gap-3 text-white/80 text-sm">
      {positive && <CheckCircle2 className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />}
      {negative && <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />}
      <span>{text}</span>
    </li>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0a1f1a] border border-white/10 rounded-2xl overflow-hidden hover:border-lime-400/30 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/50 rounded-2xl"
      >
        <span className="text-white font-bold text-base pr-4">{question}</span>
        <span className={`flex-shrink-0 rounded-full border border-white/10 p-1 text-lime-400 transition-transform ${isOpen ? 'rotate-45' : ''}`}>
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-white/70 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

function ProcessCard({ 
  number, 
  icon, 
  title, 
  blurb, 
  meta, 
  tags,
  onHover,
}: { 
  number: string; 
  icon: React.ReactNode; 
  title: string; 
  blurb: string; 
  meta: string; 
  tags: string[];
 onHover?: (step: string | null) => void;

}) {
  return (
    <article       onMouseEnter={() => onHover?.(number)}
      onMouseLeave={() => onHover?.(null)} className="group relative h-full overflow-hidden rounded-2xl border border-white/12 bg-[#0f2f27]/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-400 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-lime-400/30 bg-[#0a1f1a] text-lime-400">
            {icon}
          </span>
          <h3 className="text-lg font-extrabold text-white">{title}</h3>
        </div>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-lime-400/40 text-sm font-bold text-lime-400">
          {number}
        </span>
      </div>

      {/* Body */}
      <p className="text-[14px] leading-relaxed text-white/75 mb-4">{blurb}</p>

      {/* Tags / deliverables */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((t, i) => (
          <span
            key={i}
            className="rounded-full border border-white/15 bg-white/0 px-2.5 py-1 text-[11px] font-semibold text-white/70"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer strip */}
      <div className="flex items-center gap-2 text-xs font-semibold text-white/60">
        <Clock className="h-3.5 w-3.5 text-lime-400" />
        {meta}
      </div>
    </article>
  );
}