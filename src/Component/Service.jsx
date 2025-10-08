import React from "react";
import { motion } from "framer-motion";
import { FaRegClock, FaMoneyBillWave, FaLeaf } from "react-icons/fa";
import myimg from "../assets/pic.jpg";
import myimg1 from "../assets/pic2.jpg";
import hero from "../assets/hero1.png";

const Service = () => {
  return (
    <div className=" text-center py-12 relative overflow-hidden">
      {/* SECTION 1: The three image cards - LEFT AND RIGHT ELEVATED ON ALL SIZES */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.2 }}
        // grid-cols-3 for ALL sizes
        className="grid grid-cols-3 gap-2 px-2 max-w-6xl mx-auto"
      >
        {/* Card 1: Elevated (md: removed, now mt-[-2rem] on all sizes) */}
        <div className="p-1 mt-[-2rem]">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
            <img
              src={myimg1}
              alt="Hands holding colorful clothes"
              className="w-full h-full object-cover rounded-lg aspect-[3/4]"
            />
          </div>
        </div>

        {/* Card 2: Center (Normal position) */}
        <div className="p-1">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={hero}
              alt="Man smiling with clean laundry"
              className="w-full h-full object-cover rounded-lg aspect-[3/4]"
            />
          </div>
        </div>

        {/* Card 3: Elevated (md: removed, now mt-[-2rem] on all sizes) */}
        <div className="p-1 mb-4 mt-[-2rem]">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={myimg}
              alt="Hands holding neatly folded clothes with a flower"
              className="w-full h-full object-cover rounded-lg aspect-[3/4]"
            />
          </div>
        </div>
      </motion.div>

      {/* SECTION 2: Original three feature cards (kept same) */}
      <div className="py-16 px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-[#2E2A53] text-white rounded-lg p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div
                className="flex flex-col items-center text-center p-4 rounded-lg 
                             transition-all duration-300 ease-in-out 
                             hover:bg-[#3A356A] hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <div className="mb-4 text-4xl text-white">
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
                <div className="mb-4 text-4xl text-white">
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
                <div className="mb-4 text-4xl text-white">
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
