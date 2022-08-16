import React, {useState} from 'react'

export default function Checkout() {
const [name, setName ] = useState ('')
const [email, setEmail ] = useState ('')
const [tel, setTel ] = useState ('')


  return (
    <div  className="cardContainer2"  >
      <h1>Terminar Proceso de Compra</h1>
      <br></br>
      <br></br>
          <div class = 'checkout'>
          <input type ='text'/>
          </div>
          <div class = 'checkout'>
          <input type ='tel'/>
          </div>
          <div class = 'checkout'>
          <input type ='email'/>
          </div>
    </div>
  )
}
