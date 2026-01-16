import React from 'react';
import { FaEnvelope, FaQuestionCircle, FaQuoteLeft, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { trackPhoneCall } from '../utils/analytics';
import './ContactContent.css';

const ContactContent = () => {
  return (
    <div className="contact-content-wrapper">
      {/* Header Section */}
      <div className="contact-header-section">
        <div className="header-decoration"></div>
        <h1>Contact</h1>
        <p className="header-subtitle">Get in Touch with NZXTGEN</p>
      </div>

      {/* Main Content */}
      <div className="contact-main-content">
        {/* Intro Section */}
        <div className="contact-intro">
          <div className="intro-icon">
            <FaEnvelope />
          </div>
          <p>
            If you're planning electrical work, a smart home upgrade or a security installation, NZXTGEN is here to help. We make the process straightforward, with clear communication and practical solutions from the start.
          </p>
          <p className="intro-second">
            Whether your project is small or complex, you'll receive honest advice, compliant workmanship and systems designed to work reliably long term.
          </p>
        </div>

        {/* Quote CTA Section */}
        <div className="contact-cta">
          <div className="cta-icon">
            <FaQuoteLeft />
          </div>
          <div className="cta-content">
            <h2>Get Started Today</h2>
            <p>The easiest way to get started is by submitting our online quote request. This allows us to understand your needs and respond with accurate information.</p>
            <div className="cta-buttons">
              <Link to="/free-quote" className="cta-button">
                Request Your Free Quote Today →
              </Link>
              <a href="tel:+61437885910" className="cta-button cta-button-call" onClick={() => trackPhoneCall('+61437885910', 'contact_page')}>
                <FaPhone /> Call: 0437 885 910
              </a>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="contact-faqs">
          <div className="faq-header">
            <FaQuestionCircle className="faq-header-icon" />
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-card">
              <div className="faq-question">
                <span className="faq-q">Q:</span>
                <h3>How soon will I hear back after submitting a quote request?</h3>
              </div>
              <div className="faq-answer">
                <span className="faq-a">A:</span>
                <p>We aim to respond as quickly as possible during business hours.</p>
              </div>
            </div>
            <div className="faq-card">
              <div className="faq-question">
                <span className="faq-q">Q:</span>
                <h3>Do you provide advice before starting work?</h3>
              </div>
              <div className="faq-answer">
                <span className="faq-a">A:</span>
                <p>Yes. We discuss options, requirements, and expectations before any work begins.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
