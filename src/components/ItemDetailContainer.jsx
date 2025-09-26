import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(itemId).then((prod) => setProduct(prod));
  }, [itemId]);

  if (!product) return <p className="loading">Cargando producto...</p>;

  return (
    <div className="itemdetail-container">
      <ItemDetail producto={product} />
    </div>
  );
}

export default ItemDetailContainer;
