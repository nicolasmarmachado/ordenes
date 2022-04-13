import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";

export default function App() {


  return (
    <> 
      <NavBar/>
      <ItemDetailContainer/>
      <ItemListContainer/>
    </>
  );
}
