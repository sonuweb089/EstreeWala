import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Estreewala from "../assets/Estreewala.webp";
import { MdShoppingBasket } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ showForm, setShowForm }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Services", path: "/ourservice" },
    { name: "Eco-Friendly", path: "/ecofriendly" },
    { name: "Testimonials", path: "/testimonial" },
    { name: "FAQ", path: "/faq" },

    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-offwhite/80 backdrop-blur-sm shadow-md"
      >
        <div className="container flex items-center justify-between py-4 px-4 md:px-10">
          <div className="flex items-center gap-3">
            <img
              src={Estreewala}
              alt="Estreewala Logo"
              className="w-10 h-10 rounded-md"
            />
            <span className="font-extrabold text-[#2E2A53] text-lg">
              Estree-Waala
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-[#2E2A53] font-medium">
            {navLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/" || location.pathname === "/home"
                  : location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition pb-1 ${
                    isActive
                      ? "border-b-2 border-[#2E2A53] text-[#2E2A53]"
                      : "hover:text-[#6E5A4C]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#2E2A53] text-[#F5F0E8] px-5 py-2 rounded-full hover:bg-[#1A1A1A] transition"
            >
              Book Pickup
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="px-3 py-2 border rounded-md"
            >
              Menu
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t bg-offwhite">
            <div className="px-6 py-4 space-y-3 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition pb-1 ${
                    location.pathname === link.path
                      ? "border-b-2 border-[#2E2A53] text-[#2E2A53]"
                      : "hover:text-[#6E5A4C]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={() => setShowForm(true)}
                className="w-full mt-2 bg-[#2E2A53] text-white py-2 rounded hover:bg-[#1A1A1A] transition"
              >
                Book Pickup
              </button>
            </div>
          </div>
        )}
      </motion.header>

      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative"
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
              >
                ✖
              </button>

              <h2 className="flex items-center justify-center gap-2 text-2xl font-bold text-[#2E2A53] mb-4">
                <MdShoppingBasket size={28} color="#C9B9A5" />
                <span>Book Laundry Pickup</span>
              </h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Your pickup request has been sent");
                  setShowForm(false);
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border rounded-md px-4 py-2"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full border rounded-md px-4 py-2"
                />
                <textarea
                  name="address"
                  placeholder="Pickup Address"
                  required
                  rows="3"
                  className="w-full border rounded-md px-4 py-2"
                />
                <select
                  name="service"
                  required
                  className="w-full border rounded-md px-4 py-2"
                >
                  <option value="">Select Service</option>
                  <option value="Wash & Fold">Wash & Fold</option>
                  <option value="Dry Cleaning">Dry Cleaning</option>
                  <option value="Ironing">Ironing</option>
                  <option value="Clothing Repair">Clothing Repair</option>
                </select>
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full border rounded-md px-4 py-2"
                />

                <button
                  type="submit"
                  className="w-full bg-[#2E2A53] text-white font-semibold py-2 rounded-md hover:bg-[#1A1A1A] transition"
                >
                  Send Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
