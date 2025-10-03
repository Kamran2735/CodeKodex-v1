"use client";
import React from "react";
import { FileText, Users, Lightbulb, BarChart3, ChevronDown } from "lucide-react";

interface AccordionItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyChooseUs: React.FC = () => {
  const [openItem, setOpenItem] = React.useState<number>(1);
  const [isAutoPlay, setIsAutoPlay] = React.useState<boolean>(true);
  const [isInView, setIsInView] = React.useState<boolean>(false);

  const sectionRef = React.useRef<HTMLDivElement | null>(null);

  const accordionItems: AccordionItem[] = [
    {
      id: 1,
      icon: <FileText className="w-8 h-8" />,
      title: "Software Business",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit.Aliquam in hendrerit urna.",
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      title: "Business Leading",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit.Aliquam in hendrerit urna.",
    },
    {
      id: 3,
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Solution of Reality",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit.Aliquam in hendrerit urna.",
    },
    {
      id: 4,
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Public Repository",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit.Aliquam in hendrerit urna.",
    },
  ];

  const toggleItem = (id: number) => {
    setIsAutoPlay(false); // stop autoplay on manual interaction
    setOpenItem((prev) => (prev === id ? 0 : id));
  };

  // autoplay when in view and not manually stopped
  React.useEffect(() => {
    if (!isAutoPlay || !isInView) return;
    const interval = setInterval(() => {
      setOpenItem((prev) => (prev >= accordionItems.length ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, isInView]);

  // intersection observer to check if section is in view
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsInView(entry.isIntersecting));
      },
      { threshold: 0.25 } // trigger when 25% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#0a1f1a] py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-lime-400 uppercase">
            WHY CHOSE US
          </div>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem]">
            The Only Card You'll Ever
            <br />
            Need Simple.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side (Image + Stats) */}
          <div className="relative">
            <div className="rounded-md overflow-hidden shadow-2xl">
              <img
                src="/WhyChooseUs/main.png"
                alt="Professional working on laptop"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-[-48px] left-6 right-6 bg-[#8af135] rounded-lg px-8 py-5 flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-3 justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-[#0a2f2a]">800+</span>
                  <span className="text-[#0a2f2a] font-bold text-sm md:text-base leading-tight tracking-wide mt-1">
                    SUCCESSFUL <br /> PROJECTS
                  </span>
                </div>
                <div className="w-[2px] h-12 md:h-14 bg-[#0a2f2a]" />
                <div className="flex items-center gap-3 justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-[#0a2f2a]">300+</span>
                  <span className="text-[#0a2f2a] font-bold text-sm md:text-base leading-tight tracking-wide mt-1">
                    GLOBAL <br /> DOWNLOADS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side (Accordion with autoplay) */}
          <div className="space-y-5">
            {accordionItems.map((item, index) => (
              <div key={item.id} className="flex gap-4">
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-[72px] h-[72px] rounded-xl flex items-center justify-center border-2 transition-all duration-300 ${
                    openItem === item.id
                      ? "bg-[#0f2f27] border-[#8af135]"
                      : "bg-[#0a1f1a] border-[#1a3a32]"
                  }`}
                >
                  <div
                    className={`transition-colors duration-300 ${
                      openItem === item.id ? "text-[#8af135]" : "text-[#4a7a6a]"
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 rounded-xl border-2 transition-all duration-300 ${
                    openItem === item.id
                      ? "bg-[#0f2f27] border-[#8af135]"
                      : "bg-transparent border-[#1a3a32]"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xl font-bold transition-colors duration-300 ${
                          openItem === item.id ? "text-[#8af135]" : "text-[#5a8a7a]"
                        }`}
                      >
                        0{index + 1}.
                      </span>
                      <span className="text-xl font-bold text-white">{item.title}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                        openItem === item.id
                          ? "rotate-180 text-[#8af135]"
                          : "text-[#5a8a7a]"
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openItem === item.id
                        ? "max-h-48 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-5 pt-2">
                      <p className="text-[#a0b5ad] text-[15px] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
