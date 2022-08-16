import React, { createContext } from 'react'
import {useState, useEffect} from 'react'
import Item from '../ItemList/Item'

export const cartContext = createContext()

export default function CartContextComponent({children}) {

const [cart, setCart] = useState ([])
const [totalCount, setTotalCount] = useState (0)
const [totalToPay, setTotalToPay] = useState (0)


//Función para agregar elementos al carrito
function addItem (item, count)
{
    const cartAux = [...cart]
    let foundInCart = false

    for (let i=0; i<cartAux.length; i++){
    if (cartAux[i].id == item.id) {
      cartAux[i].count =cartAux[i].count+count
      foundInCart =true
    }
    }
    if (!foundInCart){
      cartAux.push ({...item, count})
    }
    setCart(cartAux)

}

//Función para remover elementos del carrito
function removeItem (id) {
  setCart(cart.filter(item => item.id !== id))
}

//Función para vaciar el carrito
function clearCart () {
  setCart([])

}

//Función chequear si hay elementos en el carrito
function isInCart (id) {
  cart.find(item => item.id === id) ? true : false
}

useEffect (() =>{
setTotalCount (cart.reduce((acc, item)=> acc + item.count,0))
setTotalToPay (cart.reduce((acc, item)=> acc + item.count*item.price,0))
}, [cart])


  return (
    <cartContext.Provider value = {{cart, addItem, totalCount, totalToPay, removeItem, clearCart, isInCart}}>   
    {children}
    </cartContext.Provider>
  )
}
