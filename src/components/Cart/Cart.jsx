import React , {useContext} from 'react'
import { cartContext } from '../Context/CartContextComponent'
import {Link} from 'react-router-dom'


export default function Cart() {
const {cart, totalCount, totalToPay, removeItem} = useContext (cartContext)

  return (
    <>
    {
      cart.map((item)=>
      <>
      <div > 
        <br></br>
          {'Producto: '+ item.title + '   Cantidad:  '+ item.count}   {'  '}
          <span onClick ={() => removeItem (item.id)}>  🗑️ </span>
      </div>
      </>
      )  }
    
    <h3>Tienes en el carro :{totalCount} productos</h3>
    <h3>Tu total a pagar es  ${totalToPay}</h3>
    <br></br>

    <Link to = {'/checkout'}>  TERMINAR COMPRA  </Link>
    </>
  )
}
