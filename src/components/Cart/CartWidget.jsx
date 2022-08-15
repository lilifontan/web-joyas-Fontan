import React , {useContext, useEffect} from 'react'
import { cartContext } from '../Context/CartContextComponent'

export default function CartWidget() {
const {cart, total} = useContext (cartContext)


useEffect (()=>{
    console.log ("CART LENGHT ", cart)
  }, [cart])

  return (
    <div>
    <img
    src="./src/images/carrito-lila-removebg-preview.png"
    alt="Logo de la marca"
    width="50px"
  /> 

 <div class = 'total'> {total} </div>
  
    </div>
  )
}
