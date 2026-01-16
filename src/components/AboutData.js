import React from 'react';
import { FaCertificate, FaHome, FaHandshake, FaMapMarkerAlt, FaRocket, FaQuestionCircle } from 'react-icons/fa';
import "./AboutData.css";

const AboutData = ({ isExiting }) => {
  return (
    <div className={`about-data ${isExiting ? "exiting" : ""}`}>
      <div className="fadeColorBg">
        <div className="about-header">
          <div className="header-decoration"></div>
          <h1>About Us</h1>
          <p className="header-subtitle">Your Trusted Electrical & Smart Home Experts</p>
        </div>

        {/* Main Content Section */}
        <div className="about-main-content">
          {/* Intro Card */}
          <div className="about-intro">
            <div className="intro-icon">
              <FaHome />
            </div>
            <p>
              NZXTGEN is built on practical experience, technical knowledge and a strong commitment to doing work properly. We operate with a clear focus on safety, compliance and long-term performance, providing electrical and technology solutions that clients can trust.
            </p>
          </div>

          {/* Feature Sections with Icons */}
          <div className="about-sections-grid">
            <div className="about-section-card">
              <div className="section-icon-wrapper">
                <FaCertificate className="section-icon" />
              </div>
              <h2>Licensed Professionals</h2>
              <div className="section-divider"></div>
              <p>
                All work is carried out by licensed professionals who understand Australian Standards and current regulations. This matters not only for safety, but also for insurance, resale value and long-term reliability. When you choose NZXTGEN, you're choosing compliant workmanship that stands up over time.
              </p>
            </div>

            <div className="about-section-card">
              <div className="section-icon-wrapper">
                <FaHome className="section-icon" />
              </div>
              <h2>Comprehensive Experience</h2>
              <div className="section-divider"></div>
              <p>
                Our experience covers residential homes, renovations, new builds, strata properties and small commercial spaces. We regularly work on mixed systems where electrical, data, smart controls and security need to function together seamlessly. This broad skill set allows us to design cleaner installations and avoid common issues caused by fragmented trades.
              </p>
            </div>

            <div className="about-section-card">
              <div className="section-icon-wrapper">
                <FaHandshake className="section-icon" />
              </div>
              <h2>Trust & Reliability</h2>
              <div className="section-divider"></div>
              <p>
                Trust is central to how we operate. We turn up when scheduled, communicate clearly, and complete work as agreed. Clients know exactly what's being installed and why, with no vague explanations or rushed decisions.
              </p>
            </div>

            <div className="about-section-card">
              <div className="section-icon-wrapper">
                <FaMapMarkerAlt className="section-icon" />
              </div>
              <h2>Local Expertise</h2>
              <div className="section-divider"></div>
              <p>
                Being locally based means we understand the types of properties, electrical layouts and upgrade needs common in the area. From older homes needing rewiring or safer power distribution to newer builds requiring smart controls and structured cabling, our solutions are tailored to local conditions and real usage.
              </p>
            </div>

            <div className="about-section-card">
              <div className="section-icon-wrapper">
                <FaRocket className="section-icon" />
              </div>
              <h2>Futureproofing</h2>
              <div className="section-divider"></div>
              <p>
                We also place strong emphasis on futureproofing. Technology changes quickly, and we design systems that can be expanded or upgraded without unnecessary rewiring or replacement. This saves money and frustration down the track.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="about-closing">
            <div className="closing-content">
              <h2>Our Commitment</h2>
              <p>
                NZXTGEN isn't about volume work or rushed installations. It's about delivering electrical and technology solutions that function properly, look neat, and support how people live and work every day.
              </p>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="about-faqs">
            <div className="faq-header">
              <FaQuestionCircle className="faq-header-icon" />
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-card">
                <div className="faq-question">
                  <span className="faq-q">Q:</span>
                  <h3>Are all services performed by licensed technicians?</h3>
                </div>
                <div className="faq-answer">
                  <span className="faq-a">A:</span>
                  <p>Yes. All electrical work is completed by licensed professionals in line with Australian Standards.</p>
                </div>
              </div>
              <div className="faq-card">
                <div className="faq-question">
                  <span className="faq-q">Q:</span>
                  <h3>Do you work on both residential and small commercial properties?</h3>
                </div>
                <div className="faq-answer">
                  <span className="faq-a">A:</span>
                  <p>Yes. We regularly work with homeowners, landlords and small businesses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutData;
