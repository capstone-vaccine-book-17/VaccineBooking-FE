import React from "react";
import About from "../components/About";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Team from "../components/Team";

const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Team />
      <Footer />
    </main>
  );
};

export default LandingPage;
