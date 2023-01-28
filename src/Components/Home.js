import React from "react";
import Header from "../Header/Header";
import Navbar from "../Header/Navbar";
import Properties from "../PropertySection/Properties";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Properties />
      <Footer />
    </div>
  );
}

export default Home;
