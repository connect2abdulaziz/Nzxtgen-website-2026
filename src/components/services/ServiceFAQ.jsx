import React, { useState } from 'react';
import faqImage from '../../assets/services/service-image-6.jpg';
import './ServiceFAQ.css';

const ServiceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: "What types of electrical services do you offer?",
      answer: "We offer a wide range of services including residential electrical installations, smart home automation, security systems, data networking, and entertainment technology setups."
    },
    {
      question: "Are your electricians licensed and insured?",
      answer: "Yes, all our electricians are fully licensed, insured, and comply with Australian Standards. We maintain current certifications and ongoing training."
    },
    {
      question: "Do you provide emergency electrical services?",
      answer: "Yes, we offer emergency electrical services for urgent issues. Contact us directly for availability and response times in your area."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing varies based on the scope of work. We provide free quotes for all projects, ensuring transparent and competitive pricing with no hidden fees."
    },
    {
      question: "Can you help with energy-efficient upgrades?",
      answer: "Absolutely! We specialize in energy-efficient solutions including LED lighting upgrades, smart automation systems, and electrical improvements to reduce power consumption."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="service-faq-section">
      <div className="service-faq-container">
        <div className="service-faq-header">
          <div className="service-faq-header-left">
            <span className="service-faq-label">
              <span className="faq-dot"></span>
              FREQUENTLY ASKED QUESTION
            </span>
            <h2 className="service-faq-title">
              Common questions about our <span className="highlight">services</span>
            </h2>
          </div>
          <div className="service-faq-header-right">
            <p className="service-faq-description">
              The feedback from our clients speaks volumes about the quality of our services. Read how we've helped them with reliable solutions.
            </p>
          </div>
        </div>

        <div className="service-faq-content">
          <div className="service-faq-image">
            <img src={faqImage} alt="Professional electrician at work" />
          </div>
          <div className="service-faq-list">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`service-faq-item ${openIndex === index ? 'active' : ''}`}
              >
                <button 
                  className="service-faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="faq-number">{index + 1}.</span>
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-icon">
                    {openIndex === index ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M8 12h8"/>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 8v8M8 12h8"/>
                      </svg>
                    )}
                  </span>
                </button>
                <div className="service-faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
