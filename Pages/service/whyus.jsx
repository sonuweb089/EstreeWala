import React from "react";
import { motion } from "framer-motion";

const colors = {
  taupe: "#6E5A4C",
  cream: "#E9DDC9",
  navy: "#2E2A53",
  charcoal: "#1A1A1A",
  graywarm: "#C9B9A5",
  offwhite: "#F5F0E8",
  white: "#FFFFFF",
  // Using a bright contrast color for the orange button effect in the image
  accent: "#FF5733",
};

// --- Framer Motion Animation Variants ---

// Parent container for staggered appearance
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between card animations
      delayChildren: 0.3, // Initial delay before cards start
    },
  },
};

// Child variant for smooth fade-in-up (used on each card)
const cardItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, duration: 0.6 },
  },
};

// Header text animation
const headerItem = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const LaundryWalaWhyChooseUs = () => {
  // Array of feature data
  const features = [
    {
      icon: "🧺", // Laundry Basket
      title: "Trusted Fabric Care",
      description:
        "Our experts handle your garments with the utmost precision, professionalism, and care.",
    },
    {
      icon: "🏆", // Trophy / Quality
      title: "Exceptional Service Guarantee",
      description:
        "Your satisfaction is our promise—quality cleaning and service, every single time.",
    },
    {
      icon: "🗓️", // Calendar
      title: "Available 7 Days a Week",
      description:
        "We are here when you need us—offering flexible scheduling any day, any time.",
    },
    {
      icon: "⚡", // Lightning bolt / Speed
      title: "Fast Pickup & Delivery",
      description:
        "Quick turnaround times when it matters most—because laundry shouldn't wait.",
    },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.navy, color: colors.offwhite }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Text (Animated) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={headerItem}
            className="text-sm font-semibold uppercase tracking-widest mb-2"
            style={{ color: colors.cream }}
          >
            WHY CHOOSE US
          </motion.p>
          <motion.h2
            variants={headerItem}
            className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"
            style={{ color: colors.white }}
          >
            Professional Services, Great Value
          </motion.h2>
          <motion.p
            variants={headerItem}
            className="text-lg mb-12 max-w-2xl mx-auto"
            style={{ color: colors.graywarm }}
          >
            With years of expertise, we deliver reliable, safe, and efficient
            cleaning, ensuring impeccable service for your garments.
          </motion.p>
        </motion.div>

        {/* Feature Cards Container (Animated) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardItem}
              className="rounded-xl p-8 shadow-2xl flex flex-col items-center h-full transition duration-300 hover:shadow-taupe/50"
              style={{ backgroundColor: colors.white }}
            >
              {/* Icon */}
              <div
                className="text-4xl p-3 rounded-xl mb-4"
                style={{ backgroundColor: colors.cream }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: colors.charcoal }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm" style={{ color: colors.charcoal }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button (Animated) */}
        <motion.button
          variants={cardItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="font-bold py-3 px-8 rounded-md transition duration-300 text-lg shadow-lg hover:opacity-90 flex items-center justify-center mx-auto w-full max-w-xs"
          style={{ backgroundColor: colors.taupe, color: colors.offwhite }}
        >
          BOOK AN APPOINTMENT →
        </motion.button>
      </div>
    </section>
  );
};

export default LaundryWalaWhyChooseUs;
