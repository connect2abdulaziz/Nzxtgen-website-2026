import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import "./Home.css";
import AboutData from '../components/AboutData';

const AboutUs = () => {
  return (
    <div id='AboutUs'>
      <SEO 
        title="About NZXTGEN | Licensed Electrical & Smart Home Experts"
        description="Learn about NZXTGEN's licensed electricians, hands-on experience and commitment to safe, reliable electrical and smart home solutions."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/about-us' : undefined}
      />
      <LocalBusinessSchema />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <AboutData/>
      <Footer/>
    </div>
  );
};

export default AboutUs;
