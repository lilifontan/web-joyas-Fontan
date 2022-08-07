
import ItemCounter from "./ItemCounter"
import {Link} from 'react-router-dom'

const Item = ({id, img, title, price, stock , initial}) => {

  return (
    <>

        <div className = "card">
            <div className="cartImg scale"> <img src={img} /> </div>
            <div className="cartTitle"><h2>{title}</h2></div>
            <div className="cartPrice"><h2>${price}</h2></div>
            <button className="buttonProd" >  
            <Link to={`/producto/${title}`} >Ir al detalle del producto</Link>
              </button>
              <button data-id={id} className="buttonProd"> 
                    <span>Agregar al carrito </span>
                    <ItemCounter st={stock} init={initial} />
              </button>
        </div>     
     
    </>
  )
}

export default Item;

