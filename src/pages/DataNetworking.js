import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import DataNetworkingDescription from '../components/DataNetworkingDescription';
import DataNetworkingContent from '../components/DataNetworkingContent';

const DataNetworking = () => {
  return (
    <div id='DataNetworking' className='overflow-hidden'>
      <SEO 
        title="Data & Networking Services | Structured Cabling & Network Infrastructure | NZXTGEN"
        description="Professional data and networking services including structured cabling, data points, patch panels, and network infrastructure. Reliable connectivity solutions by NZXTGEN."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/data-networking' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <DataNetworkingDescription/>
      <DataNetworkingContent/>
      <Footer/>
    </div>
  );
};

export default DataNetworking;
