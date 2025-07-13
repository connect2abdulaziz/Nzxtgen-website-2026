import "./WhatsappChat.css";

const phoneNumber = "0437885910";
const defaultMessage = "Hello! I would like to know more about your services.";

const WhatsappChat = () => {
  const handleClick = () => {
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
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </div>
    </div>
  );
};

export default WhatsappChat;
