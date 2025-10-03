'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Briefcase, Smile, Clock, Headset } from 'lucide-react';

export default function AboutWhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const achievements = [
    {
      stat: '500+',
      label: 'Successful Projects',
      description:
        'Delivered enterprise-grade solutions across diverse industries, from startups to Fortune 500 companies.',
      icon: <Briefcase className="w-6 h-6 text-[#8af135]" />,
    },
    {
      stat: '98%',
      label: 'Client Satisfaction',
      description:
        'Our commitment to quality and transparent communication keeps clients coming back for more projects.',
      icon: <Smile className="w-6 h-6 text-[#8af135]" />,
    },
    {
      stat: '10+',
      label: 'Years Experience',
      description:
        'Over a decade of expertise in cutting-edge technologies and proven development methodologies.',
      icon: <Clock className="w-6 h-6 text-[#8af135]" />,
    },
    {
      stat: '24/7',
      label: 'Support Available',
      description:
        'Round-the-clock technical support ensures your systems run smoothly without interruption.',
      icon: <Headset className="w-6 h-6 text-[#8af135]" />,
    },
  ];

  return (
    <section className="relative bg-[#0a1f1a] py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Header with button */}
<div className="flex flex-col items-center text-center gap-6 mb-16 sm:mb-20">
  <div>
    <div className="text-[#8af135] text-[11px] font-bold tracking-[0.3em] uppercase">
      WHY CHOOSE US
    </div>
    <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight">
      Our Identity Defines
    </h2>
  </div>
</div>


        {/* Grid Layout: 60% / 40% */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left side - 4 stat cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
                <div
                  className={`relative h-full rounded-xl p-6 sm:p-7 transition-all duration-300 border ${
                    hoveredIndex === index
                      ? 'border-lime-400'
                      : 'border-lime-400/20'
                  }`}
                >
                  {/* Icon + arrow */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-xl transition-colors duration-300 border ${
                        hoveredIndex === index ? 'border-[#8af135]' : 'border-lime-400/20'
                      }`}
                    >
                      {item.icon}
                    </div>
                    <ArrowUpRight
                      className={`w-5 h-5 transition-all duration-300 ${
                        hoveredIndex === index
                          ? 'text-lime-400 transform translate-x-0.5 -translate-y-0.5'
                          : 'text-white/40'
                      }`}
                    />
                  </div>

                  {/* Stat */}
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-3">
                    {item.stat}
                  </div>

                  {/* Label */}
                  <div className="text-white/70 font-semibold mb-3 text-base">
                    {item.label}
                  </div>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Image */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden h-[400px] sm:h-[500px] lg:h-full min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
              alt="Modern office workspace"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1a]/20 to-transparent shadow-[0_20px_60px_rgba(0,0,0,0.35)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
