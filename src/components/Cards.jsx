import React from 'react'

const Cards = (props) => {
  return (
    <>

        <div className = "card">
        <div className="cartImg scale"> <img src={props.cartImg} /> </div>
        <div className="cartTitle"><h2>{props.cartTitle}</h2></div>
        <div className="cartPrice"><h2>${props.cartPrice}</h2></div>
        <button data-id="${id}" class="buttonProd"> Agregar al Carrito </button>
        </div>     
     
    </>
  )
}

export default Cards;
