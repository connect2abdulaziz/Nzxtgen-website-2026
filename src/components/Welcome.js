import React, { useState, useEffect } from "react";
import "./Welcome.css";
// import welcomeImage1 from "../assets/welcome1.jpg";
// import welcomeImage2 from "../assets/welcome2.jpg";
import welcomeVideo from "../assets/video/hero-bg.mp4";
import welcomeVideoMobile from "../assets/video/mobileWelcome1.mp4";

const Welcome = () => {
  const isMobile = window.innerWidth <= 480;

  const slides = [
    /* {
      id: 1,
      type: "image",
      src: welcomeImage1,
      title: "Start Living In The Future",
      slogan: "With next-gen electrical technology",
      buttonText: "EXPLORE",
    },
    {
      id: 2,
      type: "image",
      src: welcomeImage2,
      title: "Start Living In The Future",
      slogan: "With next-gen electrical technology",
      buttonText: "EXPLORE",
    }, */
    {
      id: 3,
      type: "video",
      src: isMobile ? welcomeVideoMobile : welcomeVideo,
      title: "Start Living In The Future",
      slogan: "With next-gen electrical technology",
      buttonText: "EXPLORE",
      buttonLink: "/Our-Serives",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="welcome-section">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt={`Slide ${slide.id}`}
                className="slide-media"
              />
            ) : (
              <video autoPlay loop muted playsInline className="slide-media">
                <source src={slide.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="slider-overlay"></div>

            <div className="slide-content">
              <h1 className="welcome-header">{slide.title}</h1>
              <p className="welcome-slogan">{slide.slogan}</p>
              {slide.buttonLink ? (
                <a href={slide.buttonLink} className="welcome-button">
                  {slide.buttonText}
                </a>
              ) : (
                <button className="welcome-button">{slide.buttonText}</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Welcome;
