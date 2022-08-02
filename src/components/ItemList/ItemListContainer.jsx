import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'

export default function ItemListContainer() {

const [listaProd, setlistaProd] = useState([])
const {idCategoria} = useParams()

//Array de productos hardcodeados
useEffect(() => {
let lista = [
    {
        id:1,
        img: "../src/images/Ring_resized.jpg",
        title: "Ethereal",
        price: 12500,
        stock:5,
        initial:0,
        idCategoria: "anillos"

    },
    {
        id:2,
        img: "../src/images/Earrings_resized.jpeg",
        title: "Avar",
        price: 15900,
        stock:2,
        initial:0,
        idCategoria: "aros"
    },
    {
        id:3,
        img: "../src/images/Necklace_resized.jpeg",
        title: "Cyon",
        price: 16500,
        stock:8,
        initial:0,
        idCategoria: "collares"

    },
    {
        id:4,
        img: "../src/images/brazalete_resized.jpg",
        title: "Balter",
        price: 24500,
        stock:3,
        initial:0,
        idCategoria: "pulseras"
    },
    {
        id:5,
        img: "../src/images/Aegonate.jpg",
        title: "Aegon",
        price: 17900,
        stock:4,
        initial:0,
        idCategoria: "aros"
    },
    {
        id:6,
        img: "../src/images/Enatrane_resized.jpeg",
        title: "Enif",
        price: 15900,
        stock:5,
        initial:0,
        idCategoria: "aros"
    },
    {
        id:7,
        img: "../src/images/Gehryman_resized.jpeg",
        title: "Gehry",
        price: 46500,
        stock:5,
        initial:0,
        idCategoria: "collares"
    },
    {
        id:8,
        img: "../src/images/Krakense_resized.jpg",
        title: "Kraken",
        price: 14500,
        stock:3,
        initial:0,
        idCategoria: "anillos"
    },
    {
        id:9,
        img: "../src/images/Nyctorea_resized.jpg",
        title: "Nycto",
        price: 34900,
        stock:5,
        initial:0,
        idCategoria: "pulseras"
    },
    {
        id:10,
        img: "../src/images/Odelelet_resized.jpeg",
        title: "Odile",
        price: 28900,
        stock:7,
        initial:0,
        idCategoria: "pulseras"
    },
    {
        id:11,
        img: "../src/images/Strassed_resized.jpg",
        title: "Strass",
        price: 14900,
        stock:3,
        initial:0,
        idCategoria: "pulseras"
    },
    {
        id:12,
        img: "../src/images/Absconda_resized.jpeg",
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
        if(!idCategoria){
            res(lista)
        } else 
        {
        res(lista.filter((producto) => producto.idCategoria === idCategoria))
        }
    },500);
});

// El then: lo que ejecuto cuando la promesa se resuelve positivamente. Ponemos el valor de la respuesta en un estado, lo que causa un render.
promesaProductos.then ((respuesta)=>{
    setlistaProd(respuesta)
})
},[listaProd, setlistaProd, idCategoria]);

  return (
    <div id="ID_cardContainer" className="cardContainer" flex >
    <ItemList lista = {listaProd}/>
    </div> 
  )
}
