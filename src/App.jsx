import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          {}
          <Route path="/" element={<ItemListContainer greeting="Todos los productos" />} />

          {}
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos por categoría" />} />

          {}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />

          {}
          <Route path="*" element={<h2 className="error404">Página no encontrada</h2>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
