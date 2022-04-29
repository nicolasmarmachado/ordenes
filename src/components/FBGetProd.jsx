// import React, {useEffect, useState} from 'react'
// import {doc, getDoc, getFirestore} from 'firebase/firestore'

// export default function FBGetProd() {

//   const [product, setProduct] = useState({});

//   useEffect(() => {
//     const db = getFirestore();
//     const item = doc(db, "productos", "n7z25Y6uDFeUpKRLxO4y");

//     getDoc(item).then((res) => {
//       setProduct({ id: res.id, ...res.data() });
//     });
//   }, []);

//   return (
//     <>
//       {product.id ? (
//         <div>
//           {product.id + " " + product.title} <br />
//           <img src={product.im} alt="imagen" />
//         </div> 
//       ) : (
//         "Loading.."
//       )}
//     </>
//   );
// }

