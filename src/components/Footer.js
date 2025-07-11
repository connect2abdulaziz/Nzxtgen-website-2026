import React from "react";
import "./Footer.css";
import sitelogo from "../assets/site-logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Row: Social Media */}
      <div className="footer-top">
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>

      {/* Bottom Row: 5 Columns */}
      <div className="footer-bottom">
        {/* Column 1: Contact Info */}
        <div className="footer-column">
          <h3>Contact Info</h3>
          <p><FaMapMarkerAlt /> Condell Park, NSW 2200, Australia</p>
          <p><strong>Business Hours:</strong></p>
          <p>Mon–Fri: 9:00 AM – 5:00 PM</p>
          <p>Sat: 10:00 AM – 2:00 PM</p>
          <p>Sun: Closed</p>
        </div>

        {/* ✅ Column 2: Get in Touch */}
        <div className="footer-column">
          <h3>Get in Touch</h3>
          <a href="/free-quote">Online Quote</a>
          <a href="/Contact-Us">Contact Us Now</a>
          <a href="https://wa.me/61412345678" target="_blank" rel="noopener noreferrer">Live Chat</a>
          <p className="footer-note">
            Have a question or ready to get started? Reach out anytime using the buttons above!
          </p>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="/Privacy-policy">Privacy Policy</a>
          <a href="/Terms-and-Conditions">Terms & Conditions</a>
          <a href="/contact-us">Contact Us</a>
          <a href="/free-quote">Online Quote</a>
        </div>

        {/* Column 4: Services */}
        <div className="footer-column">
          <h3>Services</h3>
          <a href="/free-quote">Free Online Quote</a>
          <a href="/Our-Serives">Our Signature Services</a>
          <a href="/areas-we-service">Areas We Services</a>
          <a href="/smart-home">Smart Home</a>
        </div>

        {/* Column 5: Large Logo */}
        <div className="footer-column footer-logo-large">
          <img src={sitelogo} alt="Site Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
