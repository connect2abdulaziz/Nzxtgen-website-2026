import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ComingSoon from '../components/ComingSoon';

const EmergencyElectrician = () => {
  return (
    <div id='EmergencyElectrician'>
      <SEO 
        title="Emergency Electrician Services | NZXTGEN"
        description="24/7 emergency electrician services. Fast response for urgent electrical issues, faults, and repairs across Sydney's south-west."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/emergency-electrician' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <ComingSoon 
        title="Emergency Electrician Services"
        description="We are currently building comprehensive information about our emergency electrician services. This page will include details about 24/7 availability, response times, and emergency electrical repairs."
      />
      <Footer/>
    </div>
  );
};

export default EmergencyElectrician;
