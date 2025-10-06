import React from "react";
import { motion } from "framer-motion";
import Devlivery from "../../assets/Delivery.png";
const colors = {
  taupe: "#6E5A4C",
  cream: "#E9DDC9",
  navy: "#2E2A53",
  charcoal: "#1A1A1A",
  graywarm: "#C9B9A5",
  offwhite: "#F5F0E8",
  white: "#FFFFFF",
};

// --- Framer Motion Animation Variants ---

// Parent container for staggered appearance
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Child variant for smooth fade-in (used on header, features, and buttons)
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const LaundryWalaValueProp = () => {
  // Data for the feature list
  const features = [
    "Fast Pickup & Delivery, Affordable Prices",
    "Reliable Garment Care Solutions Guaranteed",
    "24/7 Online Scheduling & Support",
  ];

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.offwhite }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* 1. Left Side: Image / Branded Van (Animated) */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative order-1 lg:order-1"
        >
          <img
            src={Devlivery}
            alt="Laundry Wala Delivery Van"
            className="w-full h-auto rounded-xl shadow-2xl"
            style={{ border: `4px solid ${colors.taupe}` }}
          />
        </motion.div>

        {/* 2. Right Side: Text Content and CTAs (Animated) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="order-2 lg:order-2"
        >
          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-sm font-semibold uppercase tracking-widest mb-2"
            style={{ color: colors.taupe }}
          >
            UNRIVALED VALUE
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            variants={item}
            className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"
            style={{ color: colors.navy }}
          >
            Putting your clean clothes first above all
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-lg mb-6"
            style={{ color: colors.charcoal }}
          >
            At Laundry Wala, our team is dedicated to making your fresh, perfect
            clothes our highest priority. We use eco-friendly processes and
            expert care.
          </motion.p>

          {/* Feature List */}
          <motion.div variants={container} className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex items-start"
              >
                <span
                  className="mr-3 mt-1 text-lg"
                  style={{ color: colors.taupe }}
                >
                  ●
                </span>
                <p className="text-base" style={{ color: colors.charcoal }}>
                  {feature}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <motion.button
              variants={item}
              className="font-bold py-3 px-8 rounded-md transition duration-300 text-lg shadow-lg hover:opacity-90 flex items-center justify-center"
              style={{ backgroundColor: colors.taupe, color: colors.offwhite }}
            >
              HIRE US TODAY →
            </motion.button>

            <motion.div
              variants={item}
              className="flex flex-col items-start sm:items-center sm:ml-4"
            >
              <p
                className="text-sm font-semibold uppercase mb-1"
                style={{ color: colors.charcoal }}
              >
                GIVE US A CALL
              </p>
              <a
                href="tel:1-800-555-0123" // Replace with actual number
                className="text-xl font-extrabold transition duration-300 hover:text-taupe"
                style={{ color: colors.navy }}
              >
                (800)-555-0123
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LaundryWalaValueProp;
