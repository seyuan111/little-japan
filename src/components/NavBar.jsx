import React, { useState } from 'react';
import '../seperateCSS/NavBar.css';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom'

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <img 
        src="https://c8.alamy.com/comp/2J2TJ03/sushi-logo-in-a-bowl-chopsticks-swoosh-bowl-oriental-japan-cuisine-japanese-sushi-seafood-logo-design-inspiration-2J2TJ03.jpg" 
        alt="Logo" 
        className="japaneseLogo"
      />
      <ul className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Categories</a>
        <a href="#food-display" onClick={() => setMenu("mobile")} className={menu === "mobile" ? "active" : ""}>Menu</a>
        <a href="#footer" onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</a>
      </ul>

      <div className="right">
        <FaSearch className="search" />
        <div className="search-icon-navbar">
          <FaShoppingCart className="shopping-cart" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
      
      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default NavBar;