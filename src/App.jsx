import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]); 

  
  const handleAddToCart = (producto, cantidad) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === producto.id);
      if (exists) {
        
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        
        return [...prev, { ...producto, cantidad }];
      }
    });
  };

  return (
    <>
      <NavBar cartCount={cartItems.reduce((acc, item) => acc + item.cantidad, 0)} />

      <main>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="¡Bienvenido!" />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting="Filtrando por categoría" />}
          />
          <Route
            path="/item/:itemId"
            element={<ItemDetailContainer onAdd={handleAddToCart} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
