import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import TermsAndConditions from '../components/TermsAndConditions';

const Termspage = () => {
  return (
    <div id='SmartHome'>
      <SEO 
        title="Terms and Conditions | NZXTGEN Electrical Services"
        description="Read NZXTGEN's terms and conditions for electrical, smart home and security services. Understand our service terms, warranties and customer responsibilities."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/terms-and-conditions' : undefined}
      />
      <WhatsappChat />
      <Navbar/>
      <TermsAndConditions/>
      <Footer/>
    </div>
  );
};

export default Termspage;
