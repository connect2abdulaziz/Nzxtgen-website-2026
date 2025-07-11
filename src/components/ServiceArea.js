import React from "react"; 
import "./ServiceArea.css";

const ServiceArea = () => {
  return (
    <div className="service-area">
      <div className="content">
        <h1>Areas We Service</h1>
        <p>We service all of Sydney!</p>
        <div className="buttons">
          <a
            href="https://wa.me/61455544902"  // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="book-now">Book Now</button>
          </a>
          <button className="same-day">PROMPT RESPONSE</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
