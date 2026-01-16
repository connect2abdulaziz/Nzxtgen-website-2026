import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { trackPhoneCall } from '../utils/analytics';
import './MobileCallButton.css';

const MobileCallButton = () => {
  const phoneNumber = '+61437885910';
  const formattedPhone = '0437 885 910';

  const handleClick = () => {
    trackPhoneCall(phoneNumber, 'mobile_button');
  };

  return (
    <a 
      href={`tel:${phoneNumber}`} 
      className="mobile-call-button"
      aria-label={`Call NZXTGEN at ${formattedPhone}`}
      onClick={handleClick}
    >
      <FaPhone className="call-icon" />
      <span className="call-text">Call Now</span>
      <span className="call-number">{formattedPhone}</span>
    </a>
  );
};

export default MobileCallButton;
