import React from "react";
import { motion } from "framer-motion";

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const LaundryWalaPolicyContentInline = () => {
  const colors = {
    taupe: "#6E5A4C",
    navy: "#2E2A53",
    charcoal: "#1A1A1A",
    graywarm: "#C9B9A5",
    offwhite: "#F5F0E8",
    white: "#FFFFFF",
  };

  const policySections = [
    {
      title: "Loss & Damage",
      content:
        "In the unlikely event whereby loss or damage has occurred to a garment, the following protocols should be followed. Please notify us within 48 hours of collection for claims processing.",
    },
    {
      title: "How to communicate issues?",
      content:
        "You can report issues to one of our in-store teams; however, please note all matters will subsequently be passed onto our head office. Unfortunately, we are unable to process claims 48 hours after collection. We appreciate that due to an extensive customer base, things may go wrong. Your feedback and cooperation is requested in trying to put things right and we aim to do this quickly and efficiently.",
    },
    {
      title: "Responsibility",
      content:
        "You can report issues to one of our in-store teams; however, please note all matters will subsequently be passed onto our head office. Unfortunately, we are unable to process claims 48 hours after collection. We appreciate that due to an extensive customer base, things may go wrong. Your feedback and cooperation is requested in trying to put things right and we aim to do this quickly and efficiently.",
    },
    {
      title: "Service Exclusions",
      content:
        "The following service exclusions apply to specific garment types and conditions. In the unlikely event whereby loss or damage has occurred to a garment, the following protocols should be followed.",
    },
  ];

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-[${colors.offwhite}]`}>
      <div className="max-w-7xl mx-auto">
        {/* Policy Header / Tagline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12"
        >
          <motion.p
            variants={item}
            className={`text-sm font-semibold uppercase tracking-widest mb-2 text-[${colors.taupe}]`}
          >
            OUR POLICY
          </motion.p>
          <motion.h2
            variants={item}
            className={`text-4xl lg:text-5xl font-extrabold leading-tight text-[${colors.navy}]`}
          >
            A message to our customers..
          </motion.h2>
        </motion.div>

        {/* Policy Content Grid (Two Columns) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
        >
          {policySections.map((section, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`text-left pb-4 border-b border-[${colors.graywarm}]`}
            >
              <h3 className={`text-2xl font-bold mb-3 text-[${colors.navy}]`}>
                {section.title}
              </h3>
              <p className={`text-base text-[${colors.charcoal}]`}>
                {section.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA / Contact Footer */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className={`mt-20 pt-10 border-t border-[${colors.taupe}] text-center`}
        >
          <p className={`text-lg font-semibold mb-4 text-[${colors.charcoal}]`}>
            Have more questions about our policies or services?
          </p>
          <a
            href="/contact"
            className={`font-bold py-3 px-8 rounded-md transition duration-300 text-lg shadow-lg hover:opacity-90 bg-[${colors.taupe}] text-[${colors.white}]`}
          >
            Contact Our Support Team →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LaundryWalaPolicyContentInline;
