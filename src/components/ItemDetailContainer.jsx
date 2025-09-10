import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"; // componente presentación

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    // placeholder: en Paso 2 usarás una Promise que resuelva el producto por id
    setProducto(null);
  }, [itemId]);

  return (
    <div style={{ padding: "2rem" }}>
      {producto ? <ItemDetail producto={producto} /> : <p>Cargando producto...</p>}
    </div>
  );
}

export default ItemDetailContainer;