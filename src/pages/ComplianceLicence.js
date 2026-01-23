import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ComingSoon from '../components/ComingSoon';

const ComplianceLicence = () => {
  return (
    <div id='ComplianceLicence'>
      <SEO 
        title="Compliance & Licence | NZXTGEN"
        description="Electrical compliance and licence information. Learn about our licensing, certifications, and compliance with Australian Standards."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/compliance-licence' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <ComingSoon 
        title="Compliance & Licence"
        description="We are currently building comprehensive information about compliance and licensing. This page will include details about our licences, certifications, and commitment to Australian Standards."
      />
      <Footer/>
    </div>
  );
};

export default ComplianceLicence;
