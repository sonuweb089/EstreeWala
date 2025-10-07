import React from "react";
import { motion } from "framer-motion";
// Importing specific icons from react-icons/fa6
import { FaInstagram, FaSkype, FaFacebookF, FaEnvelope } from "react-icons/fa6";

// --- Framer Motion Animation Variants ---
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardItem = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, duration: 0.5 },
  },
};

const LaundryWalaSocials = () => {
  const socialPlatforms = [
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://instagram.com/laudrywala",
    },
    {
      name: "Skype",
      icon: FaSkype,
      link: "skype:laudrywala?chat",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      link: "https://facebook.com/laundywala",
    },
    {
      name: "clena@info.com",
      icon: FaEnvelope,
      link: "mailto:clena@info.com",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#2E2A53] to-[#F5F0E8]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16"
        >
          <motion.p
            variants={item}
            className="text-sm font-semibold uppercase tracking-widest mb-4 text-[#F5F0E8]"
          >
            Follow Us
          </motion.p>
          <motion.h2
            variants={item}
            className="text-4xl lg:text-5xl font-extrabold leading-tight text-[#2E2A53] max-w-4xl mx-auto"
          >
            To Order Dry Cleaning Write to Us in Social Networks
          </motion.h2>
        </motion.div>

        {/* Social Cards Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {socialPlatforms.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.link}
              variants={cardItem}
              className="group bg-[#FFFFFF] p-8 rounded-xl shadow-lg flex flex-col items-center justify-center transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl hover:border-b-4 border-[#6E5A4C]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Icon */}
              <platform.icon className="text-5xl mb-4 transition duration-300 text-[#6E5A4C] group-hover:text-[#2E2A53]" />

              {/* Name/Link */}
              <p className="text-lg font-semibold text-[#2E2A53] group-hover:text-[#6E5A4C] transition duration-300">
                {platform.name}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LaundryWalaSocials;
