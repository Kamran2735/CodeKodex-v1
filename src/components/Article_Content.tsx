"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Copy,
  Quote,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  Twitter,
  Facebook,
  Linkedin,
  Link as LinkIcon,
  Clock,
  Sparkles,
  Tag as TagIcon,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────────────── */
/* Types                                                                     */
/* ────────────────────────────────────────────────────────────────────────── */

type NoteKind = "info" | "warning" | "danger" | "success";

type HeadingSection = {
  type: "heading";
  level: 1 | 2 | 3;
  text: string;
  id?: string;
};

type ParagraphSection = {
  type: "paragraph";
  text: string;
};

type ListSection = {
  type: "list";
  ordered?: boolean;
  items: string[];
};

type QuoteSection = {
  type: "quote";
  text: string;
  author?: string;
};

type CodeSection = {
  type: "code";
  language?: string;
  code: string;
};

type ImageSection = {
  type: "image";
  src: string;
  alt?: string;
  caption?: string;
};

type NoteSection = {
  type: "note";
  noteType?: NoteKind;
  title?: string;
  text: string;
};

type TLDRSection = {
  type: "tldr";
  points: string[];
};

type FAQItem = { question: string; answer: string };

type FAQSection = {
  type: "faq";
  id?: string;
  items: FAQItem[];
};

type TagsSection = {
  type: "tags";
  tags: string[];
};

type Section =
  | HeadingSection
  | ParagraphSection
  | ListSection
  | QuoteSection
  | CodeSection
  | ImageSection
  | NoteSection
  | TLDRSection
  | FAQSection
  | TagsSection;

type ContentData = {
  content: Section[];
};

type BlogContentProps = {
  contentData?: ContentData;
  blogTitle?: string;
  blogUrl?: string;
};

/* ────────────────────────────────────────────────────────────────────────── */

