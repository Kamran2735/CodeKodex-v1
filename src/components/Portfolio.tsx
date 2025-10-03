'use client';

import Image from 'next/image';
import Link, { type LinkProps } from 'next/link';

type Card = {
  title: string;
  desc: string;
  img: string;
  href?: LinkProps['href'];
};

const CARDS: Card[] = [
  {
    title: 'TechVantage Solutions',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna pellentesque sitame.',
    img: '/Portfolio/project1.png',
    href: '/portfolio/techvantage',
  },
  {
    title: 'DigitalNest Solutions',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna pellentesque sitame.',
    img: '/Portfolio/project2.png',
    href: '/portfolio/digitalnest',
  },
  {
    title: 'LogicLeap Technologies',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna pellentesque sitame.',
    img: '/Portfolio/project3.png',
    href: '/portfolio/logicleap',
  },
  {
    title: 'DataDynamo Innovations',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna pellentesque sitame.',
    img: '/Portfolio/project4.png',
    href: '/portfolio/datadynamo',
  },
];

function PortfolioCard({ title, desc, img, href }: Card) {
  const base = 'group block';

  const CardInner = (
    <>
      <div className="relative aspect-[16/10]">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform rounded-[20px] duration-500 group-hover:scale-[1.02]"
          sizes="(min-width:1024px) 600px, 100vw"
        />
      </div>

      <div className="p-6 sm:p-7">
        <div className="mb-2 flex items-start justify-between gap-4">
          <h3 className="text-white text-[22px] font-extrabold leading-tight">
            {title}
          </h3>
          {href && (
            <span className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition group-hover:text-white group-hover:border-white/30">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  d="M7 17L17 7M9 7h8v8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
        </div>
        <p className="text-[15px] leading-relaxed text-white/70">{desc}</p>

        <div
          aria-hidden="true"
          className="mx-auto mt-6 h-[2px] w-[98%] rounded-full"
          style={{
            background:
              'linear-gradient(90deg, rgba(163, 230, 53, 0) 0%, rgba(163, 230, 53, 0.4) 15%, rgba(163, 230, 53, 0.4) 85%, rgba(163, 230, 53, 0) 100%)',
          }}
        />
      </div>
    </>
  );

  return href ? (
    <Link href={href} className={base} prefetch={false}>
      {CardInner}
    </Link>
  ) : (
    <div className={base}>{CardInner}</div>
  );
}

function TrustedClientsCard() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex -space-x-3">
          <div className="w-14 h-14 rounded-full border-2 border-[#1a3530] overflow-hidden bg-gray-300">
            <Image
              src="/api/placeholder/56/56"
              alt="Client 1"
              width={56}
              height={56}
              className="object-cover"
            />
          </div>
          <div className="w-14 h-14 rounded-full border-2 border-[#1a3530] overflow-hidden bg-gray-300">
            <Image
              src="/api/placeholder/56/56"
              alt="Client 2"
              width={56}
              height={56}
              className="object-cover"
            />
          </div>
          <div className="w-14 h-14 rounded-full border-2 border-[#1a3530] overflow-hidden bg-gray-300">
            <Image
              src="/api/placeholder/56/56"
              alt="Client 3"
              width={56}
              height={56}
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <div className="text-white text-3xl font-bold">10K+</div>
          <div className="text-white/70 text-sm">Trusted Clients</div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const left = CARDS.slice(0, 2);
  const right = CARDS.slice(2, 4);

  return (
    <section className="relative bg-[#0a1f1a] py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Unified container with heading and cards */}
        <div className="relative rounded-[40px] bg-[#294842]/95 px-6 sm:px-10 pt-14 pb-10 shadow-[0_10px_30px_rgba(0,0,0,0.20)] ring-1 ring-white/5">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-lime-400 uppercase">
              Our Projects
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem]">
              Elevating Tomorrow&apos;s IT Landscape
            </h2>

            <div
              aria-hidden="true"
              className="mx-auto mt-8 h-[2px] w-[90%] rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, rgba(163, 230, 53, 0) 0%, rgba(163, 230, 53, 0.4) 15%, rgba(163, 230, 53, 0.4) 85%, rgba(163, 230, 53, 0) 100%)',
              }}
            />
          </div>

          {/* Cards with vertical divider */}
          <div className="relative mt-12 sm:mt-14">
            {/* Vertical center line */}
            <div 
              aria-hidden="true"
              className="hidden lg:block absolute left-1/2 -top-12 sm:-top-14 bottom-20 w-[2px] -translate-x-1/2"
              style={{
                background:
                  'linear-gradient(180deg, rgba(163, 230, 53, 0.4) 0%, rgba(163, 230, 53, 0.4) 5%, rgba(163, 230, 53, 0.4) 92%, rgba(163, 230, 53, 0) 100%)',
              }}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Column */}
              <div className="space-y-10">
                {left.map((c) => (
                  <PortfolioCard key={c.title} {...c} />
                ))}
              </div>
              
              {/* Right Column with Trusted Clients at top */}
              <div className="space-y-10">
                <TrustedClientsCard />
                {right.map((c) => (
                  <PortfolioCard key={c.title} {...c} />
                ))}
              </div>
            </div>
          </div>

          {/* View More Button */}
<div className="flex justify-center mt-12 sm:mt-14">
  <Link
    href="/portfolio"
    className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold 
               text-[#0a1f1a] bg-lime-400 rounded-full 
               hover:bg-white transition-colors duration-300"
  >
    More Projects
  </Link>
</div>

        </div>
      </div>
    </section>
  );
}