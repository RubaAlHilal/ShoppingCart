import React, {createContext, useState} from 'react'

const CartContext = createContext();

function CartProvider({children}){
    const [cart, setCart] = useState([]);

    const addToCart = (product) =>{
        setCart((prev)=> [...prev, product]);
    };

    const removeFromCart = (productId) => {
        setCart((prev) => {
          const index = prev.findIndex((item) => item.id === productId);
          if (index !== -1) {
            const newCart = [...prev];
            newCart.splice(index, 1); // يحذف عنصر واحد فقط
            return newCart;
          }
          return prev;
        });
      };
     return <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
        {children}
        </CartContext.Provider>
};

export {CartProvider, CartContext};

// عشان استدعي الاثنين مع بعض 