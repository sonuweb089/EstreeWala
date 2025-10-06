import React from "react";
import { motion } from "framer-motion";

const colors = {
  taupe: "#6E5A4C",
  cream: "#E9DDC9",
  navy: "#2E2A53",
  charcoal: "#1A1A1A",
  graywarm: "#C9B9A5",
  offwhite: "#F5F0E8",
  white: "#FFFFFF",
  // Using Taupe for the date tag background color
  dateAccent: "#6E5A4C",
};

// --- Framer Motion Animation Variants ---

// Parent container for staggered appearance
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between card animations
      delayChildren: 0.2, // Initial delay
    },
  },
};

// Child variant for smooth fade-in-up (used on each blog card)
const blogItem = {
  hidden: { opacity: 0, y: 30, opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, duration: 0.6 },
  },
};

// Header text animation
const headerItem = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const LaundryWalaBlogTips = () => {
  // Array of sample blog data
  const articles = [
    {
      date: "10 MAR",
      category: "WASH CARE",
      title: "5 Tips to Keep Your Whites Bright",
      summary:
        "Learn the top maintenance hacks to ensure your white garments stay crisp and avoid yellowing over time.",
      image:
        "https://via.placeholder.com/600x400/C9B9A5/FFFFFF?text=White+Laundry+Tips",
    },
    {
      date: "16 JUN",
      category: "STAIN REMOVAL",
      title: "How to Choose the Right Detergent",
      summary:
        "A comprehensive guide to selecting the perfect detergent based on your fabric type and specific cleaning needs.",
      image:
        "https://via.placeholder.com/600x400/6E5A4C/FFFFFF?text=Detergent+Guide",
    },
    {
      date: "06 SEP",
      category: "DELIVERY",
      title: "Signs You Need Professional Help",
      summary:
        "Is your wardrobe acting up? Here's how to spot the warning signs before things get worse—and call us in.",
      image:
        "https://via.placeholder.com/600x400/2E2A53/FFFFFF?text=Professional+Service",
    },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.white }} // Using white for maximum contrast
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Text (Animated) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={headerItem}
            className="text-sm font-semibold uppercase tracking-widest mb-2"
            style={{ color: colors.taupe }}
          >
            BLOGS
          </motion.p>
          <motion.h2
            variants={headerItem}
            className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"
            style={{ color: colors.navy }}
          >
            Pro Tips for Your Laundry
          </motion.h2>
          <motion.p
            variants={headerItem}
            className="text-lg mb-12 max-w-3xl mx-auto"
            style={{ color: colors.charcoal }}
          >
            Dive into our collection of articles packed with insights, tips, and
            trends to keep you informed and inspired about garment care.
          </motion.p>
        </motion.div>

        {/* Blog Cards Container (Animated) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              variants={blogItem}
              className="text-left flex flex-col h-full group"
            >
              {/* Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
                />
                {/* Date Tag */}
                <div
                  className="absolute top-0 left-0 p-3 rounded-br-lg font-bold text-center leading-none"
                  style={{
                    backgroundColor: colors.dateAccent,
                    color: colors.offwhite,
                  }}
                >
                  {article.date}
                </div>
              </div>

              {/* Category */}
              <p
                className="text-sm font-semibold uppercase mb-1"
                style={{ color: colors.taupe }}
              >
                {article.category}
              </p>

              {/* Title */}
              <h3
                className="text-xl font-bold mb-3 transition duration-300 group-hover:underline"
                style={{ color: colors.navy }}
              >
                {article.title}
              </h3>

              {/* Summary */}
              <p
                className="text-base flex-grow mb-4"
                style={{ color: colors.charcoal }}
              >
                {article.summary}
              </p>

              {/* Learn More Link */}
              <a
                href="#"
                className="font-bold flex items-center w-fit transition duration-300"
                style={{ color: colors.taupe }}
              >
                LEARN MORE →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LaundryWalaBlogTips;
