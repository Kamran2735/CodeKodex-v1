"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

const DATA: Testimonial[] = [
  {
    id: 1,
    name: "Sara Jackson",
    role: "Web Designer",
    quote:
      "Lorem ipsum dolor sit amet consecte adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae ullam imperde.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Alex Carter",
    role: "Product Manager",
    quote:
      "Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla mattis ligula consectetur ultrices.",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Maya Singh",
    role: "Frontend Engineer",
    quote:
      "Pellentesque sit amet sapien fringilla mattis ligula consectetur ultrices mauris. Maecenas vitae ullam imperdiet.",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&h=300&fit=crop",
  },
];

export default function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [userInteracted, setUserInteracted] = React.useState(false);

  const prev = React.useCallback(() => {
    setUserInteracted(true);
    setIndex((i) => (i - 1 + DATA.length) % DATA.length);
  }, []);

  const next = React.useCallback(() => {
    setUserInteracted(true);
    setIndex((i) => (i + 1) % DATA.length);
  }, []);

  // Autoplay every 5s (pauses on hover; resumes when hover leaves if user hasn't clicked)
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % DATA.length);
    }, 5000);
    return () => clearInterval(t);
  }, [paused]);

  // Keyboard arrows
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const curr = DATA[index];
  const prevIdx = (index - 1 + DATA.length) % DATA.length;
  const nextIdx = (index + 1) % DATA.length;

  return (
    <section className="w-full bg-[#0a1f1a] py-24">
      <div
        className="mx-auto max-w-7xl px-4 relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(userInteracted ? true : false)} // if user hasn't interacted, resume on leave
      >
        {/* Kicker + Heading (matches your highlight style) */}
        <div className="text-center mb-10 md:mb-12">
          <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-[#8af135] uppercase mb-3">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            What Our Clients{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8af135] to-[#6bd427]">
              Say About Us
            </span>
          </h2>
        </div>

        {/* Nav Left */}
        <button
          aria-label="Previous testimonial"
          onClick={prev}
          className="hidden md:flex absolute left-2 md:left-4 top-[52%] -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full border border-[#1a3a32] bg-transparent/10 text-[#8af135] hover:bg-[#0e2d26]/40 transition"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Avatars row */}
        <div className="flex items-center justify-center gap-6 mb-8">
          {/* prev avatar (desaturated) */}
          <img
            src={DATA[prevIdx].avatar}
            alt={DATA[prevIdx].name}
            className="h-16 w-16 rounded-full object-cover grayscale opacity-80"
          />

          {/* current avatar (highlight ring + glow) */}
          <div className="relative">
            <div className="p-[3px] rounded-full bg-gradient-to-b from-[#8af135] to-[#6bd427] shadow-[0_0_30px_rgba(138,241,53,0.25)]">
              <img
                src={curr.avatar}
                alt={curr.name}
                className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover ring-4 ring-[#0b231e]"
              />
            </div>
            {/* subtle pulsing dot to emphasize current */}
            <span className="absolute -right-1 -bottom-1 h-3 w-3 rounded-full bg-[#8af135] shadow-[0_0_12px_rgba(138,241,53,0.8)] animate-pulse" />
          </div>

          {/* next avatar (desaturated) */}
          <img
            src={DATA[nextIdx].avatar}
            alt={DATA[nextIdx].name}
            className="h-16 w-16 rounded-full object-cover grayscale opacity-80"
          />
        </div>

        {/* Quote */}
        <p className="mx-auto max-w-3xl text-center text-lg md:text-2xl leading-relaxed text-[#d4e7df] px-2">
          {curr.quote}
        </p>

        {/* Name + Role */}
        <div className="mt-6 text-center">
          <div className="text-white text-2xl md:text-3xl font-extrabold">
            {curr.name}
          </div>
          <div className="text-[#9fb7ae] mt-1">{curr.role}</div>
        </div>

        {/* Nav Right */}
        <button
          aria-label="Next testimonial"
          onClick={next}
          className="hidden md:flex absolute right-2 md:right-4 top-[52%] -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full border border-[#1a3a32] bg-transparent/10 text-[#8af135] hover:bg-[#0e2d26]/40 transition"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Optional small “resume autoplay” button if user interacted */}
        {userInteracted && (
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setUserInteracted(false);
                setPaused(false);
              }}
              className="text-xs text-[#8af135] underline/50 hover:underline"
            >
              Resume autoplay
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
