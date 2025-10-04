import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Estreewala from "../assets/Estreewala.png";
import { MdShoppingBasket } from "react-icons/md";

const Navbar = ({ showForm, setShowForm }) => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Laundry Pickup Request:", formData);
    alert("Your pickup request has been sent ");
    setShowForm(false);
    setFormData({ name: "", phone: "", address: "", service: "", date: "" });
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
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
            <a href="#services" className="hover:text-[#6E5A4C] transition">
              Services
            </a>
            <a href="#eco" className="hover:text-[#6E5A4C] transition">
              Environment
            </a>
            <a href="#how" className="hover:text-[#6E5A4C] transition">
              How it works
            </a>
            <a href="#faq" className="hover:text-[#6E5A4C] transition">
              FAQ
            </a>
          </nav>

          <button
            onClick={() => setShowForm(true)}
            className="bg-[#2E2A53] text-[#F5F0E8] px-5 py-2 rounded-full hover:bg-[#1A1A1A] transition"
          >
            Book Pickup
          </button>

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

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t bg-offwhite">
            <div className="px-6 py-4 space-y-3">
              <a href="#services" className="block">
                Services
              </a>
              <a href="#eco" className="block">
                Environment
              </a>
              <a href="#how" className="block">
                How it works
              </a>
              <a href="#faq" className="block">
                FAQ
              </a>
              <button
                onClick={() => setShowForm(true)}
                className="w-full mt-2 bg-[#2E2A53] text-white py-2 rounded"
              >
                Book Pickup
              </button>
            </div>
          </div>
        )}
      </motion.header>

      {/* ===== BOOK PICKUP FORM MODAL ===== */}
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

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-4 py-2"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-4 py-2"
                />
                <textarea
                  name="address"
                  placeholder="Pickup Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full border rounded-md px-4 py-2"
                ></textarea>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
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
                  value={formData.date}
                  onChange={handleChange}
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
