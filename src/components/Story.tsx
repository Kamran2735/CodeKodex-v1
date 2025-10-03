"use client";
import React from "react";
import Link from "next/link";

type OurStoryProps = {
  kicker?: string;
  title?: string;
  paragraphs?: string[]; // array of paragraphs
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean; // if true, image goes right & text left
};

const OurStory: React.FC<OurStoryProps> = ({
  kicker = "OUR STORY",
  title = "Navigating the Frontier of our Intelligence",
  paragraphs = [
    "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consecte."
  ],
  ctaText,
  ctaHref = "#",
  imageSrc = "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1600&auto=format&fit=crop",
  imageAlt = "Modern office with green accent wall",
  reverse = false,
}) => {
  return (
    <section className="bg-[#0a1f1a] py-16 md:py-24 px-4 sm:px-6 lg:px-10">
      <div
        className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className={`${reverse ? "order-2 lg:order-2" : "order-1 lg:order-1"}`}>
          <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-[420px] md:h-[520px] object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className={`${reverse ? "order-1 lg:order-1" : "order-2 lg:order-2"}`}>
          <div className="text-[#8af135] text-[11px] font-bold tracking-[0.3em] uppercase">
            {kicker}
          </div>

          <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-6">
            {title}
          </h2>

          {paragraphs.map((para, idx) => (
            <p
              key={idx}
              className="text-[#cfe4db] text-base md:text-lg leading-relaxed mb-6"
            >
              {para}
            </p>
          ))}

          {ctaText && (
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-[#8af135] text-[#0a2f2a] font-extrabold hover:bg-[#74e32f] transition-colors shadow-lg shadow-[#8af135]/20"
            >
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
