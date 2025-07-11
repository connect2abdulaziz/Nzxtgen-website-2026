import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SMDescription from '../components/SMDescription';
import SMServices from '../components/SMServices';







const SmartHome = () => {
  return (
    <div id='SmartHome' className='overflow-hidden'>
      <WhatsappChat />
      <Navbar/>
      
      <SMDescription/>
      <SMServices/>
      
      
     
      <Footer/>
    </div>
  );
};

export default SmartHome;
