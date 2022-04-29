import React , {useState} from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount';
import "./estilos.css";
import { Link } from 'react-router-dom';

export default function ItemDetail({product}) {
  const [number, setNumber]=useState(0);

  function onAdd(contar){
    setNumber(contar);
  }

    return (
      <>
        <div className="card-detalle">
          <Card key={product.id}>
            <Card.Body>
              <Card.Title>{product.titulo}</Card.Title>
              <Card.Text>
                {product.descripción} <br />$ {product.precio}
              </Card.Text>
              <div>
                <Card.Img variant="top" src={product.imagen} />
              </div>

              <ItemCount stock={5} onAdd={onAdd} product={product} />
              <Link to="/cart" className="botonDetalle">
                Ir al carrito
              </Link>
            </Card.Body>
          </Card>
          <div>
            <Link to="/" className="botonCart">
              Volver a TIENDA
            </Link>
          </div>
        </div>
      </>
    );
}
