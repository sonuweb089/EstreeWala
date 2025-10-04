import React from "react";
import { motion } from "framer-motion";
import { FaRegClock, FaMoneyBillWave, FaLeaf } from "react-icons/fa";
import myimg from "../assets/pic.jpg";
import myimg1 from "../assets/pic2.jpg";
import hero from "../assets/hero1.png";

const Service = () => {
  return (
    <div className="bg-gradient-to-b from-[#C9B9A5] to-[#F5F0E8] text-center py-12 relative overflow-hidden">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        className="flex justify-evenly gap-6 px-4 md:px-6 max-w-6xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer h-96">
          <img
            src={myimg1}
            alt="Laundry Service"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
            <p className="text-white text-lg font-semibold">Time Saving</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer h-96">
          <img
            src={hero}
            alt="Laundry Pickup"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
            <p className="text-white text-lg font-semibold">Money Seving</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer h-96">
          <img
            src={myimg}
            alt="Clean Clothes"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
            <p className="text-white text-lg font-semibold">Premium Quality</p>
          </div>
        </div>
      </motion.div>
      <div className=" py-16 px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-[#2E2A53] text-white rounded-lg p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div
                className="flex flex-col items-center text-center p-4 rounded-lg 
                         transition-all duration-300 ease-in-out 
                         hover:bg-[#3A356A] hover:scale-105 hover:shadow-2xl cursor-pointer" // Hover background is a slightly lighter navy for subtle effect
              >
                <div className="mb-4 text-4xl text-white">
                  {" "}
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
                  {" "}
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
                  {" "}
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
