import { motion } from "framer-motion";

const Hero = ({ setShowForm }) => {
  return (
    <section className="bg-gradient-to-b from-[#F5F0E8] to-[#C9B9A5] text-center py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full"
      >
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-snug text-[#2E2A53] tracking-tight">
            Dry Cleaning & Laundry Experts
          </h2>

          <p className="mt-6 text-lg text-[#1A1A1A]">
            We deliver your items cleaned within 24 hours and at the time
            required.
          </p>

          <div className="mt-10">
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#2E2A53] text-[#F5F0E8] px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[#1E9E8C] transition-all duration-300 transform hover:scale-105"
            >
              Order now
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
