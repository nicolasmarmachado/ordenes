import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getItem } from '../Utils/getItem';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getItem(id)
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

   return (
     <>
       <ItemDetail item={item} />
     </>
   );
};
