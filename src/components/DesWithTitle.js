// DesWithTitle.js
import React from 'react';
import './DesWithTitle.css'; // Import the CSS file

const DesWithTitle = ({ title, description }) => {
  return (
    <div className="des-with-title">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default DesWithTitle;
