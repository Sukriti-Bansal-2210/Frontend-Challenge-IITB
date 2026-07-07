import FeatureCard from "./FeatureCard";

export default function Accordion({
  features = [],
  activeIndex = 0,
  setActiveIndex = () => {},
}) {
  return (
    <div className="space-y-4">

      {features && features.map((feature, index) => (

        <div
          key={feature?.id || index}
          className="rounded-2xl overflow-hidden border border-white/10"
        >
          <button
            onClick={() =>
              setActiveIndex(
                activeIndex === index ? -1 : index
              )
            }
            className="w-full flex justify-between items-center p-5 text-left"
          >
            <span className="font-semibold text-base">
              {feature?.title || "Feature"}
            </span>

            <span className="text-2xl">
              {activeIndex === index ? "−" : "+"}
            </span>
          </button>

          <div
            className={`transition-all duration-300 overflow-hidden ${
              activeIndex === index
                ? "max-h-[400px]"
                : "max-h-0"
            }`}
          >
            <FeatureCard
              feature={feature}
              active={true}
              onHover={() => {}}
              onClick={() => {}}
              mobile={true}
            />
          </div>
        </div>

      ))}

    </div>
  );
}