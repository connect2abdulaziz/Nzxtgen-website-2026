import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./Home.css";
import AboutData from '../components/AboutData';

const AboutUs = () => {
  return (
    <div id='AboutUs'>
      <WhatsappChat />
      <Navbar/>
      <AboutData/>
      <Footer/>
    </div>
  );
};

export default AboutUs;
