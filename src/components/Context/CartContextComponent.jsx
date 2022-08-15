import React from 'react'
import { createContext } from 'react'
import {useState} from 'react'

export const cartContext = createContext()

export default function CartContextComponent({children}) {

const [cart, setCart] = useState ([{id:15, title: 'Lili', count: 10}])

  return (
    <cartContext.Provider value = {{cart, setCart}}>   
    {children}
    </cartContext.Provider>
  )
}
