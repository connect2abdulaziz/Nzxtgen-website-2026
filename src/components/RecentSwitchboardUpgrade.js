import React, { useState, useEffect } from "react";
import "./RecentSwitchboardUpgrade.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

// Old (Upgrade Needed) Images
import old1 from "../assets/upn/upn1.WEBP";
import old2 from "../assets/upn/upn2.WEBP";
import old3 from "../assets/upn/upn3.WEBP";
import old4 from "../assets/upn/upn4.webp";

// New (Upgraded) Images
import new1 from "../assets/upd/UPG1.WEBP";
import new2 from "../assets/upd/UPG2.WEBP";
import new3 from "../assets/upd/UPG3.WEBP";
import new4 from "../assets/upd/UPG4.WEBP";

const RecentSwitchboardUpgrade = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);

  const upgradeNeededImages = [
    { src: old1, title: "Old Board 1" },
    { src: old2, title: "Old Board 2" },
    { src: old3, title: "Old Board 3" },
    { src: old4, title: "Old Board 4" },
  ];

  const upgradedImages = [
    { src: new1, title: "New Board 1" },
    { src: new2, title: "New Board 2" },
    { src: new3, title: "New Board 3" },
    { src: new4, title: "New Board 4" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="upgrade-gallery-container">
      {/* Group 1 */}
      <h1 className={`upgrade-gallery-header ${loaded ? "fade-in" : ""}`}>
        UPGRADE NEEDED!
      </h1>
      <Slider {...sliderSettings} className="upgrade-gallery-slider">
        {upgradeNeededImages.map((img, index) => (
          <div key={index} className="upgrade-card">
            <div className="upgrade-card-wrapper">
              <img src={img.src} alt={img.title} className="upgrade-card-image" />
              <div className="upgrade-card-overlay">
                <h3 className="upgrade-card-text">{img.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Group 2 */}
      <h1 className={`upgrade-gallery-header ${loaded ? "fade-in" : ""}`}>
        UPGRADED!
      </h1>
      <Slider {...sliderSettings} className="upgrade-gallery-slider">
        {upgradedImages.map((img, index) => (
          <div key={index} className="upgrade-card">
            <div className="upgrade-card-wrapper">
              <img src={img.src} alt={img.title} className="upgrade-card-image" />
              <div className="upgrade-card-overlay">
                <h3 className="upgrade-card-text">{img.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecentSwitchboardUpgrade;
