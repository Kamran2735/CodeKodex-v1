"use client";
import React from "react";
import Link from "next/link";

interface BreadcrumbProps {
  title: string; // Display text (e.g. project name)
  slug: string;  // URL slug for the project
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, slug }) => {
  return (
    <section className="relative bg-gradient-to-br from-[#184d2e] to-[#123d24] py-16 md:py-30 rounded-3xl mx-4 md:mx-8 lg:mx-16 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-[-48px] right-12 w-36 h-36 border border-[#8af135] rounded-full opacity-30"></div>
      <div className="absolute bottom-[-48px] left-16 w-48 h-48 border border-[#8af135] rounded-full opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <div className="flex items-center justify-center space-x-2 text-sm font-semibold">
          <Link href="/" className="text-white hover:text-[#8af135] transition">
            Home
          </Link>
          <span className="text-[#8af135]">›</span>
          <Link
            href="/projects"
            className="text-white hover:text-[#8af135] transition"
          >
            Projects
          </Link>
          <span className="text-[#8af135]">›</span>
          <span className="text-[#8af135]">{title}</span>

        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
