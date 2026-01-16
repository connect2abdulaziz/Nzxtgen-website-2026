import React from 'react';
import { Link } from 'react-router-dom';
import WhatsappChat from '../components/WhatsappChat';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import './ServicesDirectory.css';

const ServicesDirectory = () => {
  const services = [
    {
      title: 'Electrical Services',
      description: 'Professional electrical installations, upgrades, and maintenance for homes and businesses.',
      link: '/our-services',
      category: 'Core Services'
    },
    {
      title: 'Smart Home Automation',
      description: 'Integrated smart home systems for lighting, climate, security, and entertainment control.',
      link: '/smart-home',
      category: 'Core Services'
    },
    {
      title: 'Security Systems',
      description: 'CCTV, alarms, intercoms, and smart locks for comprehensive property protection.',
      link: '/our-services',
      category: 'Core Services'
    },
    {
      title: 'Entertainment Technology',
      description: 'TV mounting, home theatre installations, and speaker systems.',
      link: '/our-services',
      category: 'Core Services'
    },
    {
      title: 'Switchboard Upgrades',
      description: 'Modern switchboard upgrades for safety, compliance, and increased capacity.',
      link: '/switchboard-upgrade',
      category: 'Specialized Services'
    },
    {
      title: 'Data & Networking',
      description: 'Structured cabling, data points, patch panels, and network infrastructure.',
      link: '/our-services',
      category: 'Specialized Services'
    }
  ];

  return (
    <div id="ServicesDirectory">
      <SEO 
        title="Services Directory | Electrical & Smart Home Services | NZXTGEN"
        description="Browse NZXTGEN's complete directory of electrical, smart home, security, and technology services available across Sydney's south-west."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/services' : undefined}
      />
      <WhatsappChat />
      <Navbar />
      <div className="services-directory-container">
        <div className="directory-header">
          <h1>Services Directory</h1>
          <p className="directory-intro">
            Explore our comprehensive range of electrical, smart home, and technology services. 
            All services are available across <Link to="/areas-we-service">Condell Park and surrounding suburbs</Link> in Sydney's south-west.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-directory-card">
              <h2>{service.title}</h2>
              <p className="service-category">{service.category}</p>
              <p className="service-description">{service.description}</p>
              <Link to={service.link} className="service-link">
                Learn More →
              </Link>
            </div>
          ))}
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
