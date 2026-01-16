import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import "./Home.css";
import ServiceArea from '../components/ServiceArea';
import EnquiryForm from '../components/EnquiryForm';
import CityNavigation from '../components/CityNavigation';

const AreaWeService = () => {
  return (
    <div id='AreaWeService'>
      <SEO 
        title="Areas We Service | Electrical Services Sydney South-West | NZXTGEN"
        description="NZXTGEN provides licensed electrical, smart home and security services across Sydney's south-west including Condell Park and surrounding suburbs. Get a free quote today."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/areas-we-service' : undefined}
      />
      <LocalBusinessSchema />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <ServiceArea/>
      <EnquiryForm/>
      <CityNavigation/>
      
      <Footer/>
    </div>
  );
};

export default AreaWeService;
