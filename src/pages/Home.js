import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import Welcome from "../components/Welcome";
import OurServices from "../components/OurServices";
import CurrentPromotions from "../components/CurrentPromotions";
import BrandGallery from "../components/BrandGallery";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import WhatsappChat from "../components/WhatsappChat";



const Home = () => {
  

  return (
    <div>
      <div id="headerSection">
      <WhatsappChat />
      <Navbar/>
      <Welcome/>
      <OurServices/>
      <CurrentPromotions/>
      <BrandGallery/>
      <AboutSection/>
      <Footer/>
      
      </div>
      
      
    </div>
  );
};

export default Home;
