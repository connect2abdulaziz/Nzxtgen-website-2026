import React, { useEffect } from "react";
import "./GetAQuote.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { trackFormSubmission, trackQuoteRequest } from "../utils/analytics";
import OnlineQuoteBG from "../assets/about/entertainment-technology-installation.jpg";
import OnlineQuoteFormBG from "../assets/about/electrical-services-installation.jpg";

const GetAQuote = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    trackFormSubmission('quote', 'free_quote_form');
    trackQuoteRequest('free_quote_page');
    // Form submission logic here
    alert('Thank you for your quote request! We will get back to you soon.');
  };

  return (
    <section
      className="quote-section1"
      style={{
        backgroundImage: `url(${OnlineQuoteBG})`,
      }}
    >
      <div
        className="quote-container1"
        data-aos="fade-up"
        style={{
          backgroundImage: `url(${OnlineQuoteFormBG})`,
        }}
      >
        <div className="overlay border-radius"></div>

        <form className="quote-form1" onSubmit={handleSubmit}>
          <h1 className="quote-header1">Get A Free Online Quote</h1>

          <div className="form-row1">
            <div className="name">
              <label>First Name*</label>
              <input type="text" required />
            </div>
            <div className="name">
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>

          <div className="form-row">
            <label>Email*</label>
            <input type="email" required />
          </div>

          <div className="form-row">
            <label>Phone</label>
            <input type="tel" />
          </div>

          <div className="form-row">
            <label>Description of Work*</label>
            <textarea required></textarea>
          </div>

          <div className="form-row">
            <label>Building Type*</label>
            <select required>
              <option value="">Choose one</option>
              <option>Apartment (Under 4 Levels)</option>
              <option>Apartment (Over 5 Levels)</option>
              <option>Single Story</option>
              <option>Double Story</option>
              <option>Town House (Single Story)</option>
              <option>Town House (Double Story)</option>
              <option>Other</option>
              <option>Granny Flat</option>
            </select>
          </div>

          <div className="form-row">
            <label>If other, please specify:</label>
            <input type="text" />
          </div>

          {/* Wall types */}
          <div className="form-row">
            <label>Which type suits your walls? (select one or more):</label>
            <div className="checkbox-group">
              <label><input type="checkbox" />Dry Wall (Internal)</label>
              <label><input type="checkbox" />Rendered Wall (Internal)</label>
              <label><input type="checkbox" />Brick Wall (External)</label>
              <label><input type="checkbox" />Fibro Wall (External)</label>
              <label><input type="checkbox" />Timber (External)</label>
            </div>
          </div>

          {/* Ceiling types */}
          <div className="form-row">
            <label>Which type suits your ceilings? (select one or more):</label>
            <div className="checkbox-group">
              <label><input type="checkbox" />Concrete</label>
              <label><input type="checkbox" />Gyprock/Drywall</label>
              <label><input type="checkbox" />Fibro type / Cement sheet</label>
              <label><input type="checkbox" />Timber</label>
              <label><input type="checkbox" />Suspended ceiling/False ceiling</label>
            </div>
          </div>

          {/* Roof types */}
          <div className="form-row">
            <label>Roof Type*</label>
            <select required>
              <option value="">Choose one</option>
              <option>Flat with roof tiles</option>
              <option>Flat with tin/metal sheets</option>
              <option>Pitched with roof tiles</option>
              <option>Pitched with tin/metal sheets</option>
              <option>Other</option>
            </select>
          </div>

          {/* Other options */}
          <div className="form-row">
            <label>Please select which is applicable (select one or more):</label>
            <div className="checkbox-group">
              <label><input type="checkbox" />Roof access available</label>
              <label><input type="checkbox" />Underground access available</label>
              <label><input type="checkbox" />Apartment not on highest level</label>
              <label><input type="checkbox" />Multi-level commercial complex</label>
            </div>
          </div>

          {/* Notes */}
          <div className="form-row">
            <p className="note-text">
              To provide you with a more accurate quote, please feel free to include any photos you have.
            </p>
          </div>

          <div className="form-row">
            <button type="button" className="file-upload-btn">
              + Upload File
            </button>
          </div>

          <div className="form-row">
            <p className="note-text">
              Thank you for reaching out. We may be experiencing a high volume of work, and it may take some time for us to respond.
            </p>
          </div>

          {/* Submit button */}
          <div className="form-row">
            <button type="submit" className="request-quote-btn">
              Request a Quote
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetAQuote;
