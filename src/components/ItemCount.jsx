import React, { useState } from "react";
import "./estilos.css";
import Button from 'react-bootstrap/Button'

export default function ItemCount({stock}) {
  const [contar, setContar]=useState(0);

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

  function onAdd(){
    alert("Se han agregado " + contar + " items al carrito");
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
        <Button variant="outline-success" onClick={onAdd} >Agregar al carrito</Button>
      </div>
    </div>
    </> 
  )
}; 