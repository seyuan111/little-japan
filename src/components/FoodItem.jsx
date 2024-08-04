import React, { useContext } from 'react';
import { FaPlus } from "react-icons/fa";
import { IoIosRemove } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { StoreContext } from '../context/StoreContext';
import '../seperateCSS/FoodItem.css';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, decrement } = useContext(StoreContext);

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img className="food-item-img" src={image} alt={name}></img>
                {
                    cartItems[id] > 0 ? (
                        <div className="food-item-counter">
                            <IoIosRemove className="minus" onClick={() => decrement(id)} />
                            <p className="count">{cartItems[id]}</p>
                            <IoIosAdd className="plus" onClick={() => addToCart(id, false)} />
                        </div>
                    ) : (
                        <FaPlus className="add" onClick={() => addToCart(id, true)} />
                    )
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-ratings">
                    <p>{name}</p>
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price.toFixed(2)}</p>
                <button className="cartButton" onClick={() => addToCart(id, true)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default FoodItem;