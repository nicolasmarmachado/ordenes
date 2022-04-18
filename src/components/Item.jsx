import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./estilos.css";

export default function Item({prod}) {
 
  return (
    <>
      <div className='card'>
        <Card style={{width:"23em"}} key={prod.id}>
          <Card.Body >
            <Card.Title style={{width:"16em"}}>{prod.titulo}</Card.Title>
            <div>
              <Card.Img variant="top" src={prod.imagen} />
            </div>
            <Link to={`/item/${prod.id}`} className='botonDetalle'>Ver detalle </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
