import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaTv, 
  FaPlug, 
  FaVolumeUp, 
  FaMusic,
  FaLightbulb,
  FaCheckCircle, 
  FaQuestionCircle 
} from 'react-icons/fa';
import './EntertainmentServiceContent.css';

const EntertainmentServiceContent = () => {
  const entertainmentServices = [
    { 
      icon: <FaTv />, 
      title: "TV Wall Mounting",
      text: "TV wall mounting improves viewing comfort, frees up floor space, and creates a streamlined look. We assess wall construction, screen size, and viewing angles before installation. TVs are mounted securely and aligned precisely to suit the room layout."
    },
    { 
      icon: <FaPlug />, 
      title: "Home Theatre Wiring",
      text: "Reliable wiring is the foundation of any home theatre system. We plan wiring routes carefully to keep cables concealed and protected. All cabling is labelled and installed in a structured way, making future upgrades or troubleshooting far easier."
    },
    { 
      icon: <FaVolumeUp />, 
      title: "Audio & AV Setup",
      text: "Audio and AV systems can include wired, wireless, and Bluetooth components depending on the application. Each setup is configured to balance performance, reliability, and ease of use. We ensure all components communicate correctly and perform as intended."
    },
    { 
      icon: <FaMusic />, 
      title: "Wall & Ceiling Speakers",
      text: "Wall and ceiling speakers provide immersive sound without taking up floor space. We install speakers securely and discreetly, ensuring wiring is hidden and sound distribution is even. This creates a clean finish while delivering consistent audio performance."
    },
    { 
      icon: <FaPlug />, 
      title: "Hidden & Organised Cable Management",
      text: "Cable management is one of the most important aspects of entertainment installations. We route and secure cables neatly behind walls, ceilings, or cabinetry where possible. All connections are organised logically, reducing visual clutter."
    },
    { 
      icon: <FaLightbulb />, 
      title: "Media Wall & TV Integrated LED Strip Lighting",
      text: "Media wall lighting using LED strip systems enhances the look of TVs, feature walls and built-in joinery. LED strips can be recessed, edge-lit or concealed within cabinetry to create a clean, modern finish. Lighting can be dimmed or integrated into smart home systems."
    }
  ];

  const whenYouNeedEntertainment = [
    "A TV is mounted too high, low, or insecurely",
    "Cables are visible, tangled, or difficult to access",
    "Sound quality is uneven or unclear",
    "Devices frequently disconnect or fail to sync",
    "The system is difficult to operate or maintain"
  ];

  const whyChooseUs = [
    "Assessing room layout and viewing angles",
    "Planning speaker placement and wiring paths",
    "Installing equipment securely and neatly",
    "Configuring systems for stable performance",
    "Testing all connections before completion"
  ];

  return (
    <div className="entertainment-service-content">
      {/* Top CTA Section */}
      <div className="ent-top-cta">
        <div className="ent-cta-container">
          <p className="ent-cta-question">Want a clean, reliable entertainment setup that just works?</p>
          <Link to="/free-quote" className="ent-cta-button">
            👉 Request a free quote today
          </Link>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="ent-main-container">
        {/* Main Title and Intro */}
        <div className="ent-header-section">
          <h1 className="ent-main-title">Entertainment & Home Theatre Installation – NZXTGEN</h1>
          <div className="ent-intro-content">
            <p>
              A well-designed entertainment or home theatre setup should enhance how you enjoy movies, television, music, and presentations without clutter, visible wiring, or technical frustration. Whether it's a family living room, a dedicated media space, or a small commercial environment, proper installation makes a significant difference to both performance and appearance.
            </p>
            <p>
              NZXTGEN provides professional entertainment and home theatre installation services that focus on clean presentation, correct positioning, and reliable performance. We work with homeowners and small businesses to install systems that suit the space, usage requirements, and future expansion needs. Our approach is practical and measured, ensuring systems are easy to use and built to last.
            </p>
          </div>
        </div>

        {/* What Entertainment & Home Theatre Installation Involves */}
        <div className="ent-section">
          <h2 className="ent-section-title">What Entertainment & Home Theatre Installation Involves</h2>
          <p>
            Entertainment and home theatre installation involves more than mounting a screen or connecting speakers. It requires careful planning of equipment placement, cabling routes, signal flow, and user access to controls.
          </p>
        </div>

        {/* Entertainment Services Grid */}
        <div className="ent-section ent-services-section">
          <h2 className="ent-section-title">Our Entertainment & Home Theatre Services</h2>
          <div className="ent-services-grid">
            {entertainmentServices.map((service, index) => (
              <div key={index} className="ent-service-card">
                <div className="ent-service-icon">{service.icon}</div>
                <div className="ent-service-content">
                  <h3 className="ent-service-title">{service.title}</h3>
                  <p className="ent-service-text">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TV Wall Mounting Details */}
        <div className="ent-section">
          <h2 className="ent-section-title">TV Wall Mounting</h2>
          <p>
            TV wall mounting improves viewing comfort, frees up floor space, and creates a streamlined look. Correct mounting height, bracket selection, and wall support are essential to ensure safety and long-term stability.
          </p>
          <p>
            We assess wall construction, screen size, and viewing angles before installation. TVs are mounted securely and aligned precisely to suit the room layout. Where required, we also allow for future access to ports and connections without removing the screen.
          </p>
        </div>

        {/* Home Theatre Wiring Details */}
        <div className="ent-section">
          <h2 className="ent-section-title">Home Theatre Wiring</h2>
          <p>
            Reliable wiring is the foundation of any home theatre system. This includes cabling for displays, audio equipment, streaming devices, gaming consoles, and control systems. Proper wiring ensures consistent signal quality and reduces interference or dropouts.
          </p>
          <p>
            We plan wiring routes carefully to keep cables concealed and protected. All cabling is labelled and installed in a structured way, making future upgrades or troubleshooting far easier. This approach avoids the clutter and confusion often caused by ad-hoc installations.
          </p>
        </div>

        {/* Audio & AV Setup Details */}
        <div className="ent-section">
          <h2 className="ent-section-title">Audio & AV Setup</h2>
          <p>
            Audio and AV systems can include wired, wireless, and Bluetooth components depending on the application. Each setup is configured to balance performance, reliability, and ease of use.
          </p>
          <p>
            Long-range cabling is used where stable, high-quality signal transmission is required. Wireless and Bluetooth connections are configured carefully to avoid interference and ensure devices connect reliably. We ensure all components communicate correctly and perform as intended.
          </p>
        </div>

        {/* Wall & Ceiling Speakers Details */}
        <div className="ent-section">
          <h2 className="ent-section-title">Wall & Ceiling Speakers</h2>
          <p>
            Wall and ceiling speakers provide immersive sound without taking up floor space. Placement is critical to achieve balanced audio coverage and clarity. Speakers must be positioned to suit room size, layout, and intended listening areas.
          </p>
          <p>
            We install speakers securely and discreetly, ensuring wiring is hidden and sound distribution is even. This creates a clean finish while delivering consistent audio performance throughout the space.
          </p>
        </div>

        {/* Hidden & Organised Cable Management Details */}
        <div className="ent-section">
          <h2 className="ent-section-title">Hidden & Organised Cable Management</h2>
          <p>
            Cable management is one of the most important aspects of entertainment installations. Visible or tangled cables detract from the appearance of the space and make maintenance difficult.
          </p>
          <p>
            We route and secure cables neatly behind walls, ceilings, or cabinetry where possible. All connections are organised logically, reducing visual clutter and making future access straightforward.
          </p>
        </div>

        {/* Media Wall & TV Integrated LED Strip Lighting Details */}
        <div className="ent-section">
          <h2 className="ent-section-title">Media Wall & TV Integrated LED Strip Lighting</h2>
          <p>
            Media wall lighting using LED strip systems enhances the look of TVs, feature walls and built-in joinery. LED strips can be recessed, edge-lit or concealed within cabinetry to create a clean, modern finish. Lighting can be dimmed or integrated into smart home systems to suit different viewing modes and room ambience.
          </p>
          <p>
            LED strip lighting can be integrated behind TVs and media walls to sync with on-screen content or provide complementary backlighting, enhancing the overall entertainment setup.
          </p>
        </div>

        {/* When You Need Entertainment & Home Theatre Installation */}
        <div className="ent-section">
          <h2 className="ent-section-title">When You Need Entertainment & Home Theatre Installation</h2>
          <p>
            Many installations occur during renovations, new builds, or when upgrading existing equipment. However, there are also clear signs that professional installation would improve performance or usability.
          </p>
          <p className="ent-benefits-intro">You may benefit from professional entertainment and home theatre services if:</p>
          <ul className="ent-benefits-list">
            {whenYouNeedEntertainment.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="ent-check-icon" />
                {item}
              </li>
            ))}
          </ul>
          <p>
            Homeowners often request upgrades when transitioning to larger screens, surround sound, or multi-room audio. A professional setup ensures new equipment integrates smoothly with existing systems.
          </p>
          <p>
            Small businesses such as offices, meeting rooms, and hospitality spaces also require reliable audio-visual setups. Clear displays, stable audio, and tidy installations contribute to a professional environment and reduce downtime during use.
          </p>
          <p>
            Entertainment systems are also commonly installed alongside smart home or data upgrades. Integrating AV systems with existing infrastructure improves control and reduces duplication of cabling.
          </p>
        </div>

        {/* Why Choose NZXTGEN */}
        <div className="ent-section ent-why-choose">
          <h2 className="ent-section-title">Why Choose NZXTGEN</h2>
          <p>
            NZXTGEN approaches entertainment and home theatre installation with a focus on precision, reliability, and usability. We take the time to understand how the space will be used and design systems accordingly.
          </p>
          <p className="ent-process-intro">Our process includes:</p>
          <ul className="ent-process-list">
            {whyChooseUs.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="ent-check-icon" />
                {item}
              </li>
            ))}
          </ul>
          <p>
            We prioritise clean workmanship. Installations are completed with minimal disruption, and work areas are left tidy once the job is done. Attention to detail ensures systems look as good as they perform.
          </p>
          <p>
            Because we also specialise in electrical and data services, we understand how entertainment systems interact with broader infrastructure. This allows us to avoid common issues such as overloaded circuits, signal interference, or poor cable routing.
          </p>
          <p>
            We also focus on long-term usability. Systems are configured so that everyday operation is straightforward, without unnecessary complexity. Where future upgrades are likely, we plan installations to accommodate expansion without major rework.
          </p>
        </div>

        {/* Final CTA */}
        <div className="ent-final-cta">
          <h2>Upgrade your entertainment experience with confidence</h2>
          <Link to="/free-quote" className="ent-cta-button">
            👉 Request your free quote today
          </Link>
        </div>

        {/* FAQs Section */}
        <div className="ent-faqs">
          <div className="ent-faq-header">
            <FaQuestionCircle className="ent-faq-icon" />
            <h2>Entertainment & Home Theatre FAQs</h2>
          </div>
          <div className="ent-faq-grid">
            <div className="ent-faq-card">
              <div className="ent-faq-question">
                <span className="ent-faq-q">Q:</span>
                <h3>Can existing TVs and speakers be reused in a new setup?</h3>
              </div>
              <div className="ent-faq-answer">
                <span className="ent-faq-a">A:</span>
                <p>Yes. We can integrate existing equipment where it is compatible and in good condition.</p>
              </div>
            </div>
            <div className="ent-faq-card">
              <div className="ent-faq-question">
                <span className="ent-faq-q">Q:</span>
                <h3>Is wall mounting safe for large TVs?</h3>
              </div>
              <div className="ent-faq-answer">
                <span className="ent-faq-a">A:</span>
                <p>Yes. We use appropriate brackets and fixings based on wall type and screen size.</p>
              </div>
            </div>
            <div className="ent-faq-card">
              <div className="ent-faq-question">
                <span className="ent-faq-q">Q:</span>
                <h3>Can cabling be hidden in existing rooms?</h3>
              </div>
              <div className="ent-faq-answer">
                <span className="ent-faq-a">A:</span>
                <p>In many cases, yes. We assess access points to minimise visible wiring.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentServiceContent;
