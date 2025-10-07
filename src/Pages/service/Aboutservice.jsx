import React from "react";
import { motion } from "framer-motion";
import SerAb from "../../assets/serAb.jpg";
import SerAb1 from "../../assets/serAb1.jpg";
import SerAb2 from "../../assets/serAb2.jpg";
import SerAb3 from "../../assets/serAb3.jpg";
import SerAb4 from "../../assets/serAb4.jpg";
const LaundryWalaAbout = ({ setShowForm }) => {
  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const imageSlide = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F0E8] md:mt-25">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section: Images */}
        <motion.div
          className="grid grid-cols-2 gap-6"
          variants={imageSlide}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="col-span-1 rounded-lg overflow-hidden shadow-lg aspect-w-1 aspect-h-1">
            <img
              src={SerAb}
              alt="Professional laundry service"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 rounded-lg overflow-hidden shadow-lg aspect-w-1 aspect-h-1">
            <img
              src={SerAb1}
              alt="Person folding clothes"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 rounded-lg overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
            <img
              src={SerAb2}
              alt="Modern laundry facility"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Section: Content */}
        <motion.div
          variants={slideIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-[#1A1A1A]">
            ABOUT COMPANY
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-[#2E2A53]">
            We are your most trusted laundry service
          </h2>
          <p className="text-lg mb-8 text-[#1A1A1A]">
            With years of expertise, we deliver reliable and pristine laundry
            and dry cleaning services, ensuring fast, safe, and efficient care
            for your garments.
          </p>

          {/* Feature List */}
          <motion.div
            className="space-y-4 mb-10"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              "Fast Turnaround, Affordable Prices",
              "Reliable Garment Care Guaranteed",
              "24/7 Customer Support",
            ].map((feature, index) => (
              <motion.p
                key={index}
                variants={item}
                className="flex items-start text-lg text-[#1A1A1A]"
              >
                <span className="mr-3 mt-1 font-extrabold text-xl text-[#6E5A4C]">
                  ✔
                </span>
                {feature}
              </motion.p>
            ))}
          </motion.div>

          {/* Accreditation Logos */}
          <div className="flex flex-wrap items-center gap-6 mb-10">
            <img
              src={SerAb3}
              alt="Accredited Business"
              className="h-10 opacity-75"
            />
            <img
              src={SerAb4}
              alt="Quality Guaranteed"
              className="h-10 opacity-75"
            />
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={() => setShowForm(true)}
              variants={item}
              className="font-bold py-3 px-6 rounded-md shadow-md hover:opacity-90 bg-[#6E5A4C] text-[#F5F0E8] transition duration-300"
            >
              SCHEDULE PICKUP TODAY
            </motion.button>
            <motion.button
              variants={item}
              className="border-2 border-[#6E5A4C] text-[#6E5A4C] font-bold py-3 px-6 rounded-md shadow-md hover:bg-[#6E5A4C] hover:text-[#F5F0E8] transition duration-300"
            >
              CALL US (800)-123-4567
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LaundryWalaAbout;
