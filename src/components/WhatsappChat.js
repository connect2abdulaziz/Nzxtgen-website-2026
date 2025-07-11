import React, { useState } from 'react';
import './WhatsappChat.css';
import sitelogo from "../assets/site-logo.png"

const WhatsappChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [fileMessage, setFileMessage] = useState("");
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const emojis = ["😊", "😂", "😍", "😎", "🥺", "😢", "😡"];

  // Toggle the visibility of the chat window
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Add the greeting message when popup opens
      setMessages([{ text: "Hello! How can we assist you today?", sender: 'owner' }]);
    }
  };

  // Handle sending a message
  const sendMessage = () => {
    if (message.trim() || file) {
      setMessages([...messages, { text: message, sender: 'user', file }]);
      setMessage(""); // Clear the input after sending
      setFile(null); // Clear the file after sending
      setFileMessage(""); // Clear the file message after sending
    }
  };

  // Handle file attachment
  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setFileMessage(`File "${uploadedFile.name}" selected. Ready to send.`);
    }
  };

  // Add selected emoji to the typing area
  const addEmoji = (emoji) => {
    setMessage(message + emoji);
    setEmojiPickerVisible(false);
  };

  return (
    <div>
      {/* WhatsApp Button */}
      {!isOpen && (
        <div className="whatsapp-button" onClick={toggleChat}>
          <div className="whatsapp-icon-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="whatsapp-icon"
            />
            {/* Red dot to show activity */}
            <div className="red-dot"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Chat Popup */}
      {isOpen && (
        <div className="whatsapp-chat-popup">
          <div className="chat-header">
            <div className="header-logo">
              <img src={sitelogo} alt="Company Logo" className="logo-img" />
              <span className="company-name">Next Gen Electrical Services</span>
            </div>
            <button className="close-btn" onClick={toggleChat}>×</button>
          </div>
          <div className="chat-body">
            {/* Display messages with cloud background */}
            {messages.map((msg, index) => (
              <div key={index} className={`chat-msg ${msg.sender}`}>
                <div className={`message-text ${msg.sender}`}>
                  {msg.text}
                  {msg.file && <div className="file-attachment">📎 {msg.file.name}</div>}
                </div>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="input-actions">
              <label htmlFor="file-upload" className="emoji-btn">
                📎
                <input
                  type="file"
                  id="file-upload"
                  accept="image/png, image/jpeg, application/pdf, audio/mp3"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                />
              </label>
              <button className="emoji-btn" onClick={() => setEmojiPickerVisible(!emojiPickerVisible)}>😊</button>
            </div>
            <button className="send-btn" onClick={sendMessage}>➤</button>
          </div>
          {emojiPickerVisible && (
            <div className="emoji-picker">
              {emojis.map((emoji, index) => (
                <span key={index} className="emoji" onClick={() => addEmoji(emoji)}>
                  {emoji}
                </span>
              ))}
            </div>
          )}
          {/* Display file upload confirmation message */}
          {fileMessage && <div className="file-confirmation">{fileMessage}</div>}
        </div>
      )}
    </div>
  );
};

export default WhatsappChat;
