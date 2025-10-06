import React from "react";
import { motion } from "framer-motion";
import Ab from "../assets/about.jpg";
import Ab1 from "../assets/about1.jpg";

const AboutUsSection = ({ setShowForm }) => {
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.17, 0.55, 0.55, 1],
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.17, 0.55, 0.55, 1],
        delay: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const childTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="px-4 md:px-8 bg-gradient-to-b from-[#F5F0E8] to-[#C9B9A5] py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT IMAGES SECTION */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 w-full"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Image Block 1 */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-xl w-full h-[300px] sm:h-[400px] md:w-1/2 md:h-[450px]"
            variants={childTextVariants}
          >
            <img
              src={Ab}
              alt="Laundry worker working on a suit"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Image Block 2 */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-xl w-full h-[300px] sm:h-[400px] md:w-1/2 md:h-[450px] mt-6 md:mt-12"
            variants={childTextVariants}
          >
            <img
              src={Ab1}
              alt="Woman sorting clothes by washing machine"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT TEXT SECTION */}
        <motion.div
          className="text-left"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.p
            className="text-[#2E2A45] font-semibold tracking-wider uppercase mb-3"
            variants={childTextVariants}
          >
            About Us
          </motion.p>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2E2A53] mb-6 leading-tight"
            variants={childTextVariants}
          >
            Finest Dry Cleaning and Laundry Services
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-[#6E5A4C] mb-6"
            variants={childTextVariants}
          >
            The company's primary aim is to provide modern laundry and dry
            cleaning services tailored to customers' needs.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-[#6E5A4C] mb-10"
            variants={childTextVariants}
          >
            Providing a flexible and cost-effective service while maintaining
            the highest level of quality is our goal.
          </motion.p>

          <motion.button
            onClick={() => setShowForm(true)}
            className="bg-[#2E2A53] text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#1A1A1A] transition-colors duration-300"
            variants={childTextVariants}
          >
            Order now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsSection;
