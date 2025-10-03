import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Services from "./Component/Service";
import About from "./Component/About";
import HowItWorks from "./Component/HowItWorks";
import Eco from "./Component/Eco";
import Testimonials from "./Component/Testimonials";
import FAQ from "./Component/Faq";
import CTA from "./Component/Cta";
import QuickService from "./Component/QuickService";
import Footer from "./Component/footer";

export default function App() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E8] to-[#C9B9A5] opacity-80">
      <Navbar />
      <Hero />
      <Services></Services>
      <About></About>
      <HowItWorks></HowItWorks>
      <Eco></Eco>
      <CTA />
      <Testimonials />
      <FAQ />
      <QuickService />
      <Footer />
    </div>
  );
}
