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
      title: "Cat6 and Cat6A Data Cabling",
      text: "High-quality structured cabling systems that support current needs and future expansion. Proper cable management ensures clean installations and easy maintenance."
    },
    { 
      icon: <FaPlug />, 
      title: "Home and Office Data Points",
      text: "Strategic data point installation throughout your property to ensure reliable connectivity where you need it. Each point is properly terminated and tested for optimal performance."
    },
    { 
      icon: <FaServer />, 
      title: "Network Cabinets and Racks",
      text: "Professional network infrastructure with organised cabinets and racks. Centralised network management for easy access and maintenance."
    },
    { 
      icon: <FaWifi />, 
      title: "Patch Panels and Network Switches",
      text: "Centralised network connections through patch panels and switches. Organised infrastructure that simplifies network management and troubleshooting."
    },
    { 
      icon: <FaNetworkWired />, 
      title: "NBN-Ready Cabling and Connection Support",
      text: "All installations are NBN-ready and designed to support modern networking equipment. Future-proof infrastructure for reliable connectivity."
    }
  ];

  const whenYouNeedNetworking = [
    "Slow or inconsistent internet speeds across rooms",
    "Frequent Wi-Fi dropouts or buffering",
    "Poor signal in home offices or workspaces",
    "Network congestion with multiple users or devices",
    "Messy, unlabelled or outdated cabling"
  ];

  const whyChooseUs = [
    "Assessing current and future connectivity needs",
    "Advising on Cat6 or Cat6A cabling based on usage",
    "Planning data point locations for real-world use",
    "Installing patch panels and network switches to centralise connections",
    "Testing and labelling every cable for clarity and reliability"
  ];

  return (
    <div className="data-networking-content">
      {/* Top CTA Section */}
      <div className="dn-top-cta">
        <div className="dn-cta-container">
          <p className="dn-cta-question">Need better connectivity at home or work?</p>
          <Link to="/free-quote" className="dn-cta-button">
            👉 Request your free quote online
          </Link>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="dn-main-container">
        {/* What This Service Is */}
        <div className="dn-section">
          <h2 className="dn-section-title">What This Service Is</h2>
          <p>
            Data and networking infrastructure is the foundation of how modern homes and workplaces 
            operate. From internet access and work-from-home setups to smart technology, security 
            systems and entertainment, reliable cabling and network design are essential for consistent 
            performance.
          </p>
          <p>
            NZXTGEN provides professional data and networking services that focus on stability, 
            organisation and long-term reliability. We design and install structured cabling systems that 
            allow devices to communicate efficiently without relying solely on wireless connections, 
            which can be affected by distance, interference and network congestion.
          </p>
        </div>

        {/* Networking Services Grid */}
        <div className="dn-section dn-services-section">
          <h2 className="dn-section-title">Our Services Include</h2>
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
            Structured cabling creates a centralised network where all data points run back to one 
            location, typically a network cabinet or patch panel. This setup allows internet, internal 
            networks, security systems and smart technology to operate from a single, organised hub. 
            It also makes fault finding, upgrades and future expansion significantly easier.
          </p>
          <p>
            All cabling is installed neatly, securely and labelled clearly. This ensures every connection 
            is identifiable, tested and documented, avoiding confusion or unnecessary work later. 
            Whether the system supports internet access, internal networking, CCTV, audio-visual 
            equipment or smart home systems, the goal is clean infrastructure that performs reliably 
            under everyday use.
          </p>
          <p>
            Rather than temporary fixes such as Wi-Fi extenders or exposed cabling, we install 
            permanent solutions designed to support how properties are used.
          </p>
        </div>

        {/* When You Need Data & Networking Services */}
        <div className="dn-section">
          <h2 className="dn-section-title">When You Need Data & Networking Services</h2>
          <p>
            Many properties in Condell Park were built before modern connectivity demands existed. As 
            internet usage, remote work and smart technology become more common, existing 
            networks often struggle to keep up.
          </p>
          <p className="dn-benefits-intro">You may need data and networking services if you experience:</p>
          <ul className="dn-benefits-list">
            {whenYouNeedNetworking.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="dn-check-icon" />
                {item}
              </li>
            ))}
          </ul>
          <p>
            Home offices are one of the most common reasons for data upgrades. Video calls, cloud-based 
            software and file sharing require stable connections that Wi-Fi alone may not 
            consistently provide. Installing fixed data points ensures reliable performance and reduces 
            interruptions during work hours.
          </p>
          <p>
            Small businesses and home-based operators also benefit from structured cabling. Shared 
            printers, servers, security systems and point-of-sale equipment all depend on a stable 
            internal network. Centralising data points through patch panels and network switches 
            improves performance and simplifies maintenance.
          </p>
          <p>
            New builds and renovations are ideal times to plan data cabling properly. Installing Cat6 or 
            Cat6A cabling during construction avoids surface-mounted solutions later and allows 
            networks to be designed around the layout of the space. This future-proofs the property as 
            connectivity requirements continue to grow.
          </p>
          <p>
            Data and networking services are also essential when installing:
          </p>
          <ul className="dn-benefits-list">
            <li><FaCheckCircle className="dn-check-icon" />CCTV and security systems</li>
            <li><FaCheckCircle className="dn-check-icon" />Smart lighting and automation</li>
            <li><FaCheckCircle className="dn-check-icon" />Intercoms and access control</li>
            <li><FaCheckCircle className="dn-check-icon" />Home theatre and audio systems</li>
          </ul>
          <p>
            These systems rely on reliable network connections to function correctly. Poor cabling often 
            leads to ongoing performance issues and unnecessary troubleshooting.
          </p>
        </div>

        {/* Why Choose NZXTGEN */}
        <div className="dn-section dn-why-choose">
          <h2 className="dn-section-title">Why Choose NZXTGEN</h2>
          <p>
            NZXTGEN approaches data and networking with a practical mindset. We focus on 
            performance, organisation and flexibility rather than overcomplicated systems that are 
            difficult to manage.
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
            We take the time to understand how many devices will be connected, where they are used 
            and how the network needs to perform. This ensures systems are designed correctly from 
            the start, reducing future limitations.
          </p>
          <p>
            Attention to detail is a key part of our work. Cables are routed neatly, secured properly and 
            concealed where possible. Network cabinets and racks are organised logically, allowing 
            easy access without clutter.
          </p>
          <p>
            We also prioritise flexibility. As technology changes, a structured network allows additional 
            data points, devices or services to be added without major disruption or rework.
          </p>
          <p>
            Clear communication is maintained throughout the project. We explain what is being 
            installed, how it works and how it can be expanded or maintained. Clients are left with a 
            network they understand and can rely on.
          </p>
          <p>
            NZXTGEN provides data and networking services throughout Condell Park and the 
            surrounding south-west Sydney region.
          </p>
        </div>

        {/* Final CTA */}
        <div className="dn-final-cta">
          <h2>Upgrade your connectivity today</h2>
          <Link to="/free-quote" className="dn-cta-button">
            👉 Get your free quote now
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
                <h3>Can data points be added without major wall damage?</h3>
              </div>
              <div className="dn-faq-answer">
                <span className="dn-faq-a">A:</span>
                <p>In many cases, yes. We assess access paths and existing cavities before installation to minimise disruption.</p>
              </div>
            </div>
            <div className="dn-faq-card">
              <div className="dn-faq-question">
                <span className="dn-faq-q">Q:</span>
                <h3>Do you support NBN-ready installations?</h3>
              </div>
              <div className="dn-faq-answer">
                <span className="dn-faq-a">A:</span>
                <p>Yes. All cabling and data points are installed to support NBN connections and modern networking equipment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataNetworkingContent;
