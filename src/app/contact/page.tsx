// app/about/page.tsx

import Header from "@/components/Header_Alt";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA_Alt";
import Contact from "@/components/Contact_Alt";

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="bg-[#0a1f1a] py-10">
        <Breadcrumb title="Contact" />
        <Contact />
        <CTA />

      </div>

    </>
  );
}
