import React from "react";
import { motion } from "framer-motion";
import PriceHero from "../../assets/Pricehero.jpg";

// --- Framer Motion Animation Variants ---
const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.2 },
  },
};

const childItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const LaundryWalaPricingHero = () => {
  return (
    <section className="relative min-h-[600px] flex flex-col justify-end pb-8 sm:pb-16 lg:pb-20 bg-[#F5F0E8]">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src={PriceHero}
          alt="Modern Laundry Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F0E8] via-[#F5F0E8]/40 to-transparent"></div>
      </motion.div>

      {/* Content Overlay */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row justify-between items-end lg:items-center">
          {/* Left Side */}
          <div className="text-left mb-8 lg:mb-0 max-w-xl">
            <motion.h1
              variants={childItem}
              className="text-5xl sm:text-6xl font-extrabold leading-tight text-[#1A1A1A]"
            >
              Dry Cleaning & Laundry
            </motion.h1>
            <motion.p
              variants={childItem}
              className="text-5xl sm:text-6xl font-extrabold leading-tight text-[#2E2A53]"
            >
              Pricing
            </motion.p>
          </div>

          {/* Right Side */}
          <div className="text-left lg:text-right max-w-sm">
            <motion.p
              variants={childItem}
              className="text-lg mb-6 text-[#1A1A1A]"
            >
              You can use our services in any convenient way – the choice is
              yours.
            </motion.p>
            <motion.button
              variants={childItem}
              className="font-bold py-4 px-8 rounded-full transition duration-300 text-lg shadow-lg hover:opacity-90 w-full lg:w-auto bg-[#2E2A53] text-[#F5F0E8]"
            >
              Order now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LaundryWalaPricingHero;
