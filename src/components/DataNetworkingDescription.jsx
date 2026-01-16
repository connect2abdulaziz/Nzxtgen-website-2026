// src/components/DataNetworkingDescription.jsx
import "./DataNetworkingDescription.css";
import { motion } from "framer-motion";

const DataNetworkingDescription = () => {
  return (
    <section className="dn-section">
      <div className="overlay" style={{ zIndex: 1, borderRadius: 0 }}></div>
      <div className="dn-bg-gradient"></div>

      <motion.div
        className="dn-wrapper"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="dn-title">Data & Networking</h2>
        <h3 className="dn-subtitle">Reliable Network Infrastructure for Modern Properties</h3>
        <p className="dn-description">
          NZXTGEN provides professional data and networking services including structured cabling, 
          data points, patch panels, and network infrastructure. We design and install systems that 
          deliver fast, stable connectivity throughout your property.
        </p>
      </motion.div>
    </section>
  );
};

export default DataNetworkingDescription;
