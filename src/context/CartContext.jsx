import React, {createContext, useState} from 'react'

const CartContext = createContext();

function CartProvider({children}){
    const [cart, setCart] = useState([]);

    const addToCart = (product) =>{
        setCart((prev)=> [...prev, product]);
    };

    const removeFromCart = (productId)=>{
        setCart((prev)=> prev.filter((item)=>item.id !== productId));
    };
     return <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
        {children}
        </CartContext.Provider>
};

export {CartProvider, CartContext};

// عشان استدعي الاثنين مع بعض 