
import React from 'react'
import ItemCounter from "./ItemCounter"

const Item = ({id, img, title, price, stock , initial}) => {

  return (
    <>

        <div className = "card">
            <div className="cartImg scale"> <img src={img} /> </div>
            <div className="cartTitle"><h2>{title}</h2></div>
            <div className="cartPrice"><h2>${price}</h2></div>
              <button data-id={id} className="buttonProd"> 
                    <span>Agregar al carrito </span>
                    <ItemCounter st={stock} init={initial} />
              </button>
        </div>     
     
    </>
  )
}

export default Item;

