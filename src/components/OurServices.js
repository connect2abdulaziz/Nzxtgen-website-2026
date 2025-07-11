import React from "react";
import "./OurServices.css";

import electricalIcon from "../assets/electric.png";
import automationIcon from "../assets/automationicon.png";
import securityIcon from "../assets/technology.png";
import entertainmentIcon from "../assets/popcorn.png";

const services = [
  {
    icon: automationIcon,
    title: "Smart Home",
    points: [
      "Smart lights adjust brightness and color instantly via smartphone.",
      "Smart appliances streamline cooking and cleaning tasks.",
      "Smart switches enable seamless control of multiple devices.",
      "Automated curtains enhance comfort and energy savings.",
      "Embrace the future of living with innovative smart solutions."
    ]
  },
  {
    icon: electricalIcon,
    title: "Electrical",
    points: [
      "Enhance home functionality with lights, switches, powerpoints, and fans.",
      "Safe and efficient electrical system installations.",
      "Upgrade lighting, add powerpoints, install ceiling fans.",
      "Follow safety guidelines and local regulations.",
      "Consult a professional electrician for correct setup."
    ]
  },
  {
    icon: securityIcon,
    title: "Security",
    points: [
      "Integrate CCTV, smart door locks, alarms, intercoms, smoke alarms.",
      "Single control panel for safety and convenience.",
      "24/7 home security protection and monitoring.",
      "Remote smartphone access anytime, anywhere.",
      "Future-ready security solutions for peace of mind."
    ]
  },
  {
    icon: entertainmentIcon,
    title: "Entertainment",
    points: [
      "Professional home theatre installations.",
      "TV wall mounting with hidden cables.",
      "Wall-mounted or ceiling flush-mounted speakers.",
      "Big screen control panels for smart home control.",
      "Complete cabling ensures strong data, video, audio connections."
    ]
  }
];

const OurServices = () => {  
  return (
    <section className="our-services">
      <div className="services-title-overlay">
        <div className="services-title">     
          <h1>OUR SERVICES</h1>  
        </div>
      </div>
      <div className="services-bg">
        <div className="services-overlay"></div>
        

        

        <div className="services-wrapper">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h3 className="service-title">{service.title}</h3>
              <ul className="service-points">
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
