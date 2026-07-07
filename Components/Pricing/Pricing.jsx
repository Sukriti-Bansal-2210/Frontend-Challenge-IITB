import { useState } from "react";
import pricingMatrix from "./pricingData";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [currency, setCurrency] = useState("USD");

  const calculatePrice = (basePrice) => {
    const currencyData = pricingMatrix.currencies[currency];
    const multiplier = currencyData.multiplier;
    const billingMultiplier = isAnnual ? 1 - pricingMatrix.annualDiscount : 1;
    return Math.round(basePrice * multiplier * billingMultiplier);
  };

  const plans = Object.keys(pricingMatrix.base);
  const currencySymbol = pricingMatrix.currencies[currency].symbol;

  return (
    <section id="pricing" className="py-24 bg-[#172B36]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[3px] text-[#FFC801] text-xs">
            PRICING
          </p>
          <h2 className="font-mono text-4xl mt-4 text-[#F1F6F4]">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-6 text-[#D9E8E2] max-w-2xl mx-auto text-sm">
            Choose the perfect plan for your team. Always flexible to scale.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          {/* Billing Toggle */}
          <div className="flex items-center gap-2 glass rounded-full p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 text-sm rounded-full transition ${
                !isAnnual
                  ? "bg-[#FFC801] text-[#172B36] font-semibold"
                  : "text-[#D9E8E2]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 text-sm rounded-full transition ${
                isAnnual
                  ? "bg-[#FFC801] text-[#172B36] font-semibold"
                  : "text-[#D9E8E2]"
              }`}
            >
              Annual
              <span className="text-[10px] ml-2 opacity-70">(-20%)</span>
            </button>
          </div>

          {/* Currency Selector */}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="px-5 py-2 text-sm glass rounded-full border border-white/10 bg-transparent text-[#F1F6F4] cursor-pointer transition hover:border-[#FFC801]"
            style={{
              colorScheme: 'dark'
            }}
          >
            <option value="USD" style={{ color: '#172B36', backgroundColor: '#F1F6F4' }}>USD</option>
            <option value="EUR" style={{ color: '#172B36', backgroundColor: '#F1F6F4' }}>EUR</option>
            <option value="INR" style={{ color: '#172B36', backgroundColor: '#F1F6F4' }}>INR</option>
          </select>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => {
            const basePrice = pricingMatrix.base[plan];
            const finalPrice = calculatePrice(basePrice);
            const isPopular = index === 1;

            return (
              <div
                key={plan}
                className={`relative rounded-[22px] overflow-hidden transition duration-300 ${
                  isPopular
                    ? "border-2 border-[#FFC801] bg-[#114C5A]/50 scale-105"
                    : "border border-white/10 bg-white/5 hover:border-[#FFC801]/60"
                }`}
              >
                {isPopular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFC801] to-[#FF9932]" />
                )}

                <div className="p-6">
                  {/* Plan Name */}
                  <h3 className="font-mono text-lg font-bold text-[#F1F6F4]">
                    {plan}
                  </h3>

                  {isPopular && (
                    <p className="text-[10px] text-[#FFC801] mt-2 uppercase tracking-wider">
                      Most Popular
                    </p>
                  )}

                  {/* Price */}
                  <div className="mt-5">
                    <p className="text-3xl font-bold text-[#FFC801]">
                      {currencySymbol}{finalPrice}
                    </p>
                    <p className="text-xs text-[#D9E8E2] mt-1">
                      per {isAnnual ? "year" : "month"}
                    </p>
                  </div>

                  {/* CTA */}
                  <button
                    className={`w-full mt-6 py-3 text-sm rounded-full transition duration-300 font-semibold ${
                      isPopular
                        ? "bg-[#FFC801] text-[#172B36] hover:scale-105"
                        : "border border-white/10 text-[#F1F6F4] hover:border-[#FFC801]"
                    }`}
                  >
                    Get Started →
                  </button>

                  {/* Features */}
                  <div className="mt-7 space-y-3">
                    {pricingMatrix.features[plan].map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-[#FFC801] flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-xs text-[#D9E8E2]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Hint */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#D9E8E2]">
            Questions?{" "}
            <a href="/" className="text-[#FFC801] hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
