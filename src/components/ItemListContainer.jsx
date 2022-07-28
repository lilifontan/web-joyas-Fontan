import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

export default function ItemListContainer() {

const [listaProd, setlistaProd] = useState([])

useEffect(() => {
let lista = [
    {
        id:1,
        img: "../src/images/Ring_resized.jpg",
        title: "Ethereal",
        price: 12500,
        stock:5,
        initial:0
    },
    {
        id:2,
        img: "../src/images/Earrings_resized.jpeg",
        title: "Avar",
        price: 15900,
        stock:2,
        initial:0
    },
    {
        id:3,
        img: "../src/images/Necklace_resized.jpeg",
        title: "Cyon",
        price: 16500,
        stock:8,
        initial:5
    }

] 



const promesaProductos = new Promise ((res,rej) => {

    setTimeout(() => {
        res(lista)
    },2000);
});

promesaProductos.then ((respuesta)=>{
    setlistaProd(respuesta)
})
},[]);

console.log ("lista prod "+ listaProd)

  return (
    <div id="ID_cardContainer" className="cardContainer" flex >
    <ItemList lista = {listaProd}/>
    </div> 
  )
}
