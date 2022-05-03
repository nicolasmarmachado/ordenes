import React, { useEffect, useState } from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { useParams } from 'react-router-dom';
// import { getItem } from '../Utils/getItem';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "productos", id);

    getDoc(item).then((res) => {
      setProduct({ id: res.id, ...res.data() });
    });
  }, [id]);

  return (
    <>
      <ItemDetail product={product} />
    </> 
  );
}

  // const [item, setItem] = useState({});
  // const { id } = useParams();

  // useEffect(() => {
  //   getItem(id)
  //     .then((res) => {
  //       setItem(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [id]);

  //  return (
  //    <>
  //      <ItemDetail item={item} />
       
  //    </>
  //  );
// };
