import React, {useState} from 'react'
import '../seperateCSS/Header.css'

const Header = () => {
  const [menu, setMenu] = useState("home");

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };
  
  return (
    <div className="header">
        <div className="header-contents">
            <h2>Order your Japanese cuisine here</h2>
            <p>Choose your favorite Japanese food from this menu. There are choices including Sushi, Sashimi, Ramen, and Teriyaki. We also include edaname, Kani Salad, and so much more</p>
            <button><a href="#food-display" onClick={() => handleMenuClick("mobile")} className={menu === "mobile" ? "active" : ""}>Order</a></button>
        </div>
    </div>
  )
}

export default Header