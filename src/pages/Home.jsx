import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Footer from "../components/Footer";
import { FaPhoneAlt, FaUsers } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <h1 className="text-3xl">Home page</h1>
      <FaUsers className="text-3xl" />
      <FaPhoneAlt />
      {/* <Navbar />
      <Herosection />
      <Footer /> */}
    </>
  );
};

export default Home;
