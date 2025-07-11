import React, { useRef, useState, useEffect } from "react";
import "./CurrentPromotions.css";
import itemImage1 from "../assets/currentpromoimg/item1.jpg";
import itemImage2 from "../assets/currentpromoimg/item2.webp";
import itemImage3 from "../assets/currentpromoimg/item5.webp";
import itemImage4 from "../assets/currentpromoimg/item4.jpg";

const CurrentPromotions = () => {  
  const sliderRef = useRef(null);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  const promotions = [
    {
      id: 1,
      name: "Supply & Install 10 RGB Smart Downlights",
      price: 750,
      image: itemImage1,
      packageIncludes: [
        "10 RGB smart downlights",
        "Professional installation"
      ],
      features: [
        "Full RGB Color Spectrum: Choose from millions of colors to set the perfect mood",
        "Smart App & Voice Control: Compatible with Google Assistant, Alexa & mobile apps",
        "Dimmable & Adjustable White Light: Switch between warm, neutral, and cool whites",
        "Energy-Efficient LED: High brightness, low energy consumption",
        "Ideal for Any Space: Perfect for homes, offices, entertainment zones & more"
      ]
    },
    {
      id: 2,
      name: "Supply & Install 4x Fans",
      price: 1200,
      image: itemImage2,
      packageIncludes: [
        "4 high-performance fans",
        "Professional installation"
      ],
      features: [
        "Efficient Cooling: Delivers powerful airflow for a cooler space",
        "Energy-Saving Design: Low power consumption with high output",
        "Quiet & Smooth Operation: Silent running for undisturbed comfort",
        "Versatile Applications: Perfect for homes, offices, warehouses, and commercial areas",
        "Durable & Reliable: Built with top-grade materials for lasting performance"
      ]
    },
    {
      id: 3,
      name: "Supply & Install 4x Fans With Stainless Steel Blades",
      price: 1300,
      image: itemImage3,
      packageIncludes: [
        "4 premium ceiling fans",
        "Professional installation"
      ],
      features: [
        "Stainless Steel Blades: Rust-resistant and built for long-term performance",
        "Powerful & Efficient: Strong airflow with minimal energy use",
        "Modern & Sleek Design: Stylish stainless steel finish suits indoor & outdoor spaces",
        "Quiet Operation: Engineered for smooth, noise-free performance",
        "Ideal for Any Setting: Great for homes, offices, patios, and commercial spaces"
      ]
    },
    {
      id: 4,
      name: "Supply & Install 10 Downlights",
      price: 500,
      image: itemImage4,
      packageIncludes: [
        "10 high-quality downlights",
        "Professional installation"
      ],
      features: [
        "Dimmable & Color Switchable: Choose between warm white (3000K), pure white (4000K), and cool white (6000K)",
        "Energy-Efficient LED: Low power usage with high lumen output to cut down electricity costs",
        "Long-Lasting & Durable: Built with premium materials for a longer lifespan",
        "Flicker-Free & Eye-Friendly: Smooth, stable light with no flickering or glare",
        "Versatile Applications: Ideal for living rooms, kitchens, hallways, offices, and retail spaces"
      ]
    }
  ];

  useEffect(() => {
    if (cardRef.current) {
      const cardElement = cardRef.current;
      const style = window.getComputedStyle(cardElement);
      const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      const fullCardWidth = cardElement.offsetWidth + margin;
      setCardWidth(fullCardWidth);
    }
  }, []);

  const slideLeft = () => {
    sliderRef.current.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  };

  const openModal = (item) => {
    setModalItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="current-promotions">
      <div className="promotions-header">  
        <h1>CURRENT PROMOTIONS</h1>   
      </div>

      <button className="slider-arrow left-arrow" onClick={slideLeft}>
        &#9664;
      </button>
      <button className="slider-arrow right-arrow" onClick={slideRight}>
        &#9654;
      </button>

      <div className="promotions-slider" ref={sliderRef}>
        {promotions.map((item, index) => (
          <div className="slider-item" key={item.id} ref={index === 0 ? cardRef : null}>
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-details">
              <div className="item-name">{item.name}</div>
              <div className="item-price">${item.price}</div>
              <button className="view-details-btn" onClick={() => openModal(item)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="terms">
        <p>Terms & Conditions Apply</p>
      </div>

      {isModalOpen && modalItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>&times;</button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={modalItem.image} alt={modalItem.name} />
              </div>
              <div className="modal-info">
                <h2 className="modal-title">{modalItem.name}</h2>
                <h4>Package Includes:</h4>
                <ul className="package-list">
                  {modalItem.packageIncludes.map((pkg, idx) => (
                    <li key={idx}>{pkg}</li>
                  ))}
                </ul>
                <h4>Features:</h4>
                <ul className="feature-list">
                  {modalItem.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="modal-price">${modalItem.price}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentPromotions;
