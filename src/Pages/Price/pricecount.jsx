import React from "react";
import { motion } from "framer-motion";

const LaundrywalaPricing = () => {
  const sections = [
    {
      title: "Upper Body",
      items: [
        { name: "Blouse", price: "$7" },
        { name: "Coat", price: "$16" },
        { name: "Jacket", price: "$9" },
        { name: "Jacket (Designer)", price: "$60" },
        { name: "Jacket (Puffa)", price: "$25" },
        { name: "Jumper", price: "$8" },
      ],
    },
    {
      title: "Lower Body",
      items: [
        { name: "Skirt", price: "$9" },
        { name: "Trousers", price: "$10" },
        { name: "Jeans", price: "$8" },
        { name: "Shorts", price: "$6" },
        { name: "Leggings", price: "$7" },
        { name: "Dungarees", price: "$11" },
      ],
    },
    {
      title: "Full Body",
      items: [
        { name: "Dress", price: "$15" },
        { name: "Evening/Delicate Dress", price: "$20" },
        { name: "Two-Piece Suit", price: "$14" },
        { name: "Jumpsuit", price: "$13" },
        { name: "Three-Piece Suit", price: "$18" },
        { name: "Wedding Dress", price: "Starting from $175" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#2E2A53] flex flex-col items-center py-20 px-6 space-y-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-[#E9DDC9] mb-4 text-center"
      >
        LaundryWala Pricing
      </motion.h1>
      <p className="text-[#C9B9A5] text-lg text-center max-w-2xl mb-10">
        Transparent and premium pricing for every fabric and fit. Choose what
        fits your wardrobe best.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 25px rgba(233, 221, 201, 0.2)",
            }}
            className="bg-[#1A1A1A]/80 backdrop-blur-md border border-[#6E5A4C]/40 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:bg-[#C9B9A5] hover:text-[#1A1A1A]"
          >
            <h2 className="text-2xl font-bold mb-6 border-b border-[#6E5A4C]/40 pb-3 text-[#E9DDC9] hover:text-[#1A1A1A] transition-colors duration-300">
              {section.title}
            </h2>

            <ul className="divide-y divide-[#6E5A4C]/40">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center py-4 text-[#F5F0E8] hover:text-[#1A1A1A] transition-colors duration-300"
                >
                  <span className="text-base font-medium">{item.name}</span>
                  <span className="text-base font-semibold text-[#E9DDC9] hover:text-[#1A1A1A]">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LaundrywalaPricing;
