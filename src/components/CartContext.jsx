import React, {createContext, useState} from 'react'

export const Cartcontext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product) => {
    const indiceItem = cart.findIndex((cartItem) => cartItem.id === product.id);
    if (indiceItem !== -1) {
      const newCart = [...cart];
      newCart[indiceItem].cantidad =
        newCart[indiceItem].cantidad + product.cantidad;
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const removeItem = (id) => {setCart(cart.filter(product => product.id !== id));
  };

  const clear = () => setCart([]);

  const buyAll = () => setCart([]);

  const cantidadTotal=cart.reduce((total, product)=>total+product.cantidad, 0);
  const valorTotal=cart.reduce((total, product)=>total+(product.cantidad*product.precio), 0);

  return (
    <>
      <Cartcontext.Provider value={{ cart, addItem, removeItem, clear, cantidadTotal, valorTotal, buyAll}}>
        {children}
      </Cartcontext.Provider>
    </>
  );
};

export default CartContextProvider; 