import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLightbulb, 
  FaPlug, 
  FaBolt, 
  FaSearch, 
  FaFire, 
  FaFan, 
  FaChargingStation, 
  FaTools,
  FaCheckCircle, 
  FaQuestionCircle 
} from 'react-icons/fa';
import './ElectricServiceContent.css';

const ElectricServiceContent = () => {
  const coreServices = [
    { 
      icon: <FaLightbulb />, 
      title: "Lighting Installation and Upgrades",
      text: "We install and upgrade internal and external lighting for homes and small commercial spaces, ensuring appropriate brightness, placement, and control. Some lighting products include switchable colour temperatures (3000K, 4000K, or 6000K) for different rooms and uses."
    },
    { 
      icon: <FaPlug />, 
      title: "Power Points and Electrical Outlets",
      text: "We install additional power points, replace damaged outlets, and ensure circuits are correctly loaded to prevent overheating or nuisance tripping. Careful placement improves convenience while maintaining safety and compliance."
    },
    { 
      icon: <FaBolt />, 
      title: "Switchboards and Electrical Safety Upgrades",
      text: "The switchboard is the core of any electrical system. We assess existing boards and carry out upgrades where required, including safety switches and circuit protection to meet current standards."
    },
    { 
      icon: <FaSearch />, 
      title: "Electrical Fault Finding",
      text: "We use structured testing methods to identify the root cause of electrical issues such as power loss, tripping circuits, flickering lights, or unexplained outages. This approach reduces repeat problems and improves overall system reliability."
    },
    { 
      icon: <FaFire />, 
      title: "Smoke Alarm Installation and Compliance",
      text: "We install, replace, and maintain smoke alarms to ensure correct placement, reliable operation, and compliance with current regulations. This includes upgrading outdated units and ensuring alarms are interconnected where required."
    },
    { 
      icon: <FaFan />, 
      title: "Ceiling Fans",
      text: "We install new ceiling fans, replace existing units, and ensure safe mounting and correct wiring. Proper installation ensures quiet operation, effective air movement, and safe long-term use."
    },
    { 
      icon: <FaChargingStation />, 
      title: "EV Charger Installation",
      text: "As electric vehicles become more common, we install EV charging solutions suitable for residential and small business use, ensuring circuits are appropriately rated and integrated with existing electrical systems."
    },
    { 
      icon: <FaTools />, 
      title: "Electrical Maintenance",
      text: "We provide routine inspections, testing, and preventative maintenance for homes and small businesses, helping extend the life of electrical systems and reduce long-term repair costs."
    }
  ];

  const whenYouNeedUs = [
    "Lights flickering, power cutting out, or breakers frequently tripping",
    "Adding new appliances or equipment that require additional power capacity",
    "Upgrading older electrical systems to meet current safety standards",
    "Installing new lighting, fans, or EV chargers",
    "Ensuring smoke alarms meet compliance requirements",
    "Carrying out preventative maintenance to avoid future faults"
  ];

  const whyChooseUs = [
    "Clear communication before work begins",
    "Neat, organised installations",
    "Compliance with Australian Standards",
    "Thorough testing before completion",
    "Practical solutions that suit real-world use"
  ];

  return (
    <div className="electric-service-content">
      {/* Top CTA Section */}
      <div className="es-top-cta">
        <div className="es-cta-container">
          <p className="es-cta-question">Need reliable electrical work done properly?</p>
          <Link to="/free-quote" className="es-cta-button">
            👉 Request a free quote today
          </Link>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="es-main-container">
        {/* Main Title and Intro */}
        <div className="es-header-section">
          <h1 className="es-main-title">Core Electrical Services - NZXTGEN</h1>
          <div className="es-intro-content">
            <p>
              NZXTGEN provides a complete range of core electrical services designed to support safe, functional, and modern homes and small business spaces. While individual services are often listed across a website, this page brings everything together in one place, making it easier to understand what we do and how our services work together.
            </p>
            <p>
              Our electrical work focuses on practical outcomes: safe installations, dependable performance, and systems that suit the way people live and work. Whether you need a simple upgrade, fault diagnosis, or ongoing maintenance, our approach is clear, compliant, and well-organised.
            </p>
          </div>
        </div>

        {/* What Our Electrical Services Cover */}
        <div className="es-section es-cover-section">
          <div className="es-cover-content">
            <h2 className="es-cover-title">What Our Electrical Services Cover</h2>
            <div className="es-cover-text">
              <p>
                Our core electrical services are designed to handle everyday electrical needs as well as more complex upgrades. Each service is delivered with attention to safety, Australian Standards, and long-term reliability.
              </p>
            </div>
          </div>
        </div>

        {/* Core Services Grid */}
        <div className="es-section es-services-section">
          <h2 className="es-section-title">Our Core Electrical Services</h2>
          <div className="es-services-grid">
            {coreServices.map((service, index) => (
              <div key={index} className="es-service-card">
                <div className="es-service-icon">{service.icon}</div>
                <div className="es-service-content">
                  <h3 className="es-service-title">{service.title}</h3>
                  <p className="es-service-text">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* When You May Need an Electrician */}
        <div className="es-section">
          <h2 className="es-section-title">When You May Need an Electrician</h2>
          <p>
            Electrical services are required at many stages, not just during renovations or new installations. Common situations where professional electrical support is essential include:
          </p>
          <ul className="es-benefits-list">
            {whenYouNeedUs.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="es-check-icon" />
                {item}
              </li>
            ))}
          </ul>
          <p>
            Addressing issues early helps maintain safety and prevents small problems from developing into larger, more costly repairs.
          </p>
        </div>

        {/* Why Choose NZXTGEN */}
        <div className="es-section es-why-choose">
          <h2 className="es-section-title">Why Choose NZXTGEN</h2>
          <p>
            NZXTGEN focuses on delivering electrical work that is practical, compliant, and clearly explained. We understand that homeowners and small business operators value reliability, transparency, and workmanship that lasts.
          </p>
          <p className="es-process-intro">Our approach is based on:</p>
          <ul className="es-process-list">
            {whyChooseUs.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="es-check-icon" />
                {item}
              </li>
            ))}
          </ul>
          <p>
            We work across residential properties and small business premises throughout our service area, providing consistent quality and dependable outcomes without unnecessary complexity.
          </p>
        </div>

        {/* Final CTA */}
        <div className="es-final-cta">
          <h2>Need electrical work handled properly from start to finish?</h2>
          <Link to="/free-quote" className="es-cta-button">
            👉 Get your free quote today
          </Link>
        </div>

        {/* FAQs Section */}
        <div className="es-faqs">
          <div className="es-faq-header">
            <FaQuestionCircle className="es-faq-icon" />
            <h2>Electrical Services FAQs</h2>
          </div>
          <div className="es-faq-grid">
            <div className="es-faq-card">
              <div className="es-faq-question">
                <span className="es-faq-q">Q:</span>
                <h3>Do I need to upgrade my switchboard before adding new appliances?</h3>
              </div>
              <div className="es-faq-answer">
                <span className="es-faq-a">A:</span>
                <p>In some cases, yes. Older switchboards may not support additional load safely. We assess capacity and safety before recommending upgrades.</p>
              </div>
            </div>
            <div className="es-faq-card">
              <div className="es-faq-question">
                <span className="es-faq-q">Q:</span>
                <h3>Can lighting colour temperature be changed after installation?</h3>
              </div>
              <div className="es-faq-answer">
                <span className="es-faq-a">A:</span>
                <p>Some fittings include switchable colour temperature options, allowing adjustment during installation without replacing the light.</p>
              </div>
            </div>
            <div className="es-faq-card">
              <div className="es-faq-question">
                <span className="es-faq-q">Q:</span>
                <h3>Is electrical maintenance necessary for homes?</h3>
              </div>
              <div className="es-faq-answer">
                <span className="es-faq-a">A:</span>
                <p>Routine checks help identify issues early, improve safety, and reduce the likelihood of unexpected faults.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricServiceContent;
