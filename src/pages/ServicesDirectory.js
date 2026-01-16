import React from 'react';
import { Link } from 'react-router-dom';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import './ServicesDirectory.css';

const ServicesDirectory = () => {
  const services = [
    {
      title: 'Electrical Services',
      description: 'We provide reliable electrical services covering new installations, upgrades and ongoing maintenance for residential and small commercial properties. This includes lighting, power points, switches, ceiling fans, smoke alarms and appliance connections, all completed to current Australian Standards. We also handle fault finding and preventative maintenance to ensure your electrical systems remain safe, efficient, and compliant.',
      link: '/electrical-services',
      linkText: 'View Electrical Services'
    },
    {
      title: 'Smart Home Solutions',
      description: 'Our smart home solutions are designed to improve convenience, control and energy efficiency without adding unnecessary complexity. We install smart lighting, switches, sensors, voice control systems, and central touch panels that allow you to manage your home from a smartphone or tablet. Each system is tailored to suit your lifestyle, with intuitive controls that are easy to use and expand over time.',
      link: '/smart-home',
      linkText: 'View Smart Home Services'
    },
    {
      title: 'Security Systems',
      description: 'We design and install integrated security systems that help protect your property and provide peace of mind. Our services include CCTV cameras, alarms, intercoms, smart door locks and smoke detectors, all configured to work together through a single platform where possible. Remote access and monitoring allow you to stay connected to your home or business whether you are onsite or away.',
      link: '/security-systems',
      linkText: 'View Security Services'
    },
    {
      title: 'Data & Networking',
      description: 'Reliable connectivity is essential for modern homes and workplaces, and our data and networking services are built with performance and stability in mind. We install data points, structured cabling, patch panels, and server racks to support fast, organized, and scalable networks. All installations are NBN-ready and designed to reduce signal issues, clutter and future upgrade costs.',
      link: '/data-networking',
      linkText: 'View Data Services'
    },
    {
      title: 'Entertainment Technology',
      description: 'We deliver professional entertainment technology installations that enhance both functionality and appearance. Our services include TV wall mounting, home theatre systems, speaker installations, and organized cable management for a clean, streamlined finish. Every setup is carefully positioned for optimal viewing, sound quality, and long-term reliability.',
      link: '/entertainment-technology',
      linkText: 'View Entertainment Services'
    }
  ];

  return (
    <div id="ServicesDirectory">
      <SEO 
        title="Electrical, Smart Home & Security Services | NZXTGEN"
        description="Explore NZXTGEN's electrical, smart home, security, data and entertainment services for residential and small business properties."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/services' : undefined}
      />
      <LocalBusinessSchema />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />
      <div id="space"></div>
      
      <div className="services-directory-container">
        <div className="directory-header">
          <h1>Services</h1>
          <p className="directory-intro">
            NZXTGEN offers a complete range of electrical and technology services designed to work together smoothly. Below is an overview of what we provide. Each service is delivered with a focus on safety, usability, and clean installation.
          </p>
        </div>

        <div className="services-main-section">
          <h2>Our Main Services</h2>
          
          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to={service.link} className="service-link">
                  → {service.linkText}
                </Link>
              </div>
            ))}
          </div>

          <p className="services-note">
            Each service can be delivered individually or combined into a single, coordinated project to reduce downtime and improve overall system performance.
          </p>
        </div>

        <div className="faq-section">
          <h2>FAQs</h2>
          <div className="faq-item">
            <h3>Q: Can multiple services be completed during one visit?</h3>
            <p>A: Yes. Many clients combine electrical, data, and smart home work into one streamlined job.</p>
          </div>
          <div className="faq-item">
            <h3>Q: Do you supply equipment as well as installation?</h3>
            <p>A: Yes. We can supply, install and configure compatible products or work with client-supplied equipment where appropriate.</p>
          </div>
        </div>

        <div className="directory-footer">
          <h2>Service Areas</h2>
          <p>
            We provide these services across <Link to="/areas-we-service">Sydney's south-west</Link>, 
            including Condell Park, Bankstown, and surrounding suburbs. 
            <Link to="/areas-we-service">View all service areas</Link>.
          </p>
          <Link to="/free-quote" className="cta-button">
            Get Your Free Quote
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesDirectory;
