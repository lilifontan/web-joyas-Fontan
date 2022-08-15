import { useEffect } from 'react'
import {useState, useContext} from 'react'
import {cartContext} from '../Context/CartContextComponent'


function ItemCount({selected, goToCart, setGoToCart }) {
 
  let [numero, setNumero] = useState(0)
  const {cart, addItem} = useContext (cartContext)

  let st= selected.stock
  let init=selected.initial

  function onAdd () {
    if (numero < st){
     setNumero (numero+1)
     st =st-1
   
    }
    else 
     Swal.fire('Producto ha llegado al stock actual')
                }

 function onRest ()
                {
    if (numero > init){
    setNumero (numero-1)
    st =st+1
    }
  }
 

  function setearCarrito (){
  setGoToCart(true)
  addItem(selected, numero)

 // setCart ([...cart, {...selected, count: numero}])
}



  return (
    <>
    <div style={{marginLeft: "10px"}} >

        <button style={{marginLeft: "10px"}}  onClick={setearCarrito}>Agregar al Carrito</button>
        <button style={{marginLeft: "10px"}}  onClick={onRest}>-</button>
        {
          <span style={{marginLeft: "10px"}}>{numero}</span>
        }
        <button style={{marginLeft: "10px"}} onClick={onAdd}>+</button>

    </div>


    </>
  )
}

export default ItemCount