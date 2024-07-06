import React from 'react'
import '../seperateCSS/FoodItem.css'

const FoodItem = ({id, name, price, description, image}) => {
    console.log(price)
  return (
    <div className="food-item">
        <div className="food-item-img-container">
            <img className="food-item-img" src={image}></img>
        </div>
        <div className="food-item-info">
            <div className="food-item-name-ratings">
                <p>{name}</p>
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem