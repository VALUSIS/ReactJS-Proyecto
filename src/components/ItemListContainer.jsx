import { useParams } from "react-router-dom";
import ItemList from "./ItemList"; 
import { useEffect, useState } from "react";

function ItemListContainer() {
  const { categoryId } = useParams(); 
  const [productos, setProductos] = useState([]);

  
  useEffect(() => {
    
    setProductos([]); 
  }, [categoryId]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h1>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;