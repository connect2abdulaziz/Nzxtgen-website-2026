import "./WhatsappChat.css";
import { trackWhatsAppClick } from "../utils/analytics";

const phoneNumber = "61437885910";
const defaultMessage = "Hello! I would like to know more about your services.";

const WhatsappChat = () => {
  const handleClick = () => {
    trackWhatsAppClick(phoneNumber);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`,
      "_blank"
    );
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <div className="whatsapp-icon-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="Contact NZXTGEN on WhatsApp for Electrical and Smart Home Services"
          className="whatsapp-icon"
        />
      </div>
    </div>
  );
};

export default WhatsappChat;
