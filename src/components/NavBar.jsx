import React, { useState, useContext } from 'react';
import '../seperateCSS/NavBar.css';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {StoreContext} from '../context/StoreContext'

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {getTotalCartAmount} = useContext(StoreContext)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setIsMobileMenuOpen(false); // Close the mobile menu
  };

  return (
    <div className="navbar">
      <Link to="/"><img 
        src="https://c8.alamy.com/comp/2J2TJ03/sushi-logo-in-a-bowl-chopsticks-swoosh-bowl-oriental-japan-cuisine-japanese-sushi-seafood-logo-design-inspiration-2J2TJ03.jpg" 
        alt="Logo" 
        className="japaneseLogo"
      /></Link>
      <ul className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => handleMenuClick("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => handleMenuClick("menu")} className={menu === "menu" ? "active" : ""}>Categories</a>
        <a href="#food-display" onClick={() => handleMenuClick("mobile")} className={menu === "mobile" ? "active" : ""}>Menu</a>
        <a href="#footer" onClick={() => handleMenuClick("contact")} className={menu === "contact" ? "active" : ""}>Contact</a>
      </ul>

      <div className="right">
        <FaSearch className="search" />
        <div className="search-icon-navbar">
          <Link to="/cart"><FaShoppingCart className="shopping-cart" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
      
      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default NavBar;