import React, { useContext,useEffect, useState } from 'react'
// import {collection, getFirestore, addDoc, updateDoc, writeBatch} from 'firebase/firestore'
// import { Cartcontext } from './CartContext';


export default function CreateOrder({name, email,phone}) {
//   const {cart, valorTotal}= useContext(Cartcontext);
//   const [nico,setNico]=useState();
  

//   useEffect(() => {
//     const db = getFirestore();
//     const batch=writeBatch()
//     const ventas=collection(db, "ventas");

//     const order={
//         buyer: {name, phone, email},
//         items: cart,
//         total: 410
//     }
//     addDoc(ventas,order).then(({id})=>setNico(id))
    
// }, [])
//     console.log(nico)

    // return 
    // <><div>
    // Usted ha comprado: 
    // </div>
    // </>
}
  
    // useEffect(()=>{
    //     const db = getFirestore();
    //     const ventas=(collection(db, "ventas"))
    //     let buyer= { 
    //     buyer: { name, phone, email }, 
    //      items: [{id, title, price}],
    //      total: 100}

    //     addDoc(ventas, buyer). then(({id})=>{
    //         console.log(id)
    //     })
    // },[]);

    //ver 1:35:00   
//mapear cart para hacer la orden? 
// //obtener name, phone, email de Form
//     return <div>sendOrder</div>;
    
  
// }

