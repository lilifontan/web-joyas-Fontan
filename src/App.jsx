import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemList/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart"
import CartProvider from "./components/Cart/CartProvider";
import ItemCounter from "./components/ItemList/ItemCounter";


const App = () => {
  return (
    <>
<BrowserRouter>
<CartProvider>
<Navbar />
<Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
    <Route path="/producto/:title" element={<ItemDetailContainer />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/detail" element={<ItemCounter />} />
    <Route path="*" element={<p>404</p>} />
 </Routes>
</CartProvider>
</BrowserRouter>

    </>
  )
  }
export default App


