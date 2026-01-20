import { useState, useEffect } from "react";
import "./Navbar.css";
import siteLogo from "../assets/site-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSmartHomeDropdownOpen, setIsSmartHomeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsDropdownOpen(false);
        setIsSmartHomeDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-logo">
          <a href="/">
            <img src={siteLogo} alt="NZXTGEN Electrical and Smart Home Services Logo" className="sitelogo" loading="eager" fetchPriority="high" />
          </a>
        </div>

        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about-us">ABOUT</a>
          </li>
          <li className="dropdown">
            <p>SERVICES</p>
            <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              <li>
                <a href="/areas-we-service">Areas We Service</a>
              </li>
              <li>
                <a href="/free-quote">Free Online Quote</a>
              </li>
              <li>
                <a href="/our-services">Our Signature Services</a>
              </li>
              <li>
                <a href="/switchboard-upgrade">Switchboard Upgrade</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <p>SMART HOME</p>
            <ul className={`dropdown-menu ${isSmartHomeDropdownOpen ? "show" : ""}`}>
              <li>
                <a href="/smart-home">Smart Home</a>
              </li>
              <li>
                <a href="/smart-home-more-info">Smart Home - More Info</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/contact-us">CONTACT</a>
          </li>
        </ul>

        <button className="book-btn">
          <a className="book-btn-link" href="/free-quote">
            ONLINE QUOTE
          </a>
        </button>

        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
