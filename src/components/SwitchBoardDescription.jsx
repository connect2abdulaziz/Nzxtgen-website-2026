// src/components/SwitchBoardDescription.jsx
import "./SwitchBoardDescription.css";
import { motion } from "framer-motion";

const SwitchBoardDescription = () => {
  return (
    <section className="sb-section">
      <div className="overlay" style={{ zIndex: 1, borderRadius: 0 }}></div>
      <div className="sb-bg-gradient"></div>

      <motion.div
        className="sb-wrapper"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="sb-title">Switchboard Upgrades</h2>
        <h3 className="sb-subtitle">Safe, Compliant Electrical Protection for Modern Homes</h3>
        <p className="sb-description">
          NZXTGEN provides professional electrical switchboard upgrades designed to improve 
          safety, compliance, and performance in residential properties. A switchboard upgrade 
          involves replacing an outdated electrical board with a modern system that uses circuit 
          breakers and safety switches.
        </p>
      </motion.div>
    </section>
  );
};

export default SwitchBoardDescription;
