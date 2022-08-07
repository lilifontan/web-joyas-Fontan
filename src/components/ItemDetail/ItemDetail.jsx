import React from 'react'
import {Link} from 'react-router-dom'
import ItemCounter from '../ItemList/ItemCounter';

const ItemDetail = ({selected}) => {
 
  console.log ("variable selected en itemDetail", selected)

  return (
    <>

        <div className = "card">
            <div className="cartImg scale"> <img src={selected.img} /> </div>
            <div className="cartTitle"><h2>{selected.title}</h2></div>
            <div className="cartPrice"><h2>${selected.price}</h2></div>
              <button data-id={selected.id} className="buttonProd"> 
                    <span>Agregar al carrito </span>
                    <ItemCounter st={selected.stock} init={selected.initial} />
              </button>
        </div>     
     
    </>
  )
}

export default ItemDetail;

