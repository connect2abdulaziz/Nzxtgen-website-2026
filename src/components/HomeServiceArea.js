import React from 'react';
import { Link } from 'react-router-dom';
import './HomeServiceArea.css';

const ServiceArea = () => {
  return (
    <div className="service-area-section">
      <div className="service-area-container">
        <h2 className="service-area-title">Service Area</h2>
        <p className="service-area-text">
          We service Condell Park and surrounding areas across Sydney's south-west, supporting homeowners, renovators, landlords and small businesses with dependable electrical and technology services.
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
