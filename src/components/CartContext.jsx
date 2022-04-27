import React, {createContext, useState} from 'react'

export const Cartcontext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const indiceItem = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (indiceItem !== -1) {
      const newCart = [...cart];
      newCart[indiceItem].cantidad =
        newCart[indiceItem].cantidad + item.cantidad;
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const removeItem = (id) => {setCart(cart.filter(item => item.id !== id));
  };

  const clear = () => setCart([]);

  const cantidadTotal=cart.reduce((total, item)=>total+item.cantidad, 0);
  const valorTotal=cart.reduce((total, item)=>total+(item.cantidad*item.precio), 0);

  return (
    <>
      <Cartcontext.Provider value={{ cart, addItem, removeItem, clear, cantidadTotal, valorTotal}}>
        {children}
      </Cartcontext.Provider>
    </>
  );
};

export default CartContextProvider; 