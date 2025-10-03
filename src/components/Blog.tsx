"use client";
import React from "react";

export default function BlogSection4060() {
  const hero = {
    category: "Finance",
    title:
      "Where to grow your business as a photographer: site or social media?",
    author: "Jenny Wilson",
    date: "April 2, 2022",
    avatar: "https://i.pravatar.cc/40?img=13",
    image:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600",
  };

  const smallCards = [
    {
      id: 2,
      category: "Finance",
      title:
        "How to choose the right colors when creating a coding base website?",
      author: "Jenny Wilson",
      date: "April 2, 2022",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      category: "Finance",
      title:
        "The Role of Business Ethics in Building Customer Trust and Loyalty",
      author: "Jenny Wilson",
      date: "April 2, 2022",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
    },
  ];

  const featurePosts = [
    {
      id: 1,
      title:
        "How to optimize images in WordPress for faster loading (complete guide)",
      date: "April 2, 2022",
      image:
        "https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=240",
    },
    {
      id: 2,
      title: "How to choose the right customer for your photo business?",
      date: "April 2, 2022",
      image:
        "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=240",
    },
  ];

  const categories = ["Development", "Business", "Finance"];

  return (
    <section className="bg-[#0a1f1a] py-16 md:py-20  md:pb-32 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-10 md:mb-12">
          <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-[#8af135] uppercase mb-3">
            Our Blog
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Our Latest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8af135] to-[#6bd427]">
              News
            </span>
          </h2>
        </div>

        {/* 40 / 60 Layout */}
        <div className="grid grid-cols-10 gap-10">
          {/* Sidebar (40%) */}
          <aside className="col-span-10 lg:col-span-4 space-y-10">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Feature Posts</h3>
              <div className="space-y-6">
                {featurePosts.map((p) => (
                  <div
                    key={p.id}
                    className="flex gap-4 group cursor-pointer transition"
                  >
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-16 h-16 object-cover transform transition duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <p className="text-white text-md font-medium leading-snug group-hover:text-[#8af135] transition">
                        {p.title}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">{p.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Feature Categories</h3>
              <ul className="space-y-3">
                {categories.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-2 cursor-pointer hover:translate-x-1 transition"
                  >
                    <span className="text-[#8af135] text-lg">›</span>
                    <span className="text-white font-semibold">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-[#8af135] text-[#0a2f2a] font-bold hover:bg-[#74e32f] transition">
              Know More
            </button>
          </aside>

          {/* Blog Grid (60%) */}
          <div className="col-span-10 lg:col-span-6 space-y-8">
            {/* Hero Card */}
            <article className="relative rounded-xl overflow-hidden group cursor-pointer">
              <img
                src={hero.image}
                alt={hero.title}
                className="w-full h-[220px] md:h-[320px] object-cover transform transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.25)] to-[rgba(0,0,0,0.55)] transition group-hover:via-[rgba(0,0,0,0.4)] group-hover:to-[rgba(0,0,0,0.7)]" />
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-[#8af135] text-[#0a2f2a] text-[11px] font-semibold px-3 py-1 rounded-full shadow group-hover:scale-105 transition">
                  {hero.category}
                </span>
              </div>
              <div className="absolute left-5 right-5 bottom-4">
                <h3 className="text-white text-xl md:text-2xl font-extrabold leading-snug drop-shadow transition group-hover:text-[#8af135]">
                  {hero.title}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-sm text-white/90">
                  <img
                    src={hero.avatar}
                    alt={hero.author}
                    className="w-7 h-7 rounded-full"
                  />
                  <span className="font-semibold">{hero.author}</span>
                  <span className="opacity-80">• {hero.date}</span>
                </div>
              </div>
            </article>

            {/* Two Smaller Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {smallCards.map((p) => (
                <article
                  key={p.id}
                  className="rounded-xl overflow-hidden bg-[#113229] shadow-lg group cursor-pointer transform transition hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-50 object-cover transform transition duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="px-6 py-3">
                    <span className="inline-block bg-[#8af135] text-[#0a2f2a] text-[11px] font-semibold px-3 py-1 rounded-full group-hover:scale-105 transition">
                      {p.category}
                    </span>
                    <h4 className="mt-2 text-white text-md font-bold leading-snug transition group-hover:text-[#8af135]">
                      {p.title}
                    </h4>
                    <div className="mt-3 flex items-center gap-2 text-sm text-[#cfe4db]">
                      <img
                        src="https://i.pravatar.cc/28?img=21"
                        alt={p.author}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="font-semibold">By {p.author}</span>
                      <span className="opacity-80">• {p.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
