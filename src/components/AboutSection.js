import "./AboutSection.css";
import aboutBackground from "../assets/aboutsecbg.jpg";
import aboutVideo from "../assets/aboutsecvideo.mp4";

const AboutSection = () => {
  return (
    <section
      className="about-section"
      style={{ backgroundImage: `url(${aboutBackground})` }}
    >
      <div className="about-card">
        {/* Left: Video */}
        <div className="about-video-container">
          <video src={aboutVideo} autoPlay loop muted playsInline></video>
        </div>

        {/* Right: Text */}
        <div className="about-content">
          <h2 className="about-heading">Our Mission</h2>
          <p className="about-description">
            Next Gen Electrical Services is a trusted provider of electrical
            solutions and services around Sydney. We specialize in construction,
            renovation, and maintenance for residential, commercial, and
            industrial projects.
          </p>
          <p className="about-description">
            Our focus is on quality workmanship and customer satisfaction,
            delivering reliable, efficient electrical services and ensuring the
            safety and functionality of your systems.
          </p>
          <a href="/About-us" className="learn-more-button">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
