import { useRef } from "react";
import Card from "./Card";
import cardData from "./cardData";

export default function HeroCards() {
  const slider = useRef(null);

  let pressed = false;
  let startX = 0;
  let scrollLeft = 0;

  const mouseDown = (e) => {
    pressed = true;

    slider.current.classList.add("cursor-grabbing");

    startX = e.pageX - slider.current.offsetLeft;

    scrollLeft = slider.current.scrollLeft;
  };

  const mouseLeave = () => {
    pressed = false;

    slider.current.classList.remove("cursor-grabbing");
  };

  const mouseUp = () => {
    pressed = false;

    slider.current.classList.remove("cursor-grabbing");
  };

  const mouseMove = (e) => {
    if (!pressed) return;

    e.preventDefault();

    const x = e.pageX - slider.current.offsetLeft;

    const walk = (x - startX) * 2;

    slider.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="pb-28 pt-12">

      <div className="max-w-7xl mx-auto">

        <div className="px-6 flex justify-between items-center mb-8">

          <div>

            <p className="uppercase tracking-[3px] text-[#FFC801] text-xs">

              Explore Modules

            </p>

            <h2 className="font-mono text-3xl mt-2">

              AI Capabilities

            </h2>

          </div>

          <p className="hidden lg:block text-[#D9E8E2]/60 text-sm">

            Drag to explore →

          </p>

        </div>

        <div
          ref={slider}
          onMouseDown={mouseDown}
          onMouseMove={mouseMove}
          onMouseLeave={mouseLeave}
          onMouseUp={mouseUp}
          className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab px-6 py-6 select-none"
        >

          {cardData.map((item) => (

            <Card key={item.id} item={item} />

          ))}

        </div>

      </div>

    </section>
  );
}