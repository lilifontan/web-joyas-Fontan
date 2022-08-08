import React from 'react'
import {Link} from 'react-router-dom'
import ItemCounter from '../ItemList/ItemCounter';

const ItemDetail = ({sel}) => {
 
  console.log ("variable selected en itemDetail", {sel})

  return (
    <>

        <div className = "cardDetail">

            <div className="detailImage"> <img src={sel.img} /> </div>
            <div>
                <div className="cartTitleDetail"><h2>{sel.title}</h2></div>
                <div className="cartPrice"><h2>${sel.price}</h2></div>
                  <button data-id={sel.id} className="buttonDetail"> 
                        <span>Agregar al carrito </span>
                        <ItemCounter st={sel.stock} init={sel.initial} />
                  </button>
            </div>
        </div>     
     
    </>
  )
}

export default ItemDetail;

