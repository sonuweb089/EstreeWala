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
  yellow: "#FACC15", // For stars
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

// Child variant for smooth fade-in-up (used on each review card)
const reviewItem = {
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

const LaundryWalaTestimonials = () => {
  // Array of sample review data
  const reviews = [
    {
      name: "Sarah M.",
      time: "1 month ago",
      text: "Fast, reliable, and professional! My clothes were fixed the same day, and now they're perfectly clean. Highly recommend their service!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Michael T.",
      time: "14 days ago",
      text: "I was in a rush, and they arrived quickly to pick up my laundry. Their expertise saved me from a major headache. Will definitely use them again.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
      name: "David R.",
      time: "24 days ago",
      text: "My garments were handled with care and returned perfectly folded. Fast, reliable, and professional service every time. They're my new go-to!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=12",
    },
  ];

  // Helper function to render stars
  const renderStars = (rating) => {
    return (
      <div className="text-xl" style={{ color: colors.yellow }}>
        {"★".repeat(rating)}
        {"★".repeat(5 - rating)}
      </div>
    );
  };

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.offwhite }}
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
            TESTIMONIALS
          </motion.p>
          <motion.h2
            variants={headerItem}
            className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight"
            style={{ color: colors.navy }}
          >
            Satisfied customers sing our praises
          </motion.h2>
        </motion.div>

        {/* Tab/Filter Area */}
        <motion.div
          variants={headerItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <button
            className="font-bold py-1 border-b-2"
            style={{ borderColor: colors.taupe, color: colors.taupe }}
          >
            All Reviews
          </button>
          <button
            className="font-bold py-1 opacity-60 transition duration-300 hover:opacity-100"
            style={{ color: colors.charcoal }}
          >
            Google
          </button>
          <button
            className="font-bold py-1 opacity-60 transition duration-300 hover:opacity-100"
            style={{ color: colors.charcoal }}
          >
            Yelp
          </button>
        </motion.div>

        {/* Review Cards Container (Animated) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={reviewItem}
              className="rounded-xl p-6 shadow-xl text-left flex flex-col h-full"
              style={{
                backgroundColor: colors.white,
                border: `1px solid ${colors.graywarm}`,
              }}
            >
              {/* Header: Name and Time */}
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-3 object-cover"
                />
                <div>
                  <p
                    className="font-bold text-base"
                    style={{ color: colors.charcoal }}
                  >
                    {review.name}
                  </p>
                  <p className="text-sm" style={{ color: colors.graywarm }}>
                    {review.time}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-3">{renderStars(review.rating)}</div>

              {/* Review Text */}
              <p
                className="text-base flex-grow mb-6 italic"
                style={{ color: colors.charcoal }}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Footer: Posted on Google */}
              <div
                className="pt-4 border-t w-full"
                style={{ borderColor: colors.graywarm }}
              >
                <p
                  className="flex items-center text-sm font-semibold"
                  style={{ color: colors.charcoal }}
                >
                  <span className="text-xl mr-2">G</span> Posted on{" "}
                  <span className="ml-1" style={{ color: colors.navy }}>
                    Google
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LaundryWalaTestimonials;
