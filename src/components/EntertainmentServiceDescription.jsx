// src/components/EntertainmentServiceDescription.jsx
import "./EntertainmentServiceDescription.css";
import { motion } from "framer-motion";
import entertainmentHeroImage from "../assets/about/entertainment-technology-installation.jpg";

const EntertainmentServiceDescription = () => {
  return (
    <section className="ent-section">
      <div className="overlay" style={{ zIndex: 1, borderRadius: 0 }}></div>
      <div 
        className="ent-bg-image" 
        style={{ backgroundImage: `url(${entertainmentHeroImage})` }}
      ></div>

      <motion.div
        className="ent-wrapper"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="ent-title">Entertainment & Home Theatre</h2>
        <h3 className="ent-subtitle">Professional Installation for Clean, Reliable Entertainment</h3>
        <p className="ent-description">
          NZXTGEN provides professional entertainment and home theatre installation services that 
          focus on clean presentation, correct positioning, and reliable performance. We work 
          with homeowners and small businesses to install systems that suit the space and usage requirements.
        </p>
      </motion.div>
    </section>
  );
};

export default EntertainmentServiceDescription;
