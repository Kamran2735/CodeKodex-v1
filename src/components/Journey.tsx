'use client';

import { Rocket, Target, TrendingUp, Award } from 'lucide-react';

export default function JourneyTimeline() {
  const milestones = [
    {
      year: '2019',
      title: 'The Beginning',
      icon: <Rocket className="w-6 h-6" />,
      description: 'Started our journey with a vision to transform businesses through innovative technology solutions. Our small team of passionate developers set out to make a difference.',
      stat: '5',
      statLabel: 'Team Members',
    },
    {
      year: '2020',
      title: 'Rapid Growth',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Expanded our services and client base, delivering cutting-edge solutions across multiple industries. Our commitment to excellence began gaining recognition.',
      stat: '50+',
      statLabel: 'Projects Completed',
    },
    {
      year: '2022',
      title: 'Market Leader',
      icon: <Target className="w-6 h-6" />,
      description: 'Established ourselves as industry leaders with a proven track record of successful implementations. Our innovative approach set new standards in software development.',
      stat: '200+',
      statLabel: 'Happy Clients',
    },
    {
      year: '2024',
      title: 'Excellence Achieved',
      icon: <Award className="w-6 h-6" />,
      description: 'Reached new heights with global recognition and expanded our team of experts. Today, we continue to push boundaries and deliver exceptional results.',
      stat: '800+',
      statLabel: 'Success Stories',
    },
  ];

  return (
    <section className="relative bg-[#0a1f1a] py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 sm:mb-20 text-center">
          <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-lime-400 uppercase">
            OUR JOURNEY
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem]">
            Years of Innovation & Growth
          </h2>
        </div>

        {/* Timeline Flow */}
        <div className="relative">
          {/* Vertical line - desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
            style={{
              background: 'linear-gradient(180deg, rgba(163, 230, 53, 0.4) 0%, rgba(163, 230, 53, 0.4) 100%)',
            }}
          />

          {/* Milestones */}
          <div className="space-y-16 sm:space-y-20">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 1;

              return (
                <div key={milestone.year} className="relative">
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    {/* Left Side */}
                    <div className="w-full lg:w-[calc(50%-50px)]">
                      {!isEven ? (
                        // Odd: Content on left
                        <div className="lg:pr-12">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl border-2 border-[#8af135]/30 flex items-center justify-center text-[#8af135]">
                              {milestone.icon}
                            </div>
                            <span className="text-5xl font-extrabold text-[#8af135]">
                              {milestone.year}
                            </span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                            {milestone.title}
                          </h3>
                          <p className="text-zinc-400 leading-relaxed text-[15px] sm:text-base mb-4">
                            {milestone.description}
                          </p>
                        </div>
                      ) : (
                        // Even: Stat card on left
                        <div className="lg:flex lg:justify-end lg:pr-12">
                          <div className="inline-block rounded-2xl p-6 border-2 border-[#8af135]/30 mb-6 lg:mb-0">
                            <div className="text-4xl sm:text-5xl font-extrabold text-[#8af135] mb-2">
                              {milestone.stat}
                            </div>
                            <div className="text-sm font-semibold text-white/70 tracking-wide">
                              {milestone.statLabel}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Center - Year Badge */}
                    <div className="hidden lg:flex lg:w-[100px] justify-center relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#0a1f1a] border-2 border-[#8af135] flex items-center justify-center">
                        <span className="text-xl font-bold text-[#8af135]">{index + 1}</span>
                      </div>
                    </div>

                    {/* Mobile badge */}
                    <div className="flex lg:hidden w-12 h-12 rounded-full bg-[#0a1f1a] border-2 border-[#8af135] items-center justify-center mb-6">
                      <span className="text-lg font-bold text-[#8af135]">{index + 1}</span>
                    </div>

                    {/* Right Side */}
                    <div className="w-full lg:w-[calc(50%-50px)]">
                      {isEven ? (
                        // Even: Content on right
                        <div className="lg:pl-12">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl  border-2 border-[#8af135]/30 flex items-center justify-center text-[#8af135]">
                              {milestone.icon}
                            </div>
                            <span className="text-5xl font-extrabold text-[#8af135]">
                              {milestone.year}
                            </span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                            {milestone.title}
                          </h3>
                          <p className="text-zinc-400 leading-relaxed text-[15px] sm:text-base mb-4">
                            {milestone.description}
                          </p>
                        </div>
                      ) : (
                        // Odd: Stat card on right
                        <div className="lg:pl-12">
                          <div className="inline-block rounded-2xl p-6 border-2 border-[#8af135]/30">
                            <div className="text-4xl sm:text-5xl font-extrabold text-[#8af135] mb-2">
                              {milestone.stat}
                            </div>
                            <div className="text-sm font-semibold text-white/70 tracking-wide">
                              {milestone.statLabel}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}