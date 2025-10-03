'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Code2, Sparkles, Zap, CheckCircle2, TrendingUp } from 'lucide-react';
import { SiNextdotjs, SiTypescript, SiOpenai } from "react-icons/si"; 


export default function FeaturedProject() {
  return (
    <section className="relative bg-[#0a1f1a] py-16 sm:py-20 md:py-24 overflow-hidden">
     
      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        {/* Heading */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-lime-400 uppercase">
            FEATURED WORK
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem]">
            Project Spotlight
          </h2>
        </div>

        {/* Main Featured Card */}
        <div className="relative rounded-[32px] bg-gradient-to-br from-[#0f2f27] to-[#0a1f1a] p-1 shadow-[0_20px_70px_rgba(0,0,0,0.4)]">
          <div className="rounded-[30px] bg-[#0a1f1a] p-6 sm:p-8 md:p-10">
            {/* Top Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-4 py-2 text-[12px] font-extrabold text-[#0a1f1a]">
                <Sparkles className="w-4 h-4" />
                FEATURED PROJECT
              </span>
              
{/* Tech-stack badges (icon version) */}
<div className="flex -space-x-2">
  <div
    className="relative flex h-8 w-8 items-center justify-center
               rounded-full border-2 border-[#0a1f1a] bg-[#17382f]
               text-lime-400 ring-0 ring-inset transition
               hover:ring-2 hover:ring-lime-300"
    title="Next.js"
  >
    <SiNextdotjs size={14} />
  </div>

  <div
    className="relative flex h-8 w-8 items-center justify-center
               rounded-full border-2 border-[#0a1f1a] bg-[#17382f]
               text-lime-400 ring-0 ring-inset transition
               hover:ring-2 hover:ring-lime-300"
    title="TypeScript"
  >
    <SiTypescript size={14} />
  </div>

  <div
    className="relative flex h-8 w-8 items-center justify-center
               rounded-full border-2 border-[#0a1f1a] bg-[#17382f]
               text-lime-400 ring-0 ring-inset transition
               hover:ring-2 hover:ring-lime-300"
    title="OpenAI"
  >
    <SiOpenai size={14} />
  </div>
</div>

            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left - Image & Stats */}
              <div className="relative order-2 lg:order-1 space-y-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-lime-400/20 rounded-2xl blur-xl group-hover:bg-lime-400/30 transition-all duration-500" />
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-lime-400/30">
                    <Image
                      src="/Portfolio/project1.png"
                      alt="Featured Project"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      priority
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1a] via-[#0a1f1a]/20 to-transparent opacity-60" />
                    
                    {/* Category badge on image */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-full bg-[#0a1f1a]/80 backdrop-blur border border-lime-400/50 px-3 py-1.5 text-[11px] font-bold text-lime-400">
                        Enterprise Web App
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating stat cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#1a3530] border border-lime-400/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-lime-400" />
                      <span className="text-[11px] font-semibold text-white/70 tracking-wide">GROWTH</span>
                    </div>
                    <div className="text-2xl font-extrabold text-lime-400">300%</div>
                  </div>
                  <div className="bg-[#1a3530] border border-lime-400/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-lime-400" />
                      <span className="text-[11px] font-semibold text-white/70 tracking-wide">UPTIME</span>
                    </div>
                    <div className="text-2xl font-extrabold text-lime-400">99.9%</div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <div className="h-[2px] w-12 bg-lime-400 rounded-full" />
                    <span className="text-[11px] font-bold tracking-[0.2em] text-lime-400">SUCCESS STORY</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                    TechVantage Solutions
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
                    A comprehensive enterprise platform built with cutting-edge technology. 
                    We delivered a scalable solution that transformed their business operations, 
                    improving efficiency by 300% and reducing operational costs significantly.
                  </p>
                </div>

                {/* Key Features with enhanced styling */}
                <div className="space-y-3 bg-[#0f2f27]/50 rounded-xl p-5 border border-white/5">
                  <div className="text-[11px] font-bold tracking-[0.2em] text-lime-400 mb-3">KEY FEATURES</div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-lime-400/10 border border-lime-400/30 flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-lime-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-[15px]">Modern Tech Stack</div>
                      <div className="text-white/70 text-[14px]">Next.js, TypeScript, Tailwind CSS</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-lime-400/10 border border-lime-400/30 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-lime-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-[15px]">Lightning Fast</div>
                      <div className="text-white/70 text-[14px]">Optimized performance & Core Web Vitals</div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Web Development', 'UI/UX Design', 'Cloud Infrastructure', 'DevOps'].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-lime-400/30 bg-lime-400/5 px-3 py-1.5 text-[12px] font-semibold text-white/80 hover:bg-lime-400/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href="/portfolio/techvantage"
                    className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-8 py-3.5 text-base font-bold text-[#0a1f1a] transition-all hover:bg-white hover:gap-3 group"
                  >
                    View Case Study
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Section - Project Metrics with visual enhancement */}
            <div className="mt-10 sm:mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center group hover:scale-105 transition-transform">
                  <div className="text-3xl sm:text-4xl font-extrabold text-lime-400 mb-1">6 mo</div>
                  <div className="text-[13px] font-semibold text-white/70 tracking-wide">TIMELINE</div>
                  <div className="h-1 w-12 mx-auto mt-2 bg-lime-400/30 rounded-full group-hover:bg-lime-400 transition-colors" />
                </div>
                <div className="text-center group hover:scale-105 transition-transform">
                  <div className="text-3xl sm:text-4xl font-extrabold text-lime-400 mb-1">12+</div>
                  <div className="text-[13px] font-semibold text-white/70 tracking-wide">FEATURES</div>
                  <div className="h-1 w-12 mx-auto mt-2 bg-lime-400/30 rounded-full group-hover:bg-lime-400 transition-colors" />
                </div>
                <div className="text-center group hover:scale-105 transition-transform">
                  <div className="text-3xl sm:text-4xl font-extrabold text-lime-400 mb-1">10k+</div>
                  <div className="text-[13px] font-semibold text-white/70 tracking-wide">USERS</div>
                  <div className="h-1 w-12 mx-auto mt-2 bg-lime-400/30 rounded-full group-hover:bg-lime-400 transition-colors" />
                </div>
                <div className="text-center group hover:scale-105 transition-transform">
                  <div className="text-3xl sm:text-4xl font-extrabold text-lime-400 mb-1">24/7</div>
                  <div className="text-[13px] font-semibold text-white/70 tracking-wide">SUPPORT</div>
                  <div className="h-1 w-12 mx-auto mt-2 bg-lime-400/30 rounded-full group-hover:bg-lime-400 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}