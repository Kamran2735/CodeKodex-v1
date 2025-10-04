// app/portfolio/[slug]/page.tsx
import { notFound } from 'next/navigation';
import ProjectCaseStudy, { CaseStudy } from '@/components/Detailed_Project';
import projects from '@/data/projects.json';

// ⬇️ Replace this import with your actual header component path
import Header from '@/components/Header_Alt';

// ⬇️ CTA section we built
import ProjectCTA from '@/components/Project_CTA';

type ProjectsIndex = Record<string, CaseStudy>;

export async function generateStaticParams() {
  const slugs = Object.keys(projects as ProjectsIndex);
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: { slug: string } }) {
  const db = projects as ProjectsIndex;
  const data = db[params.slug];

  if (!data) {
    notFound();
  }

  // Inject slug for Breadcrumb / context usage
  const projectData = { ...data, slug: params.slug };

  // Build a contact URL that carries context about which project the user viewed
  const contactHref = `/contact?ref=portfolio&project=${encodeURIComponent(params.slug)}`;

  return (
    <main className="pb-20">
      {/* Site header / nav */}
      <Header />

      {/* Main detailed case study */}
      <ProjectCaseStudy data={projectData} />

      {/* CTA section under the case study */}
      <ProjectCTA
        eyebrow="READY TO BUILD?"
        title="Have a similar challenge? Let’s ship it fast."
        subtitle="Whether it’s a migration, a redesign, or a greenfield build, we’ll help you hit KPIs without burning your team."
        bullets={[
          'Discovery → scoped plan in days',
          'Performance-first (Core Web Vitals)',
          'Secure APIs & clean contracts',
          'CI/CD + observability from day one',
        ]}
        primary={{ label: 'Start your project', href: contactHref }}
        secondary={{ label: 'See more work', href: '/portfolio' }}
        notes={['Free 30-min strategy call', 'NDA-friendly. Your IP is safe.']}
      />
    </main>
  );
}
