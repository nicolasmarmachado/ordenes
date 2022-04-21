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
  console.log(cart);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clear = () => setCart([]);

  return (
    <>
      <Cartcontext.Provider value={{ cart, addItem, removeItem, clear }}>
        {children}
      </Cartcontext.Provider>
    </>
  );
};

export default CartContextProvider; 