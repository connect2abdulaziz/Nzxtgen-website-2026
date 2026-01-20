import React from 'react';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaSnowflake, FaFan, FaLock, FaThermometerHalf, FaPlug, FaBath, FaArrowRight } from 'react-icons/fa';
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

  return (
    <div className="smart-home-content">
      {/* Main Content Container */}
      <div className="sh-main-container">
        {/* Main Title and Intro */}
        <div className="sh-header-section">
          <h1 className="sh-main-title">Smart Home Installation & Home Automation Systems</h1>
          <div className="sh-intro-box">
            <p className="sh-intro-text">
              Smart home technology allows properties to operate more efficiently, comfortably, and securely through connected systems that work together. Rather than relying on individual devices or manual controls, smart home installations bring lighting, security, climate, and monitoring into a coordinated system that can be managed from one place.
            </p>
            <p className="sh-intro-text">
              NZXTGEN delivers smart home installation services that focus on practicality, reliability, and ease of use. Our approach is not about installing technology for its own sake but about designing systems that genuinely improve how a space functions day to day. Every system is planned carefully to match the needs of the household or business, ensuring the technology supports routine rather than complicating it.
            </p>
          </div>
        </div>

        {/* Key Points Grid */}
        <div className="sh-key-points-grid">
          <div className="sh-key-point-card">
            <div className="sh-key-point-icon">
              <FaLightbulb />
            </div>
            <h3>What It Involves</h3>
            <p>Integrating electrical, data, and control systems so different parts of your property communicate and operate together seamlessly.</p>
          </div>

          <div className="sh-key-point-card">
            <div className="sh-key-point-icon">
              <FaThermometerHalf />
            </div>
            <h3>Scheduling & Automation</h3>
            <p>Systems operate at predefined times without ongoing user intervention, improving energy efficiency and ensuring consistency.</p>
          </div>

          <div className="sh-key-point-card">
            <div className="sh-key-point-icon">
              <FaLock />
            </div>
            <h3>System Integration</h3>
            <p>Lighting, security, and climate controls operate together, creating a smoother experience with fewer apps or control points.</p>
          </div>
        </div>

        {/* What Can Be Integrated */}
        <div className="sh-features-section">
          <h2 className="sh-section-title">What Can Be Integrated & Automated</h2>
          <div className="sh-features-grid">
            {integratedFeatures.map((feature, index) => (
              <div key={index} className="sh-feature-card">
                <div className="sh-feature-icon-wrapper">
                  {feature.icon}
                </div>
                <p className="sh-feature-text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Link to More Info */}
        <div className="sh-more-info-box">
          <div className="sh-more-info-content">
            <h3>Want to Learn More?</h3>
            <p>Explore detailed information about smart home systems, controls, and installation considerations.</p>
            <Link to="/smart-home-more-info" className="sh-more-info-button">
              Smart Home - More Info <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Final CTA */}
        <div className="sh-final-cta">
          <h2>Take control of your space with confidence</h2>
          <Link to="/free-quote" className="sh-cta-button">
            👉 Request your free quote today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmartHomeContent;
