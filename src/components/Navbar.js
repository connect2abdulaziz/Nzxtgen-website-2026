import { useState, useEffect } from "react";
import "./Navbar.css";
import siteLogo from "../assets/site-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsDropdownOpen(false);
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
          <img src={siteLogo} alt="Site Logo" className="sitelogo" />
        </div>

        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/About-us">ABOUT</a>
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
                <a href="/Our-Serives">Our Signature Services</a>
              </li>
              <li>
                <a href="/switch-board-upgrade">Switchboard Upgrade</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/smart-home">SMART HOME</a>
          </li>

          <li>
            <a href="/Contact-Us">CONTACT</a>
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
