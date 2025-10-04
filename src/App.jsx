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
import { useState } from "react";
export default function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="absolute inset-0 bg-gradient-to-b  from-[#F5F0E8] to-[#C9B9A5] opacity-80">
      <Navbar showForm={showForm} setShowForm={setShowForm} />
      <Hero setShowForm={setShowForm} />
      <Services></Services>
      <About setShowForm={setShowForm}></About>
      <HowItWorks></HowItWorks>
      <Eco></Eco>
      <CTA />
      <Testimonials />
      <FAQ />
      <QuickService setShowForm={setShowForm} />
      <Footer />
    </div>
  );
}
