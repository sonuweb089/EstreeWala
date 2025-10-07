import React from "react";
import ServiceHero from "../assets/servicehero.jpg";
import { Link } from "react-router-dom";
const LaundryWalaHeroInline = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-[600px] p-4 sm:p-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${ServiceHero})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full max-w-6xl">
        <div className="max-w-xl mb-24 text-white">
          <p className="text-sm font-bold tracking-widest mb-1 text-gray-100">
            FRESH & RELIABLE
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-4">
            Impeccable clean for your perfect clothes.
          </h1>

          <div className="space-y-2 mb-6">
            <p className="flex items-center text-lg">
              <span className="mr-2 font-extrabold text-yellow-500">✔</span>
              Reliable Laundry Solutions Guaranteed
            </p>
            <p className="flex items-center text-lg">
              <span className="mr-2 font-extrabold text-yellow-500">✔</span>
              Fast Pickup, Affordable Prices
            </p>
          </div>

          <button className="font-bold py-4 px-8 rounded-md shadow-lg text-lg bg-[#6E5A4C] hover:bg-opacity-80 transition duration-300">
            <Link
              to="/ourservice"
              className="font-bold py-4 px-8 rounded-md shadow-lg text-lg bg-[#6E5A4C] hover:bg-opacity-80 transition duration-300"
            >
              VIEW OUR SERVICES →
            </Link>
          </button>

          {/* Review Badge */}
          <div className="mt-6 flex items-center p-3 rounded-md w-fit shadow-lg bg-gray-900/90">
            <p className="text-sm mr-2">Google Rating</p>
            <div className="text-xl mr-2 text-yellow-400">★★★★★</div>
            <p className="text-xl font-bold">4.8</p>
          </div>
        </div>
      </div>

      {/* Estimate Form (shown only on md+) */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 transform translate-y-1/2 px-4 sm:px-8">
        <div className="p-6 sm:p-8 rounded-lg shadow-2xl w-full max-w-6xl mx-auto bg-white">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            Get a quick estimate
          </h2>

          <form className="flex flex-col md:flex-row gap-4 md:gap-6 items-end">
            {["NAME", "PHONE", "EMAIL", "Select Service"].map(
              (label, index) => (
                <div key={index} className="flex-1 w-full">
                  <label className="text-xs font-bold uppercase block mb-1 text-[#6E5A4C]">
                    {label}
                  </label>
                  {label === "Select Service" ? (
                    <select className="w-full p-3 border rounded-md appearance-none focus:ring-1 outline-none border-[#C9B9A5] bg-[#F5F0E8] text-[#1A1A1A]">
                      <option value="">Select your service</option>
                      <option value="wash-fold">Wash & Fold</option>
                      <option value="dry-clean">Dry Cleaning</option>
                      <option value="ironing">Ironing Only</option>
                    </select>
                  ) : (
                    <input
                      type={label.toLowerCase()}
                      placeholder={`Enter your ${label.toLowerCase()}`}
                      className="w-full p-3 border rounded-md focus:ring-1 outline-none border-[#C9B9A5] bg-[#F5F0E8] text-[#1A1A1A]"
                    />
                  )}
                </div>
              )
            )}

            <button className="w-full md:w-auto font-bold py-3 px-8 rounded-md transition duration-300 flex-shrink-0 bg-[#6E5A4C] text-white hover:bg-opacity-80">
              SUBMIT →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LaundryWalaHeroInline;
