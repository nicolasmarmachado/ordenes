import React from 'react'
import { Button, Card } from 'react-bootstrap'
// import ItemCount from './ItemCount';
import "./estilos.css";

export default function Item({prod}) {
 
  return (
    <>
      <div className='card'>
        <Card style={{width:"14em"}} key={prod.id}>
          <Card.Body >
            <Card.Title>{prod.titulo}</Card.Title>
            {/* <Card.Text>
              <p>{prod.descripción}</p>
              <p>{prod.precio}</p>
            </Card.Text> */}
            <div>
              <Card.Img variant="top" src={prod.imagen} />
            </div>
            {/* <ItemCount stock={5}/> */}
            <Button className='botonDetalle'>Ver detalle</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
