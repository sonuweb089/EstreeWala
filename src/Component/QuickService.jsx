import React from "react";
import { motion } from "framer-motion";
import { GiSwan } from "react-icons/gi";

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.17, 0.55, 0.55, 1],
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const QuickServiceHero = ({ setShowForm }) => {
  return (
    <div className="max-h-[7xl]  flex items-start  justify-center text-center px-4 relative overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto z-11 pt-16 md:pt-24 mb-10"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          // Removed mt-5
          className="text-6xl md:text-7xl font-extrabold text-[#2E2A53] leading-tight"
          variants={childVariants}
        >
          Quick. Fast. <br />
          Reliable.
        </motion.h1>

        <motion.p
          className="text-xl text-[#6E5A4C] mb-10"
          variants={childVariants}
        >
          We deliver your items cleaned within 24 hours and at the time
          required.
        </motion.p>

        <motion.button
          onClick={() => setShowForm(true)}
          className="bg-[#2E2A53] text-white text-xl font-semibold py-3 px-10 rounded-full shadow-lg
                     transition-colors duration-300 ease-in-out
                     hover:bg-[#2E2A78] hover:shadow-xl"
          variants={childVariants}
        >
          Order now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default QuickServiceHero;
