import React from "react";
import "./EnquiryForm.css";
import { trackFormSubmission } from "../utils/analytics";

const EnquiryForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    trackFormSubmission('enquiry', 'enquiry_form');
    // Form submission logic here
    alert('Thank you for your enquiry! We will get back to you soon.');
  };

  return (
    <div className="enquiry-section">
      <div className="enquiry-card">
        <h2>
          Enquire Now & Save <span>$50 Off</span> Your Electrical, Security & Tech needs!
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Your Phone" required />
            <input type="text" placeholder="Your Address" required />
          </div>
          <textarea placeholder="How Can We Help You?" required></textarea>
          <div className="file-upload">
            <input type="file" id="fileUpload" />
            <label htmlFor="fileUpload">Upload File</label>
            <span>Max file size: 10MB</span>
          </div>
          <button type="submit" className="submit-btn">Submit Form</button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
