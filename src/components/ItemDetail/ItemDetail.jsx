
import {Link} from 'react-router-dom'
import ItemCounter from '../ItemList/ItemCounter';

const ItemDetail = ({producto}) => {
console.log ("producto en ItemDetail", )
  return (
    <>

        <div className = "card">
            <div className="cartImg scale"> <img src={producto.img} /> </div>
            <div className="cartTitle"><h2>{producto.title}</h2></div>
            <div className="cartPrice"><h2>${producto. price}</h2></div>
              <button data-id={id} className="buttonProd"> 
                    <span>Agregar al carrito </span>
                    <ItemCounter st={producto.stock} init={producto.initial} />
              </button>
        </div>     
     
    </>
  )
}

export default ItemDetail;

