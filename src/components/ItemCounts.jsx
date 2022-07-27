import React, {useState} from 'react'

function ItemCounts({st}, {init}) {

  console.log (st)
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
    setNumero (numero-1)
        if (numero > init){
        st =st+1
    }
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