export default function BlogContent({
  contentData,
  blogTitle,
  blogUrl,
}: BlogContentProps) {
  const [activeHeading, setActiveHeading] = useState<string>("");
  const [expandedFAQ, setExpandedFAQ] = useState<Record<string, boolean>>({});
  const [copiedCode, setCopiedCode] = useState<string>("");
  const [hoveredSocial, setHoveredSocial] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const contentRef = useRef<HTMLElement | null>(null);

  /* ── Build TOC from headings + FAQ ─────────────────────────────────────── */
  const extractTOC = (content?: Section[]) => {
    const toc: { id: string; title: string; level: 1 | 2 | 3 }[] = [];
    content?.forEach((section, i) => {
      if (section.type === "heading" && section.level <= 3) {
        toc.push({
          id: section.id ?? `heading-${i}`,
          title: section.text,
          level: section.level,
        });
      }
      if (section.type === "faq") {
        toc.push({
          id: section.id ?? `faq-${i}`,
          title: "Frequently Asked Questions",
          level: 2,
        });
      }
    });
    return toc;
  };

  const tableOfContents = extractTOC(contentData?.content);

  /* ── Reading progress ─────────────────────────────────────────────────── */
  useEffect(() => {
    const calcProgress = () => {
      const el = contentRef.current;
      if (!el) return;

      const articleTop = el.offsetTop;
      const articleHeight = el.scrollHeight;
      const viewportBottom = window.scrollY + window.innerHeight;

      const revealedPx = Math.min(
        Math.max(viewportBottom - articleTop, 0),
        articleHeight
      );

      const pct = articleHeight > 0 ? (revealedPx / articleHeight) * 100 : 0;
      setProgress(pct);
    };

    window.addEventListener("scroll", calcProgress, { passive: true });
    window.addEventListener("resize", calcProgress);
    calcProgress();
    return () => {
      window.removeEventListener("scroll", calcProgress);
      window.removeEventListener("resize", calcProgress);
    };
  }, []);

  /* ── Scroll spy ───────────────────────────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll("h1, h2, h3");
      let current = "";
      const triggerPoint = window.innerHeight * 0.4;

      headings.forEach((h) => {
        const rect = h.getBoundingClientRect();
        if (rect.top <= triggerPoint && rect.bottom >= 0) {
          current = h.id;
        }
      });

      setActiveHeading(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const copyCode = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(""), 2000);
    } catch {
      // ignore
    }
  };

  const toggleFAQ = (key: string) =>
    setExpandedFAQ((p) => ({ ...p, [key]: !p[key] }));

  const shareUrl = (platform: "twitter" | "facebook" | "linkedin" | "copy") => {
    const url = encodeURIComponent(blogUrl || window.location.href);
    const title = encodeURIComponent(blogTitle || "Check out this article");

    const share = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      copy: blogUrl || window.location.href,
    } as const;

    if (platform === "copy") {
      navigator.clipboard.writeText(share.copy);
    } else {
      window.open(share[platform], "_blank", "noopener,noreferrer");
    }
  };

  /* ── Renderers (with proper typing!) ──────────────────────────────────── */
  const renderContent = (section: Section, index: number) => {
    switch (section.type) {
case "heading": {
  const id = section.id ?? `heading-${index}`;
  const base =
    "scroll-mt-20 cursor-pointer transition-colors duration-300 group";
  const cls =
    section.level === 1
      ? `${base} text-4xl font-bold text-white mb-6 mt-12`
      : section.level === 2
      ? `${base} text-3xl font-bold text-white mb-5 mt-10`
      : `${base} text-2xl font-semibold text-white mb-4 mt-8`;

  const children = (
    <>
      {section.text}
      <span className="ml-2 opacity-0 group-hover:opacity-100 text-lime-400 transition-opacity duration-300">
        #
      </span>
    </>
  );

  if (section.level === 1)
    return (
      <h1 key={index} id={id} className={cls} onClick={() => scrollToHeading(id)}>
        {children}
      </h1>
    );
  if (section.level === 2)
    return (
      <h2 key={index} id={id} className={cls} onClick={() => scrollToHeading(id)}>
        {children}
      </h2>
    );
  return (
    <h3 key={index} id={id} className={cls} onClick={() => scrollToHeading(id)}>
      {children}
    </h3>
  );
}


      case "paragraph":
        return (
          <p key={index} className="text-white/80 leading-relaxed mb-6 text-lg">
            {section.text}
          </p>
        );

      case "list": {
        const ListTag = (section.ordered ? "ol" : "ul") as
          | "ol"
          | "ul";
        return (
          <ListTag
            key={index}
            className={`mb-6 space-y-2 text-white/80 text-lg ${
              section.ordered ? "list-decimal" : "list-disc"
            } list-inside`}
          >
            {section.items.map((item, i) => (
              <li key={i} className="leading-relaxed hover:text-white">
                {item}
              </li>
            ))}
          </ListTag>
        );
      }

      case "quote":
        return (
          <blockquote
            key={index}
            className="relative bg-[#0f2f27] border-l-4 border-lime-400 rounded-r-lg p-6 mb-8"
          >
            <Quote className="absolute top-4 right-4 h-8 w-8 text-lime-400/40" />
            <p className="text-xl text-white/90 italic leading-relaxed mb-4">
              “{section.text}”
            </p>
            {section.author && (
              <cite className="text-sm text-white/60 not-italic">
                — {section.author}
              </cite>
            )}
          </blockquote>
        );

      case "code": {
        const id = `code-${index}`;
        return (
          <div key={index} className="relative mb-8">
            <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0b1c17]">
              {section.language && (
                <div className="flex items-center justify-between border-b border-white/10 bg-[#0f2f27] px-4 py-2">
                  <span className="text-sm text-white/80 font-medium">
                    {section.language}
                  </span>
                  <button
                    onClick={() => copyCode(section.code, id)}
                    className="inline-flex items-center gap-2 text-white/60 hover:text-lime-400"
                  >
                    <Copy className="h-4 w-4" />
                    <span className="text-sm">
                      {copiedCode === id ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>
              )}
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm text-white/80 leading-relaxed">
                  {section.code}
                </code>
              </pre>
            </div>
          </div>
        );
      }

      case "image":
        return (
          <figure key={index} className="mb-8">
            <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-[#0f2f27]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={section.src}
                alt={section.alt ?? ""}
                className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            {section.caption && (
              <figcaption className="mt-3 text-center text-sm italic text-white/60">
                {section.caption}
              </figcaption>
            )}
          </figure>
        );

      case "note": {
        const tone = section.noteType ?? "info";
        const wrap =
          tone === "info"
            ? "border-blue-400/40 bg-blue-400/10"
            : tone === "warning"
            ? "border-yellow-400/40 bg-yellow-400/10"
            : tone === "danger"
            ? "border-red-400/40 bg-red-400/10"
            : "border-green-400/40 bg-green-400/10";
        const Icon =
          tone === "info"
            ? Lightbulb
            : tone === "warning"
            ? AlertTriangle
            : tone === "danger"
            ? AlertTriangle
            : CheckCircle;

        return (
          <div
            key={index}
            className={`mb-8 rounded-lg border ${wrap} p-6`}
          >
            <div className="flex items-start gap-3">
              <Icon className="h-5 w-5" />
              <div className="flex-1">
                {section.title && (
                  <h4 className="mb-2 font-semibold text-white">
                    {section.title}
                  </h4>
                )}
                <p className="text-white/85">{section.text}</p>
              </div>
            </div>
          </div>
        );
      }

      case "faq": {
        const id = section.id ?? `faq-${index}`;
        return (
          <div key={index} id={id} className="mb-12">
            <div className="mb-6 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 rounded-xl border border-lime-400/30 bg-lime-400/10 px-4 py-2">
                <Quote className="h-4 w-4 text-lime-400" />
                <span className="text-sm font-semibold text-lime-300">
                  Frequently Asked Questions
                </span>
              </span>
            </div>

            <div className="space-y-4">
              {section.items.map((faq, i2) => {
                const key = `${index}-${i2}`;
                const open = !!expandedFAQ[key];
                return (
                  <div key={key} className="group relative">
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0f2f27] transition-all hover:border-lime-400/30">
                      <button
                        onClick={() => toggleFAQ(key)}
                        className="flex w-full items-center justify-between p-5 text-left hover:bg-white/5"
                      >
                        <span className="pr-4 text-base font-semibold text-white group-hover:text-lime-300">
                          {faq.question}
                        </span>
                        <span
                          className={`rounded-lg p-2 transition-all ${
                            open
                              ? "bg-lime-400/20 text-lime-400 rotate-180"
                              : "bg-white/10 text-white/60 group-hover:text-lime-300"
                          }`}
                        >
                          <ChevronDown className="h-5 w-5" />
                        </span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
                          open
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden px-5 pb-5">
                          <div className="mb-4 h-px w-full bg-white/10" />
                          <p className="text-white/80">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }

      case "tldr":
        return (
          <div
            key={index}
            className="mb-8 rounded-lg border border-lime-400/40 bg-lime-400/10 p-6"
          >
            <h4 className="mb-3 text-lg font-bold text-lime-300">TL;DR</h4>
            <ul className="space-y-2 text-white/85">
              {section.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-lime-300" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        );

      case "tags":
        return (
          <div key={index} className="mb-8 flex flex-wrap gap-2">
            {section.tags.map((t, i) => (
              <span
                key={i}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/85"
              >
                #{t}
              </span>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  /* Fallback demo content (kept tiny) */
  const sampleContent: Section[] =
    contentData?.content ?? [
      {
        type: "heading",
        level: 1,
        text: "Introduction to Modern Web Development",
        id: "introduction",
      },
      {
        type: "paragraph",
        text:
          "Modern frameworks and tools have revolutionized how we build applications—faster, more efficient, and more scalable than ever.",
      },
      { type: "heading", level: 2, text: "Key Technologies", id: "tech" },
      {
        type: "list",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      },
      {
        type: "quote",
        text: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
      },
      {
        type: "code",
        language: "ts",
        code: `const hi = (name: string) => \`Hello, \${name}\`;`,
      },
      {
        type: "faq",
        id: "faq",
        items: [
          { question: "Is TypeScript worth it?", answer: "Yes—especially at scale." },
          { question: "Next.js or Vite?", answer: "Depends on your needs; both are great." },
        ],
      },
      { type: "tldr", points: ["React + TS + Next.js is a power combo"] },
    ];

  return (
    <div className="min-h-screen bg-[#0a1f1a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-12">
          {/* Main */}
          <div className="lg:col-span-3">
            <article ref={contentRef} className="prose prose-invert prose-lg max-w-none">
              {sampleContent.map((section, i) => renderContent(section, i))}
            </article>

            {/* Share */}
            <div className="mt-16 border-t border-white/10 pt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="mb-1 text-lg font-semibold">Found this helpful?</h4>
                  <p className="text-sm text-white/60">Share it with your network!</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-medium">Share:</span>

                  <button
                    onClick={() => shareUrl("twitter")}
                    onMouseEnter={() => setHoveredSocial("twitter")}
                    onMouseLeave={() => setHoveredSocial("")}
                    className={`rounded-lg border border-white/10 bg-white/10 p-3 text-white/70 transition-all hover:scale-110 hover:border-lime-400/50 hover:text-lime-300 ${
                      hoveredSocial === "twitter" ? "shadow-lg shadow-lime-400/20" : ""
                    }`}
                  >
                    <Twitter className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() => shareUrl("facebook")}
                    onMouseEnter={() => setHoveredSocial("facebook")}
                    onMouseLeave={() => setHoveredSocial("")}
                    className={`rounded-lg border border-white/10 bg-white/10 p-3 text-white/70 transition-all hover:scale-110 hover:border-lime-400/50 hover:text-lime-300 ${
                      hoveredSocial === "facebook" ? "shadow-lg shadow-lime-400/20" : ""
                    }`}
                  >
                    <Facebook className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() => shareUrl("linkedin")}
                    onMouseEnter={() => setHoveredSocial("linkedin")}
                    onMouseLeave={() => setHoveredSocial("")}
                    className={`rounded-lg border border-white/10 bg-white/10 p-3 text-white/70 transition-all hover:scale-110 hover:border-lime-400/50 hover:text-lime-300 ${
                      hoveredSocial === "linkedin" ? "shadow-lg shadow-lime-400/20" : ""
                    }`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() => shareUrl("copy")}
                    onMouseEnter={() => setHoveredSocial("copy")}
                    onMouseLeave={() => setHoveredSocial("")}
                    className={`rounded-lg border border-white/10 bg-white/10 p-3 text-white/70 transition-all hover:scale-110 hover:border-lime-400/50 hover:text-lime-300 ${
                      hoveredSocial === "copy" ? "shadow-lg shadow-lime-400/20" : ""
                    }`}
                  >
                    <LinkIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* TOC */}
          <aside className="mt-12 lg:mt-0 lg:col-span-1">
            <div className="sticky top-20 rounded-xl border border-white/10 bg-[#0f2f27]/60 p-6">
              <h4 className="mb-6 flex items-center text-lg font-bold">
                <span className="mr-2 h-2 w-2 rounded-full bg-lime-400" />
                Table of Contents
              </h4>

              <nav className="space-y-2">
                {tableOfContents.map((h, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToHeading(h.id)}
                    className={`block w-full rounded-lg py-2 px-3 text-left text-sm transition-colors ${
                      activeHeading === h.id
                        ? "border-l-2 border-lime-400 bg-lime-400/10 text-lime-300"
                        : "text-white/80 hover:bg-white/5"
                    } ${h.level === 2 ? "ml-4" : h.level === 3 ? "ml-8" : ""}`}
                  >
                    {h.title}
                  </button>
                ))}
              </nav>

              {/* Reading progress */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-white/60">Reading Progress</span>
                  <span className="text-sm font-medium text-lime-300">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-lime-400 to-lime-300 transition-all"
                    style={{ width: `${Math.round(progress)}%` }}
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
