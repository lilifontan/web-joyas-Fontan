import React, {useState} from 'react'

function ItemCounts(stock, initial) {
  let [numero, setNumero] = useState(0)

  function onAdd () {
    console.log ("initial es en onAdd", initial)

    if (numero < initial)
     setNumero (numero+1)
    else 
     Swal.fire('Producto sin stock')
                }
 function onRest ()
                {
    setNumero (numero-1)
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