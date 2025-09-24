import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <a href="#home">SharePlate</a>
        </div>
        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/donation" className="nav-link donate-link">
            ❤️ Donate
          </Link>
          <Link to="/events" className="nav-link">
            Events
          </Link>
          <Link to="/contribute" className="nav-link">
            Contribute Food
          </Link>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? "bar1" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "bar2" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "bar3" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
