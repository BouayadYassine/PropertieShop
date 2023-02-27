import React from "react";
import Header from "../Header/Header";
import Navbar from "../Header/Navbar";
import Properties from "../PropertySection/Properties";
import Footer from "../Footer/Footer";
import Features from "../Features/Features";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Properties />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;
