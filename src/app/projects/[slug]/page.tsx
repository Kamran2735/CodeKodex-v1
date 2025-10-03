// app/about/page.tsx

import Header from "@/components/Header_Alt";
import CTA from "@/components/CTA";
import Project from "@/components/Detailed_Project";

export default function Page() {
  return (
    <>
      <Header />
      <div className="bg-[#0a1f1a] py-10">
        <Project />
        <CTA />

      </div>

    </>
  );
}
