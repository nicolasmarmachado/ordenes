import { Button } from 'bootstrap';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Cartcontext } from './CartContext';

export default function CheckOut() {
    const [emailReq, setEmailReq]=useState("");
    const [phoneReq, setPhoneReq]=useState(0);
    const handleEmailRequired = (e) => {setEmailReq(e.target.value)}
    const handlePhoneRequired = (e) => {setPhoneReq(e.target.value)}

    const {cart, valorTotal, buyAll}=useContext(Cartcontext)
    const [buyer, setBuyer]=useState({
        name: "",
        surname:"",
        cellphone:"",
        email:""
    })

    const [checkoutId,setCheckoutId]=useState();

    const handleOnChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const sendOrder = () => {
        if(emailReq === ""){alert("Complete los campos obligatorios")}
        else if(phoneReq === 0){alert("Complete los campos obligatorios")}else{
        let orderDate = serverTimestamp();
        const venta = {
            buyer: buyer,
            items: cart,
            total: valorTotal,
            date: orderDate
        }
        const db = getFirestore();
        const ordersCollection = collection(db, "ventas");
        addDoc(ordersCollection, venta).then(({id})=> setCheckoutId(id));
        buyAll();
        }
    }
        
   return (
       <>
         <h2>Cart Shop Checkout</h2>
       {checkoutId===""&&<>
    <input name='email' type="email" placeholder="Enter email" onChange={(e)=> {handleOnChange(e); handleEmailRequired(e)}} required/>
    <input name='name' type="text" placeholder="Enter name" onChange={handleOnChange} required/>
    <input name='surname' type="text" placeholder="Enter surname" onChange={handleOnChange} required/>
    <input name='cellphone' type="number" placeholder="Enter cellphone number" onChange={(e)=> {handleOnChange(e); handlePhoneRequired(e)}} required/>
    </>} 
    {checkoutId === "" ? <Button type='submit' onClick={() => sendOrder()}>Submit</Button> :
    <h5>Id de compra: {checkoutId}. <br/> 
    Gracias por su compra.
    Si desea continuar su compra haga click en el el botón <b>Volver a TIENDA</b></h5>
    }
    <>
    <Link to="/" className="botonCart">Volver a TIENDA
    </Link>
    </>
       </>
   ) 
}

//(<>
//   <h2>Cart Shop Checkout</h2>
//   { checkoutId === "" && <>
//   <Form><Form.Group className="mb-3" controlId="formBasicEmail">
//       <Form.Label>Email address</Form.Label>
//       <Form.Control name='email' type="email" placeholder="Enter email" onChange={(e)=> {handleOnChange(e); handleEmailRequired(e)}} required/>
//       <Form.Text className="text-muted">
//           Campo obligatorio.
//       </Form.Text>
//   </Form.Group>
//   <Form.Group className="mb-3">
//       <Form.Label>Name</Form.Label>
//       <Form.Control name='name' type="text" placeholder="Enter name" onChange={handleOnChange} required/>
//   </Form.Group>
//   <Form.Group className="mb-3">
//       <Form.Label>Surname</Form.Label>
//       <Form.Control name='surname' type="text" placeholder="Enter surname" onChange={handleOnChange} required/>
//   </Form.Group>
//   <Form.Group className="mb-3">
//       <Form.Label>Cellphone number</Form.Label>
//       <Form.Control name='cellphone' type="number" placeholder="Enter cellphone number" onChange={(e)=> {handleOnChange(e); handleCellphoneRequired(e)}} required/>
//       <Form.Text className="text-muted">
//           Campo obligatorio.
//       </Form.Text>
//   </Form.Group></Form>
//   </>}
//   {checkoutId === "" ? <Button variant="primary" type='submit' onClick={() => sendOrder()}>Submit</Button> :
//   <h5>Id de compra: {checkoutId}, con este id podrás reclamar tu compra en caso de un imprevisto. Si quieres seguir comprando clickea en el apartado "Home" en la barra de navegación.</h5>}
// </>
// )


 