import { useEffect, useState } from "react";
import "./AboutData.css";
import img1 from "../assets/about/electrical.jpg";
import img2 from "../assets/about/smarthome.jpg";
import img3 from "../assets/about/security.jpg";
import img4 from "../assets/about/entertainment.jpg";

const data = [
  {
    id: 1,
    title: "Electrical",
    description:
      "At Nzxtgen, we specialize in enhancing your home’s functionality and ambiance through expert electrical installations. Our services include the installation of lighting, switches, power points, and fans, ensuring that your electrical systems operate safely and efficiently...",
    image: img1,
    backgroundColor: "#f7f7f7",
  },
  {
    id: 2,
    title: "Smart Home",
    description:
      "We are also passionate about smart home technology, which is transforming modern living. With our smart lighting solutions, you can easily adjust brightness and color with a tap on your smartphone, creating the perfect ambiance in any room...",
    image: img2,
    backgroundColor: "#e5e5e5",
  },
  {
    id: 3,
    title: "Security",
    description:
      "Security is paramount, and installing a comprehensive home security system has never been easier. We offer integrated solutions that include CCTV, smart door locks, alarms, intercoms, and smoke detectors, all managed through a single control panel...",
    image: img3,
    backgroundColor: "#d9d9d9",
  },
  {
    id: 4,
    title: "Entertainment",
    description:
      "Additionally, we elevate your home entertainment experience with our professional home theatre system installations. Our team expertly mounts TVs without visible cables, creating a sleek, stylish look...",
    image: img4,
    backgroundColor: "#c9c9c9",
  },
];

const AboutData = ({ isExiting }) => {
  const [inView, setInView] = useState([]);

  const handleScroll = () => {
    const visibleRows = data.map((_, index) => {
      const row = document.getElementById(`about-row-${index}`);
      if (!row) return false;
      const rect = row.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
    });

    setInView(visibleRows);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const isMobile = window.innerWidth < 480;

  return (
    <div className={`about-data ${isExiting ? "exiting" : ""}`}>
      <div className="fadeColorBg">
        <div className="about-header">
          <h1>About Us</h1>
        </div>

        {/* Content Section */}
        {!isMobile ? (
          <div className="about-content">
            {data.map((item, index) => (
              <div
                key={item.id}
                id={`about-row-${index}`}
                className={`about-row ${
                  index % 2 === 0 ? "normal" : "reversed"
                } ${inView[index] ? "in-view" : ""}`}
                style={{ backgroundColor: item.backgroundColor }}
              >
                <div className="about-text">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <div className="about-image">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="about-content">
            {data.map((item, index) => (
              <div
                key={item.id}
                id={`about-row-${index}`}
                className="about-row normal in-view"
                style={{ backgroundColor: item.backgroundColor }}
              >
                <div className="about-text">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <div className="about-image">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="aboutDes">
          <p>
            At Nzxtgen, we are committed to embracing innovative solutions that
            simplify your life and enhance your home. Let us help you create a
            space that reflects your lifestyle and meets your needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutData;
