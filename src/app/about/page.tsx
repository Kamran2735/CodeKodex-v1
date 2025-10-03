// app/about/page.tsx

import Header from "@/components/Header_Alt";
import Breadcrumb from "@/components/Breadcrumb";
import Story from "@/components/Story";
import WhyChooseUs from "@/components/WhyChooseUs_Alt";
import MissionVision from "@/components/Mission";
import JourneyTimeline from "@/components/Journey";
import CTA from "@/components/CTA";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="bg-[#0a1f1a] py-10">
        <Breadcrumb title="About Us" />
        <Story
          kicker="OUR STORY"
          title="Navigating the Frontier of our Intelligence"
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.",
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consecte."
          ]}  
          imageSrc="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1600&auto=format&fit=crop"
          imageAlt="Modern office with green accent wall"
          reverse={false}
/>
      <WhyChooseUs />
            <CTA />
      <MissionVision />
      <JourneyTimeline />
      </div>

    </>
  );
}
