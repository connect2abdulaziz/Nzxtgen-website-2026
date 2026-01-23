import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ComingSoon from '../components/ComingSoon';

const ComplianceLicensing = () => {
  return (
    <div id='ComplianceLicensing'>
      <SEO 
        title="Compliance & Licensing | NZXTGEN"
        description="Electrical compliance and licensing services. Ensuring all electrical work meets Australian Standards and regulatory requirements."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/compliance-licensing' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <ComingSoon 
        title="Compliance & Licensing"
        description="We are currently building comprehensive information about our compliance and licensing services. This page will include details about electrical compliance, certifications, and regulatory requirements."
      />
      <Footer/>
    </div>
  );
};

export default ComplianceLicensing;
