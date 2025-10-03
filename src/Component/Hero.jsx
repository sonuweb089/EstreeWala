import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#F5F0E8] to-[#C9B9A5] text-center py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full "
      >
        <div className="relative z-10 max-w-5xl mx-auto px-13">
          <h2 className="text-5xl md:text-8xl font-bold leading-snug text-[#2E2A53]">
            Dry <span className="text-[#6E5A4C]">Cleaning</span> & <br />
            Laundry Experts
          </h2>

          <p className="mt-6 text-lg text-[#1A1A1A]">
            We deliver your items cleaned within 24 hours and at the time
            required.
          </p>

          <div className="mt-10">
            <button className="bg-[#6E5A4C] text-[#F5F0E8] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#2E2A53] transition">
              Order Now
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;
