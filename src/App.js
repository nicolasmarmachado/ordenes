import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";


export default function App() {

  return (
    <>
      <BrowserRouter> 
        <NavBar />
        <Routes>
          
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path="/categorias/:categoryId" element={<ItemListContainer/>}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
