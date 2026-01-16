import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceArea.css';

const ServiceArea = () => {
  return (
    <div className="service-area-section">
      <div className="service-area-container">
        <h1 className="service-area-title">Areas We Service</h1>
        <p className="service-area-text">
          We service Condell Park and surrounding areas across Sydney's south-west, supporting homeowners, renovators, landlords and small businesses with dependable <a href="/our-services">electrical and technology services</a>. Our services include <a href="/our-services">electrical installations</a>, <a href="/smart-home">smart home automation</a>, <a href="/our-services">security systems</a>, and <a href="/switchboard-upgrade">switchboard upgrades</a>.
        </p>
        <div className="service-area-cta">
          <p className="cta-question">Ready to get started?</p>
          <Link to="/free-quote" className="cta-button">
            👉 Get your free online quote today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
