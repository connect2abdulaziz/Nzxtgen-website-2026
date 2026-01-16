import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaVideo, 
  FaBell, 
  FaKey, 
  FaPhoneAlt,
  FaCheckCircle, 
  FaQuestionCircle 
} from 'react-icons/fa';
import './SecurityServiceContent.css';

const SecurityServiceContent = () => {
  const securityServices = [
    { 
      icon: <FaVideo />, 
      title: "CCTV Installation",
      text: "CCTV systems provide visual monitoring of key areas such as entrances, perimeters, shared spaces, and restricted zones. Cameras are positioned to capture clear footage while avoiding unnecessary coverage. Modern CCTV systems allow live viewing and record playback, often accessible remotely."
    },
    { 
      icon: <FaBell />, 
      title: "Alarm Systems",
      text: "Alarm systems are designed to detect unauthorised entry or unusual activity and trigger alerts when this occurs. These systems can include door and window sensors, motion detectors, and audible alarms. A properly configured alarm system should suit how the space is occupied."
    },
    { 
      icon: <FaKey />, 
      title: "Access Control",
      text: "Access control systems manage who can enter specific areas and when. This is particularly important for businesses, shared buildings, and properties with restricted zones. Access may be controlled through keypads, cards, or other secure credentials."
    },
    { 
      icon: <FaPhoneAlt />, 
      title: "Intercom Systems",
      text: "Intercom systems allow communication with visitors before granting access. These systems are commonly installed at entry points to homes, units, offices, and gated areas. Intercoms improve security by allowing occupants to verify visitors without opening doors or gates."
    }
  ];

  const whenYouNeedSecurity = [
    "The property has multiple access points",
    "Visibility around entrances is limited",
    "Valuable equipment or assets are stored onsite",
    "Staff or occupants work outside normal hours",
    "There is a need to monitor activity remotely"
  ];

  const whyChooseUs = [
    "Assessing risks and entry points",
    "Planning camera coverage and sensor placement",
    "Installing cabling and devices neatly and securely",
    "Configuring systems for reliable operation",
    "Explaining system use clearly at handover"
  ];

  return (
    <div className="security-service-content">
      {/* Top CTA Section */}
      <div className="ss-top-cta">
        <div className="ss-cta-container">
          <p className="ss-cta-question">Looking to improve security at your property?</p>
          <Link to="/free-quote" className="ss-cta-button">
            👉 Request a free quote today
          </Link>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="ss-main-container">
        {/* Main Title and Intro */}
        <div className="ss-header-section">
          <h1 className="ss-main-title">Security Systems Installation – NZXTGEN</h1>
          <div className="ss-intro-content">
            <p>
              Security systems play a critical role in protecting people, property, and assets. Whether for a home or a small business, modern security solutions are designed to deter unauthorised access, monitor activity, and provide clear information when incidents occur. A well-designed system should offer reliable coverage without being intrusive or difficult to manage.
            </p>
            <p>
              NZXTGEN provides professional security system installations that focus on practical protection rather than unnecessary complexity. We design systems that suit the layout of the property, the level of risk, and how the space is used day to day. Every installation is planned carefully to ensure coverage is effective, controls are intuitive, and the system remains reliable over time.
            </p>
          </div>
        </div>

        {/* What Security Systems Installation Involves */}
        <div className="ss-section">
          <h2 className="ss-section-title">What Security Systems Installation Involves</h2>
          <p>
            Security systems installation involves integrating devices and infrastructure that work together to monitor, detect, and control access to a property. Rather than relying on a single component, effective security combines visual monitoring, alerts, and controlled entry points.
          </p>
        </div>

        {/* Security Services Grid */}
        <div className="ss-section ss-services-section">
          <h2 className="ss-section-title">Our Security System Services</h2>
          <div className="ss-services-grid">
            {securityServices.map((service, index) => (
              <div key={index} className="ss-service-card">
                <div className="ss-service-icon">{service.icon}</div>
                <div className="ss-service-content">
                  <h3 className="ss-service-title">{service.title}</h3>
                  <p className="ss-service-text">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CCTV Installation Details */}
        <div className="ss-section">
          <h2 className="ss-section-title">CCTV Installation</h2>
          <p>
            CCTV systems provide visual monitoring of key areas such as entrances, perimeters, shared spaces, and restricted zones. Cameras are positioned to capture clear footage while avoiding unnecessary coverage of private or irrelevant areas. Proper placement is essential to reduce blind spots and ensure footage is usable if needed.
          </p>
          <p>
            Modern CCTV systems allow live viewing and record playback, often accessible remotely. Clear image quality, stable connections, and secure storage are key considerations when designing these systems. NZXTGEN ensures cameras are installed securely, cabling is protected, and recording equipment is configured correctly.
          </p>
        </div>

        {/* Alarm Systems Details */}
        <div className="ss-section">
          <h2 className="ss-section-title">Alarm Systems</h2>
          <p>
            Alarm systems are designed to detect unauthorised entry or unusual activity and trigger alerts when this occurs. These systems can include door and window sensors, motion detectors, and audible alarms that activate when triggered.
          </p>
          <p>
            A properly configured alarm system should suit how the space is occupied. This includes separating zones so parts of the property can remain active while others are armed. We take the time to understand daily routines to ensure alarms enhance security without causing unnecessary disruptions.
          </p>
        </div>

        {/* Access Control Details */}
        <div className="ss-section">
          <h2 className="ss-section-title">Access Control</h2>
          <p>
            Access control systems manage who can enter specific areas and when. This is particularly important for businesses, shared buildings, and properties with restricted zones. Access may be controlled through keypads, cards, or other secure credentials.
          </p>
          <p>
            By limiting access to authorised users only, these systems reduce the risk of unauthorised entry and provide better oversight of movement within the property. Access control can also simplify management by reducing reliance on physical keys.
          </p>
        </div>

        {/* Intercom Systems Details */}
        <div className="ss-section">
          <h2 className="ss-section-title">Intercom Systems</h2>
          <p>
            Intercom systems allow communication with visitors before granting access. These systems are commonly installed at entry points to homes, units, offices, and gated areas. Intercoms improve security by allowing occupants to verify visitors without opening doors or gates.
          </p>
          <p>
            Intercom installations can be integrated with access control, enabling doors or gates to be released remotely once a visitor is identified. Clear audio, reliable connections, and practical placement are essential for effective operation.
          </p>
        </div>

        {/* When You Need Security Systems */}
        <div className="ss-section">
          <h2 className="ss-section-title">When You Need Security Systems</h2>
          <p>
            Security system installation is often prompted by changes in risk, usage, or property layout. However, many installations are preventative, designed to reduce exposure before issues arise.
          </p>
          <p className="ss-benefits-intro">You may need a security system if:</p>
          <ul className="ss-benefits-list">
            {whenYouNeedSecurity.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="ss-check-icon" />
                {item}
              </li>
            ))}
          </ul>
          <p>
            Homes often require security upgrades when layouts change, such as renovations or extensions that introduce new entry points. Businesses commonly install security systems when expanding, relocating, or adjusting operating hours.
          </p>
          <p>
            Security systems are also valuable for improving oversight rather than responding to incidents alone. CCTV footage can help resolve disputes, verify events, and support insurance claims when required.
          </p>
          <p>
            For small businesses, integrating alarms, cameras, and access control improves accountability while maintaining a professional environment. For homeowners, security systems offer peace of mind without interfering with daily routines.
          </p>
        </div>

        {/* Why Choose NZXTGEN */}
        <div className="ss-section ss-why-choose">
          <h2 className="ss-section-title">Why Choose NZXTGEN</h2>
          <p>
            NZXTGEN approaches security systems with a focus on clarity, reliability, and suitability. We do not install generic setups. Every system is planned based on the property's layout, usage patterns, and practical security needs.
          </p>
          <p className="ss-process-intro">Our process includes:</p>
          <ul className="ss-process-list">
            {whyChooseUs.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="ss-check-icon" />
                {item}
              </li>
            ))}
          </ul>
          <p>
            We ensure that systems are easy to operate and understand. Controls are configured logically, and users are shown how to manage everyday functions without confusion. This reduces reliance on ongoing support and ensures the system is used correctly.
          </p>
          <p>
            Attention to detail is a priority. Cabling is concealed where possible, equipment is mounted securely, and installations are completed with a clean, professional finish. Systems are tested thoroughly before completion to confirm performance and coverage.
          </p>
          <p>
            Because we also work across electrical, data, and smart systems, we understand how security integrates with other infrastructure. This allows systems to operate smoothly without conflicts or unnecessary duplication.
          </p>
        </div>

        {/* Final CTA */}
        <div className="ss-final-cta">
          <h2>Protect your property with confidence</h2>
          <Link to="/free-quote" className="ss-cta-button">
            👉 Request your free quote today
          </Link>
        </div>

        {/* FAQs Section */}
        <div className="ss-faqs">
          <div className="ss-faq-header">
            <FaQuestionCircle className="ss-faq-icon" />
            <h2>Security Systems FAQs</h2>
          </div>
          <div className="ss-faq-grid">
            <div className="ss-faq-card">
              <div className="ss-faq-question">
                <span className="ss-faq-q">Q:</span>
                <h3>Can security systems be installed in an existing building?</h3>
              </div>
              <div className="ss-faq-answer">
                <span className="ss-faq-a">A:</span>
                <p>Yes. Most systems can be installed without major structural changes.</p>
              </div>
            </div>
            <div className="ss-faq-card">
              <div className="ss-faq-question">
                <span className="ss-faq-q">Q:</span>
                <h3>Can different security components work together?</h3>
              </div>
              <div className="ss-faq-answer">
                <span className="ss-faq-a">A:</span>
                <p>Yes. CCTV, alarms, access control, and intercoms can be integrated into a single system.</p>
              </div>
            </div>
            <div className="ss-faq-card">
              <div className="ss-faq-question">
                <span className="ss-faq-q">Q:</span>
                <h3>Will I be shown how to use the system after installation?</h3>
              </div>
              <div className="ss-faq-answer">
                <span className="ss-faq-a">A:</span>
                <p>Yes. We provide clear guidance on operating and managing your system.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityServiceContent;
