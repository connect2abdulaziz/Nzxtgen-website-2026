// src/components/SuburbDescription.jsx
import "./SuburbDescription.css";
import { motion } from "framer-motion";

const SuburbDescription = ({ suburbName, subtitle, description }) => {
  return (
    <section className="suburb-section">
      <div className="overlay" style={{ zIndex: 1, borderRadius: 0 }}></div>
      <div className="suburb-bg-gradient"></div>

      <motion.div
        className="suburb-wrapper"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="suburb-title">{suburbName}</h2>
        <h3 className="suburb-subtitle">{subtitle}</h3>
        <p className="suburb-description">
          {description}
        </p>
      </motion.div>
    </section>
  );
};

export default SuburbDescription;
