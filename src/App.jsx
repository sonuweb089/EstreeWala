import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/footer";
import Hero from "./Component/Hero";
import Services from "./Component/Service";
import About from "./Component/About";
import HowItWorks from "./Component/HowItWorks";
import Eco from "./Component/Eco";
import Testimonials from "./Component/Testimonials";
import FAQ from "./Component/Faq";
import CTA from "./Component/Cta";
import QuickService from "./Component/QuickService";
import { Routes, Route } from "react-router-dom";
import Ourservice from "../Pages/Ourservice";
import About1 from "../Pages/service/Aboutservice";
import About2 from "../Pages/service/About2service";
import Whyus from "../Pages/service/whyus";
import Offer from "../Pages/service/Offer";
import Value from "../Pages/service/Delivery";
import Test from "../Pages/service/Test";
import Blog from "../Pages/service/blog";

export default function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E8] to-[#C9B9A5] opacity-80">
      {/* Navbar always visible */}
      <Navbar showForm={showForm} setShowForm={setShowForm} />

      {/* Routes for page-specific content */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero setShowForm={setShowForm} />
              <Services />
              <About setShowForm={setShowForm} />
              <HowItWorks />
              <Eco />
              <CTA />
              <Testimonials />
              <FAQ />
              <QuickService setShowForm={setShowForm} />
            </>
          }
        />
        <Route
          path="/ourservice"
          element={
            <>
              <Ourservice /> <About1 />
              <About2 /> <Whyus /> <Offer />
              <Value /> <Test /> <Blog />{" "}
              <QuickService setShowForm={setShowForm} />
            </>
          }
        />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}
