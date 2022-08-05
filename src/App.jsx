import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemList/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestEventos from "./components/TestEventos";


const App = () => {
  return (
    <>
<BrowserRouter>
<Navbar />
<Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
    <Route path="/producto/:idProducto" element={<ItemDetailContainer />} />
    <Route path="/testeventos" element={<ItemDetailContainer tit={"Kraken"}/>} />
    <Route path="*" element={<p>404</p>} />
 </Routes>

</BrowserRouter>

    </>
  )
  }
export default App


