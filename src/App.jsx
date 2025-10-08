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
import Ourservice from "../src/Pages/Ourservice";
import About1 from "../src/Pages/service/Aboutservice";
import About2 from "../src/Pages/service/About2service";
import Whyus from "../src/Pages/service/whyus";
import Offer from "../src/Pages/service/Offer";
import Value from "../src/Pages/service/Delivery";
import Test from "../src/Pages/service/Test";
import Blog from "../src/Pages/service/blog";
import PriceHero from "../src/Pages/Price/Pricehero";
import PriceCount from "../src/Pages/Price/pricecount";
import PricePlan from "../src/Pages/Price/PricePlan";
import Policyhero from "../src/Pages/Policy/policyhero";
import PolicyAbout from "../src/Pages/Policy/PolicyAbout";
import Cta from "../src/Pages/Policy/Cta";
import Contactmap from "../src/Pages/Contact/contactmap";
import Contactform from "../src/Pages/Contact/form";
import Contact from "../src/Pages/Contact/myContact";
import BlogList from "../src/Pages/Blog/bloglist";

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
              <About2 setShowForm={setShowForm} /> <Eco />
              <CTA />
              {/*   <Testimonials /> */}
              <Test />
              <FAQ />
              <QuickService setShowForm={setShowForm} />
            </>
          }
        />
        <Route
          path="/ourservice"
          element={
            <>
              <About2 setShowForm={setShowForm} /> <Eco />
            </>
          }
        />
        <Route
          path="/About"
          element={
            <>
              <About setShowForm={setShowForm} />
            </>
          }
        />
        <Route
          path="/ecofriendly"
          element={
            <>
              <Eco />
            </>
          }
        />
        <Route
          path="/cta"
          element={
            <>
              <CTA />
            </>
          }
        />

        <Route path="/testimonial" element={<Test />} />
        <Route path="/faq" element={<FAQ />} />
        <Route
          path="/contact"
          element={
            <>
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
