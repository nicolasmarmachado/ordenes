import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount';

export default function Item({prod}) {
  return (
    <>
      <div>
        <Card style={{ width: "16rem" }} key={prod.id}>
          <Card.Body>
            <Card.Title>{prod.titulo}</Card.Title>
            <Card.Text>
              <p>{prod.descripción}</p>
              <p>{prod.precio}</p>
            </Card.Text>
            <div>
              <Card.Img variant="top" src={prod.imagen} />
            </div>
            <ItemCount stock={5}/>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
