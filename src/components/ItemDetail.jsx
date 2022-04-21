import React , {useState} from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount';
import "./estilos.css";
import { Link } from 'react-router-dom';

export default function ItemDetail({item}) {
  const [number, setNumber]=useState(0);

  function onAdd(contar){
    setNumber(contar);
  }

    return (
    <>
      <div className='card-detalle'>
      <Card key={item.id}>
          <Card.Body>
            <Card.Title>{item.titulo}</Card.Title>
            <Card.Text>
              {item.descripción} <br/>
              {item.precio}
            </Card.Text>
            <div>
              <Card.Img variant="top" src={item.imagen} />
            </div> 

            {  number===0 ? <ItemCount stock={5} onAdd={onAdd} item={item} />: <Link to='/cart' className='botonDetalle'>Ir al carrito</Link> }
            
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
