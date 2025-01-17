import React from 'react'
import {Link} from 'react-router-dom'
import '../seperateCSS/Header.css'

const Header = () => {
  
  return (
    <div className="header">
        <div className="header-contents">
            <h2>Order your Japanese cuisine here</h2>
            <p>Choose your favorite Japanese food from this menu. There are choices including Sushi, Sashimi, Ramen, and Teriyaki. We also include edaname, Kani Salad, and so much more</p>
            <Link to="/about"><button>Learn More</button></Link>
        </div>
    </div>
  )
}

export default Header