import React, { useContext } from "react";
import { Cartcontext } from "./CartContext";
import "./estilos.css";


export default function CartWidget() {
  const {cantidadTotal }= useContext(Cartcontext);

  return (
    <>
      <div className="cartwidget"> 
        <b>( {cantidadTotal} )</b>
        <img src="cart3.svg" alt="cartwidget" className="carrito" />
      </div>
    </>
  );
};
