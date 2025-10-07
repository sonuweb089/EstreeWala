import React from "react";
import { motion } from "framer-motion";
import PolicyDown from "../../assets/policydown.jpg";

// --- Framer Motion Animation Variants ---
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const LaundryWalaFooterCTA = () => {
  return (
    <footer className="bg-[#F5F0E8] pt-20 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Quote Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <motion.p
            variants={item}
            className="text-3xl sm:text-4xl font-extrabold max-w-4xl mx-auto leading-snug text-[#2E2A53]"
          >
            "We believe that cleanliness is the key to happiness and success in
            absolutely everything."
          </motion.p>
          <motion.p
            variants={item}
            className="text-lg font-semibold mt-4 text-[#6E5A4C]"
          >
            – Max Taylor, Founder
          </motion.p>
        </motion.div>

        {/* 2. CTA Banner (20% Off Offer) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={item}
          viewport={{ once: true, amount: 0.3 }}
          className="relative h-72 sm:h-80 rounded-xl overflow-hidden mb-12 shadow-2xl flex items-center justify-center p-6"
        >
          {/* Background Image */}
          <img
            src={PolicyDown}
            alt="Laundry items background"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />

          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between w-full max-w-5xl">
            <div className="text-center sm:text-left mb-6 sm:mb-0">
              <p className="text-4xl sm:text-5xl font-extrabold leading-tight text-[#FFFFFF]">
                20% off Your First Pick Up
              </p>
              <p className="text-4xl sm:text-5xl font-extrabold leading-tight text-[#E9DDC9]">
                & Delivery Order
              </p>
            </div>

            <a
              href="#"
              className="font-bold py-3 px-8 rounded-full transition duration-300 text-lg shadow-xl hover:opacity-90 bg-[#00BCD4] text-[#FFFFFF]"
            >
              Order now
            </a>
          </div>
        </motion.div>

        {/* 3. Footer Details */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 py-8 border-t border-[#C9B9A5]">
          {/* Company Info */}
          <div className="text-left">
            <h3 className="text-xl font-bold mb-2 text-[#2E2A53]">
              Estree Wala
            </h3>
            <p className="text-sm text-[#1A1A1A]">
              Get your business to the new heights.
            </p>
          </div>

          {/* Sales Email */}
          <div className="text-left">
            <p className="text-sm text-[#1A1A1A] mb-1">Sales</p>
            <a
              href="mailto:sales@example.com"
              className="text-lg font-semibold text-[#2E2A53] hover:text-[#6E5A4C]"
            >
              sales@example.com
            </a>
            <p className="text-xs text-[#C9B9A5] mt-1">MON - FRI / 9AM - 6PM</p>
          </div>

          {/* Phone Number */}
          <div className="text-left">
            <p className="text-sm text-[#1A1A1A] mb-1">Phone</p>
            <a
              href="tel:23456789011"
              className="text-lg font-semibold text-[#2E2A53] hover:text-[#6E5A4C]"
            >
              (234) 567.890.11
            </a>
            <p className="text-xs text-[#C9B9A5] mt-1">WhatsApp or Call</p>
          </div>

          {/* Socials */}
          <div className="text-left">
            <p className="text-sm font-semibold mb-2 text-[#2E2A53]">
              Follow Us
            </p>
            <div className="flex space-x-3 text-2xl text-[#6E5A4C]">
              <span>F</span>
              <span>I</span>
              <span>T</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LaundryWalaFooterCTA;
