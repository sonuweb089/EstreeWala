import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Faq from "../assets/faq.jpg";
import Faq1 from "../assets/faq1.jpg";
import Faq2 from "../assets/faq2.jpg";

const textColumnVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.17, 0.55, 0.55, 1],
      staggerChildren: 0.15,
    },
  },
};

const imageColumnVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.17, 0.55, 0.55, 1],
      staggerChildren: 0.2,
      delay: 0.2,
    },
  },
};

const contentVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },

  expanded: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

// ------------------------------

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Are you insured against damage?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      question: "Can I trust you with my clothes?",
      answer:
        "Yes, our team consists of experienced professionals who handle all garments with the utmost care, ensuring the highest quality standards.",
    },
    {
      question: "How does the whole process work?",
      answer:
        "You place an order online, we pick up your clothes, professionally clean them, and deliver them back to your door.",
    },
    {
      question: "How long does cleaning take?",
      answer:
        "Our standard turnaround time is 24 hours for most services, though specialized items may take slightly longer.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-[#F5F0E8] to-[#C9B9A5] py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          className="text-left"
          variants={textColumnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-[#2E2A53] font-semibold tracking-wider uppercase mb-3"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            FAQ
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-[#2E2A53] mb-6 leading-tight"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.1 } },
            }}
          >
            Popular Questions
          </motion.h2>
          <motion.p
            className="text-lg text-[#6E5A4C] mb-12"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.2 } },
            }}
          >
            You can use our services in any convenient way – the choice is
            yours.
          </motion.p>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="border-b border-[#C9B9A5] pb-4">
                <button
                  className="w-full text-left py-2 flex justify-between items-center group"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3
                    className={`text-xl font-semibold text-[#2E2A53] ${
                      index === 0
                        ? "text-[#2E2A53] border-b-2 border-[#2E2A53] pb-1"
                        : ""
                    } group-hover:text-[#2E2A53] transition-colors duration-300`}
                  >
                    {item.question}
                  </h3>
                  <span
                    className={`text-2xl text-[#2E2A53] transition-transform duration-300 ${
                      openIndex === index ? "rotate-45 text-[#2E2A53]" : ""
                    }`}
                  >
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      variants={contentVariants}
                      className="overflow-hidden"
                    >
                      <p className="text-base text-[#6E5A4C] pt-2 pb-4">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6 pt-12"
          variants={imageColumnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-xl w-full h-[250px]"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <img
              src={Faq}
              alt="Stack of towels"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-xl w-full h-[250px]"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.2 } },
            }}
          >
            <img
              src={Faq1}
              alt="Woman at dry cleaning counter"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;
