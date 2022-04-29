import React, { useState, useContext} from "react";
import "./estilos.css";
import Button from 'react-bootstrap/Button'
import { Cartcontext } from "./CartContext";

export default function ItemCount({stock, onAdd, product}) {
  const [contar, setContar]=useState(0);

  const {addItem}= useContext(Cartcontext);

  function sumar(){
    if(contar<stock){
      setContar(contar + 1);
    }
  }

  function restar(){
    if(contar>0){
      setContar(contar - 1);
    }
  }
  
  function handleClick(){
    onAdd(contar)
    addItem({...product, cantidad: contar})
  }

  return (
    <>
    <div>
      <div className="botones">  
        <Button variant="outline-info" onClick={restar}>-</Button>
        <p style={{margin: "10px"}}>{contar}</p>
        <Button variant="outline-info" onClick={sumar}>+</Button>
      </div>
      <div className="agregar">
        <Button variant="outline-success" onClick={handleClick}>Agregar al carrito</Button>
      </div>
    </div>

    </> 
  )
}; 