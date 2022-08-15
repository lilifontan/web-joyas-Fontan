import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import ItemCount from '../ItemList/ItemCount';

const ItemDetail = ({sel}) => {
 
  const [goToCart, setGoToCart] = useState (false)

  return (
    <>

        <div className = "cardDetail">

            <div className="detailImage"> <img src={sel.imgDetail} /> </div>
            <div>
                <div className="cartTitleDetail"><h2>{sel.title}</h2></div>
                <div className="cartPrice"><h2>${sel.price}</h2></div>

                  { goToCart
                    ? ( <>
                    <button className="buttonGoToCart"> 
                     <Link to={`/cart`} >Finalizar Compra</Link>
                     </button>

                     <button className="buttonGoToCart"> 
                     <Link to={`/`} >Seguir comprando</Link>
                     </button>
                     
                     </>)
                    :
                     <button data-id={sel.id} className="buttonDetail"> 
                     
                     <ItemCount selected ={sel} goToCart ={goToCart} setGoToCart={setGoToCart}/>
              </button>
                       
                  }

            </div>
        </div>     
     
    </>
  )
}

export default ItemDetail;
