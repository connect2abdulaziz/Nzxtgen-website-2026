// src/components/SecurityServiceDescription.jsx
import "./SecurityServiceDescription.css";
import { motion } from "framer-motion";
import securityHeroImage from "../assets/about/security-systems-installation.jpg";

const SecurityServiceDescription = () => {
  return (
    <section className="ss-section">
      <div className="overlay" style={{ zIndex: 1, borderRadius: 0 }}></div>
      <div 
        className="ss-bg-image" 
        style={{ backgroundImage: `url(${securityHeroImage})` }}
      ></div>

      <motion.div
        className="ss-wrapper"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="ss-title">Security Systems</h2>
        <h3 className="ss-subtitle">Professional Protection for Homes & Businesses</h3>
        <p className="ss-description">
          NZXTGEN provides professional security system installations that focus on practical 
          protection rather than unnecessary complexity. We design systems that suit the layout 
          of the property, the level of risk, and how the space is used day to day.
        </p>
      </motion.div>
    </section>
  );
};

export default SecurityServiceDescription;
