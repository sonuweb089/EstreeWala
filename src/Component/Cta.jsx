import React from "react";
import { motion } from "framer-motion";
import Ct from "../assets/Ct.jpg";
import Ct1 from "../assets/Ct1.jpg";
import Ct2 from "../assets/Ct2.jpg";
import Ct3 from "../assets/Ct3.jpg";

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.17, 0.55, 0.55, 1],
    },
  },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
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
      duration: 0.3,
      ease: [0.17, 0.55, 0.55, 1],
    },
  },
};
// ------------------------------

const DeliveryServiceSection = () => {
  const cardsData = [
    {
      text: "We professionally clean them",
      img: Ct,
      color: "#00CCCC",
      textColor: "white",
    },
    {
      text: "We professionally clean them",
      img: Ct1,
      color: "#E9DDC9",
      textColor: "#2E2A53",
    },
    {
      text: "We professionally clean them",
      img: Ct2,
      color: "#6E5A4C",
      textColor: "white",
    },
    {
      text: "We professionally clean them",
      img: Ct3,
      color: "#C9B9A5",
      textColor: "#2E2A53",
    },
  ];

  const orderedCards = [
    {
      img: Ct,
      text: "Place your order and drop off",
      color: "transparent",
      textColor: "white",
    },
    {
      img: Ct1,
      text: "We professionally clean them",

      textColor: "white",
    },
    {
      img: Ct2,
      text: "Track the cleaning process",
      color: "transparent",
      textColor: "white",
    },
    {
      img: Ct3,
      text: "Receive clothes at your door",
      color: "transparent",
      textColor: "white",
    },
  ];

  return (
    <div className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-[#F5F0E8] to-[#C9B9A5]">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <p className="text-[#2E2A35] font-semibold tracking-wider uppercase mb-3">
            Delivery Service
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2E2A53] leading-tight max-w-3xl">
            How Does Dry Cleaning Delivery Work?
          </h2>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {orderedCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-3xl shadow-2xl 
                   bg-gradient-to-b from-[#E9DDC9] to-[#C9B9A5] 
                   transition-all duration-500 ease-out 
                   hover:-translate-y-2 hover:shadow-3xl h-[450px] cursor-pointer"
            >
              {/* Image */}
              <img
                src={card.img}
                alt={card.text}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
              ></div>

              {/* Text Content */}
              <div
                className="absolute bottom-6 left-6 text-white opacity-0 translate-y-6 
                     group-hover:opacity-100 group-hover:translate-y-0 
                     transition-all duration-500 ease-out"
              >
                <h3 className="text-xl font-semibold">{card.text}</h3>
                <p className="text-sm text-gray-200 mt-1">
                  The company’s primary aim is to provide modern laundry...
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DeliveryServiceSection;
