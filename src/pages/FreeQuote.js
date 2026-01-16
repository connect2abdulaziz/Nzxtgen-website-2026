import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';
import "./FreeQuote.css"
import GetAQuote from '../components/GetAQuote';
import Footer from '../components/Footer';

const FreeQuote = () => {
  return (
    <div id="free-quote-page">
      <SEO 
        title="Free Online Quote | Electrical & Smart Home Services | NZXTGEN"
        description="Get a free online quote for electrical, smart home, security and data services. Licensed professionals serving Sydney's south-west. Request your quote today."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/free-quote' : undefined}
      />
      <div>
        <WhatsappChat />
        <Navbar/>
        <GetAQuote/>
        <Footer/>
      </div>
    </div>
  );
};

export default FreeQuote;
