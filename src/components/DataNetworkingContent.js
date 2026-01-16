import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaNetworkWired, 
  FaPlug, 
  FaServer, 
  FaWifi,
  FaCheckCircle, 
  FaQuestionCircle 
} from 'react-icons/fa';
import './DataNetworkingContent.css';

const DataNetworkingContent = () => {
  const networkingServices = [
    { 
      icon: <FaNetworkWired />, 
      title: "Structured Cabling",
      text: "Structured cabling provides the foundation for reliable data networks. We install high-quality cabling systems that support current needs and future expansion. Proper cable management ensures clean installations and easy maintenance."
    },
    { 
      icon: <FaPlug />, 
      title: "Data Points Installation",
      text: "Data points provide network access throughout your property. We install data outlets in strategic locations to ensure reliable connectivity where you need it. Each point is properly terminated and tested for optimal performance."
    },
    { 
      icon: <FaServer />, 
      title: "Patch Panels & Network Infrastructure",
      text: "Patch panels organise and manage network connections efficiently. We install and configure patch panels, switches, and network equipment to create a professional, scalable infrastructure that supports your connectivity needs."
    },
    { 
      icon: <FaWifi />, 
      title: "Network Setup & Configuration",
      text: "We configure network equipment to ensure secure, stable connections. This includes setting up routers, switches, access points, and ensuring proper network segmentation for optimal performance and security."
    }
  ];

  const whenYouNeedNetworking = [
    "Multiple devices require reliable internet access",
    "Wi-Fi coverage is weak or inconsistent in parts of the property",
    "You're planning renovations or new builds",
    "Your business requires stable network connectivity",
    "You need to support smart home or security systems",
    "Current network infrastructure is outdated or unreliable"
  ];

  const whyChooseUs = [
    "Assessing your connectivity requirements and property layout",
    "Designing network infrastructure for current and future needs",
    "Installing cabling and equipment with professional workmanship",
    "Testing all connections to ensure reliable performance",
    "Providing clear documentation and network diagrams"
  ];

  return (
    <div className="data-networking-content">
      {/* Top CTA Section */}
      <div className="dn-top-cta">
        <div className="dn-cta-container">
          <p className="dn-cta-question">Need reliable network infrastructure for your property?</p>
          <Link to="/free-quote" className="dn-cta-button">
            👉 Request a free quote today
          </Link>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="dn-main-container">
        {/* Main Title and Intro */}
        <div className="dn-header-section">
          <h1 className="dn-main-title">Data & Networking Services – NZXTGEN</h1>
          <div className="dn-intro-content">
            <p>
              Data and networking services ensure fast, stable connectivity throughout your property. From structured cabling and data points to patch panels and server racks, we build networks that support modern households and businesses.
            </p>
            <p>
              NZXTGEN provides professional data and networking installation services that focus on reliability, scalability, and clean presentation. We work with homeowners and small businesses to design and install network infrastructure that meets current needs while allowing for future expansion.
            </p>
            <p>
              A well-designed network infrastructure is essential for modern living and working. Whether you need reliable internet access throughout your home, support for smart systems, or business-grade connectivity, proper installation makes a significant difference to performance and reliability.
            </p>
          </div>
        </div>

        {/* What Data & Networking Installation Involves */}
        <div className="dn-section">
          <h2 className="dn-section-title">What Data & Networking Installation Involves</h2>
          <p>
            Data and networking installation involves more than running cables or connecting devices. It requires careful planning of network topology, cable routing, equipment placement, and ensuring the infrastructure can support current and future connectivity needs.
          </p>
          <p>
            Professional network installation includes structured cabling systems, proper termination of data points, installation of network equipment, and configuration to ensure secure, stable connections. All work is completed to industry standards, ensuring reliability and performance.
          </p>
        </div>

        {/* Networking Services Grid */}
        <div className="dn-section dn-services-section">
          <h2 className="dn-section-title">Our Data & Networking Services</h2>
          <div className="dn-services-grid">
            {networkingServices.map((service, index) => (
              <div key={index} className="dn-service-card">
                <div className="dn-service-icon">{service.icon}</div>
                <div className="dn-service-content">
                  <h3 className="dn-service-title">{service.title}</h3>
                  <p className="dn-service-text">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Structured Cabling Details */}
        <div className="dn-section">
          <h2 className="dn-section-title">Structured Cabling</h2>
          <p>
            Structured cabling provides the foundation for reliable data networks. This involves installing high-quality network cables in a planned, organised manner that supports current connectivity needs and allows for future expansion.
          </p>
          <p>
            We use industry-standard cabling such as Cat6 or Cat6a, which support high-speed data transmission. Cables are installed with proper routing, secured appropriately, and terminated correctly to ensure optimal signal quality and reliability.
          </p>
          <p>
            Proper cable management is essential for both performance and maintenance. Cables are organised, labelled, and installed in a way that makes future upgrades or troubleshooting straightforward. This approach avoids the confusion and reliability issues often caused by ad-hoc installations.
          </p>
        </div>

        {/* Data Points Installation Details */}
        <div className="dn-section">
          <h2 className="dn-section-title">Data Points Installation</h2>
          <p>
            Data points provide network access throughout your property. These outlets allow devices to connect directly to your network via Ethernet cables, providing faster and more stable connections than wireless alternatives.
          </p>
          <p>
            We install data points in strategic locations based on how the space is used. This may include home offices, entertainment areas, bedrooms, or business premises. Each data point is properly terminated, tested, and labelled for easy identification.
          </p>
          <p>
            Data points are particularly valuable for devices that require consistent, high-speed connections such as computers, gaming consoles, smart TVs, or network-attached storage. They also provide backup connectivity when Wi-Fi signals are weak or congested.
          </p>
        </div>

        {/* Patch Panels & Network Infrastructure Details */}
        <div className="dn-section">
          <h2 className="dn-section-title">Patch Panels & Network Infrastructure</h2>
          <p>
            Patch panels organise and manage network connections efficiently. They provide a central point where all network cables terminate, making it easy to connect, disconnect, or reconfigure network devices without affecting the permanent cabling infrastructure.
          </p>
          <p>
            We install patch panels in appropriate locations such as server rooms, network cabinets, or dedicated network areas. This creates a professional, organised setup that simplifies network management and troubleshooting.
          </p>
          <p>
            Network infrastructure also includes switches, routers, and other network equipment. We install and configure these devices to ensure they work together effectively, providing secure, stable connectivity throughout your property.
          </p>
        </div>

        {/* Network Setup & Configuration Details */}
        <div className="dn-section">
          <h2 className="dn-section-title">Network Setup & Configuration</h2>
          <p>
            Network setup involves configuring routers, switches, access points, and other network equipment to work together effectively. Proper configuration ensures secure connections, optimal performance, and reliable operation.
          </p>
          <p>
            We configure networks with security in mind, including proper password protection, network segmentation, and firewall settings. This helps protect your network from unauthorised access while maintaining ease of use for authorised devices.
          </p>
          <p>
            Network configuration also includes setting up Wi-Fi access points for wireless connectivity. We position and configure access points to provide consistent coverage throughout the property, minimising dead zones and ensuring reliable wireless connections.
          </p>
        </div>

        {/* When You Need Data & Networking Services */}
        <div className="dn-section">
          <h2 className="dn-section-title">When You Need Data & Networking Services</h2>
          <p>
            Data and networking services are often required during new builds, renovations, or when upgrading existing infrastructure. However, there are also clear signs that professional network installation would improve connectivity or reliability.
          </p>
          <p className="dn-benefits-intro">You may benefit from professional data and networking services if:</p>
          <ul className="dn-benefits-list">
            {whenYouNeedNetworking.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="dn-check-icon" />
                {item}
              </li>
            ))}
          </ul>
          <p>
            Homeowners often require network upgrades when adding smart home systems, home offices, or entertainment setups that demand reliable connectivity. A professional installation ensures these systems work together effectively.
          </p>
          <p>
            Small businesses need reliable network infrastructure to support operations, communication, and data management. Professional installation ensures networks can handle business requirements without downtime or performance issues.
          </p>
          <p>
            Network infrastructure is also commonly installed alongside electrical, security, or smart home upgrades. Integrating these systems properly ensures they work together smoothly and reduces duplication of cabling or equipment.
          </p>
        </div>

        {/* Why Choose NZXTGEN */}
        <div className="dn-section dn-why-choose">
          <h2 className="dn-section-title">Why Choose NZXTGEN</h2>
          <p>
            NZXTGEN approaches data and networking installation with a focus on reliability, scalability, and professional workmanship. We take the time to understand your connectivity needs and design systems accordingly.
          </p>
          <p className="dn-process-intro">Our process includes:</p>
          <ul className="dn-process-list">
            {whyChooseUs.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="dn-check-icon" />
                {item}
              </li>
            ))}
          </ul>
          <p>
            We prioritise clean, organised installations. Cabling is routed neatly, equipment is mounted securely, and all connections are properly terminated and tested. This ensures reliable performance and makes future maintenance or upgrades straightforward.
          </p>
          <p>
            Because we also specialise in electrical and smart systems, we understand how network infrastructure integrates with other property systems. This allows us to avoid conflicts, plan installations efficiently, and ensure all systems work together effectively.
          </p>
          <p>
            We also focus on future-proofing. Networks are designed to support current needs while allowing for expansion. This means you can add devices, upgrade equipment, or expand coverage without major rework of the existing infrastructure.
          </p>
        </div>

        {/* Final CTA */}
        <div className="dn-final-cta">
          <h2>Build a reliable network infrastructure for your property</h2>
          <Link to="/free-quote" className="dn-cta-button">
            👉 Request your free quote today
          </Link>
        </div>

        {/* FAQs Section */}
        <div className="dn-faqs">
          <div className="dn-faq-header">
            <FaQuestionCircle className="dn-faq-icon" />
            <h2>Data & Networking FAQs</h2>
          </div>
          <div className="dn-faq-grid">
            <div className="dn-faq-card">
              <div className="dn-faq-question">
                <span className="dn-faq-q">Q:</span>
                <h3>Can data cabling be installed in existing properties?</h3>
              </div>
              <div className="dn-faq-answer">
                <span className="dn-faq-a">A:</span>
                <p>Yes. We can install data cabling in existing properties, routing cables through walls, ceilings, or under floors as needed to minimise disruption.</p>
              </div>
            </div>
            <div className="dn-faq-card">
              <div className="dn-faq-question">
                <span className="dn-faq-q">Q:</span>
                <h3>How many data points do I need?</h3>
              </div>
              <div className="dn-faq-answer">
                <span className="dn-faq-a">A:</span>
                <p>This depends on your property size and connectivity needs. We assess your requirements and recommend the appropriate number and placement of data points.</p>
              </div>
            </div>
            <div className="dn-faq-card">
              <div className="dn-faq-question">
                <span className="dn-faq-q">Q:</span>
                <h3>Can network infrastructure support smart home systems?</h3>
              </div>
              <div className="dn-faq-answer">
                <span className="dn-faq-a">A:</span>
                <p>Yes. Proper network infrastructure provides the connectivity foundation that smart home systems require for reliable operation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataNetworkingContent;
