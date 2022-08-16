import  {useContext, useEffect, useState} from 'react'
import { cartContext } from '../Context/CartContextComponent'
import {Link} from 'react-router-dom'


export default function Cart() {
const {cart, totalCount, totalToPay, removeItem} = useContext (cartContext)

const [cartAux, setAux] = useState (true)

  useEffect (() => { 
  if (cart.length == 0) setAux (false)

  }, [cart])

  return (
    <>
    { cartAux ? (<div  className="cardContainer2"  >
     <h1>Carrito de compras</h1>
     <br></br> {
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
			)
					: (
    <div  className="cardContainer2">
    <div>
    <br></br>
    <br></br>
    <Link to={`/`} >SEGUIR COMPRANDO</Link>
    </div> 
    </div>)
             }
    </>
  )
}
