// src/components/SMDescription.jsx
import "./SMDescription.css";
import { motion } from "framer-motion";
import floorPlanVideo1 from "../assets/bg/videos/smart-home-installation-demo.mov";

const SMDescription = () => {
  return (
    <section className="sm-section">
      <div className="overlay" style={{ zIndex: 1, borderRadius:0 }}></div>
      <video className="sm-bg-video" autoPlay muted loop playsInline>
        <source src={floorPlanVideo1} type="video/mp4" />
      </video>

      <motion.div
        className="sm-wrapper"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="sm-title">Smart Home</h2>
        <h3 className="sm-subtitle">Smart Homes, Smarter Living</h3>
        <p className="sm-description">
          A smart home integrates advanced technology to enhance comfort,
          convenience, and security. From automated lighting and temperature
          control to voice-activated assistants and smart security systems, a
          smart home allows homeowners to manage their environment remotely and
          efficiently. With seamless connectivity and intuitive interfaces,
          smart homes offer a personalized experience that adapts to individual
          needs, creating a more connected and efficient living space.
        </p>
      </motion.div>
    </section>
  );
};

export default SMDescription;
