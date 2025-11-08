import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AITools from "../components/AITools";
import Testimonial from "../components/Testimonial";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AITools />
      <Testimonial />
      <PricingSection />
      <Footer />
    </>
  );
};

export default Home;
