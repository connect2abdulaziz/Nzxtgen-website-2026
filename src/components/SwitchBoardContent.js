import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBolt, 
  FaShieldAlt, 
  FaPlug,
  FaCheckCircle, 
  FaQuestionCircle 
} from 'react-icons/fa';
import './SwitchBoardContent.css';

const SwitchBoardContent = () => {
  const upgradeFeatures = [
    "Individual circuit protection",
    "Safety switches for personal protection",
    "Clear circuit labelling",
    "Capacity for current and future electrical loads"
  ];

  const whenYouNeedUpgrade = [
    "The switchboard still uses ceramic fuses",
    "Power trips frequently or circuits overload",
    "New appliances cause lights to dim or breakers to trip",
    "There are no safety switches installed",
    "Renovations or extensions are planned",
    "You are adding higher-demand equipment"
  ];

  const whyChooseUs = [
    "Thorough assessment of existing electrical systems",
    "Clear explanations of what is required and why",
    "Neat, well-organised installations",
    "Full testing and commissioning before completion"
  ];

  return (
    <div className="switchboard-service-content">
      {/* Top CTA Section */}
      <div className="sb-top-cta">
        <div className="sb-cta-container">
          <p className="sb-cta-question">Concerned about the safety or capacity of your switchboard?</p>
          <Link to="/free-quote" className="sb-cta-button">
            👉 Request a free quote today
          </Link>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="sb-main-container">
        {/* Main Title and Intro */}
        <div className="sb-header-section">
          <h1 className="sb-main-title">Electrical Switchboard Upgrades - NZXTGEN</h1>
          <div className="sb-intro-content">
            <p>
              Electrical switchboards are the control centre of a home's electrical system. As households rely on more appliances, technology, and high-demand equipment, older switchboards often struggle to keep up. NZXTGEN provides professional electrical switchboard upgrades designed to improve safety, compliance, and performance in residential properties.
            </p>
            <p>
              A switchboard upgrade involves replacing an outdated electrical board with a modern system that uses circuit breakers and safety switches. This improves protection against electrical faults, ensures compliance with Australian Standards, and allows a home to safely handle modern electrical loads without unnecessary risk.
            </p>
            <p>
              Many homes still operate with switchboards installed decades ago, long before current safety expectations existed. Upgrading the switchboard is a practical step toward protecting occupants, preventing electrical damage, and allowing future electrical improvements without limitation.
            </p>
          </div>
        </div>

        {/* What a Switchboard Upgrade Involves */}
        <div className="sb-section">
          <h2 className="sb-section-title">What a Switchboard Upgrade Involves</h2>
          <p>
            A switchboard upgrade is more than simply swapping out old components. It is a structured process that ensures the entire electrical protection system works correctly and safely.
          </p>
          <p>
            Modern switchboards replace ceramic fuses with circuit breakers and residual current devices (RCDs), commonly known as safety switches. These devices are designed to respond quickly to faults, reducing the risk of electric shock, fire, or equipment damage.
          </p>
          <p>During a switchboard upgrade, we assess the existing electrical setup, identify safety risks, and install a new board that provides:</p>
          <ul className="sb-features-list">
            {upgradeFeatures.map((feature, index) => (
              <li key={index}>
                <FaCheckCircle className="sb-check-icon" />
                {feature}
              </li>
            ))}
          </ul>
          <p>
            Upgrades are completed in line with Australian Standards, ensuring that the installation meets current regulatory and safety requirements.
          </p>
        </div>

        {/* Consumer Mains and Service Fuses */}
        <div className="sb-section">
          <h2 className="sb-section-title">Consumer Mains and Service Fuses</h2>
          <p>
            Switchboard upgrades often involve reviewing the condition and compliance of consumer mains and service fuses. Older mains cables or fuse arrangements may not meet current standards or support increased electrical demand. Where required, these components can be replaced, upgraded, or relocated to improve safety, accessibility, and compliance.
          </p>
          <p>
            Addressing consumer mains and service fuses as part of a switchboard upgrade helps ensure the entire supply path is reliable and safe, not just the board itself.
          </p>
          <p>
            At the end of the process, the system is tested to confirm correct operation, fault protection, and reliable power distribution throughout the home.
          </p>
        </div>

        {/* When You Need a Switchboard Upgrade */}
        <div className="sb-section">
          <h2 className="sb-section-title">When You Need a Switchboard Upgrade</h2>
          <p>
            Many homeowners are unaware that their switchboard is outdated until a problem occurs. In most cases, warning signs appear gradually and should not be ignored.
          </p>
          <p className="sb-benefits-intro">You may need a switchboard upgrade if:</p>
          <ul className="sb-benefits-list">
            {whenYouNeedUpgrade.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="sb-check-icon" />
                {item}
              </li>
            ))}
          </ul>
          <p>
            Older switchboards were not designed to support modern living. Appliances such as air conditioning, induction cooktops, EV chargers, and home office equipment place increased demand on electrical systems.
          </p>
          <p>
            Switchboard upgrades are also commonly required when renovating or selling a home. Bringing the electrical system up to current standards helps avoid compliance issues and improves overall property safety.
          </p>
          <p>
            For small businesses operating from residential properties, an upgraded switchboard ensures that equipment runs reliably and safely without placing stress on outdated infrastructure.
          </p>
        </div>

        {/* Why Choose NZXTGEN */}
        <div className="sb-section sb-why-choose">
          <h2 className="sb-section-title">Why Choose NZXTGEN</h2>
          <p>
            NZXTGEN approaches switchboard upgrades with a strong focus on safety, clarity, and long-term performance. We take the time to assess each property individually rather than applying one-size-fits-all solutions.
          </p>
          <p className="sb-process-intro">Our work is based on:</p>
          <ul className="sb-process-list">
            {whyChooseUs.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="sb-check-icon" />
                {item}
              </li>
            ))}
          </ul>
          <p>
            We understand that switchboard work can feel disruptive, which is why we plan upgrades carefully to minimise downtime and inconvenience. Where possible, work is scheduled efficiently so power interruptions are kept to a minimum.
          </p>
          <p>
            All switchboard upgrades are completed by licensed electricians and aligned with current Australian Standards. Clients are left with a system that is safer, easier to manage, and capable of supporting future electrical needs.
          </p>
          <p>
            We also ensure that homeowners understand how their new switchboard functions, including how safety switches operate and what to do if a circuit trips.
          </p>
        </div>

        {/* Final CTA */}
        <div className="sb-final-cta">
          <h2>Ready to improve the safety and reliability of your home's electrical system?</h2>
          <Link to="/free-quote" className="sb-cta-button">
            👉 Get your free quote today
          </Link>
        </div>

        {/* FAQs Section */}
        <div className="sb-faqs">
          <div className="sb-faq-header">
            <FaQuestionCircle className="sb-faq-icon" />
            <h2>Switchboard Upgrade FAQs</h2>
          </div>
          <div className="sb-faq-grid">
            <div className="sb-faq-card">
              <div className="sb-faq-question">
                <span className="sb-faq-q">Q:</span>
                <h3>Will my power be off during a switchboard upgrade?</h3>
              </div>
              <div className="sb-faq-answer">
                <span className="sb-faq-a">A:</span>
                <p>Yes, power will need to be temporarily disconnected. We plan work efficiently to keep outages as short as possible.</p>
              </div>
            </div>
            <div className="sb-faq-card">
              <div className="sb-faq-question">
                <span className="sb-faq-q">Q:</span>
                <h3>Do I need to upgrade my switchboard for renovations?</h3>
              </div>
              <div className="sb-faq-answer">
                <span className="sb-faq-a">A:</span>
                <p>Often, yes. Renovations typically increase electrical demand and may require updated protection to meet compliance.</p>
              </div>
            </div>
            <div className="sb-faq-card">
              <div className="sb-faq-question">
                <span className="sb-faq-q">Q:</span>
                <h3>Are safety switches installed on all circuits?</h3>
              </div>
              <div className="sb-faq-answer">
                <span className="sb-faq-a">A:</span>
                <p>Where required, safety switches are installed to provide protection across relevant circuits in line with current standards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchBoardContent;
