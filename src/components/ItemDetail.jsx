import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount';
import "./estilos.css";

export default function ItemDetail({item}) {

  return (
    <>
      <div className='card-detalle'>
      <Card key={item.id}>
          <Card.Body>
            <Card.Title>{item.titulo}</Card.Title>
            <Card.Text>
              <p>{item.descripción}</p>
              <p>{item.precio}</p>
            </Card.Text>
            <div>
              <Card.Img variant="top" src={item.imagen} />
            </div>
            <ItemCount stock={5}/>
          </Card.Body>
        </Card>
      </div>


    </>
  );
}
