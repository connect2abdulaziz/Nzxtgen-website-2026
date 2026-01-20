import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaQuestionCircle, FaArrowRight } from 'react-icons/fa';
import './SmartHomeContent.css';

const SmartHomeMoreInfoContent = () => {
  const benefits = [
    "Lighting and climate control are used inconsistently",
    "Multiple systems operate independently and feel disjointed",
    "Security monitoring requires separate platforms",
    "Energy usage is difficult to manage",
    "Daily routines would benefit from automation"
  ];

  const processSteps = [
    "Understanding how the space is used",
    "Identifying which systems benefit from automation",
    "Designing integration that avoids unnecessary complexity",
    "Installing and configuring systems correctly",
    "Explaining operation clearly at handover"
  ];

  return (
    <div className="smart-home-content">
      {/* Main Content Container */}
      <div className="sh-main-container">
        {/* Main Title and Intro */}
        <div className="sh-header-section">
          <h1 className="sh-main-title">Smart Home Installation - More Information</h1>
          <div className="sh-intro-box">
            <p className="sh-intro-text">
              This page provides detailed information about smart home installation, system types, controls, and what to consider when planning your smart home project.
            </p>
          </div>
        </div>

        {/* Local and Cloud-Based Systems */}
        <div className="sh-section">
          <h2 className="sh-section-title">Local and Cloud-Based Systems</h2>
          <p>
            Smart home systems can operate locally, through cloud services, or a combination of both. Local systems continue to function even if internet access is interrupted, while cloud-based systems offer remote access and updates.
          </p>
          <p>
            We explain the differences clearly, so clients understand how their system operates, what relies on internet connectivity, and what continues to function independently. This transparency allows informed decisions about reliability, access, and long-term usability.
          </p>
        </div>

        {/* Switches, Controls, and Centralised Access */}
        <div className="sh-section">
          <h2 className="sh-section-title">Switches, Controls, and Centralised Access</h2>
          <p>
            Physical switches remain an important part of smart home design. Smart switches allow users to control lighting and systems manually while also enabling automation and remote access. Proper switch placement ensures systems remain intuitive for all occupants, including visitors.
          </p>
          <p>
            Centralised monitoring is another key feature. Smart home systems can be viewed and managed from a single interface, such as a tablet or wall-mounted touch panel. This allows users to check system status, control devices, and manage daily routines from one place. These interfaces can also support household reminders or task lists, helping technology blend naturally into everyday life.
          </p>
        </div>

        {/* When Smart Home Installation Is the Right Choice */}
        <div className="sh-section">
          <h2 className="sh-section-title">When Smart Home Installation Is the Right Choice</h2>
          <p>
            Smart home installation is often considered during renovations or new builds, but it can also be implemented in existing properties. Many clients explore automation when they want better control, improved efficiency, or simpler management of multiple systems.
          </p>
          <p className="sh-benefits-intro">You may benefit from smart home installation if:</p>
          <ul className="sh-benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index}>
                <FaCheckCircle className="sh-check-icon" />
                {benefit}
              </li>
            ))}
          </ul>
          <p>
            Homes with varied occupancy schedules often benefit from automation, as systems can adapt without constant manual adjustment. Small businesses also use smart systems to manage lighting, security, and climate more efficiently across operating hours.
          </p>
          <p>
            Smart home solutions are especially valuable where reliability and simplicity are priorities. A properly designed system reduces the need for constant interaction while remaining easy to override when needed.
          </p>
        </div>

        {/* Why Choose NZXTGEN */}
        <div className="sh-section sh-why-choose">
          <h2 className="sh-section-title">Why Choose NZXTGEN</h2>
          <p>
            NZXTGEN approaches smart home installation with care and precision. We recognise that automation systems must be dependable, understandable, and suited to long-term use. Our role is to translate technical capability into practical solutions that work seamlessly in real environments.
          </p>
          <p className="sh-process-intro">Our process includes:</p>
          <ul className="sh-process-list">
            {processSteps.map((step, index) => (
              <li key={index}>
                <FaCheckCircle className="sh-check-icon" />
                {step}
              </li>
            ))}
          </ul>
          <p>
            We focus on clean installation and logical system design, ensuring cabling, controls, and interfaces are placed where they make sense. Every system is tested thoroughly before completion to confirm reliability and responsiveness.
          </p>
          <p>
            Importantly, we avoid overloading systems with features that are unlikely to be used. Smart technology should simplify daily life, not add layers of confusion. Our designs prioritise clarity, flexibility, and ease of control.
          </p>
        </div>

        {/* Final CTA */}
        <div className="sh-final-cta">
          <h2>Take control of your space with confidence</h2>
          <Link to="/free-quote" className="sh-cta-button">
            👉 Request your free quote today
          </Link>
        </div>

        {/* FAQs Section */}
        <div className="sh-faqs">
          <div className="sh-faq-header">
            <FaQuestionCircle className="sh-faq-icon" />
            <h2>Smart Home Installation FAQs</h2>
          </div>
          <div className="sh-faq-grid">
            <div className="sh-faq-card">
              <div className="sh-faq-question">
                <span className="sh-faq-q">Q:</span>
                <h3>Can smart systems work alongside traditional switches?</h3>
              </div>
              <div className="sh-faq-answer">
                <span className="sh-faq-a">A:</span>
                <p>Yes. Smart switches and automation can be installed while retaining manual control options.</p>
              </div>
            </div>
            <div className="sh-faq-card">
              <div className="sh-faq-question">
                <span className="sh-faq-q">Q:</span>
                <h3>Will the system still work if the internet goes down?</h3>
              </div>
              <div className="sh-faq-answer">
                <span className="sh-faq-a">A:</span>
                <p>This depends on system design. We explain which functions operate locally and which rely on cloud access.</p>
              </div>
            </div>
            <div className="sh-faq-card">
              <div className="sh-faq-question">
                <span className="sh-faq-q">Q:</span>
                <h3>Can automation be changed after installation?</h3>
              </div>
              <div className="sh-faq-answer">
                <span className="sh-faq-a">A:</span>
                <p>Yes. Schedules and rules can be adjusted as routines or requirements change.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartHomeMoreInfoContent;
