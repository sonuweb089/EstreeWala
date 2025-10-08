import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa";

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

const reviewItem = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, duration: 0.6 },
  },
};

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

  // Helper function to render stars using FaStar and FaRegStar
  const renderStars = (rating) => {
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={`star-${i}`} className="inline-block" />);
    }

    for (let i = rating; i < totalStars; i++) {
      stars.push(<FaRegStar key={`star-reg-${i}`} className="inline-block" />);
    }

    return <div className="text-xl space-x-0.5 text-[#FACC15]">{stars}</div>;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={headerItem}
            className="inline-block px-4 py-2 mb-3 bg-[#F5F0E8] text-[#6E5A4C] font-semibold tracking-wider uppercase mt-8 rounded-full shadow-md"
          >
            TESTIMONIALS
          </motion.p>
          <motion.h2
            variants={headerItem}
            className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight text-[#2E2A53]" // Replaced inline styles with text-navy / text-[#2E2A53]
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
            // Replaced inline styles with Tailwind classes
            className="font-bold py-1 border-b-2 border-[#6E5A4C] text-[#6E5A4C]"
          >
            All Reviews
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
              className="rounded-xl p-6 shadow-xl text-left flex flex-col h-full bg-white border border-[#C9B9A5]" // Replaced inline styles
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
                    className="font-bold text-base text-[#1A1A1A]" // Replaced inline styles
                  >
                    {review.name}
                  </p>
                  <p className="text-sm text-[#C9B9A5]">
                    {" "}
                    // Replaced inline styles
                    {review.time}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-3">{renderStars(review.rating)}</div>

              {/* Review Text */}
              <p
                className="text-base flex-grow mb-6 italic text-[#1A1A1A]" // Replaced inline styles
              >
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Footer: Posted on Google */}
              <div
                className="pt-4 border-t w-full border-[#C9B9A5]" // Replaced inline styles
              >
                <p
                  className="flex items-center text-sm font-semibold text-[#1A1A1A]" // Replaced inline styles
                >
                  <span className="text-xl mr-2">G</span> Posted on{" "}
                  <span className="ml-1 text-[#2E2A53]">
                    {" "}
                    // Replaced inline styles Google
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
