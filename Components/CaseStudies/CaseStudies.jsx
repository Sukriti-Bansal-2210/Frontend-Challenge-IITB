import { useState } from "react";
import caseStudies from "./caseStudiesData";
import ChartPie from "../../assets/SVGs/chart-pie.svg";
import ArrowTrendingUp from "../../assets/SVGs/arrow-trending-up.svg";
import Link from "../../assets/SVGs/link.svg";

const iconMap = {
  "chart-pie": ChartPie,
  "arrow-trending-up": ArrowTrendingUp,
  "link": Link,
};

export default function CaseStudies() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="case-studies" className="py-24 bg-[#172B36]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="uppercase tracking-[3px] text-[#FFC801] text-xs">
            CASE STUDIES
          </p>
          <h2 className="font-mono text-4xl mt-4 text-[#F1F6F4] max-w-2xl">
            Real Results from Real Teams
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-6">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onMouseEnter={() => setHoveredId(study.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => window.location.href = `#case-${study.id}`}
              className="w-full group"
            >
              <div className={`relative rounded-[22px] overflow-hidden border transition duration-500 ${
                hoveredId === study.id 
                  ? "border-[#FFC801] bg-[#FFC801]/20" 
                  : "border-white/10 bg-white/[0.02] hover:border-[#FFC801]/40"
              }`}>
                <div className="grid md:grid-cols-12 gap-6 p-6 md:p-8">
                  {/* Image */}
                  <div
                    className={`md:col-span-3 flex items-center justify-center transition duration-500 ${
                      hoveredId === study.id
                        ? "scale-110 opacity-100"
                        : "scale-100"
                    }`}
                  >
                    {iconMap[study.image] && (
                      <img
                        src={iconMap[study.image]}
                        alt={study.title}
                        className="w-16 h-16"
                        style={{ filter: "brightness(1.3)" }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="md:col-span-7 text-left">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-[#FFC801]">
                        {study.year}
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-[#FFC801] to-transparent" />
                    </div>

                    <h3 className="font-mono text-xl md:text-2xl text-[#F1F6F4] mb-3">
                      {study.title}
                    </h3>

                    <p className="text-[#D9E8E2] leading-6 text-sm max-w-xl">
                      {study.description}
                    </p>

                    <div className="mt-4 inline-block">
                      <p className="text-xs font-semibold text-[#FFC801]">
                        {study.metrics} ↗
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div
                    className={`md:col-span-2 flex items-center justify-end transition duration-500 ${
                      hoveredId === study.id ? "translate-x-1" : ""
                    }`}
                  >
                    <div className="text-2xl text-[#FFC801] opacity-60 group-hover:opacity-100 transition">
                      →
                    </div>
                  </div>
                </div>

                {/* Hover Background Fade */}
                <div
                  className={`absolute inset-0 transition duration-500 pointer-events-none ${
                    hoveredId === study.id
                      ? "bg-transparent"
                      : "bg-transparent"
                  }`}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
