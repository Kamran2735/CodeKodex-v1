'use client';

import Image from 'next/image';
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from 'framer-motion';
import React, { useMemo, useRef, useState, useLayoutEffect } from 'react';

type ClientItem = { name: string; src?: string };
type Props = {
  items?: ClientItem[];
  /** Pixels per second (speed). Default ~60 */
  speedPps?: 60;
};

const DEFAULT_ITEMS: ClientItem[] = [
  { name: 'verizon', src: '/Clients/1.png' },
  { name: 'Canva', src: '/Clients/2.png' },
  { name: 'IPSY', src: '/Clients/3.png' },
  { name: 'airasia', src: '/Clients/4.png' },
  { name: 'Wealthsimple', src: '/Clients/5.png' },
  { name: 'wave', src: '/Clients/6.png' },
];

export default function ClientCarouselFM2({ items = DEFAULT_ITEMS, speedPps = 60 }: Props) {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLUListElement | null>(null);
  const [halfWidth, setHalfWidth] = useState(0);

  // duplicate once for seamless loop (total length = 2x)
  const loop = useMemo(() => [...items, ...items], [items]);

  // measure half (width of one set)
  useLayoutEffect(() => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const measure = () => {
      // width of half track = total / 2
      const total = el.scrollWidth;
      setHalfWidth(total / 2);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [loop.length]);

  // smooth constant-velocity marquee
  const x = useMotionValue(0);
  const pausedRef = useRef(false);

  useAnimationFrame((t, delta) => {
    if (reduce || pausedRef.current || halfWidth === 0) return;
    const px = x.get();
    const next = px - (speedPps * (delta / 1000)); // move left

    // wrap: when we pass -halfWidth, jump forward by +halfWidth (seamless)
    const wrapped = next <= -halfWidth ? next + halfWidth : next;
    x.set(wrapped);
  });

  return (
    <section className="relative bg-[#0a1f1a] py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2 className="mb-8 text-center text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-lime-400">
          MEET OUR TRUSTED CLIENTS
        </h2>

        <div
          className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <motion.ul
            ref={trackRef}
            className="flex w-max gap-6 will-change-transform"
            style={{ x }}
          >
            {loop.map((item, i) => (
              <li key={`${item.name}-${i}`} className="shrink-0">
                <div className="group flex h-20 w-48 items-center justify-center rounded-xl border border-white/10 bg-transparent transition-colors duration-300 hover:bg-lime-400">
                  {item.src ? (
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={160}
                      height={64}
                      className="w-auto max-h-10 object-contain transition duration-300 group-hover:brightness-0 group-hover:invert"
                      priority={i < items.length}
                    />
                  ) : (
                    <span className="font-semibold text-zinc-300/80 transition-colors duration-300 group-hover:text-black">
                      {item.name}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
