import React, {useState, useContext } from 'react'
const CartContext = React.createContext ()
export const useCartContext = () => useContext(CartContext)


export default function CartProvider({children}) {
// para almacenar el carrito se crea esta variable cart que actualia por medio de un estado, para renderizar en cada actualización
      const [cart, setCart] = useState ([])  
//Creo las cuatro funciones para gestión decontenido del carrito
      const clearCart = () => setCart([])

      const isInCart = (id) =>  cart.find (product =>product.id === id) ? true : false

      const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

      const addProduct = (item, newQuantity) => {
          const newCart = cart.filter(prod => prod.id !== item.id)
          newCart.push({ ...item, quantity: newQuantity })
          setCart(newCart)
        }
   const lili = useCartContext(CartContext)
   console.log ('CartContext ', lili)
   
  return (
    <CartContext.Provider value= {{
      clearCart,
      isInCart,
      addProduct,
      removeProduct
      
    }}>

      {children}
    </CartContext.Provider>
  )
}
