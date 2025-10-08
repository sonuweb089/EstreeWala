import React from "react";
import { motion } from "framer-motion";
import Eco from "../assets/eco1.jpg"; // Assuming this is the bottom image (basket/plant)
import Eco1 from "../assets/eco2.jpg"; // Assuming this is the top image (hands/globe)

const EcoFriendlySection = () => {
  const textContainerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: [0.17, 0.55, 0.55, 1],
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const textChildVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1, ease: "easeOut" },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: [0.17, 0.55, 0.55, 1],
        staggerChildren: 0.2,
        delay: 0.2,
      },
    },
  };

  const imageChildVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-[#C9B9A5] to-[#F5F0E8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          className="flex flex-col items-center lg:items-start gap-0"
          variants={imageContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <motion.div
            key={0}
            variants={imageChildVariants}
            className="w-2/3 sm:w-2/3 lg:w-3/4 relative overflow-hidden rounded-3xl shadow-xl bg-white mb-[-1.5rem] z-10 ml-auto"
          >
            <img
              src={Eco1}
              alt="Hands holding a small globe"
              className="w-full h-full object-cover aspect-[6/5] rounded-3xl"
            />
          </motion.div>

          <motion.div
            key={1}
            variants={imageChildVariants}
            className="w-2/3 sm:w-2/3 lg:w-3/4 relative overflow-hidden rounded-3xl shadow-xl bg-white z-0 mr-auto"
          >
            <img
              src={Eco}
              alt="Laundry basket and a house plant"
              className="w-full h-full object-cover aspect-[6/5] rounded-3xl"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="text-left"
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <motion.p className="inline-block px-4 py-2 mb-3 bg-[#F5F0E8] text-[#2E2A53] font-semibold tracking-wider uppercase mt-8 rounded-full shadow-md">
            Eco Friendly
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-[#2E2A53] mb-6 leading-tight"
            variants={textChildVariants}
          >
            We Care About the Environment
          </motion.h2>

          <motion.p
            className="text-lg text-[#6E5A4C] mb-6"
            variants={textChildVariants}
          >
            The company's primary aim is to provide modern laundry and dry
            cleaning services tailored to customers' needs.
          </motion.p>

          <motion.p
            className="text-lg text-[#6E5A4C] mb-10"
            variants={textChildVariants}
          >
            Providing a flexible and cost-effective service, while maintaining
            the highest level of quality is our goal.
          </motion.p>

          <motion.button
            className="bg-[#2E2A53] text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md
                         transition-colors duration-300 ease-in-out
                         hover:bg-[#2E2A80] hover:shadow-lg"
            variants={textChildVariants}
          >
            Learn more
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default EcoFriendlySection;
