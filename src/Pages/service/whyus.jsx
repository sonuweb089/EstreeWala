import React from "react";
import { motion } from "framer-motion";
import { FaBath, FaAward, FaCalendarAlt, FaBolt } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, duration: 0.6 },
  },
};

const headerItem = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const LaundryWalaWhyChooseUs = ({ setShowForm }) => {
  const features = [
    {
      icon: <FaBath size={36} className="text-[#2E2A53]" />,
      title: "Trusted Fabric Care",
      description:
        "Our experts handle your garments with the utmost precision, professionalism, and care.",
    },
    {
      icon: <FaAward size={36} className="text-[#2E2A53]" />,
      title: "Exceptional Service Guarantee",
      description:
        "Your satisfaction is our promise—quality cleaning and service, every single time.",
    },
    {
      icon: <FaCalendarAlt size={36} className="text-[#2E2A53]" />,
      title: "Available 7 Days a Week",
      description:
        "We are here when you need us—offering flexible scheduling any day, any time.",
    },
    {
      icon: <FaBolt size={36} className="text-[#2E2A53]" />,
      title: "Fast Pickup & Delivery",
      description:
        "Quick turnaround times when it matters most—because laundry shouldn't wait.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2E2A53] text-[#F5F0E8]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={headerItem}
            className="text-sm font-semibold uppercase tracking-widest mb-2 text-[#E9DDC9]"
          >
            WHY CHOOSE US
          </motion.p>
          <motion.h2
            variants={headerItem}
            className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-[#FFFFFF]"
          >
            Professional Services, Great Value
          </motion.h2>
          <motion.p
            variants={headerItem}
            className="text-lg mb-12 max-w-2xl mx-auto text-[#C9B9A5]"
          >
            With years of expertise, we deliver reliable, safe, and efficient
            cleaning, ensuring impeccable service for your garments.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardItem}
              className="rounded-xl p-8 shadow-2xl flex flex-col items-center h-full transition duration-300 hover:shadow-[#6E5A4C]/50 bg-[#FFFFFF]"
            >
              <div className="p-3 rounded-xl mb-4 bg-[#E9DDC9]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">
                {feature.title}
              </h3>
              <p className="text-sm text-[#1A1A1A]">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={() => setShowForm(true)}
          variants={cardItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="font-bold py-3 px-8 rounded-md transition duration-300 text-lg shadow-lg hover:opacity-90 flex items-center justify-center mx-auto w-full max-w-xs bg-[#6E5A4C] text-[#F5F0E8]"
        >
          BOOK AN APPOINTMENT →
        </motion.button>
      </div>
    </section>
  );
};

export default LaundryWalaWhyChooseUs;
