'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');

  return (
    <section className="relative bg-[#0a1f1a] py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-8 sm:mb-12 text-center">
          <div className="text-[#8af135] text-[11px] font-bold tracking-[0.3em] uppercase">
            OUR PURPOSE
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight">
            Mission & Vision
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-[#1a3530]/50 p-1.5 border border-white/5">
            <button
              onClick={() => setActiveTab('mission')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 ${
                activeTab === 'mission'
                  ? 'bg-[#8af135] text-[#0a1f1a]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Target className="w-5 h-5" />
              Mission
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 ${
                activeTab === 'vision'
                  ? 'bg-lime-400 text-[#0a1f1a]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Eye className="w-5 h-5" />
              Vision
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Side */}
          <div className={`relative transition-all duration-700 ease-in-out ${
            activeTab === 'mission' ? 'lg:order-1' : 'lg:order-2'
          }`}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="Our Mission"
                fill
                className={`object-cover transition-opacity duration-500 ${
                  activeTab === 'mission' ? 'opacity-100' : 'opacity-0'
                }`}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Our Vision"
                fill
                className={`object-cover transition-opacity duration-500 ${
                  activeTab === 'vision' ? 'opacity-100' : 'opacity-0'
                }`}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className={`relative min-h-[500px] lg:min-h-[400px] transition-all duration-700 ease-in-out ${
            activeTab === 'mission' ? 'lg:order-2' : 'lg:order-1'
          }`}>
            {/* Mission Content */}
            <div className={`transition-opacity duration-500 ${
              activeTab === 'mission' ? 'opacity-100 delay-300' : 'opacity-0 absolute inset-0 pointer-events-none'
            }`}>
              <div className="space-y-6">
                <h3 className="text-white text-3xl md:text-4xl font-extrabold leading-tight">
                  Our Mission
                </h3>

                <div className="space-y-4">
                  <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
                    To empower businesses through innovative technology solutions that drive growth, 
                    efficiency, and digital transformation. We are committed to delivering exceptional 
                    software that solves real-world problems and creates lasting value.
                  </p>
                  <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
                    Every project we undertake is guided by our dedication to quality, transparency, 
                    and client success. We don't just build software—we build partnerships that help 
                    businesses thrive in an ever-evolving digital landscape.
                  </p>
                </div>

                <div className="pt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8af135]/10 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#8af135]" />
                    </div>
                    <span className="text-white/80 text-[15px]">
                      Deliver solutions that exceed expectations
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8af135]/10 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#8af135]" />
                    </div>
                    <span className="text-white/80 text-[15px]">
                      Foster long-term partnerships built on trust
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8af135]/10 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#8af135]" />
                    </div>
                    <span className="text-white/80 text-[15px]">
                      Drive innovation through continuous improvement
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Content */}
            <div className={`transition-opacity duration-500 ${
              activeTab === 'vision' ? 'opacity-100 delay-300' : 'opacity-0 absolute inset-0 pointer-events-none'
            }`}>
              <div className="space-y-6">
                <h3 className="text-white text-3xl md:text-4xl font-extrabold leading-tight">
                  Our Vision
                </h3>

                <div className="space-y-4">
                  <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
                    To be the leading force in digital innovation, recognized globally for creating 
                    transformative solutions that shape the future of technology. We envision a world 
                    where technology seamlessly integrates with business to unlock unlimited potential.
                  </p>
                  <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
                    We aspire to set new standards in software excellence, foster a culture of 
                    continuous innovation, and inspire the next generation of technological advancement 
                    that makes a meaningful impact on businesses and communities worldwide.
                  </p>
                </div>

                <div className="pt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8af135]/10 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#8af135]" />
                    </div>
                    <span className="text-white/80 text-[15px]">
                      Lead the industry in technological innovation
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8af135]/10 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#8af135]" />
                    </div>
                    <span className="text-white/80 text-[15px]">
                      Create global impact through scalable solutions
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8af135]/10 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#8af135]" />
                    </div>
                    <span className="text-white/80 text-[15px]">
                      Inspire the next generation of tech pioneers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}