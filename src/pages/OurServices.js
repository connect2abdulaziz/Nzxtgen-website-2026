import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DesWithTitle from '../components/DesWithTitle';
import "./OurServices.css";
import ResponsiveCardSlider from '../components/ResponsiveCardSlider';




const OurServices = () => {
  return (
    <div id='OurServices'>
      <WhatsappChat />
      <Navbar/>
      <div id="space"></div>
      <DesWithTitle 
        
        title="Our Services" 
          description="At NZXTGEN, we specialize in delivering innovative electrical solutions tailored to your unique needs. Whether you're looking for smart home installations, custom lighting designs, or expert electrical maintenance, our team is committed to providing high-quality, reliable services. With a focus on both functionality and style, we ensure every project meets the highest standards, transforming your space with precision and care"
      />
      <ResponsiveCardSlider/>
      
     
      <Footer/>
    </div>
  );
};

export default OurServices;
