import { useState } from 'react';

const useCart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity) => {
        setCartItems((prev) => {
        const existing = prev.find((item) => item.product.id === product.id);
        if (existing) {
            return prev.map((item) =>
            item.product.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
        }
        return [...prev, { product, quantity }];
        });
    };

    const updateQuantity = (productId, quantity) => {
        setCartItems((prev) =>
        prev.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
        )
        );
    };

    const removeFromCart = (productId) => {
        setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    };

    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return { cartItems, addToCart, updateQuantity, removeFromCart, totalCount };
};

export default useCart;