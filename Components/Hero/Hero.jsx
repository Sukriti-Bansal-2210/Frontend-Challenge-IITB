import { useEffect, useRef } from "react";
import HeroCards from "./HeroCards";

export default function Hero() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!spotlightRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      spotlightRef.current.style.setProperty("--x", `${x}px`);
      spotlightRef.current.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const trustedStats = [
    { label: "12M+", value: "Workflows" },
    { label: "500+", value: "Teams" },
    { label: "99.99%", value: "Uptime" },
    { label: "42", value: "Countries" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#172B36]">

      {/* Mouse Spotlight Effect */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed top-0 left-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full z-[1]"
        style={{
          background: "radial-gradient(circle, rgba(255,200,1,.08) 0%, transparent 70%)",
          left: "var(--x, 0px)",
          top: "var(--y, 0px)",
        }}
      />

      {/* Animated Background */}

      <div className="absolute inset-0">

        {/* Top Glow */}

        <div className="absolute left-1/2 top-10 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#114C5A] opacity-60 blur-[140px] animate-pulse"/>

        {/* Yellow Glow */}

        <div className="absolute right-20 top-32 h-[250px] w-[250px] rounded-full bg-[#FFC801]/20 blur-[100px]"/>

        {/* Left Glow */}

        <div className="absolute -left-32 top-72 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]"/>

        {/* Grid */}

        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="flex min-h-screen flex-col items-center justify-center text-center">

          {/* Heading */}

          <h1 className="font-mono font-extrabold leading-[0.9] text-[#F1F6F4] text-5xl md:text-6xl lg:text-7xl">

            Automate Everything
            <br />

            <span className="text-[#FFC801]">

              With AI

            </span>

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-3xl text-[#D9E8E2] text-base md:text-lg leading-7">

            Transform repetitive work into intelligent automation.
            Build AI workflows that learn, adapt and execute
            faster than your competition.

          </p>

          {/* CTA */}

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <button className="glow rounded-full bg-[#FFC801] px-7 py-3 font-semibold text-[#172B36] transition duration-300 hover:scale-105">

              Get Started →

            </button>

            <button className="glow rounded-full px-7 py-3 border border-white/10 font-semibold text-[#F1F6F4] transition duration-300 hover:scale-105 hover:border-[#FFC801]">

              Watch Demo

            </button>

          </div>

          {/* Trusted Stats */}

          <div className="mt-24 flex flex-wrap justify-center gap-12 md:gap-16">

            {trustedStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#FFC801]">{stat.label}</p>
                <p className="text-sm text-[#D9E8E2] mt-2 opacity-70">{stat.value}</p>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Floating Cards */}

      <div className="relative -mt-40 z-20">

        <HeroCards />

      </div>

    </section>
  );
}