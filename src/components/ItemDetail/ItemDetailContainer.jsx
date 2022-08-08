import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'



export default function ItemDetailContainer() {

const [selected, setSelected] = useState({})
const {title} = useParams()

//Array de productos hardcodeados
useEffect(() => {
let lista = [
    {
        id:1,
        img: "../src/images/Rings-Ethereal-700.jpg",
        title: "Ethereal",
        price: 12500,
        stock:5,
        initial:0,
        idCategoria: "anillos"
    },
    {
        id:2,
        img: "../src/images/Aval-Earrings-700.jpeg",
        title: "Avar",
        price: 15900,
        stock:2,
        initial:0,
        idCategoria: "aros"
    },
    {
        id:3,
        img: "../src/images/Necklace-Cyon-700.jpg",
        title: "Cyon",
        price: 16500,
        stock:8,
        initial:0,
        idCategoria: "collares"

    },
    {
        id:4,
        img: "../src/images/Bracelet-Balter-700.jpg",
        title: "Balter",
        price: 24500,
        stock:3,
        initial:0,
        idCategoria: "pulseras"
    },
    {
        id:5,
        img: "../src/images/Earrings-Aegon-700.jpg",
        title: "Aegon",
        price: 17900,
        stock:4,
        initial:0,
        idCategoria: "aros"
    },
    {
        id:6,
        img: "../src/images/Earrings-Enif-700.jpg",
        title: "Enif",
        price: 15900,
        stock:5,
        initial:0,
        idCategoria: "aros"
    },
    {
        id:7,
        img: "../src/images/Necklace-Helgue-700.jpeg",
        title: "Gehry",
        price: 46500,
        stock:5,
        initial:0,
        idCategoria: "collares"
    },
    {
        id:8,
        img: "../src/images/Ring-Kraken-700.jpg",
        title: "Kraken",
        price: 14500,
        stock:3,
        initial:0,
        idCategoria: "anillos"
    },
    {
        id:9,
        img: "../src/images/Bracelet-Nycto-700.jpg",
        title: "Nycto",
        price: 34900,
        stock:5,
        initial:0,
        idCategoria: "pulseras"
    },
    {
        id:10,
        img: "../src/images/Bracelet-Odile-700.jpg",
        title: "Odile",
        price: 28900,
        stock:7,
        initial:0,
        idCategoria: "pulseras"
    },
    {
        id:11,
        img: "../src/images/Bracelet-Strass-700.jpg",
        title: "Strass",
        price: 14900,
        stock:3,
        initial:0,
        idCategoria: "pulseras"
    },
    {
        id:12,
        img: "../src/images/Earrings-Abscond-700.jpg",
        title: "Abscond",
        price: 18000,
        stock:5,
        initial:0,
        idCategoria: "aros"
    }

] 


//Promesa que se resuelve en 2 segundos
const promesaProductos = new Promise ((res,rej) => {

    setTimeout(() => {
        if(!title){
            res(lista)
        } else 
        {
        res(lista.filter((producto) => producto.title === title))
        }
    },0);
});

// El then: lo que ejecuto cuando la promesa se resuelve positivamente. Ponemos el valor de la respuesta en un estado, lo que causa un render.
promesaProductos.then ((respuesta)=>{
    setSelected(respuesta[0])
})
},[],[selected, setSelected, title]);

console.log ("Selected en ItemDetailContainer ", selected)
  return (
    <ItemDetail  sel= {selected} />
  )
}
