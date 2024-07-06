import React, {useContext} from 'react'
import { StoreContext } from '../context/StoreContext'
import '../seperateCSS/FoodDisplay.css'

const FoodDisplay = () => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className="food-display" id="food-display">
        <h2>Top Japanese cuisine</h2>
    </div>
  )
}

export default FoodDisplay