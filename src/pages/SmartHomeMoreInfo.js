import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SMDescription from '../components/SMDescription';
import SmartHomeMoreInfoContent from '../components/SmartHomeMoreInfoContent';

const SmartHomeMoreInfo = () => {
  return (
    <div id='SmartHomeMoreInfo' className='overflow-hidden'>
      <SEO 
        title="Smart Home Installation - More Info | NZXTGEN"
        description="Detailed information about smart home installation, automation systems, local and cloud-based solutions, and FAQs by NZXTGEN."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/smart-home-more-info' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <SMDescription 
        title="Smart Home - More Information"
        subtitle="Deeper Insights into Smart Home Technology"
        description="Explore comprehensive details about smart home installation, system architecture, and implementation strategies. Learn about local and cloud-based solutions, advanced controls, and how to determine if smart home automation is right for your property. Our detailed guide covers everything from system integration to long-term maintenance considerations."
      />
      <SmartHomeMoreInfoContent/>
      <Footer/>
    </div>
  );
};

export default SmartHomeMoreInfo;
