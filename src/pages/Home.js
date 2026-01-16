import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import SEO from "../components/SEO";
import LocalBusinessSchema from "../components/LocalBusinessSchema";
import Welcome from "../components/Welcome";
import HomeIntro from "../components/HomeIntro";
import OurServices from "../components/OurServices";
import CurrentPromotions from "../components/CurrentPromotions";
import BrandGallery from "../components/BrandGallery";
import AboutSection from "../components/AboutSection";
import HomeFAQs from "../components/HomeFAQs";
import HomeServiceArea from "../components/HomeServiceArea";
import Footer from "../components/Footer";
import WhatsappChat from "../components/WhatsappChat";
import MobileCallButton from "../components/MobileCallButton";

const Home = () => {
  return (
    <div>
      <SEO 
        title="Licensed Electricians & Smart Home Experts | NZXTGEN"
        description="NZXTGEN provides licensed electrical, smart home, security and data services for homes and small businesses across south-west Sydney. Get a free quote today."
        canonical={typeof window !== 'undefined' ? window.location.origin : undefined}
      />
      <LocalBusinessSchema />
      <div id="headerSection">
        <WhatsappChat />
        <MobileCallButton />
        <Navbar/>
        <Welcome/>
        <HomeIntro/>
        <OurServices/>
        <CurrentPromotions/>
        <BrandGallery/>
        <AboutSection/>
        <HomeFAQs/>
        <HomeServiceArea/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
