import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#F5F0E8] to-[#C9B9A5] text-[#2E2A53] pt-12 pb-6 font-sans border border-gray-700">
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex space-x-4 text-xl mb-4">
              <a href="#" className="hover:text-blue-500">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-sky-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-red-500">
                <FaYoutube />
              </a>
            </div>
            <p className="text-[#2E2A53] text-sm">
              Your expert ironing and pressing service. Affordable, high-quality
              care with convenience and efficiency.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Our Services</h3>
            <ul className="space-y-2 text-[#2E2A53] text-sm">
              <li>
                <a href="#" className="hover:text-black">
                  Ironing & Pressing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Dry Cleaning (Soon)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Express Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Corporate Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Home Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">About Us</h3>
            <ul className="space-y-2 text-[#2E2A53] text-sm">
              <li>
                <a href="#" className="hover:text-black">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Franchise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-[#2E2A53] text-sm">📞 6789087656</p>
            <p className="mt-3 text-[#2E2A53] text-sm">
              <span className="font-semibold text-[#2E2A53]">Office:</span>
              <br />
              Estreewala HQ, A-4, Sector - 3, Noida, UP 201301
            </p>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#2E2A53]">
          <div className="flex space-x-4 mb-3 md:mb-0">
            <a href="#" className="hover:text-black">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black">
              Terms & Conditions
            </a>
          </div>
          <p>© 2025 Estreewala Solutions Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
