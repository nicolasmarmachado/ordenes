import React from "react";
import "./estilos.css";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { PromiseProductos } from "../Utils/PromiseItem";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [producto, setProducto]= useState([])

  const {categoryId}=useParams();

  useEffect(()=>{

    PromiseProductos(categoryId)
    .then(resp=>{setProducto(resp)})
    .catch(err=>{console.log(err)})
    
  },[categoryId]); 

  return (
    <>   
       <ItemList  producto={producto}/>
    </> 
  )
};
 