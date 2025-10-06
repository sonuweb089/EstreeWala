import React from "react";
import { motion } from "framer-motion";
import SerAb3 from "../../src/assets/SerAb3.jpg";
import SerAb4 from "../../src/assets/SerAb4.jpg";
import SerAb5 from "../../src/assets/SerAb5.jpg";
const colors = {
  taupe: "#6E5A4C",
  cream: "#E9DDC9",
  navy: "#2E2A53",
  charcoal: "#1A1A1A",
  graywarm: "#C9B9A5",
  offwhite: "#F5F0E8",
  white: "#FFFFFF",
};

// --- Framer Motion Animation Variants ---

// Parent container for staggered appearance
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between card animations
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
    transition: { type: "spring", stiffness: 100, duration: 0.5 },
  },
};

const LaundryWalaServices = () => {
  // Array of services data
  const services = [
    {
      title: "Wash & Fold Service",
      description:
        "Quick, convenient washing and folding tailored to your fabric care needs.",
      bgColor: colors.taupe,
      image: SerAb4,
    },
    {
      title: "Premium Dry Cleaning",
      description:
        "Expert dry cleaning for delicate garments, ensuring texture preservation.",
      bgColor: colors.navy,
      image: SerAb3,
    },
    {
      title: "Ironing & Pressing",
      description:
        "Professional pressing to remove every wrinkle and provide a crisp finish.",
      bgColor: colors.taupe, // Using taupe for the third card for visual balance
      image: SerAb5,
    },
  ];

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.offwhite }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Text */}
        <p
          className="text-sm font-semibold uppercase tracking-wider mb-2"
          style={{ color: colors.charcoal }}
        >
          OUR SERVICES
        </p>
        <h2
          className="text-4xl lg:text-5xl font-extrabold mb-12"
          style={{ color: colors.navy }}
        >
          Comprehensive Laundry services for every need
        </h2>

        {/* Service Cards Container (Animated) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardItem}
              className="rounded-xl overflow-hidden shadow-2xl relative flex flex-col"
              style={{ backgroundColor: colors.white }}
            >
              {/* Card Image */}
              <div className="h-48 sm:h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Service Details (remove negative margin, use relative spacing) */}
              <div
                className="p-4 sm:p-6 rounded-lg -mt-8 sm:-mt-10 mx-4 sm:mx-6 relative"
                style={{ backgroundColor: service.bgColor }}
              >
                <h3
                  className="text-lg sm:text-xl font-bold mb-1"
                  style={{ color: colors.offwhite }}
                >
                  {service.title}
                </h3>
                <p className="text-sm" style={{ color: colors.offwhite }}>
                  {service.description}
                </p>
              </div>

              {/* CTA Button */}
              <div className="p-4 sm:p-6 flex justify-start items-center">
                <button
                  className="font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-md transition duration-300 shadow-lg hover:opacity-90"
                  style={{
                    backgroundColor: colors.taupe,
                    color: colors.offwhite,
                  }}
                >
                  BOOK SERVICE →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LaundryWalaServices;
