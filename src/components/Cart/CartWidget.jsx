import React , {useContext, useEffect, useState} from 'react'
import { cartContext } from '../Context/CartContextComponent'

export default function CartWidget() {
const {cart, totalCount} = useContext (cartContext)
const [aux, setAux] = useState (false)

useEffect (() => { 
  if (cart.length != 0) {setAux (true)
}
  else {setAux (false)}

  }, [cart], aux, setAux)

  return (
    <>  {  aux ? (
        <div>
        <img
          src="./src/images/carrito-lila-removebg-preview.png"
          alt="Logo de la marca"
          width="50px"
        /> 

      <div className = 'total'> {totalCount} </div>
        
          </div>
        ) : (
          <div>
          <img
            src="./src/images/carrito-lila-removebg-preview.png"
            alt="Logo de la marca"
            width="50px"
          /> 
          
            </div>



        )
      
      }
    </>
  )
}
