import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Security", "Roadmap"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press"],
    },
    {
      title: "Resources",
      links: ["Docs", "API", "Community", "Support"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Cookie Policy", "GDPR"],
    },
  ];

  return (
    <footer className="relative bg-[#172B36] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Newsletter */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 pb-16 border-b border-white/10">
          <div>
            <h3 className="font-mono text-2xl text-[#F1F6F4] mb-3">
              Stay Updated
            </h3>
            <p className="text-[#D9E8E2] leading-6 text-sm">
              Get the latest on AI automation and workflows delivered to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-5 py-2 text-sm rounded-full glass border border-white/10 bg-white/5 text-[#F1F6F4] placeholder-[#D9E8E2]/50 transition focus:outline-none focus:border-[#FFC801]"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 text-sm rounded-full bg-[#FFC801] text-[#172B36] font-semibold transition hover:scale-105"
            >
              {subscribed ? "✓" : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-mono text-xs font-bold text-[#F1F6F4] mb-4 uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="/"
                      className="text-[#D9E8E2] hover:text-[#FFC801] transition text-xs"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#FFC801] flex items-center justify-center text-[#172B36] font-bold text-xs">
              N
            </div>
            <span className="font-mono font-bold text-[#F1F6F4] text-sm">
              NeuroFlow
            </span>
          </div>

          <p className="text-sm text-[#D9E8E2] opacity-60">
            © 2024 NeuroFlow AI. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex gap-4">
            {["Twitter", "GitHub", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="/"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#D9E8E2] hover:border-[#FFC801] hover:text-[#FFC801] transition"
                aria-label={social}
              >
                {social[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
