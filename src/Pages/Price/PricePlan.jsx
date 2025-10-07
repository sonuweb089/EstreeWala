import React, { useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardItem = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, duration: 0.6 },
  },
};

const LaundryWalaPricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Basic Fresh",
      monthlyPrice: "₹499",
      yearlyPrice: "₹4999",
      description:
        "Ideal for individuals getting started with convenient laundry services.",
      features: [
        "Up to 5 kg wash & fold per order",
        "Standard ironing for 5 garments",
        "2-day turnaround time",
      ],
    },
    {
      name: "Pro Clean",
      monthlyPrice: "₹999",
      yearlyPrice: "₹9999",
      description:
        "Designed for small families or frequent users looking for comprehensive care.",
      features: [
        "Up to 10 kg wash & fold per order",
        "Standard ironing for 10 garments",
        "Includes 2 dry-cleaning items per month",
        "1-day express turnaround available",
      ],
    },
    {
      name: "Premium Shine",
      monthlyPrice: "₹1999",
      yearlyPrice: "₹19999",
      description:
        "Tailored solutions for large families or businesses with extensive laundry needs.",
      features: [
        "Unlimited kg wash & fold",
        "Unlimited ironing service",
        "Includes 5 dry-cleaning items per month",
        "Dedicated pickup & delivery slot",
        "Custom fabric treatment options",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2E2A53] text-[#F5F0E8]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.p
            variants={item}
            className="text-sm font-semibold uppercase tracking-widest mb-2 text-[#E9DDC9]"
          >
            Pricing Plans
          </motion.p>
          <motion.h2
            variants={item}
            className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-[#F5F0E8]"
          >
            Choose Your Perfect Plan
          </motion.h2>
          <motion.p
            variants={item}
            className="text-lg mb-12 max-w-3xl mx-auto text-[#C9B9A5]"
          >
            Simplify your laundry life with transparent pricing and premium
            service options.
          </motion.p>
        </motion.div>

        {/* Billing Cycle Toggle */}
        <div className="inline-flex rounded-full p-1 mb-12 bg-[#1A1A1A]/40 border border-[#C9B9A5]/30">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`py-2 px-6 rounded-full text-sm font-medium transition duration-300 ${
              billingCycle === "monthly"
                ? "bg-[#6E5A4C] text-[#F5F0E8]"
                : "text-[#C9B9A5] hover:text-[#F5F0E8]"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`py-2 px-6 rounded-full text-sm font-medium transition duration-300 ${
              billingCycle === "yearly"
                ? "bg-[#6E5A4C] text-[#F5F0E8]"
                : "text-[#C9B9A5] hover:text-[#F5F0E8]"
            }`}
          >
            Yearly
          </button>
        </div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardItem}
              className="relative rounded-2xl p-8 shadow-lg flex flex-col h-auto 
                bg-[#1A1A1A] border border-[#6E5A4C]/50 text-[#F5F0E8] 
                transition-all duration-500 hover:scale-[1.03] 
                hover:bg-[#C9B9A5] hover:text-[#1A1A1A]"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-5xl font-extrabold mb-2">
                {billingCycle === "monthly"
                  ? plan.monthlyPrice
                  : plan.yearlyPrice}
                <span className="text-xl font-medium text-[#C9B9A5]">
                  /{billingCycle === "monthly" ? "month" : "year"}
                </span>
              </p>
              <p className="text-sm mb-6 flex-grow text-[#C9B9A5]">
                {plan.description}
              </p>

              <button className="font-bold py-3 px-8 rounded-md text-lg shadow-lg transition duration-300 mt-auto border border-[#6E5A4C] bg-transparent text-[#E9DDC9] hover:bg-[#6E5A4C] hover:text-[#F5F0E8]">
                Start Free Trial →
              </button>

              <div className="mt-8 pt-8 border-t border-[#C9B9A5]/30">
                {plan.features.map((feature, featIndex) => (
                  <div key={featIndex} className="flex items-start mb-2">
                    <span className="text-xl mr-3 text-[#6E5A4C]">→</span>
                    <p className="text-sm text-left">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LaundryWalaPricingPlans;
