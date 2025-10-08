import React from "react";
import { motion } from "framer-motion";
import SerAb3 from "../../assets/serAb3.jpg";
import SerAb4 from "../../assets/serAb4.jpg";
import SerAb5 from "../../assets/serAb5.jpg";

const LaundryWalaServices = ({ setShowForm }) => {
  const services = [
    {
      title: "Wash & Fold Service",
      description:
        "Quick, convenient washing and folding tailored to your fabric care needs.",
      bgColorClass: "bg-[#6E5A4C]", // taupe
      textColorClass: "text-[#F5F0E8]", // offwhite
      image: SerAb4,
    },
    {
      title: "Premium Dry Cleaning",
      description:
        "Expert dry cleaning for delicate garments, ensuring texture preservation.",
      bgColorClass: "bg-[#6E5A4C]", // navy
      textColorClass: "text-[#F5F0E8]", // offwhite
      image: SerAb3,
    },
    {
      title: "Ironing & Pressing",
      description:
        "Professional pressing to remove every wrinkle and provide a crisp finish.",
      bgColorClass: "bg-[#6E5A4C]", // taupe
      textColorClass: "text-[#F5F0E8]", // offwhite
      image: SerAb5,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F0E8]">
      {" "}
      {/* offwhite */}
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Text */}
        <p className="inline-block px-4 py-2 mb-3 bg-[#F5F0E8] text-[#2E2A53] font-semibold tracking-wider uppercase mt-8 rounded-full shadow-md">
          {/* charcoal */}
          OUR SERVICES
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-12 text-[#2E2A53]">
          {/* navy */}
          Comprehensive Laundry services for every need
        </h2>

        {/* Service Cards Container (Animated) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, duration: 0.5 },
                },
              }}
              className="rounded-xl overflow-hidden shadow-2xl relative flex flex-col bg-white" /* white */
            >
              {/* Card Image */}
              <div className="h-48 sm:h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Service Details */}
              <div
                className={`p-4 sm:p-6 rounded-lg -mt-8 sm:-mt-10 mx-4 sm:mx-6 relative ${service.bgColorClass}`}
              >
                <h3
                  className={`text-lg sm:text-xl font-bold mb-1 ${service.textColorClass}`}
                >
                  {service.title}
                </h3>
                <p className={`text-sm ${service.textColorClass}`}>
                  {service.description}
                </p>
              </div>

              {/* CTA Button */}
              <div className="p-4 sm:p-6 flex justify-start items-center">
                <button
                  onClick={() => setShowForm(true)}
                  className="font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-md transition duration-300 shadow-lg hover:opacity-90 bg-[#6E5A4C] text-[#F5F0E8]"
                  /* bg taupe, text offwhite */
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
