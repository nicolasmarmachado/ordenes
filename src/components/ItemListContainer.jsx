import React from "react";
import "./estilos.css";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
// import { PromiseProductos } from "../Utils/PromiseItem";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

export default function ItemListContainer() {
  const {id}=useParams();
  // Y7eSgMZfHUhunxXUGXns
  //productos

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    // const productos = collection(db, "productos");

    let productos;
    if(!id){
      productos=collection(db, "productos");
    }
    else{
      productos=query(collection(db, "productos"), where("categorias","==", id))
    }

    getDocs(productos).then((res) => {
       setProducts(res.docs.map(item=>({id: item.id, ...item.data()})))

      //     let products=[...res.docs]
      //     products=products.map(item =>({id: item.id, ...item.data()}))
  
      // console.log(products)
      // console.log(res.products)
    });

  }, [id]);

//   useEffect ( ()=>{
//     console.log(products)
        
// }, [products]);

  return (
    <>
      <ItemList products={products}  />

      {/* {products.length ? (
        <div>
          {JSON.stringify(products)}
        </div>
      ) : (
        "Loading.."
      )} */}
    </>
  );
}

//   const [producto, setProducto]= useState([])

//   const {categoryId}=useParams();

//   useEffect(()=>{

//     PromiseProductos(categoryId)
//     .then(resp=>{setProducto(resp)})
//     .catch(err=>{console.log(err)})
    
//   },[categoryId]); 

//   return (
//     <>   
//        <ItemList  producto={producto}/>
//     </> 
//   )
// };
 