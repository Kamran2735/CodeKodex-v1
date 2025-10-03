'use client';

import Image from 'next/image';

export default function ProcessTimeline() {
  const HIGHLIGHT = 'DAY-TO-DAY OPERATIONS';
  const HEADING = 'Innovation & Precision at in Every Step';

  const STEPS = [
    {
      title: 'Instant Entry',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut e massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien. Lorem ipsum consectetur.',
      imgSrc: '/Steps/1.png',
    },
    {
      title: 'Multi-Platform',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut e massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien. Lorem ipsum consectetur.',
      imgSrc: '/Steps/2.png',
    },
    {
      title: 'Handy Integration',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut e massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien. Lorem ipsum consectetur.',
      imgSrc: '/Steps/3.png',
    },
  ] as const;

  return (
    <section className="relative bg-[#0a1f1a] py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 sm:mb-20 md:mb-24 text-center">
          <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-lime-400 uppercase">
            {HIGHLIGHT}
          </div>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem]">
            {HEADING}
          </h2>
        </div>

        {/* Timeline - Centered */}
        <div className="relative mx-auto" style={{ maxWidth: '1100px' }}>
          {/* Decorative timeline line with gradient glow effect */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden lg:block"
            style={{
              background: 'linear-gradient(180deg, rgba(163, 230, 53, 0.6) 0%, rgba(163, 230, 53, 0.3) 50%, rgba(163, 230, 53, 0.6) 100%)',
            }}
          />
          
          {/* Glow effect on the line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 blur-sm hidden lg:block"
            style={{
              background: 'linear-gradient(180deg, rgba(163, 230, 53, 0.4) 0%, rgba(163, 230, 53, 0.2) 50%, rgba(163, 230, 53, 0.4) 100%)',
            }}
          />

          <ol className="space-y-0">
            {STEPS.map((step, i) => {
              const isEven = i % 2 === 1;

              return (
                <li key={i} className="relative pb-16 last:pb-0">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
                    {/* LEFT SIDE - Image or Text */}
                    <div className="w-full lg:w-[420px] mb-8 lg:mb-0">
                      {!isEven ? (
                        // Odd items: Image on left
                        <div className="relative h-56 sm:h-60 lg:h-[240px] overflow-hidden rounded-2xl">
                          <Image
                            src={step.imgSrc}
                            alt={step.title}
                            fill
                            sizes="420px"
                            className="object-cover"
                            priority={i < 2}
                          />
                        </div>
                      ) : (
                        // Even items: Text on left
                        <div className="lg:pr-6 lg:text-right">
                          <h3 className="text-white text-2xl sm:text-3xl font-bold mb-4">
                            {step.title}
                          </h3>
                          <p className="text-zinc-400 leading-relaxed text-[15px] sm:text-base">
                            {step.desc}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* CENTER - Number Badge with faded line effect */}
                    <div className="hidden lg:flex lg:w-[100px] justify-center relative z-10">
                      {/* Fade effect above badge */}
                      <div 
                        className="absolute top-0 left-1/2 -translate-x-1/2 h-10 w-6"
                        style={{
                          background: 'radial-gradient(ellipse at center, rgba(10, 31, 26, 0.9) 0%, transparent 70%)',
                        }}
                      />
                      
                      {/* Fade effect below badge */}
                      <div 
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-10 w-6"
                        style={{
                          background: 'radial-gradient(ellipse at center, rgba(10, 31, 26, 0.9) 0%, transparent 70%)',
                        }}
                      />
                      
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-lime-400 bg-[#0a1f1a] shadow-[0_0_20px_rgba(163,230,53,0.3)] relative z-10">
                        <span className="text-xl font-bold text-lime-400">{i + 1}</span>
                      </div>
                    </div>

                    {/* Mobile number badge */}
                    <div className="flex lg:hidden h-12 w-12 items-center justify-center rounded-full border-2 border-lime-400 bg-[#0a1f1a] mb-6">
                      <span className="text-lg font-bold text-lime-400">{i + 1}</span>
                    </div>

                    {/* RIGHT SIDE - Text or Image */}
                    <div className="w-full lg:w-[420px]">
                      {isEven ? (
                        // Even items: Image on right
                        <div className="relative h-56 sm:h-60 lg:h-[240px] overflow-hidden rounded-2xl">
                          <Image
                            src={step.imgSrc}
                            alt={step.title}
                            fill
                            sizes="420px"
                            className="object-cover"
                            priority={i < 2}
                          />
                        </div>
                      ) : (
                        // Odd items: Text on right
                        <div className="lg:pl-6">
                          <h3 className="text-white text-2xl sm:text-3xl font-bold mb-4">
                            {step.title}
                          </h3>
                          <p className="text-zinc-400 leading-relaxed text-[15px] sm:text-base">
                            {step.desc}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}