import React from 'react';
import './ContactHero.css';

const ContactHero = () => {
  return (
    <section className="contact-hero-section">
      <div className="contact-hero-overlay"></div>
      <div className="contact-hero-content">
        <h1 className="contact-hero-title">Get In Touch</h1>
        <p className="contact-hero-subtitle">We're Here to Help with Your Electrical & Smart Home Needs</p>
        <p className="contact-hero-description">
          Whether you need electrical work, smart home installation, or security systems, our team is ready to assist. 
          Reach out today for a free consultation and quote.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
