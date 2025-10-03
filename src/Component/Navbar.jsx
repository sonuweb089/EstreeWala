import React, { useState } from "react";
import { motion } from "framer-motion";
import Estreewala from "../assets/Estreewala.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-offwhite/80 backdrop-blur-sm"
    >
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-taupe text-offwhite flex items-center justify-center font-bold">
            <img src={Estreewala} alt="" />
          </div>
          <span className="font-extrabold">Estree-Waala</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#eco" className="hover:underline">
            Environment
          </a>
          <a href="#how" className="hover:underline">
            How it works
          </a>
          <a href="#faq" className="hover:underline">
            FAQ
          </a>
        </nav>
        <button className="bg-navy text-offwhite px-4 py-2 rounded-full">
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
            <button className="w-full mt-2 bg-navy text-offwhite py-2 rounded">
              Book Pickup
            </button>
          </div>
        </div>
      )}
    </motion.header>
  );
};
export default Navbar;
