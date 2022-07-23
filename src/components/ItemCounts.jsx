import React, {useState} from 'react'

function ItemCounts() {

  const [numero, setNumero] = useState(0)
  return (
    <>
    <div style={{marginLeft: "10px"}} >
        <button style={{marginLeft: "10px"}} onClick={() => setNumero (numero-1)}>-</button>
        {
          <span style={{marginLeft: "10px"}}>{numero}</span>
        }
        <button style={{marginLeft: "10px"}} onClick={() => setNumero (numero+1)}>+</button>

    </div>


    </>
  )
}

export default ItemCounts