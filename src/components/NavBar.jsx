import React, {useState} from 'react'
import '../seperateCSS/NavBar.css'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {

  const [menu, setMenu] = useState("home")

  return (
    <div className="navbar">
      <img src="https://c8.alamy.com/comp/2J2TJ03/sushi-logo-in-a-bowl-chopsticks-swoosh-bowl-oriental-japan-cuisine-japanese-sushi-seafood-logo-design-inspiration-2J2TJ03.jpg" alt="" className="japaneseLogo"></img>

      <ul className="menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active": ""}>Home</li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active": ""}>Menu</li>
        <li onClick={() => setMenu("mobile")} className={menu === "mobile" ? "active": ""}>Mobile</li>
        <li onClick={() => setMenu("contact")} className={menu === "contact" ? "active": ""}>Contact</li>
      </ul>

      <div className="right">
        <FaSearch className="search" />
        <div className="search-icon-navbar">
          <FaShoppingCart className="shopping-cart" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>

    </div>
  )
}

export default NavBar