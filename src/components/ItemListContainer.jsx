import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "../services/productsService";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      try {
        const res = categoryId ? await getProductsByCategory(categoryId) : await getProducts();
        setItems(res);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [categoryId]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>{greeting}</h1>
      {loading ? <p>Cargando productos...</p> : <ItemList productos={items} />}
    </div>
  );
}

export default ItemListContainer;

