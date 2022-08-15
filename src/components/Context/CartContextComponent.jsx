import React from 'react'
import { createContext } from 'react'
import {useState, useEffect} from 'react'
import Item from '../ItemList/Item'

export const cartContext = createContext()

export default function CartContextComponent({children}) {

const [cart, setCart] = useState ([])
const [total, setTotal] = useState (0)

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

useEffect (() =>{
setTotal (cart.reduce((acc, item)=> acc + item.count,0))
}, [cart])

  return (
    <cartContext.Provider value = {{cart, addItem, total}}>   
    {children}
    </cartContext.Provider>
  )
}
