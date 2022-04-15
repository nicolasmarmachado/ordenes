import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
// import ItemCount from './ItemCount';
import "./estilos.css";

export default function Item({prod}) {
 
  return (
    <>
      <div className='card'>
        <Card style={{width:"23em"}} key={prod.id}>
          <Card.Body >
            <Card.Title style={{width:"16em"}}>{prod.titulo}</Card.Title>
            {/* <Card.Text>
              <p>{prod.descripción}</p>
              <p>{prod.precio}</p>
            </Card.Text> */}
            <div>
              <Card.Img variant="top" src={prod.imagen} />
            </div>
            {/* <ItemCount stock={5}/> */}
            <Link to={`/item/${prod.id}`}>Ver detalle </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
