import React from 'react'
import Item from "./Item"


const ItemList = ({lista}) => {


  return (
    <>
        {
                lista.map((item,i)=>
                  <Item id={item.id} img={item.img} title={item.title} price={item.price} stock ={item.stock }  initial={item.initial}/>
                )
            }
     
    </>
  )
}

export default ItemList;





