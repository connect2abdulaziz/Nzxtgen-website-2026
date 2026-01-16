import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import './HomeFAQs.css';

const HomeFAQs = () => {
  return (
    <div className="home-faqs-section">
      <div className="home-faqs-container">
        <div className="faq-header">
          <FaQuestionCircle className="faq-header-icon" />
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-grid">
          <div className="faq-card">
            <div className="faq-question">
              <span className="faq-q">Q:</span>
              <h3>Do you handle both small jobs and larger installations?</h3>
            </div>
            <div className="faq-answer">
              <span className="faq-a">A:</span>
              <p>Yes. We carry out everything from single power point installations to full smart home and security system setups.</p>
            </div>
          </div>
          <div className="faq-card">
            <div className="faq-question">
              <span className="faq-q">Q:</span>
              <h3>Can you combine electrical and smart home work in one job?</h3>
            </div>
            <div className="faq-answer">
              <span className="faq-a">A:</span>
              <p>Absolutely. This is one of our strengths and helps ensure better system integration and fewer callouts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFAQs;
