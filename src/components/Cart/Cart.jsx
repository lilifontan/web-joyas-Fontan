import {useContext} from 'react'
import { CartContext } from './CartProvider'

export default function Cart() {
    const nombre = useContext(CartContext)
    console.log ('Cart ', nombre)
  return (
    <div>Cart</div>
  )
}
