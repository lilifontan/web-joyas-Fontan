import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import ItemCounter from '../ItemList/ItemCounter';

const ItemDetail = ({sel}) => {
 
  const [goToCart, setGoToCart] = useState (false)

  return (
    <>

        <div className = "cardDetail">

            <div className="detailImage"> <img src={sel.img} /> </div>
            <div>
                <div className="cartTitleDetail"><h2>{sel.title}</h2></div>
                <div className="cartPrice"><h2>${sel.price}</h2></div>

                  { goToCart
                    ?<button data-id={sel.id} className="buttonGoToCart"> 
                     <Link to={`/cart`} >Ir al carrito</Link>
                     </button>
                    :
                     <button data-id={sel.id} className="buttonDetail"> 
                     
                     <ItemCounter sel ={sel} goToCart ={goToCart} setGoToCart={setGoToCart}/>
              </button>
                       
                  }

            </div>
        </div>     
     
    </>
  )
}

export default ItemDetail;
