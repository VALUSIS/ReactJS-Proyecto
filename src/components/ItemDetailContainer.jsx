import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer({ onAdd }) {
  const [producto, setProducto] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId).then((res) => setProducto(res));
  }, [itemId]);

  return (
    <div>
      <ItemDetail producto={producto} onAdd={onAdd} />
    </div>
  );
}

export default ItemDetailContainer;