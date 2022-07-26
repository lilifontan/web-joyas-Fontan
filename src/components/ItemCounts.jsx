import React, {useState} from 'react'

function ItemCounts() {

  let stock = 5
  let initial = 1
  let [numero, setNumero] = useState(0)

  function onAdd () {
    if (numero < stock){
     setNumero (numero+1)
     stock =stock-1
    }
    else 
     Swal.fire('Producto sin stock')
                }
 function onRest ()
                {
    setNumero (numero-1)
    stock =stock+1
                }

  return (
    <>
    <div style={{marginLeft: "10px"}} >
        <button style={{marginLeft: "10px"}} disabled={numero===0} onClick={onRest}>-</button>
        {
          <span style={{marginLeft: "10px"}}>{numero}</span>
        }
        <button style={{marginLeft: "10px"}} onClick={onAdd}>+</button>

    </div>


    </>
  )
}

export default ItemCounts