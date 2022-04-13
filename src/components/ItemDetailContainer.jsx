import React, { useEffect, useState } from 'react'
import { getItem } from '../Utils/getItem';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  const [producto, setProducto]= useState({});
    
  useEffect( ()=>{
    getItem()
      .then((res)=>{
        setProducto(res);
      }); 
  }, []);

  return (
    <>
      <ItemDetail producto= {producto} />
    </>
  );
}
