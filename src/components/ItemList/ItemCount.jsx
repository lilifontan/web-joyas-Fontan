import { useEffect } from 'react'
import {useState, useContext} from 'react'
import {cartContext} from '../Context/CartContextComponent'


function ItemCount({selected, goToCart, setGoToCart }) {
 
  let [numero, setNumero] = useState(0)
  const {cart, addItem} = useContext (cartContext)


  function onAdd () {
     setNumero (numero+1)
              }

 function onRest () {
  if (numero > 0)
    setNumero (numero-1)
  }
 
  function setearCarrito () {
  if (numero != 0){
  addItem(selected, numero)
  setGoToCart(true)}
  else 
  Swal.fire('Agregue una cantidad de productos mayor a cero') 
}

  return (
    <>
    <div style={{marginLeft: "10px"}} >

        <button style={{marginLeft: "10px"}}  onClick={setearCarrito}>Agregar al Carrito</button>
        <button style={{marginLeft: "10px"}}  onClick={onRest}>-</button>
        
          <span style={{marginLeft: "10px"}}>{numero}</span>
        
        <button style={{marginLeft: "10px"}} onClick={onAdd}>+</button>

    </div>


    </>
  )
}

export default ItemCount