import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Footer from "../components/Footer";

const Home = ({ title }) => {
  return (
    <>
      <h1 className="text-3xl">{title}</h1>
      {/* <Navbar />
      <Herosection />
      <Footer /> */}
    </>
  );
};

export default Home;
