import React from "react";

import { motion } from "framer-motion";
import { FaRegClock, FaMoneyBillWave, FaLeaf } from "react-icons/fa";

import myimg from "../assets/pic.webp";
import myimg1 from "../assets/pic2.webp";
import hero from "../assets/hero1.webp";

const Service = () => {
  const featureSectionVariants = {
    initial: { opacity: 0, y: 30 },

    inView: { opacity: 1, y: 0 },
  };

  return (
    <div className="text-center py-12 relative overflow-hidden">
      <div className="grid grid-cols-3 gap-2 px-2 max-w-6xl mx-auto">
        <div className="p-1 mt-[-2rem]">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
            <img
              src={myimg1}
              alt="Hands holding colorful clothes"
              className="w-full h-full object-cover rounded-lg aspect-[3/4]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="p-1">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={hero}
              alt="Man smiling with clean laundry"
              className="w-full h-full object-cover rounded-lg aspect-[3/4]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="p-1 mb-4 mt-[-2rem]">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={myimg}
              alt="Hands holding neatly folded clothes with a flower"
              className="w-full h-full object-cover rounded-lg aspect-[3/4]"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="py-16 px-4 md:px-8 lg:px-16">
        <motion.div
          variants={featureSectionVariants}
          initial="initial"
          whileInView="inView"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-[#2E2A53] text-white rounded-lg p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div
                className="flex flex-col items-center text-center p-4 rounded-lg 
                                 transition-all duration-300 ease-in-out 
                                 hover:bg-[#3A356A] hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <div className="mb-4 text-4xl">
                  <FaRegClock size={32} className="text-[#6E5A4C]" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Time saving</h3>
                <p className="text-[#E9DDC9] text-lg leading-relaxed">
                  You can use our services in any convenient way – the choice is
                  yours.
                </p>
              </div>

              <div
                className="flex flex-col items-center text-center p-4 rounded-lg 
                                 transition-all duration-300 ease-in-out 
                                 hover:bg-[#3A356A] hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <div className="mb-4 text-4xl">
                  <FaMoneyBillWave size={32} className="text-[#496e44]" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Money saving</h3>
                <p className="text-[#E9DDC9] text-lg leading-relaxed">
                  You can use our services in any convenient way – the choice is
                  yours.
                </p>
              </div>

              <div
                className="flex flex-col items-center text-center p-4 rounded-lg 
                                 transition-all duration-300 ease-in-out 
                                 hover:bg-[#3A356A] hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <div className="mb-4 text-4xl">
                  <FaLeaf size={32} className="text-[#6E5A4C]" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">
                  Environmentally friendly
                </h3>
                <p className="text-[#E9DDC9] text-lg leading-relaxed">
                  You can use our services in any convenient way – the choice is
                  yours.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
