import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"; 

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    
    setProducto(null);
  }, [itemId]);

  return (
    <div style={{ padding: "2rem" }}>
      {producto ? <ItemDetail producto={producto} /> : <p>Cargando producto...</p>}
    </div>
  );
}

export default ItemDetailContainer;