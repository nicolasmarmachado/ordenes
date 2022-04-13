import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount';
import "./estilos.css";

export default function ItemDetail({producto}) {
  return (
    <>
      <div className='card-detalle'>
      <Card key={producto.id}>
          <Card.Body>
            <Card.Title>{producto.titulo}</Card.Title>
            <Card.Text>
              <p>{producto.descripción}</p>
              <p>{producto.precio}</p>
            </Card.Text>
            <div>
              <Card.Img variant="top" src={producto.imagen} />
            </div>
            <ItemCount stock={5}/>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
