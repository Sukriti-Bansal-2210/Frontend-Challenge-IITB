const pricingMatrix = {
  base: {
    Starter: 29,
    Professional: 99,
    Enterprise: 299,
  },
  currencies: {
    INR: { symbol: "₹", multiplier: 83 },
    USD: { symbol: "$", multiplier: 1 },
    EUR: { symbol: "€", multiplier: 0.92 },
  },
  annualDiscount: 0.2,
  features: {
    Starter: [
      "Up to 10 workflows",
      "Basic analytics",
      "Email support",
      "Community access",
    ],
    Professional: [
      "Unlimited workflows",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "Team collaboration",
      "API access",
    ],
    Enterprise: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom SLA",
      "Advanced security",
      "On-premise option",
      "Custom integrations",
    ],
  },
};

export default pricingMatrix;
