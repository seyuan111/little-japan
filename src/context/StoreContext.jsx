import React, { createContext, useState, useEffect } from 'react';
import { food_list } from '../assets/resources';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId, initialAdd) => {
        if (initialAdd) {
            if (!cartItems[itemId]) {
                setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
            }
        } else {
            if (cartItems[itemId]) {
                setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
            }
        }
    };

    const decrement = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId] > 1) {
                updatedCart[itemId] -= 1;
            } else {
                delete updatedCart[itemId];
            }
            return updatedCart;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            delete updatedCart[itemId]; // Remove the item completely from the cart
            return updatedCart;
        });
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return parseFloat(totalAmount.toFixed(2));
    };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        decrement
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;