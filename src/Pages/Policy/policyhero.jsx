import React from "react";
import { motion } from "framer-motion";
import PolicyHero from "../../assets/Policy.jpg";
import PolicyDown from "../../assets/policydown.jpg";

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
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const childItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const LaundryWalaPoliciesHero = () => {
  return (
    <section className="relative min-h-[500px] flex flex-col justify-end pb-8 sm:pb-16 lg:pb-20 bg-offwhite">
      {/* Background Image Container */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src={PolicyHero} // Placeholder image
          alt="Clean Clothes on Hangers"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability (from offwhite to transparent) */}
        <div className="absolute inset-0 bg-gradient-to-t from-offwhite/100 via-offwhite/40 to-transparent"></div>

        {/* Pattern overlay from original image (using cream for color) */}
        <div className="absolute inset-0">
          {/* You would use SVG or complex Tailwind patterns here. Using simple circles for visual texture. */}
          <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full opacity-10 bg-cream"></div>
          <div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full opacity-10 bg-cream"></div>
        </div>
      </motion.div>

      {/* Main Content Overlaying Image */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row justify-between items-end lg:items-center">
          {/* Left Side: Headline */}
          <div className="text-left mb-8 lg:mb-0 max-w-xl">
            <motion.h1
              variants={childItem}
              className="text-5xl sm:text-6xl font-extrabold leading-tight text-charcoal"
            >
              Terms & Conditions of Our
            </motion.h1>
            <motion.p
              variants={childItem}
              className="text-5xl sm:text-6xl font-extrabold leading-tight text-accent-blue"
            >
              Services
            </motion.p>
          </div>

          {/* Right Side: Value Prop and CTA */}
          <div className="text-left lg:text-right max-w-sm">
            <motion.p
              variants={childItem}
              className="text-lg mb-6 text-charcoal"
            >
              You can use our services in any convenient way – the choice is
              yours.
            </motion.p>
            <motion.button
              variants={childItem}
              className="font-bold py-3 px-6 rounded-full transition duration-300 text-lg shadow-lg hover:opacity-90 w-full lg:w-auto bg-taupe text-white"
            >
              Read Full Policy →
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LaundryWalaPoliciesHero;
