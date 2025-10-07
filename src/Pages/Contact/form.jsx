import React from "react";
import { motion } from "framer-motion";

const colors = {
  taupe: "#6E5A4C",
  cream: "#E9DDC9",
  navy: "#2E2A53", // Used for main text and buttons
  charcoal: "#1A1A1A",
  graywarm: "#C9B9A5",
  offwhite: "#F5F0E8", // Main background
  white: "#FFFFFF",
  // Custom colors from the original design
  lightGreenBorder: "#85E0A3", // For input borders
  goldenYellow: "#FFBF00", // For the right button and send icon
};

// --- Framer Motion Animation Variants ---

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const formItem = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const LaundryWalaContactForms = () => {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-[${colors.white}]`}>
      {" "}
      {/* Using white background as per image */}
      <div className="max-w-7xl mx-auto">
        {/* Header and Decorative Icon */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-between items-center mb-12"
        >
          <motion.h2
            variants={item}
            className={`text-4xl font-extrabold leading-tight text-[${colors.navy}]`}
          >
            Send a message
          </motion.h2>
          <motion.div
            variants={item}
            className={`text-5xl text-[${colors.goldenYellow}]`} // Using goldenYellow for the icon
            // Placeholder for a send/paper plane icon
          >
            🚀
          </motion.div>
        </motion.div>

        {/* Two Forms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form 1: For Franchise Query */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true, amount: 0.3 }}
            className="p-8 rounded-lg" // No explicit background, blends with page
          >
            <motion.h3
              variants={item}
              className={`text-2xl font-bold mb-6 text-[${colors.navy}]`}
            >
              For Franchise Query
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <motion.input
                variants={formItem}
                type="text"
                placeholder="Your Name"
                className={`p-3 rounded-md border border-[${colors.lightGreenBorder}] focus:ring-2 focus:ring-[${colors.lightGreenBorder}] focus:outline-none bg-transparent text-[${colors.charcoal}] placeholder-[${colors.graywarm}]`}
              />
              <motion.input
                variants={formItem}
                type="email"
                placeholder="Your Email"
                className={`p-3 rounded-md border border-[${colors.lightGreenBorder}] focus:ring-2 focus:ring-[${colors.lightGreenBorder}] focus:outline-none bg-transparent text-[${colors.charcoal}] placeholder-[${colors.graywarm}]`}
              />
            </div>
            <motion.input
              variants={formItem}
              type="tel"
              placeholder="Your Mobile Number"
              className={`w-full p-3 rounded-md border border-[${colors.lightGreenBorder}] focus:ring-2 focus:ring-[${colors.lightGreenBorder}] focus:outline-none mb-4 bg-transparent text-[${colors.charcoal}] placeholder-[${colors.graywarm}]`}
            />
            <motion.select
              variants={formItem}
              className={`w-full p-3 rounded-md border border-[${colors.lightGreenBorder}] focus:ring-2 focus:ring-[${colors.lightGreenBorder}] focus:outline-none mb-4 bg-transparent text-[${colors.charcoal}] appearance-none cursor-pointer`}
            >
              <option value="" className={`text-[${colors.graywarm}]`}>
                Select Options
              </option>
              <option value="option1" className={`text-[${colors.charcoal}]`}>
                New Franchise
              </option>
              <option value="option2" className={`text-[${colors.charcoal}]`}>
                Franchise Support
              </option>
            </motion.select>
            <motion.input
              variants={formItem}
              type="text"
              placeholder="Your City"
              className={`w-full p-3 rounded-md border border-[${colors.lightGreenBorder}] focus:ring-2 focus:ring-[${colors.lightGreenBorder}] focus:outline-none mb-6 bg-transparent text-[${colors.charcoal}] placeholder-[${colors.graywarm}]`}
            />
            <motion.button
              variants={formItem}
              className={`w-full py-3 px-6 rounded-md font-bold text-lg bg-[${colors.navy}] text-[${colors.white}] shadow-md hover:opacity-90 transition duration-300`}
            >
              Send Request
            </motion.button>
          </motion.div>

          {/* Form 2: For General Query */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true, amount: 0.3 }}
            className="p-8 rounded-lg" // No explicit background, blends with page
          >
            <motion.h3
              variants={item}
              className={`text-2xl font-bold mb-6 text-[${colors.navy}]`}
            >
              For General Query
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <motion.input
                variants={formItem}
                type="text"
                placeholder="Your Name"
                className={`p-3 rounded-md border border-[${colors.lightGreenBorder}] focus:ring-2 focus:ring-[${colors.lightGreenBorder}] focus:outline-none bg-transparent text-[${colors.charcoal}] placeholder-[${colors.graywarm}]`}
              />
              <motion.input
                variants={formItem}
                type="email"
                placeholder="Your Email"
                className={`p-3 rounded-md border border-[${colors.lightGreenBorder}] focus:ring-2 focus:ring-[${colors.lightGreenBorder}] focus:outline-none bg-transparent text-[${colors.charcoal}] placeholder-[${colors.graywarm}]`}
              />
            </div>
            <motion.input
              variants={formItem}
              type="tel"
              placeholder="Your Mobile Number"
              className={`w-full p-3 rounded-md border border-[${colors.lightGreenBorder}] focus:ring-2 focus:ring-[${colors.lightGreenBorder}] focus:outline-none mb-4 bg-transparent text-[${colors.charcoal}] placeholder-[${colors.graywarm}]`}
            />
            <motion.textarea
              variants={formItem}
              placeholder="Message"
              rows="6"
              className={`w-full p-3 rounded-md border border-[${colors.lightGreenBorder}] focus:ring-2 focus:ring-[${colors.lightGreenBorder}] focus:outline-none mb-6 resize-y bg-transparent text-[${colors.charcoal}] placeholder-[${colors.graywarm}]`}
            ></motion.textarea>
            <motion.button
              variants={formItem}
              className={`w-full py-3 px-6 rounded-md font-bold text-lg bg-[${colors.goldenYellow}] text-[${colors.white}] shadow-md hover:opacity-90 transition duration-300`}
            >
              Send Request
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LaundryWalaContactForms;
