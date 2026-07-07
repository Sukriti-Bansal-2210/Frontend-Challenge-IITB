import FeatureCard from "./FeatureCard";

export default function BentoGrid({
  features = [],
  activeIndex = 0,
  setActiveIndex = () => {},
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-max">

      {features && features.map((feature, index) => (
        <div
          key={feature?.id || index}
          className="h-full"
        >
          <FeatureCard
            feature={feature}
            active={activeIndex === index}
            onHover={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
            mobile={false}
          />
        </div>
      ))}
    </div>
  );
}