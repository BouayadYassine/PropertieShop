import React from "react";
import Header from "../Header/Header";
import Navbar from "../Header/Navbar";
import Properties from "../PropertySection/Properties";
import Footer from "../Footer/Footer";
import Features from "../Features/Features";
import Testimonials from "../TestimonialsSection/Testimonials";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Properties />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
