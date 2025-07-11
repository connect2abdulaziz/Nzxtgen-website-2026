import React, { useEffect } from 'react';
import './ContactForm.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="contact-section">
      {/* Header Section */}
      <div className="contact-header" data-aos="fade-up">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Reach out with any questions, comments,
          or just to say hello.
        </p>
      </div>

      {/* Form and Background Image Section */}
      <div className="contact-content" data-aos="fade-up">
        {/* Left Column: Form */}
        <div className="contact-form-container">
          <h3 className="form-title">Get In Touch</h3>
          <p className="form-description">
            Please fill out the form below, and we’ll get back to you as soon
            as possible.
          </p>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" required />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" required></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
