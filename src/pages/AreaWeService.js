import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./Home.css";
import ServiceArea from '../components/ServiceArea';
import EnquiryForm from '../components/EnquiryForm';
import CityNavigation from '../components/CityNavigation';


const AreaWeService = () => {
  return (
    <div id='AreaWeService'>
      <WhatsappChat />
      <Navbar/>
      <ServiceArea/>
      <EnquiryForm/>
      <CityNavigation/>
      
      <Footer/>
    </div>
  );
};

export default AreaWeService;
