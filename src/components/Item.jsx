
import React from 'react'
import ItemCounts from "./ItemCounts"

const Item = ({id, img, title, price, stock , initial}) => {

  return (
    <>

        <div className = "card">
            <div className="cartImg scale"> <img src={img} /> </div>
            <div className="cartTitle"><h2>{title}</h2></div>
            <div className="cartPrice"><h2>${price}</h2></div>
              <button data-id={id} className="buttonProd"> 
                    <span>Agregar al carrito </span>
                    <ItemCounts stock ={stock }  initial={initial} />
              </button>
        </div>     
     
    </>
  )
}

export default Item;

