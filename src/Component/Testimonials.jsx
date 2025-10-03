import React from "react";
import { motion } from "framer-motion";

const topSectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.17, 0.55, 0.55, 1],
      staggerChildren: 0.1,
    },
  },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const TestimonialsSection = () => {
  const sectionBackground = "linear-gradient(135deg, #F5F0E8 0%, #E0FFE0 100%)"; // Off-White to a custom light green

  const testimonials = [
    {
      quote:
        "“High standard and excellent quality of work. Lorem ipsum dolor sit amet, consectetur”",
    },
    {
      quote:
        "“Awesome work! High standard and excellent quality. Lorem ipsum dolor sit amet, consectetur”",
    },
    {
      quote:
        "“High standard and excellent quality of work. Lorem ipsum dolor sit amet, consectetur”",
    },
    {
      quote:
        "“Awesome work! High standard and excellent quality. Lorem ipsum dolor sit amet, consectetur”",
    },
  ];

  return (
    <div className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-[#C9B9A5] to-[#F5F0E8]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:justify-between mb-12 lg:mb-20"
          variants={topSectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <motion.p
              className="text-[#2E2A45] font-semibold tracking-wider uppercase mb-3"
              variants={topSectionVariants}
            >
              Testimonials
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold text-[#2E2A53] leading-tight"
              variants={topSectionVariants}
            >
              Loved by More than 5000 Clients around the Globe
            </motion.h2>
          </div>

          <div className="lg:w-1/3 text-left">
            <motion.p
              className="text-lg text-[#6E5A4C] mb-8"
              variants={topSectionVariants}
            >
              In addition to dry cleaning and laundry, we offer a range of
              services 7 days a week.
            </motion.p>

            <motion.button
              className="bg-[#2E2A53] text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md
                         transition-colors duration-300 ease-in-out
                         hover:bg-[#2E2A23] hover:shadow-lg"
              variants={topSectionVariants}
            >
              Learn more
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-start text-left h-full
                         transition-all duration-300 ease-in-out cursor-pointer
                         hover:scale-[1.03] hover:shadow-xl hover:border-b-4 hover:border-[#2E2A53]" // Card hover effect
              variants={cardVariants}
            >
              <div className="mb-4 text-4xl text-[#2E2A53] font-extrabold">
                ”
              </div>

              <p className="text-base text-[#2E2A53] font-medium mb-4">
                {t.quote}
              </p>

              <p className="text-sm text-[#2E2A23]">— Client Name</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
