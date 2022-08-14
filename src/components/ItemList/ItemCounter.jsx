import React, {useState} from 'react'
import {useCartContext} from '../../components/Cart/CartProvider'


function ItemCounter({selected,goToCart, setGoToCart }) {
  console.log ("selected en ItemCounter", {selected})
 
  let [numero, setNumero] = useState(0)
  const {addProduct} = useCartContext

  console.log ('addProduct ', addProduct)

  function onAdd () {
    if (numero < selected.stock){
     setNumero (numero+1)
     selected.stock =selected.stock-1
     addProduct(selected,numero)
    }
    else 
     Swal.fire('Producto sin stock')
                }

 function onRest ()
                {
    if (numero > selected.initial){
    setNumero (numero-1)
    selected.stock =selected.stock+1
    }
  }

  function setearCarrito (){
  setGoToCart(true)
}

  return (
    <>
    <div style={{marginLeft: "10px"}} >

        <button style={{marginLeft: "10px"}}  onClick={setearCarrito}>Ir al Carrito</button>
        <button style={{marginLeft: "10px"}}  onClick={onRest}>-</button>
        {
          <span style={{marginLeft: "10px"}}>{numero}</span>
        }
        <button style={{marginLeft: "10px"}} onClick={onAdd}>+</button>

    </div>


    </>
  )
}

export default ItemCounter