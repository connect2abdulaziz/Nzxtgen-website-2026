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
        <h2 className="dn-title">Data & Networking Services</h2>
        <h3 className="dn-subtitle">Professional Data & Networking Services in Condell Park by NZXTGEN</h3>
        <p className="dn-description">
          Professional data and networking services in Condell Park. Structured cabling, data points, 
          patch panels and reliable connectivity for homes and businesses.
        </p>
      </motion.div>
    </section>
  );
};

export default DataNetworkingDescription;
