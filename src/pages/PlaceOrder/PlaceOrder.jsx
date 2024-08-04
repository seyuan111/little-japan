import React, {useContext} from 'react'
import './PlaceOrder.css'
import {StoreContext} from '../../context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className="place-order">

      <div className="place-order-left">
        <p className="delivery-info">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder="full name"></input>
        </div>
        
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="address"></input>
  
        <div className="multi-fields">
          <input type="text" placeholder="City"></input>
          <input type="text" placeholder="State"></input>
        </div>
  
        <div className="multi-fields">
          <input type="text" placeholder="zip code"></input>
          <input type="text" placeholder="Country"></input>
        </div>
  
        <input type="text" placeholder="Phone"></input>
      </div>

      <div className="place-order-right">

        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>

            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr></hr>

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0?0:10}</p>
            </div>
            <hr></hr>

            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0?0:getTotalCartAmount() + 10}</b>
            </div>

          </div>
          <button>Proceed to Payment</button>
        </div>
      </div>

    </div>
  )
}

export default PlaceOrder