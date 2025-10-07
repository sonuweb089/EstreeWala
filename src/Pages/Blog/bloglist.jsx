import React from "react";
import { motion } from "framer-motion";
import PolicyDown from "../../assets/policydown.jpg";
import PolicyHero from "../../assets/Policy.jpg";
import PriceHero from "../../assets/Pricehero.jpg";
import Blog from "../../assets/serAb.jpg";
import Blog1 from "../../assets/serAb1.jpg";
import Blog2 from "../../assets/serAb2.jpg";
import Blog3 from "../../assets/serAb3.jpg";
import Blog4 from "../../assets/serAb4.jpg";
import Blog5 from "../../assets/serAb5.jpg";
import Blog6 from "../../assets/Ct.jpg";
import Blog7 from "../../assets/Ct1.jpg";
import Blog8 from "../../assets/Ct2.jpg";
import Blog9 from "../../assets/Ct3.jpg";
import Blog10 from "../../assets/faq.jpg";
import Blog11 from "../../assets/faq1.jpg";
import Blog12 from "../../assets/faq2.jpg";

const colors = {
  taupe: "#6E5A4C",
  cream: "#E9DDC9",
  navy: "#2E2A53",
  charcoal: "#1A1A1A",
  graywarm: "#C9B9A5",
  offwhite: "#F5F0E8",
  white: "#FFFFFF",
  sidebarNavy: "#1D3557",
  accentPink: "#FF6B81",
};

// --- Framer Motion Animation Variants ---
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const LaundryWalaBlogList = () => {
  const mainArticles = [
    {
      image: PolicyDown,
      title: "How Often Should You Wash Bed Sheets? A Complete Hygiene Guide",
      date: "July 22, 2025",
    },
    {
      image: PolicyHero,
      title: "Is It Safe to Iron Linen After Dry Cleaning?",
      date: "July 15, 2025",
    },
    {
      image: PriceHero,
      title: "The Ultimate Guide to Commercial Laundry Machines",
      date: "July 01, 2025",
    },
    {
      image: Blog,
      title: "Top 5 Eco-Friendly Detergents for Sensitive Skin",
      date: "June 24, 2025",
    },
    {
      image: Blog1,
      title: "Laundry Sorting Made Simple: A Beginner’s Guide",
      date: "June 18, 2025",
    },
    {
      image: Blog2,
      title: "Dry Cleaning vs. Washing: What’s the Real Difference?",
      date: "June 10, 2025",
    },
    {
      image: Blog3,
      title: "Fabric Care 101: How to Keep Clothes Fresh Longer",
      date: "May 30, 2025",
    },
    {
      image: Blog4,
      title: "Perfect Press: 7 Ironing Tips You’ll Wish You Knew Sooner",
      date: "May 18, 2025",
    },
    {
      image: Blog5,
      title: "Removing Tough Stains: Professional Tricks Revealed",
      date: "May 10, 2025",
    },
    {
      image: Blog6,
      title: "10 Folding Hacks to Save Space and Time",
      date: "April 25, 2025",
    },
    {
      image: Blog7,
      title: "Why Laundry Pickup & Delivery Services Are Booming",
      date: "April 10, 2025",
    },
    {
      image: Blog8,
      title: "Smart Laundry Tech: How AI is Changing Cleaning Forever",
      date: "March 28, 2025",
    },
  ];

  const sidebarArticles = [
    {
      image: Blog9,
      title: "The Ultimate Guide to Removing Makeup Stains from Clothes",
      monthsAgo: 8,
    },
    {
      image: Blog10,
      title: "How to Use Vinegar for Laundry: 8 Benefits & Hacks",
      monthsAgo: 8,
    },
    {
      image: Blog11,
      title: "How to Clean Your Sneakers: Complete Guide",
      monthsAgo: 8,
    },
  ];

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.offwhite }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* --- MAIN BLOG SECTION --- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="lg:col-span-2 space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainArticles.slice(0, 12).map((article, index) => (
              <motion.div
                key={index}
                variants={item}
                className="rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl"
                style={{ backgroundColor: colors.white }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-3 transition duration-200"
                    style={{ color: colors.navy }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: `${colors.charcoal}b3` }}
                  >
                    Laundrywala •{" "}
                    <span style={{ color: colors.taupe }}>{article.date}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* LARGE CENTRAL ARTICLE */}
          <div className="grid grid-cols-1">
            <motion.div
              variants={item}
              className="rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl"
              style={{ backgroundColor: colors.white }}
            >
              <img
                src={mainArticles[2].image}
                alt={mainArticles[2].title}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3
                  className="text-2xl font-bold mb-3 transition duration-200"
                  style={{ color: colors.navy }}
                >
                  {mainArticles[2].title}
                </h3>
                <p
                  className="text-base"
                  style={{ color: `${colors.charcoal}b3` }}
                >
                  Laundrywala •{" "}
                  <span style={{ color: colors.taupe }}>
                    {mainArticles[2].date}
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- SIDEBAR --- */}
        <motion.aside
          initial="hidden"
          animate="visible"
          variants={item}
          className="rounded-xl shadow-lg h-fit"
        >
          <div
            className="p-6 rounded-t-xl"
            style={{ backgroundColor: colors.sidebarNavy }}
          >
            <h3
              className="text-xl font-bold uppercase"
              style={{ color: colors.white }}
            >
              Laundrywala Blogs
            </h3>
          </div>

          <div
            className="p-6 space-y-6"
            style={{ backgroundColor: colors.white }}
          >
            {sidebarArticles.map((article, index) => (
              <div
                key={index}
                className="flex space-x-4 border-b pb-4 last:border-b-0 last:pb-0"
                style={{ borderColor: `${colors.graywarm}66` }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                />
                <div>
                  <p
                    className="text-xs mb-1"
                    style={{ color: colors.accentPink }}
                  >
                    {article.monthsAgo} MONTHS AGO
                  </p>
                  <a
                    href="#"
                    className="text-base font-semibold leading-snug transition duration-200"
                    style={{ color: colors.navy }}
                  >
                    {article.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default LaundryWalaBlogList;
