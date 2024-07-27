import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
    const navigate = useNavigate();
    const deliveryFee = 10;
    const subtotal = parseFloat(getTotalCartAmount());
    const total = subtotal + deliveryFee;

    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={index}>
                                <div className="cart-items-title cart-items-item">
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>${item.price.toFixed(2)}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                                    <p onClick={() => removeFromCart(item._id)} className="x">Remove</p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                })}
            </div>

            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${subtotal.toFixed(2)}</p>
                        </div>
                        <hr />

                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${deliveryFee.toFixed(2)}</p>
                        </div>
                        <hr />

                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${total.toFixed(2)}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')}>Proceed to Checkout</button>
                </div>

                <div className="cart-promocode">
                    <div>
                        <p>If you have a promocode, enter it here.</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder="enter promocode" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;