import React from "react";
import WhatsappChat from "../components/WhatsappChat";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div id="ContactUs">
      {/* Gradient Background */}
      <div className="gradient-background"></div>

      {/* Overlay content */}
      <div className="content-overlay">
        <WhatsappChat />
        <Navbar />
        <div className="contactUs-des-container">
          
        </div>
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
