import React, { createContext, useState, useEffect,useMemo } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const itemExists = prevCart.find((item) => item.id === product.id);
            if (itemExists) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => {
            return prevCart.reduce((acc, item) => {
                if (item.id === productId) {
                    if (item.quantity > 1) {
                        acc.push({ ...item, quantity: item.quantity - 1 });
                    }
                   
                } else {
                    acc.push(item);
                }
                return acc;
            }, []);
        });
    };
    

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    const totalPrice = useMemo(() => 
        cart.reduce((total, item) => total + item.price * item.quantity, 0),
        [cart]
    );

    const cartQty = useMemo(() => 
        cart.reduce((total, item) => total + item.quantity, 0),
        [cart]
    );
    return (
        <CartContext.Provider value={{ cart, totalPrice, cartQty, addToCart, removeFromCart,clearCart }}>
            {children}
        </CartContext.Provider>
    );
};