// app/about/page.tsx

import Header from "@/components/Header_Alt";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";
import Projects from "@/components/Projects";
import FeaturedProject from "@/components/Featured_Project";
import TestimonialsSection from "@/components/Testimonial_Alt";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="bg-[#0a1f1a] py-10">
        <Breadcrumb title="Projects" />
        <FeaturedProject/>
        <Projects />
        <TestimonialsSection />
        <CTA />
      </div>

    </>
  );
}
