import React from "react";
import { Link } from "react-router-dom";
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
          <li><Link to="/">Quienes somos</Link></li>
          <li><Link to="/">Tienda</Link></li>
          <li><Link to="/">Contacto</Link></li>
        </ul>

        <div className="home">
          <Link to="/">Inicio</Link>
        </div>
        
        <ul className="categorias">
          <li><Link to="/categorias/cestos">Cestos</Link></li>
          <li><Link to="/categorias/llaveros">Llaveros</Link></li>
          <li><Link to="/categorias/paneras">Paneras</Link></li>
          <li><Link to="/categorias/individuales">Individuales</Link></li>
        </ul>
        
        <CartWidget/>

      </div>      
    </>
  )
};
