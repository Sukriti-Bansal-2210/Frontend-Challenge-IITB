import ArrowPath from "../../assets/SVGs/arrow-path.svg";
import ArrowTrendingUp from "../../assets/SVGs/arrow-trending-up.svg";
import Cube16Solid from "../../assets/SVGs/cube-16-solid.svg";
import Cog8Tooth from "../../assets/SVGs/cog-8-tooth.svg";
import Link from "../../assets/SVGs/link.svg";

const iconMap = {
  "arrow-path": ArrowPath,
  "arrow-trending-up": ArrowTrendingUp,
  "cube-16-solid": Cube16Solid,
  "cog-8-tooth": Cog8Tooth,
  "link": Link,
};

export default function FeatureCard({
  feature,
  active = false,
  onHover = () => {},
  onClick = () => {},
  mobile = false,
}) {
  const IconComponent = iconMap[feature?.icon];
  return (
    <article
      onMouseEnter={!mobile ? onHover : undefined}
      onClick={onClick}
      className={`
      group
      relative
      overflow-hidden
      rounded-[22px]
      border
      transition-all
      duration-300
      cursor-pointer
      h-full
      ${
        active
          ? "border-[#FFC801] bg-[#114C5A]"
          : "border-white/10 bg-white/5 hover:border-[#FFC801]/60"
      }
      `}
    >
      {/* Glow */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          active ? "opacity-100" : "opacity-0 group-hover:opacity-60"
        }`}
        style={{
          background:
            "radial-gradient(circle at top right, rgba(255,200,1,.15), transparent 60%)",
        }}
      />

      <div className="relative p-5 h-full flex flex-col">

        <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
          {/* Glass Background */}
          <div className="absolute inset-0 rounded-full bg-[#FFC801]/10 border border-[#FFC801]/20 group-hover:bg-[#FFC801]/20 group-hover:border-[#FFC801]/40 transition-all duration-300" />
          
          {/* Glow Background */}
          <div className="absolute inset-0 rounded-full bg-[#FFC801]/10 blur-lg group-hover:bg-[#FFC801]/30 transition-all duration-300 group-hover:scale-150 opacity-0 group-hover:opacity-100" />
          
          {/* Icon Container */}
          <div className="relative w-6 h-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 animate-float">
            {IconComponent && <img src={IconComponent} alt={feature?.title} className="w-full h-full" style={{ filter: 'brightness(1.2)' }} />}
          </div>
        </div>

        <h3 className="mt-4 font-mono text-lg flex-shrink-0">
          {feature.title}
        </h3>

        {/* Description - Hidden by default, shown when active */}
        <div className={`mt-3 flex-1 overflow-hidden transition-all duration-300 ${
          active ? "opacity-100 visible" : "opacity-0 invisible"
        }`}>
          <p className="leading-6 text-sm text-[#D9E8E2]">
            {feature.description}
          </p>
        </div>

        {/* Click hint for desktop */}
        {!mobile && !active && (
          <p className="mt-auto text-xs text-[#FFC801]/60 pt-3">
            Click to see more
          </p>
        )}

      </div>
    </article>
  );
}