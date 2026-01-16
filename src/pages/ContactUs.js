import React from "react";
import WhatsappChat from "../components/WhatsappChat";
import MobileCallButton from "../components/MobileCallButton";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import ContactContent from "../components/ContactContent";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import LocalBusinessSchema from "../components/LocalBusinessSchema";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div id="ContactUs">
      <SEO 
        title="Contact NZXTGEN | Electrical & Smart Home Services"
        description="Contact NZXTGEN to discuss your electrical, smart home or security needs. Licensed, reliable service with free online quotes."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/contact-us' : undefined}
      />
      <LocalBusinessSchema />
      {/* Gradient Background */}
      <div className="gradient-background"></div>

      {/* Overlay content */}
      <div className="content-overlay">
        <WhatsappChat />
        <MobileCallButton />
        <Navbar />
        <div className="contactUs-des-container">
          <ContactContent />
        </div>
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
