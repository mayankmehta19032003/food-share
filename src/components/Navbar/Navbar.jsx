import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <a href="#home">FoodShare</a>
        </div>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#donate-food" className="nav-link donate-link">
            ❤️ Donate
          </a>
          <a href="#events" className="nav-link">
            Events
          </a>

          <a href="#contribute" className="nav-link">
            Contribute Food
          </a>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? "bar1" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "bar2" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "bar3" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
