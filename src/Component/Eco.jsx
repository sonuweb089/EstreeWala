import React from "react";
import { motion } from "framer-motion";
import Eco from "../assets/eco1.jpg";
import Eco1 from "../assets/eco2.jpg";

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
          className="text-left"
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p
            className="text-[#2E2A53] font-semibold tracking-wider uppercase mb-3"
            variants={textChildVariants}
          >
            {" "}
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
                       hover:bg-[#2E2A80] hover:shadow-lg" // Hover effect
            variants={textChildVariants}
          >
            Learn more
          </motion.button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={imageContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {[Eco1, Eco].map((img, index) => (
            <motion.div
              key={index}
              variants={imageChildVariants}
              className="group relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-b from-[#E9DDC9] to-[#C9B9A5]
                 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-3xl"
            >
              {/* Image */}
              <img
                src={img}
                alt={`Eco image ${index + 1}`}
                className="w-full h-[320px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Glass overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
              ></div>

              {/* Optional Text Content on hover */}
              <div
                className="absolute bottom-6 left-6 text-white opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0
                   transition-all duration-500 ease-out"
              >
                <h3 className="text-xl font-semibold">Eco-Friendly Service</h3>
                <p className="text-sm text-gray-200">
                  Sustainable laundry for a cleaner future
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EcoFriendlySection;
