import React from "react";
import CartWidget from "./CartWidget";
import "./estilos.css";


export default function NavBar() {
  
  return (
    <>  
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Hurricane&display=swap');
      </style>
        
      <div className="navbar">        
        <img src="logo_NI.jpg" alt="logo" className="logo"/>
        <ul className="items">
          <li><a href="#">Quienes somos</a></li>
          <li><a href="#">Tienda</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
        
        <CartWidget cant={10}/>

      </div>      
    </>
  )
};
