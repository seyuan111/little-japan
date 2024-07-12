import React, {useState} from 'react'
import { FaPlus } from "react-icons/fa";
import { IoIosRemove } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import '../seperateCSS/FoodItem.css'

const FoodItem = ({id, name, price, description, image}) => {
    const [countItem, setCountItem] = useState(0)

  return (
    <div className="food-item">
        <div className="food-item-img-container">
            <img className="food-item-img" src={image}></img>
            {
                !countItem ? <FaPlus className="add" onClick={() => setCountItem(prev=>prev+1)} /> :
                
                <div className="food-item-counter">
                    <IoIosAdd onClick={() => setCountItem(prev=> prev+1)}/>
                    <p>{countItem}</p>
                    <IoIosRemove onClick={() => setCountItem(prev=> prev-1)}/>
                </div>
            }
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