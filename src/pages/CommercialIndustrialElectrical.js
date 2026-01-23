import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ComingSoon from '../components/ComingSoon';

const CommercialIndustrialElectrical = () => {
  return (
    <div id='CommercialIndustrialElectrical'>
      <SEO 
        title="Commercial & Industrial Electrical Services | NZXTGEN"
        description="Professional commercial and industrial electrical services. Licensed electricians for businesses and industrial facilities."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/commercial-industrial-electrical' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <ComingSoon 
        title="Commercial & Industrial Electrical Services"
        description="We are currently building comprehensive information about our commercial and industrial electrical services. This page will include details about business electrical installations, maintenance, and compliance services."
      />
      <Footer/>
    </div>
  );
};

export default CommercialIndustrialElectrical;
