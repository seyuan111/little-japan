import React, { useState, useContext } from 'react';
import { FaPlus } from "react-icons/fa";
import { IoIosRemove } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { StoreContext } from '../context/StoreContext';
import '../seperateCSS/FoodItem.css';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img className="food-item-img" src={image} alt={name}></img>
                {
                    !cartItems[id] ? <FaPlus className="add" onClick={() => addToCart(id)} /> :
                    <div className="food-item-counter">
                        <IoIosRemove className="minus" onClick={() => removeFromCart(id)} />
                        <p className="count">{cartItems[id]}</p>
                        <IoIosAdd className="plus" onClick={() => addToCart(id)} />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-ratings">
                    <p>{name}</p>
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default FoodItem;