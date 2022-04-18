import React from 'react'
import Item from './Item'

export default function ItemList({producto}) {
  return (
    <>
      {producto.map( prod => <Item key={prod.id} prod={prod}/>)}
    </>
  );
};
