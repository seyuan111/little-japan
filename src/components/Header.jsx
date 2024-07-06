import React from 'react'
import '../seperateCSS/Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="header-contents">
            <h2>Order your Japanese cuisine here</h2>
            <p>Choose your favorite Japanese food from this menu. There are choices including Sushi, Sashimi, Ramen, and Teriyaki. We also include edaname, Kani Salad, and so much more</p>
            <button>Order</button>
        </div>
    </div>
  )
}

export default Header