import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import Navbar from '../components/Navbar';
import "./FreeQuote.css"
import GetAQuote from '../components/GetAQuote';
import Footer from '../components/Footer';

const FreeQuote = () => {
  return (
    <div id="free-quote-page">
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
