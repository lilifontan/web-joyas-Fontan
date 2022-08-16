import React , {useContext} from 'react'
import { cartContext } from '../Context/CartContextComponent'


export default function Cart() {
const {cart, totalCount, totalToPay, removeItem} = useContext (cartContext)

  return (
    <>
    {
      cart.map((item)=>
      <>
      <div> 
          {'Producto: '+ item.title + '   Cantidad:  '+ item.count}   {'  '}
          <span onClick ={() => removeItem (item.id)}>  🗑️ </span>
      </div>
      </>
      )  }
    
    <div>Tienes en el carro :{totalCount} a pagar : {totalToPay}</div>
    </>
  )
}
