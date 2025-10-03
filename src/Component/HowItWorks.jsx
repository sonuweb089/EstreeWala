import React from "react";
import { motion } from "framer-motion";
const OurServicesSection = () => {
  const topSectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.55, 0.55, 1],
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.17, 0.55, 0.55, 1],
      },
    },
  };

  const cardIconVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardTextVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-[#F5F0E8] to-[#C9B9A5]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="lg:w-1/3 mb-6 lg:mb-0"
          variants={topSectionVariants}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-[#2E2A45] font-semibold tracking-wider uppercase text-lg">
            Our services
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:justify-between mb-12 lg:mb-20"
          variants={topSectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="lg:w-1/2 mb-6 lg:mb-0"
            variants={topSectionVariants}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2E2A53] leading-tight text-left">
              Free Up time for What Really Matters
            </h2>
          </motion.div>

          <motion.div
            className="lg:w-1/3 text-left"
            variants={topSectionVariants}
          >
            <p className="text-lg text-[#6E5A4C]">
              In addition to dry cleaning and laundry, we offer a range of
              services 7 days a week. You can use our services in any convenient
              way – the choice is yours.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center 
                       transition-all duration-300 ease-in-out cursor-pointer
                       hover:scale-105 hover:shadow-xl hover:bg-gray-50"
            variants={cardVariants}
          >
            <motion.div
              className="mb-4 text-5xl text-[#00CCCC]"
              variants={cardIconVariants}
            >
              🧺
            </motion.div>

            <motion.h3
              className="text-2xl font-bold text-[#2E2A53] mb-3"
              variants={cardTextVariants}
            >
              Wash-Dry-Fold
            </motion.h3>
            <motion.p
              className="text-base text-[#6E5A4C]"
              variants={cardTextVariants}
            >
              In addition to dry cleaning and laundry, we offer a range of
              services 7 days a week.
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center 
                       transition-all duration-300 ease-in-out cursor-pointer
                       hover:scale-105 hover:shadow-xl hover:bg-gray-50"
            variants={cardVariants}
          >
            <motion.div
              className="mb-4 text-5xl text-[#00CCCC]"
              variants={cardIconVariants}
            >
              👕
            </motion.div>

            <motion.h3
              className="text-2xl font-bold text-[#2E2A53] mb-3"
              variants={cardTextVariants}
            >
              Dry Cleaning
            </motion.h3>
            <motion.p
              className="text-base text-[#6E5A4C]"
              variants={cardTextVariants}
            >
              In addition to dry cleaning and laundry, we offer a range of
              services 7 days a week.
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center 
                       transition-all duration-300 ease-in-out cursor-pointer
                       hover:scale-105 hover:shadow-xl hover:bg-gray-50"
            variants={cardVariants}
          >
            <motion.div
              className="mb-4 text-5xl text-[#00CCCC]"
              variants={cardIconVariants}
            >
              🧵
            </motion.div>

            <motion.h3
              className="text-2xl font-bold text-[#2E2A53] mb-3"
              variants={cardTextVariants}
            >
              Clothing Repairs
            </motion.h3>
            <motion.p
              className="text-base text-[#6E5A4C]"
              variants={cardTextVariants}
            >
              In addition to dry cleaning and laundry, we offer a range of
              services 7 days a week.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurServicesSection;
