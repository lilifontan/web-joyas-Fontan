import React, {useState, useContext} from 'react'
import { cartContext } from '../Context/CartContextComponent'
import {addDoc, collection, getFirestore} from 'firebase/firestore'

export default function Checkout() {
const {totalToPay, cart} = useContext (cartContext)
const [name, setName ] = useState ('')
const [email, setEmail ] = useState ('')
const [tel, setTel ] = useState ('')
const [orderId, setOrderId ] = useState ('')

function validateForm () {
const order = {
  buyer: {name, tel, email},
  totalToPay,
  cart,
}
console.log ('order ', order)
const db = getFirestore ()
const orders = collection (db, 'orders')
addDoc (orders, order).then (({id}) => { setOrderId(id)})
}

  return (
    <>
  {
  
  orderId? 
  
  ('Gracias por confiar en nosotros. Tu id de compra es : '+  orderId) : (


    <div  className="cardContainer2"  >
      <h1>Terminar Proceso de Compra</h1>
      <br></br>
      <br></br>
          <div className = 'checkout'>
          <h3>Nombre</h3> <input type ='text' onChange = { (e) => setName(e.target.value)} /> 
          </div>
          <div className = 'checkout'>
          <h3>Teléfono</h3>  <input type ='tel' onChange = { (e) => setTel(e.target.value)}/>
          </div>
          <div className = 'checkout'>
          <h3>email</h3> <input type ='email' onChange = { (e) => setEmail(e.target.value)}/>

          <button className="buttonFinish" onClick ={validateForm}> TERMINAR COMPRA </button>
          </div>
    </div>
  )}
    </>
  )
}
