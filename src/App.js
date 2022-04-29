import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import FBGetProd from "./components/FBGetProd";
import FBGetCollection from "./components/FBGetCollection";

export default function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            {/* <Route exact path="/products" element={<FBGetProd />} />
            <Route exact path="/collection" element={<FBGetCollection />} /> */}
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/categorias/:id"element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} /> 
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}
