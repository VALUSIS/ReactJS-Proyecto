import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import "./App.css";

function App() {
  return (
    <CartContextProvider>
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrando por categoría" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </CartContextProvider>
  );
}

export default App;
