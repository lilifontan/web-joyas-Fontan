import React, { useEffect, useState } from 'react'
import Cards from "./Cards"

    const CardsContainer = () => {
        const [listaP,setListaP] =useState([])
    
        useEffect(()=>{
    
            setListaP([
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
                    initial:0
                }

        ])
        },[])
    
      return (
        <div id="ID_cardContainer" className="cardContainer" flex >
        <Cards lista={listaP} />
        </div> 
      )
    }
    
    export default CardsContainer