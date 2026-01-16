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
    { src: old1, title: "Old Electrical Switchboard Requiring Upgrade - Safety Hazard" },
    { src: old2, title: "Outdated Switchboard Before Upgrade - Non-Compliant Installation" },
    { src: old3, title: "Old Fuse Box Needing Modern Switchboard Replacement" },
    { src: old4, title: "Legacy Electrical Panel Requiring Safety Upgrade" },
  ];

  const upgradedImages = [
    { src: new1, title: "Modern Upgraded Switchboard Installation by NZXTGEN" },
    { src: new2, title: "New Compliant Electrical Switchboard - Australian Standards" },
    { src: new3, title: "Professional Switchboard Upgrade Completed" },
    { src: new4, title: "Modern Safety Switchboard Installation" },
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
      <h2 className={`upgrade-gallery-header ${loaded ? "fade-in" : ""}`}>
        UPGRADE NEEDED!
      </h2>
      <Slider {...sliderSettings} className="upgrade-gallery-slider">
        {upgradeNeededImages.map((img, index) => (
          <div key={index} className="upgrade-card">
            <div className="upgrade-card-wrapper">
              <img
                src={img.src}
                alt={img.title}
                className="upgrade-card-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Group 2 */}
      <h2 className={`upgrade-gallery-header ${loaded ? "fade-in" : ""}`}>
        UPGRADED!
      </h2>
      <Slider {...sliderSettings} className="upgrade-gallery-slider">
        {upgradedImages.map((img, index) => (
          <div key={index} className="upgrade-card">
            <div className="upgrade-card-wrapper">
              <img
                src={img.src}
                alt={img.title}
                className="upgrade-card-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecentSwitchboardUpgrade;
