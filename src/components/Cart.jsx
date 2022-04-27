import React, { useContext, } from 'react'
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Cartcontext } from './CartContext';
import "./estilos.css";

// style={{width: "23em"}}
export default function Cart() {
  const {cart, clear, removeItem, cantidadTotal, valorTotal}= useContext(Cartcontext);

  function handleClickClear(){
    clear();
  }
  
  return (
    <>
      {cart.length > 0
        ? cart.map((item) => (
            <div>
              <Card>
                <Card.Body>
                  <img src={item.imagen} alt="imagen" className="cardCarrito" />
                  <br />
                  <b>{item.titulo}</b> <br />
                  $ {item.precio} <br />
                  {item.cantidad} <br />
                  <button onClick={() => removeItem(item.id)}>
                    Remover este item
                  </button>
                </Card.Body>
              </Card>
            </div>
            
          ))
        : "El carrito está vacio"}
      <br />
      <div>
          Cantidad de items: <b>{cantidadTotal}</b> <br/>
          Importe total a pagar: $ <b>{valorTotal}</b> <br/>
      </div>
      <br/>
      <div>
        <button onClick={handleClickClear}>Remover todos los items</button>
      </div>
      <br />
      <div>
        <Link to="/" className="botonCart">
          Volver a TIENDA
        </Link>
      </div>
      <br />
      <div>
        <button onClick={handleClickClear} className="botonFinalizar">FINALIZAR COMPRA</button>
        {/* <button onClick={handleClickClear} className="botonFinalizar">
          
        </button> */}
      </div>
    </>
  );}