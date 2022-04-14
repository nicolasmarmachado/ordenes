import React from "react";
import "./estilos.css";
// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { PromiseProductos } from "../Utils/PromiseItem";

export default function ItemListContainer() {
  const [producto, setProducto]= useState([]);

  useEffect(()=>{

    PromiseProductos
    .then(resp=>{setProducto(resp)})
    .catch(err=>{console.log(err)});
  },[]); 
  
  return (
    <>   
      <ItemList  producto={producto}/>
    </> 
  )
};
 