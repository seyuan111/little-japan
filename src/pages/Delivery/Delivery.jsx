import React from 'react'
import './Delivery.css'
import {Link} from 'react-router-dom'

const Delivery = () => {
  return (
    <div className="delivery">
        <div className="delivery-contents">
            <h1>Delivery</h1>
            <p>Can not come over to pick up? No problem, we deliver to your home. Order our food and we will deliver the food to your home. We deliver within 100 miles to your home from the restaurant. We charge a 10 dollar delivery fee. Tip is required.</p>
            <Link to='/'><button>Go Back</button></Link>
        </div>
    </div>
  )
}

export default Delivery