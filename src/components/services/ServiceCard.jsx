import React from 'react';
import { Link } from 'react-router-dom';
import serviceImage1 from '../../assets/services/service-image-1.jpg';
import serviceImage2 from '../../assets/services/service-image-2.jpg';
import serviceImage3 from '../../assets/services/service-image-3.jpg';
import serviceImage4 from '../../assets/services/service-image-4.jpg';
import serviceImage5 from '../../assets/services/service-image-5.jpg';
import './ServiceCard.css';

const ServiceCard = ({ service, index }) => {
  const imageMap = [
    serviceImage1,
    serviceImage2,
    serviceImage3,
    serviceImage4,
    serviceImage5,
  ];

  const shortDescription = service.description.split('.')[0] + '.';

  const cardStyle = {
    '--bg-image': `url(${imageMap[index]})`
  };

  return (
    <Link to={service.link} className="service-card-link">
      <div className="service-card" style={cardStyle}>
        <div className="service-card-overlay"></div>
        <div className="service-card-number">{String(index + 1).padStart(2, '0')}</div>
        <div className="service-card-content">
          <h3 className="service-card-title">{service.title}</h3>
          <p className="service-card-description">{shortDescription}</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
