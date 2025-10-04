// app/about/page.tsx

import Header from "@/components/Header_Alt";
import Breadcrumb from "@/components/Breadcrumb";
import FeaturedArticle from "@/components/Featured_Article";
import LatestArticles from "@/components/Latest_Articles";
import Articles from "@/components/Articles";
import CTA from "@/components/Project_CTA";

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="bg-[#0a1f1a] py-10 pb-20">
        <Breadcrumb title="Blog" />
        <FeaturedArticle />
        <LatestArticles />
        <Articles />
<CTA
      eyebrow="INSPIRED BY WHAT YOU READ?"
      title="Let’s turn your next idea into something remarkable."
      subtitle="Whether it’s a full-scale SaaS platform, a sleek marketing site, or an AI-powered product — we help businesses design, build, and launch with precision."
      bullets={[
        'Custom-built web & AI solutions — not templates',
        'End-to-end project handling: strategy to launch',
        'Trusted by startups & enterprises worldwide',
        'Fast turnaround, transparent communication',
      ]}
      primary={{
        label: 'Start Your Project',
        href: '/contact',
        aria: 'Start your project discussion',
      }}
      secondary={{
        label: 'Book a Free Consultation',
        href: '/contact#schedule',
        aria: 'Book a free consultation call',
      }}
      notes={[
        'We usually reply within 24 hours — no obligations, just clarity.',
        'Projects start at flexible pricing — we scale to your vision.',
      ]}
    />
      </div>
    </>
  );
}
