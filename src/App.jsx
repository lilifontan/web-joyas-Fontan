import {createContext, useState} from "react"
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemList/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Cart/Checkout";
import CartContextComponent from "./components/Context/CartContextComponent";


export default function  App  () {

  return (
    <>
      <CartContextComponent>
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<p>404</p>} />
      </Routes>
      </BrowserRouter>
      </CartContextComponent>
    </>
  )
  }



