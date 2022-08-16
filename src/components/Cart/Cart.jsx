import React , {useContext} from 'react'
import { cartContext } from '../Context/CartContextComponent'
import {Link} from 'react-router-dom'


export default function Cart() {
const {cart, totalCount, totalToPay, removeItem} = useContext (cartContext)

  return (
    <>
     <div  className="cardContainer2" flex >
     <h1>Carrito de compras</h1>
     <br></br>
    {
      cart.map((item)=>
      <>
      
      <h2 > 
 
        {'Producto: '+ item.title + '   Cantidad:  '+ item.count}   {'  '}
          <span onClick ={() => removeItem (item.id)}>  🗑️ </span>
      </h2>
   
    
      </>
      )  }
        <br></br>
    
    <h3>Cantidad de productos : {totalCount} </h3>
    <h3>Tu total a pagar es  ${totalToPay}</h3>
    <br></br>

    <Link to = {'/checkout'}>  TERMINAR COMPRA  </Link>
    </div>
    </>
  )
}
