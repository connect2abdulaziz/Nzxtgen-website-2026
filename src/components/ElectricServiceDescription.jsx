// src/components/ElectricServiceDescription.jsx
import "./ElectricServiceDescription.css";
import { motion } from "framer-motion";
import electricalVideo from "../assets/video/nzxtgen-electrical-services-hero-video.mp4";
import electricalHeroImage from "../assets/nzxtgen-electrical-services-hero.jpg";

const ElectricServiceDescription = () => {
  return (
    <section className="es-section">
      <div className="overlay" style={{ zIndex: 1, borderRadius: 0 }}></div>
      <video className="es-bg-video" autoPlay muted loop playsInline poster={electricalHeroImage}>
        <source src={electricalVideo} type="video/mp4" />
      </video>

      <motion.div
        className="es-wrapper"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="es-title">Electrical Services</h2>
        <h3 className="es-subtitle">Reliable Electrical Solutions for Homes & Businesses</h3>
        <p className="es-description">
          NZXTGEN provides comprehensive electrical services designed to support safe, 
          functional, and modern homes and small business spaces. Our licensed electricians 
          deliver practical outcomes with safe installations, dependable performance, and 
          systems that suit the way people live and work.
        </p>
      </motion.div>
    </section>
  );
};

export default ElectricServiceDescription;
