import { useState } from "react";
import BentoGrid from "./BentoGrid";
import Accordion from "./Accordion";
import featureData from "./featureData";
import useBreakpoint from "./useBreakpoint";

export default function Features() {
  const isMobile = useBreakpoint();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="py-24 bg-[#172B36]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="uppercase tracking-[3px] text-[#FFC801] text-xs">
            Capabilities
          </p>
          <h2 className="mt-4 font-mono text-4xl">
            Built for Intelligent Automation
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-[#D9E8E2] leading-7 text-sm">
            Everything your team needs to automate repetitive
            tasks, deploy AI agents and scale business workflows.
          </p>
        </div>

        <div className="mt-20">
          {isMobile ? (
            <Accordion
              features={featureData}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ) : (
            <BentoGrid
              features={featureData}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          )}
        </div>
      </div>
    </section>
  );
}