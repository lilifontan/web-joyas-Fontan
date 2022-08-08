import React, {useState} from 'react'

function ItemCounter({st,init,goToCart, setGoToCart }) {

  let [numero, setNumero] = useState(0)



  function onAdd () {
    if (numero < st){
     setNumero (numero+1)
     st =st-1
    }
    else 
     Swal.fire('Producto sin stock')
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