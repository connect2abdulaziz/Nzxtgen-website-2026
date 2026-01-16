import React from 'react';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaSnowflake, FaFan, FaLock, FaThermometerHalf, FaPlug, FaBath, FaCheckCircle, FaQuestionCircle } from 'react-icons/fa';
import './SmartHomeContent.css';

const SmartHomeContent = () => {
  const integratedFeatures = [
    { icon: <FaLightbulb />, text: "Smart Lights – App and voice control with schedules and scenes." },
    { icon: <FaSnowflake />, text: "Smart A/C – Automated cooling based on time and temperature." },
    { icon: <FaFan />, text: "Smart Fans – Integrated with climate control for efficiency." },
    { icon: <FaLock />, text: "Smart Locks – Secure remote access and activity tracking." },
    { icon: <FaThermometerHalf />, text: "Smart Temperature – Automated comfort with energy savings." },
    { icon: <FaPlug />, text: "Smart Appliances – Remote monitoring and automation." },
    { icon: <FaBath />, text: "Smart Bathroom Appliances – Automated fans, heating, and lighting." }
  ];

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
      {/* Top CTA Section */}
      <div className="sh-top-cta">
        <div className="sh-cta-container">
          <p className="sh-cta-question">Want smarter control of your home or workplace?</p>
          <Link to="/free-quote" className="sh-cta-button">
            👉 Request a free quote today
          </Link>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="sh-main-container">
        {/* Main Title and Intro */}
        <div className="sh-header-section">
          <h1 className="sh-main-title">Smart Home Installation & Home Automation Systems by NZXTGEN</h1>
          <div className="sh-intro-content">
            <p>
              Smart home technology allows properties to operate more efficiently, comfortably, and securely through connected systems that work together. Rather than relying on individual devices or manual controls, smart home installations bring lighting, security, climate, and monitoring into a coordinated system that can be managed from one place.
            </p>
            <p>
              NZXTGEN delivers smart home installation services that focus on practicality, reliability, and ease of use. Our approach is not about installing technology for its own sake but about designing systems that genuinely improve how a space functions day to day. Every system is planned carefully to match the needs of the household or business, ensuring the technology supports routine rather than complicating it.
            </p>
          </div>
        </div>

        {/* What Smart Home Installation Involves */}
        <div className="sh-section">
          <h2 className="sh-section-title">What Smart Home Installation Involves</h2>
          <p>
            Smart home installation is the process of integrating electrical, data, and control systems so that different parts of a property can communicate and operate together. This may include lighting control, security systems, climate management, and centralised monitoring, all linked through automation rules and user-friendly interfaces.
          </p>
          <p>
            A key part of smart home design is automation logic. Automation rules allow systems to respond automatically based on time, occupancy, or specific triggers. For example, lighting can follow a daily schedule, climate systems can adjust automatically, and security functions can activate when the property is unoccupied. These rules reduce manual input while maintaining consistent performance.
          </p>
        </div>

        {/* Scheduling and Automation */}
        <div className="sh-section">
          <h2 className="sh-section-title">Scheduling and Automation</h2>
          <p>
            Scheduling allows systems to operate at predefined times without ongoing user intervention. This is particularly useful for lighting, climate control, and security functions. Proper scheduling improves energy efficiency, ensures consistency, and reduces unnecessary operation when spaces are not in use.
          </p>
          <p>
            Automation can also be customised to suit different usage patterns. Rather than a one-size-fits-all setup, systems are configured based on how occupants move through and use the space.
          </p>
        </div>

        {/* System Integration */}
        <div className="sh-section">
          <h2 className="sh-section-title">System Integration</h2>
          <p>
            One of the most important elements of a smart home is integration. Standalone smart devices often work independently, but integrated systems allow lighting, security, and climate controls to operate together. This creates a smoother experience and reduces the need for multiple apps or control points.
          </p>
          <p>
            NZXTGEN designs smart home systems where integration is intentional. This ensures components communicate effectively and avoids conflicts between systems. Integration also makes future expansion simpler, allowing additional functions to be added without reworking the entire setup.
          </p>
        </div>

        {/* What Can Be Integrated */}
        <div className="sh-section sh-features-section">
          <h2 className="sh-section-title">What Can Be Integrated & Automated in a Smart Home</h2>
          <div className="sh-features-grid">
            {integratedFeatures.map((feature, index) => (
              <div key={index} className="sh-feature-item">
                <div className="sh-feature-icon">{feature.icon}</div>
                <p>{feature.text}</p>
              </div>
            ))}
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

export default SmartHomeContent;
