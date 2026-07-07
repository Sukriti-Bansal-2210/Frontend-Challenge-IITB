import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      title: "Features",
      href: "#features",
    },
    {
      title: "Pricing",
      href: "#pricing",
    },
    {
      title: "Case Studies",
      href: "#case-studies",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl bg-[#172B36]/80 border-b border-white/10 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-16 flex items-center justify-between">

          {/* LOGO */}

          <a
            href="/"
            className="group flex items-center gap-3"
            aria-label="NeuroFlow AI Home"
          >
            <div className="w-9 h-9 rounded-lg bg-[#FFC801] flex items-center justify-center text-[#172B36] font-bold text-sm transition group-hover:rotate-6">

              N

            </div>

            <div>

              <h2 className="font-mono text-lg font-bold tracking-tight">

                NeuroFlow

              </h2>

              <p className="text-[10px] text-[#D9E8E2]/70 -mt-0.5">

                AI Automation

              </p>

            </div>

          </a>

          {/* DESKTOP */}

          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="relative text-sm text-[#F1F6F4] transition hover:text-[#FFC801] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FFC801] after:transition-all hover:after:w-full"
              >
                {item.title}
              </a>
            ))}

          </nav>

          {/* CTA */}

          <div className="hidden lg:flex items-center gap-3">

            <button className="px-5 py-2 text-sm rounded-full border border-white/10 hover:border-[#FFC801] transition">

              Login

            </button>

            <button className="px-5 py-2 text-sm rounded-full bg-[#FFC801] text-[#172B36] font-semibold hover:bg-[#FF9932] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,200,1,.3)]">

              Get Started

            </button>

          </div>

          {/* MOBILE */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1"
            aria-label="Open Navigation"
          >

            <span
              className={`h-0.5 w-7 bg-white transition ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />

            <span
              className={`h-0.5 w-7 bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-7 bg-white transition ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      <div
        className={`overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-[#114C5A]/95 backdrop-blur-xl border-t border-white/10">

          <div className="px-8 py-8 flex flex-col gap-6">

            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg hover:text-[#FFC801]"
              >
                {item.title}
              </a>
            ))}

            <button className="mt-3 py-4 rounded-xl bg-[#FFC801] text-[#172B36] font-semibold">

              Get Started

            </button>

          </div>

        </div>

      </div>

    </header>
  );
}