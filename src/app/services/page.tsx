// app/about/page.tsx

import Header from "@/components/Header_Alt";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA_Alt";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import ProcessTeaser from "@/components/Process";
import TechRings from "@/components/TechStack";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="bg-[#0a1f1a] py-10">
        <Breadcrumb title="Services" />
        <Services />
        <ProcessTeaser />
        <CTA />
        <TechRings />
        <FAQ />



      </div>

    </>
  );
}
