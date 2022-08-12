import Navbar from "./components/Navbar"
import React from 'react'
import ItemListContainer from "./components/ItemList/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart'
import CartProvider from "./components/Cart/CartProvider";



const App = () => {
  return (
    <>
<BrowserRouter>
<Navbar />
<CartProvider>
  <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
    <Route path="/producto/:title" element={<ItemDetailContainer />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="*" element={<p>404</p>} />
  </Routes>
 </CartProvider>
</BrowserRouter>

    </>
  )
  }
export default App


