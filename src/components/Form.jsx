import { addDoc, collection, getFirestore, writeBatch } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { Cartcontext } from './CartContext';
// import { Cartcontext } from './CartContext';
import CreateOrder from './CreateOrder';
import { Link } from 'react-router-dom';

export default function Form2() {
  const {cart, cantidadTotal, valorTotal}= useContext(Cartcontext);
  const [nico,setNico]=useState();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // function terminarCompra (){
  //   const db = getFirestore();
  //   const batch=writeBatch()
  //   const =collection(db, "ventas");

  //   const order={
  //       buyer: {name, phone, email},
  //       items: cart,
  //       total: 410
  //   }
  //   addDoc(ventas,order).then(({id})=>setNico(id))
  // }

  useEffect(() => {
    console.log(name, email, phone);
  }, [name, email, phone]);

  return (
    <>
      <input
        type={"text"}
        value={name}
        onChange={(e) => {
          setName(e.currentTarget.value);
        }}
      />
      <input
        type={"text"}
        value={email}
        onChange={(e) => {
          setEmail(e.currentTarget.value);
        }}
      /><input
      type={"text"}
      value={phone}
      onChange={(e) => {
        setPhone(e.currentTarget.value);
      }}
    />
    <Link to="/create" >Crear Orden de compra y pagar</Link >
    {/* <CreateOrder name={name} phone={phone} email={email}/> */}
    </>
  );
}
