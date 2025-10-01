import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProductById } from "../services/productsService";


function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(itemId).then((prod) => {
      setProduct(prod);
      setLoading(false);
    });
  }, [itemId]);

  if (loading) return <p className="loading">Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div className="itemdetail-container">
      <ItemDetail producto={product} />
    </div>
  );
}

export default ItemDetailContainer;
