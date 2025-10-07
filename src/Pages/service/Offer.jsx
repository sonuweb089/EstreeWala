import React from "react";
import { motion } from "framer-motion";
import Blog2 from "../../assets/serAb2.jpg";
import Blog3 from "../../assets/serAb3.jpg";
const colors = {
  taupe: "#6E5A4C",
  cream: "#E9DDC9",
  navy: "#2E2A53",
  charcoal: "#1A1A1A",
  graywarm: "#C9B9A5",
  offwhite: "#F5F0E8",
  white: "#FFFFFF",
  // Using Taupe for the button background color
  buttonColor: "#6E5A4C",
};

// --- Framer Motion Animation Variants ---

// Parent container for staggered appearance
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between card animations
      delayChildren: 0.1, // Initial delay
    },
  },
};

// Child variant for smooth fade-in-up (used on each card)
const cardItem = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, duration: 0.6 },
  },
};

// Header text animation
const headerItem = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const LaundryWalaOffers = ({ setShowForm }) => {
  // Array of offer data
  const offers = [
    {
      title: "Monthly Wash & Fold Subscription",
      price: "₹1499/month",
      details:
        "Get all your regular washing and folding done for one low monthly price. Never worry about laundry again.",
      image: Blog2,
    },
    {
      title: "Deluxe Dry Cleaning Package",
      price: "₹1999/package",
      details:
        "Includes 5 premium dry cleaning garments (suits, sarees, coats). Call us or schedule online at your convenience.",
      image: Blog3,
    },
  ];

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.navy }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Text (Animated) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.p
            variants={headerItem}
            className="text-sm font-semibold uppercase tracking-widest mb-2"
            style={{ color: colors.cream }}
          >
            SPECIAL DEAL
          </motion.p>
          <motion.h2
            variants={headerItem}
            className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"
            style={{ color: colors.white }}
          >
            Grab our jaw dropping offers
          </motion.h2>
          <motion.p
            variants={headerItem}
            className="text-lg mb-12 max-w-2xl mx-auto"
            style={{ color: colors.graywarm }}
          >
            With years of expertise, we deliver reliable and efficient laundry
            services, ensuring safe and clean care for your garments.
          </motion.p>
        </motion.div>

        {/* Offer Cards Container (Animated) */}
        <motion.div
          className="flex flex-col lg:flex-row justify-center gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              variants={cardItem}
              className="rounded-xl overflow-hidden shadow-2xl relative max-w-lg lg:w-1/2"
              style={{ backgroundColor: colors.white }}
            >
              <div className="relative">
                {/* Background Image with Dark Overlay */}
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-80 object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                ></div>

                {/* Offer Text Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-left text-white">
                  <h3
                    className="text-3xl font-bold mb-1"
                    style={{ color: colors.white }}
                  >
                    {offer.title}
                  </h3>
                  <p
                    className="text-2xl font-extrabold mb-4"
                    style={{ color: colors.cream }}
                  >
                    {offer.price}
                  </p>
                  <p
                    className="text-base mb-6"
                    style={{ color: colors.offwhite }}
                  >
                    {offer.details}
                  </p>

                  {/* CTA Button */}
                  <button
                    onClick={() => setShowForm(true)}
                    className="font-bold py-3 px-6 rounded-md transition duration-300 shadow-lg hover:opacity-90 flex items-center justify-center w-full lg:w-auto"
                    style={{
                      backgroundColor: colors.taupe,
                      color: colors.offwhite,
                    }}
                  >
                    BOOK SERVICE →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Placeholder for dots/slider arrows */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          <div
            className="w-2 h-2 rounded-full cursor-pointer"
            style={{ backgroundColor: colors.taupe }}
          ></div>
          <div
            className="w-2 h-2 rounded-full cursor-pointer opacity-50"
            style={{ backgroundColor: colors.graywarm }}
          ></div>
          <div
            className="w-2 h-2 rounded-full cursor-pointer opacity-50"
            style={{ backgroundColor: colors.graywarm }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default LaundryWalaOffers;
