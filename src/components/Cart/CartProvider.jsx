import React, {useState, useContext } from 'react'
const CartContext = React.createContext ()

exportconst useCartContext = () => useContext(CartContext)


export default function CartProvider({children}) {

const [cart, setCart] = useState ([])

const clearCart = () => setCart([])

const isInCart = (id) =>  cart.find (product =>product.id === id) ? true : false

const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

  return (
    <CartContext.Provider value= {{
      clearCart,
      isInCart,
      removeProduct
    }}>

      {children}
    </CartContext.Provider>
  )
}
