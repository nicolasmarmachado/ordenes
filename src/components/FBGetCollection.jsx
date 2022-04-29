// import React, {useEffect, useState} from 'react'
// import {collection, getDocs, getFirestore} from 'firebase/firestore'

// export default function FBGetCollection() {
//   // Y7eSgMZfHUhunxXUGXns
//   //productos

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const db = getFirestore();
//     const productos = collection(db, "productos");

//     getDocs(productos).then((res) => {
//     //     let products=[...res.docs]
//     //     products=products.map(item =>({id: item.id, ...item.data()}))

//     // console.log(products)
        
//         setProducts(res.docs.map(item=>({id: item.id, ...item.data()})))
//         // console.log(res.products)
//     });


//   }, []);

//   useEffect ( ()=>{
//     console.log(products)
        
// }, [products]);

//   return (
//     <>
//       {products.length ? (
//         <div>
//           {JSON.stringify(products)}
//         </div>
//       ) : (
//         "Loading.."
//       )}
//     </>
//   );
// }

