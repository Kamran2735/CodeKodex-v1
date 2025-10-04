// components/BlogAuthor.tsx
'use client';

import React, { useEffect, useState } from 'react';
import {
  MapPin,
  Calendar,
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
  Globe,
  BookOpen,
  Users,
  Award,
} from 'lucide-react';
import JSX = React.JSX;

type SocialMap = {
  twitter?: string;
  github?: string;
  linkedin?: string;
};

type AuthorStats = {
  articles: number;
  followers: string;   // e.g. "2.4k"
  experience: string;  // e.g. "6+ Years"
};

export type BlogAuthorProps = {
  author?: {
    name: string;
    title: string;
    bio: string;
    avatar: string;
    location: string;
    joinDate: string;     // ISO date
    website?: string;
    social?: SocialMap;
    stats: AuthorStats;
    skills: string[];
  };
};

const DEFAULT_AUTHOR: NonNullable<BlogAuthorProps['author']> = {
  name: 'Alex Carter',
  title: 'Full-Stack Developer & Technical Author',
  bio: `I design and build modern web apps with a focus on performance, developer experience, and accessibility. 
I enjoy turning complex topics into practical, step-by-step guides developers can actually ship.`,
  avatar: '/avatar.jpg',
  location: 'London, UK',
  joinDate: '2019-05-01',
  website: 'https://alexcarter.dev',
  social: {
    twitter: 'https://twitter.com/alexcarter_dev',
    github: 'https://github.com/alexcarter',
    linkedin: 'https://linkedin.com/in/alexcarter',
  },
  stats: {
    articles: 47,
    followers: '2.4k',
    experience: '6+ Years',
  },
  skills: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'GraphQL',
    'CSS',
    'Testing',
  ],
};

function formatJoinDate(dateString: string): string {
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

export default function BlogAuthor({ author = DEFAULT_AUTHOR }: BlogAuthorProps) {
  const [stage, setStage] = useState(0);
  const [hovered, setHovered] = useState<keyof SocialMap | ''>('');

  useEffect(() => {
    // simple stagger
    const steps = [
      { s: 1, d: 250 }, // author info
      { s: 2, d: 500 }, // stats
      { s: 3, d: 750 }, // skills
      { s: 4, d: 1000 }, // socials
    ];
    const timers = steps.map(({ s, d }) => setTimeout(() => setStage(s), d));
    return () => timers.forEach(clearTimeout);
  }, []);

  const socialIcons: Record<keyof Required<SocialMap>, JSX.Element> = {
    twitter: <Twitter className="h-5 w-5" />,
    github: <Github className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
  };

  return (
    <section className="bg-[#0a1f1a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <article className="max-w-none">
          <div className="relative">
            {/* Card */}
            <div className="relative rounded-2xl border border-white/10 bg-[#0f2f27]/60 p-8 backdrop-blur-sm">
              {/* Header */}
              <div className="mb-8 flex items-center justify-center">
                <div className="inline-flex items-center gap-3">
                  <div className="rounded-xl border border-lime-400/30 bg-lime-400/20 p-3">
                    <Users className="h-6 w-6 text-lime-400" />
                  </div>
                  <h2 className="bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent">
                    About the Author
                  </h2>
                </div>
              </div>

              {/* Author Row */}
              <div
                className={`mb-8 transition-all duration-700 ${
                  stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-lime-400/30 transition-all duration-300">
                      {/* keeping <img> to avoid Image config requirements */}
                      <img
                        src={author.avatar}
                        alt={author.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {/* online pulse */}
                    <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-4 border-[#0f2f27] bg-lime-400">
                      <span className="block h-full w-full animate-ping rounded-full bg-lime-400" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="mb-1 text-2xl font-bold lg:text-3xl">
                      <span className="text-white">{author.name.split(' ')[0]}</span>{' '}
                      <span className="bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">
                        {author.name.split(' ').slice(1).join(' ')}
                      </span>
                    </h3>
                    <p className="mb-4 bg-gradient-to-r from-white/80 to-white/60 bg-clip-text text-lg font-medium text-transparent">
                      {author.title}
                    </p>

                    <div className="mb-5 flex flex-wrap items-center gap-4 text-sm text-white/70">
                      <span className="inline-flex items-center gap-2 hover:text-lime-300">
                        <MapPin className="h-4 w-4" />
                        {author.location}
                      </span>
                      <span className="inline-flex items-center gap-2 hover:text-lime-300">
                        <Calendar className="h-4 w-4" />
                        Since {formatJoinDate(author.joinDate)}
                      </span>
                    </div>

                    <p className="text-lg leading-relaxed text-white/85">{author.bio}</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div
                className={`mb-8 transition-all duration-700 ${
                  stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                <div className="mb-8 grid grid-cols-3 gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition-all hover:border-lime-400/40 hover:bg-white/10">
                    <BookOpen className="mx-auto mb-2 h-6 w-6 text-lime-400" />
                    <div className="mb-1 text-xl font-bold text-lime-400">{author.stats.articles}</div>
                    <div className="text-xs text-white/60">Articles</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition-all hover:border-lime-400/40 hover:bg-white/10">
                    <Users className="mx-auto mb-2 h-6 w-6 text-lime-400" />
                    <div className="mb-1 text-xl font-bold text-lime-400">{author.stats.followers}</div>
                    <div className="text-xs text-white/60">Followers</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition-all hover:border-lime-400/40 hover:bg-white/10">
                    <Award className="mx-auto mb-2 h-6 w-6 text-lime-400" />
                    <div className="mb-1 text-lg font-bold text-lime-400">{author.stats.experience}</div>
                    <div className="text-xs text-white/60">Experience</div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div
                className={`mb-8 transition-all duration-700 ${
                  stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                <h4 className="mb-4 flex items-center text-lg font-semibold">
                  <span className="mr-3 h-2 w-2 animate-pulse rounded-full bg-lime-400" />
                  Expertise
                </h4>
                <div className="mb-8 flex flex-wrap gap-3">
                  {author.skills.map((s, i) => (
                    <span
                      key={s}
                      style={{ transitionDelay: `${i * 40}ms` }}
                      className="cursor-default rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 transition-all hover:border-lime-400/40 hover:text-lime-300"
                    >
                      #{s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Socials + Website */}
              <div
                className={`transition-all duration-700 ${
                  stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                <div className="flex items-center justify-between gap-4 max-[520px]:flex-col max-[520px]:items-start">
                  <div>
                    <h4 className="mb-1 text-lg font-semibold">Connect with me</h4>
                    <p className="text-sm text-white/60">Let’s talk engineering, DX, and product.</p>
                  </div>

                  <div className="flex items-center gap-4">
                    {author.social &&
                      (Object.keys(author.social) as (keyof SocialMap)[])
                        .filter((k) => !!author.social?.[k])
                        .map((platform) => (
                          <a
                            key={platform}
                            href={author.social![platform]!}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={platform}
                            onMouseEnter={() => setHovered(platform)}
                            onMouseLeave={() => setHovered('')}
                            className={`group rounded-lg border border-white/10 bg-white/5 p-3 text-white/70 transition-all hover:border-lime-400/50 hover:bg-white/10 hover:text-lime-300 ${
                              hovered === platform ? 'shadow-lg shadow-lime-400/20' : ''
                            }`}
                          >
                            <span className="transition-transform group-hover:scale-110">
                              {socialIcons[platform]}
                            </span>
                          </a>
                        ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
