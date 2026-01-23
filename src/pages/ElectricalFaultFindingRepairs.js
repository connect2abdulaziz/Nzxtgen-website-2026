import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ComingSoon from '../components/ComingSoon';

const ElectricalFaultFindingRepairs = () => {
  return (
    <div id='ElectricalFaultFindingRepairs'>
      <SEO 
        title="Electrical Fault Finding & Repairs | NZXTGEN"
        description="Professional electrical fault finding and repair services. Expert diagnosis and repair of electrical issues in homes and businesses."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/electrical-fault-finding-repairs' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <ComingSoon 
        title="Electrical Fault Finding & Repairs"
        description="We are currently building comprehensive information about our electrical fault finding and repair services. This page will include details about diagnostic services, common electrical issues, and repair solutions."
      />
      <Footer/>
    </div>
  );
};

export default ElectricalFaultFindingRepairs;
