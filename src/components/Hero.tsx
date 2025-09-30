"use client";
import Image from "next/image";
import { ChevronDown } from 'lucide-react';

type Props = { heroImg: string };

export default function Hero({ heroImg }: Props) {
  return (
    <section className="bg-[#0f2923]  py-0">
      <div
        className="
          relative mx-auto max-w-7xl overflow-visible
          bg-[#8af135] px-6 md:px-10 py-10 md:py-14
          rounded-[28px] rounded-tr-none
        "
      >
        {/* 60/40 grid */}
        <div className="grid grid-cols-12 items-center gap-8">
          {/* LEFT (60%) */}
          <div className="col-span-12 md:col-span-7">
            <h1 className="leading-[0.95] text-[#0f2923]">
              <span className="block font-black tracking-tight text-[56px] md:text-[90px]">
                DIGITAL
              </span>
              <span className="block hero-stroke font-black tracking-tight text-transparent text-[56px] md:text-[90px]">
                SOLUTION
              </span>
              <span className="block font-black tracking-tight text-[56px] md:text-[90px]">
                ZONE
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[14px] leading-6 text-[#0f2923]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi
              Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.
            </p>
          </div>

          {/* RIGHT (40%) */}
          <div className="relative col-span-12 md:col-span-5">
            {/* white card holding the mockup */}
              <Image
                src={heroImg}
                alt="Showcase"
                width={720}
                height={420}
                className="rounded-[16px] w-full h-auto"
                priority
              />

            {/* Rotating badge: half over image, half outside section */}
            <div
              className="
                absolute left-[-48px] top-1/2 -translate-y-1/2
                size-28 md:size-32
              "
              aria-hidden
            >
              <div className="relative h-full w-full">
                {/* outer dark disc */}
                <div className="absolute inset-0 rounded-full bg-[#0f2923] shadow-[0_18px_40px_rgba(0,0,0,.35)]" />
                {/* circular text */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full text-white animate-spin-slow"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                    />
                  </defs>
                  <text fontSize="8" fontWeight={700} letterSpacing="2">
                    <textPath href="#circlePath" className="fill-current">
                      EXPLORE MORE • EXPLORE MORE • EXPLORE MORE •
                    </textPath>
                  </text>
                </svg>
                {/* down chevrons in center */}
<div className="absolute inset-0 grid place-items-center">
  <div className="flex flex-col items-center leading-none text-white" aria-hidden>
    <ChevronDown className="h-8 w-8" strokeWidth={3} />
    <ChevronDown className="-mt-4 h-8 w-8" strokeWidth={3} />
  </div>
</div>

              </div>
            </div>
          </div>
        </div>

        {/* little visual seam card (optional subtle ring to echo the ref) */}
        <div className="pointer-events-none absolute right-6 top-6 hidden h-[calc(100%-3rem)] w-[52%] rounded-[22px] ring-1 ring-black/5 md:block" />
      </div>
    </section>
  );
}
