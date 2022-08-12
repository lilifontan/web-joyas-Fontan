import React, {useState} from 'react'

function ItemCounter({selected,goToCart, setGoToCart }) {

  let [numero, setNumero] = useState(0)



  function onAdd () {
    if (numero < selected.stock){
     setNumero (numero+1)
     selected.stock =selected.stock-1
    }
    else 
     Swal.fire('Producto sin stock')
                }

 function onRest ()
                {
    if (numero > selected.initial){
    setNumero (numero-1)
    selected.initial =selected.initial+1
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