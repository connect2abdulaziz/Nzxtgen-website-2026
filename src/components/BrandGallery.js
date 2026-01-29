import React, { useState } from "react";
import "./BrandGallery.css";
import brand1 from "../assets/company img/b1.WEBP";
import brand2 from "../assets/company img/b2.WEBP";
import brand3 from "../assets/company img/b3.WEBP";
import brand4 from "../assets/company img/b4.WEBP";
import brand5 from "../assets/company img/b5.WEBP";
import brand6 from "../assets/company img/b6.WEBP";
import brand7 from "../assets/company img/b7.WEBP";
import brand8 from "../assets/company img/b8.WEBP";
import brand9 from "../assets/company img/b9.WEBP";
import brand10 from "../assets/company img/b10.WEBP";
import brand11 from "../assets/company img/b11.WEBP";
import brand12 from "../assets/company img/b12.WEBP";
import brand13 from "../assets/company img/b13.WEBP";
import brand14 from "../assets/company img/b14.WEBP";
import brand15 from "../assets/company img/b15.WEBP";
import brand16 from "../assets/company img/b16.WEBP";
import brand17 from "../assets/company img/b17.WEBP";
import brand18 from "../assets/company img/b18.WEBP";

const BrandGallery = () => {
  const [expanded, setExpanded] = useState(false);

  const brands = [
    brand1, brand2, brand3, brand4, brand5, brand6,
    brand7, brand8, brand9, brand10, brand11, brand12,
    brand13, brand14, brand15, brand16, brand17,brand18,
  ];

  const getVisibleCount = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 12;
    if (width >= 768) return 8;
    return 4;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  // Update visible count on resize
  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedBrands = expanded ? brands : brands.slice(0, visibleCount);

  return (
    <section className="brand-gallery">
      <div className="gallery-header">
        <h2>
          Incorporating <br />
          Leading Brand Products
        </h2>
      </div>

      <div className="gallery-grid">
        {displayedBrands.map((brand, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={brand} 
              alt={`Leading Electrical and Smart Home Brand Partner ${index + 1} - NZXTGEN`}
              loading={index < visibleCount ? "lazy" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </div>

      <div className="gallery-footer">
        <button
          className="see-more-button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
};

export default BrandGallery;
