import React from 'react'
import ItemCounts from "./ItemCounts"

const Cards = (props) => {

  return (
    <>

        <div className = "card">
        <div className="cartImg scale"> <img src={props.cartImg} /> </div>
        <div className="cartTitle"><h2>{props.cartTitle}</h2></div>
        <div className="cartPrice"><h2>${props.cartPrice}</h2></div>
        <button data-id="${id}" className="buttonProd"> 
        <span>Agregar al carrito </span>
        <ItemCounts/>
        </button>
        </div>     
     
    </>
  )
}

export default Cards;
