import React from 'react';
import { Link } from 'react-router-dom';
import WhatsappChat from '../components/WhatsappChat';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import './SuburbsDirectory.css';

const SuburbsDirectory = () => {
  const mainSuburbs = [
    { name: 'Condell Park', description: 'Our home base - serving the local community with electrical and smart home solutions.' },
    { name: 'Bankstown', description: 'Comprehensive electrical services for residential and commercial properties.' },
    { name: 'Bass Hill', description: 'Professional electrical installations and smart home automation services.' },
    { name: 'Yagoona', description: 'Licensed electricians providing safe and reliable electrical work.' },
    { name: 'Chester Hill', description: 'Electrical upgrades, smart home systems, and security installations.' },
    { name: 'Sefton', description: 'Expert electrical and technology services for homes and businesses.' },
    { name: 'Birrong', description: 'Quality electrical workmanship and modern smart home solutions.' },
    { name: 'Regents Park', description: 'Comprehensive electrical services including switchboard upgrades.' },
    { name: 'Chullora', description: 'Professional electrical installations and maintenance services.' },
    { name: 'Greenacre', description: 'Smart home automation and electrical services for modern living.' }
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
          {mainSuburbs.map((suburb, index) => (
            <div key={index} className="suburb-directory-card">
              <h2>{suburb.name}</h2>
              <p className="suburb-description">{suburb.description}</p>
              <div className="suburb-services">
                <p>Available Services:</p>
                <ul>
                  <li><Link to="/our-services">Electrical Services</Link></li>
                  <li><Link to="/smart-home">Smart Home Automation</Link></li>
                  <li><Link to="/our-services">Security Systems</Link></li>
                  <li><Link to="/switchboard-upgrade">Switchboard Upgrades</Link></li>
                </ul>
              </div>
              <Link to="/free-quote" className="suburb-cta">
                Get Quote for {suburb.name}
              </Link>
            </div>
          ))}
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
