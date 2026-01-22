import React from 'react';
import { Link } from 'react-router-dom';
import WhatsappChat from '../components/WhatsappChat';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import './SuburbsDirectory.css';

const SuburbsDirectory = () => {
  // Main suburbs we service - focusing on Sydney's south-west area around Condell Park
  // These are the primary suburbs mentioned in your service area
  const mainSuburbs = [
    { 
      name: 'Condell Park', 
      description: 'Our home base - serving the local community with electrical and smart home solutions.',
      category: 'Primary Service Area'
    },
    { 
      name: 'Bankstown', 
      description: 'Comprehensive electrical services for residential and commercial properties.',
      category: 'Primary Service Area'
    },
    { 
      name: 'Bass Hill', 
      description: 'Professional electrical installations and smart home automation services.',
      category: 'Primary Service Area'
    },
    { 
      name: 'Yagoona', 
      description: 'Licensed electricians providing safe and reliable electrical work.',
      category: 'Service Area'
    },
    { 
      name: 'Chester Hill', 
      description: 'Electrical upgrades, smart home systems, and security installations.',
      category: 'Service Area'
    },
    { 
      name: 'Sefton', 
      description: 'Expert electrical and technology services for homes and businesses.',
      category: 'Service Area'
    },
    { 
      name: 'Birrong', 
      description: 'Quality electrical workmanship and modern smart home solutions.',
      category: 'Service Area'
    },
    { 
      name: 'Regents Park', 
      description: 'Comprehensive electrical services including switchboard upgrades.',
      category: 'Service Area'
    },
    { 
      name: 'Chullora', 
      description: 'Professional electrical installations and maintenance services.',
      category: 'Service Area'
    },
    { 
      name: 'Greenacre', 
      description: 'Smart home automation and electrical services for modern living.',
      category: 'Service Area'
    },
    { 
      name: 'Belfield', 
      description: 'Reliable electrical services for homes and small businesses.',
      category: 'Service Area'
    },
    { 
      name: 'Berala', 
      description: 'Professional electrical installations and upgrades.',
      category: 'Service Area'
    }
  ];

  return (
    <div id="SuburbsDirectory">
      <SEO 
        title="Suburbs Directory | Areas We Service | NZXTGEN"
        description="NZXTGEN provides electrical, smart home, and security services across Sydney's south-west including Condell Park, Bankstown, and surrounding suburbs."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/suburbs' : undefined}
      />
      <WhatsappChat />
      <Navbar />
      <div className="suburbs-directory-container">
        <div className="directory-header">
          <h1>Suburbs We Service</h1>
          <p className="directory-intro">
            NZXTGEN provides licensed electrical, smart home, and security services across Sydney's south-west. 
            We service Condell Park and surrounding suburbs, supporting homeowners, renovators, landlords, and small businesses. 
            <Link to="/our-services">View our services</Link> or <Link to="/areas-we-service">see the complete list of suburbs</Link>.
          </p>
        </div>

        <div className="suburbs-grid">
          {mainSuburbs.map((suburb, index) => {
            return (
              <div key={index} className="suburb-directory-card">
                <div className="suburb-header">
                  <h2>{suburb.name}</h2>
                  {suburb.category && <span className="suburb-category">{suburb.category}</span>}
                </div>
                <p className="suburb-description">{suburb.description}</p>
                <div className="suburb-services">
                  <p>Available Services:</p>
                  <ul>
                    <li><Link to="/services/electrical-services">Electrical Services</Link></li>
                    <li><Link to="/smart-home">Smart Home Automation</Link></li>
                    <li><Link to="/security-systems">Security Systems</Link></li>
                    <li><Link to="/switchboard-upgrade">Switchboard Upgrades</Link></li>
                  </ul>
                </div>
                <Link to="/free-quote" className="suburb-cta">
                  Get Quote for {suburb.name}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="directory-footer">
          <h2>All Service Areas</h2>
          <p>
            We service many more suburbs across Sydney's south-west. 
            <Link to="/areas-we-service"> View the complete list of suburbs we service</Link> or 
            <Link to="/our-services"> explore our services</Link>.
          </p>
          <Link to="/free-quote" className="cta-button">
            Request Your Free Quote
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuburbsDirectory;
