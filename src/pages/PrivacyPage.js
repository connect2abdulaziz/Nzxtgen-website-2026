import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import PrivacyPolicy from '../components/PrivacyPolicy';








const Privacypage = () => {
  return (
    <div id='SmartHome'>
      <SEO 
        title="Privacy Policy | NZXTGEN Electrical Services"
        description="Read NZXTGEN's privacy policy. Learn how we collect, use and protect your personal information when you use our electrical and smart home services."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/privacy-policy' : undefined}
      />
      <WhatsappChat />
      <Navbar/>
      <PrivacyPolicy/>
      <Footer/>
    </div>
  );
};

export default Privacypage;
