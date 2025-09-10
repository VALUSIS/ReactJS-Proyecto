import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams(); // 
  useEffect(() => {
    getProducts().then((res) => {
      if (categoryId) {
  setItems(
    res.filter(
      (prod) =>
        prod.category.toLowerCase() === categoryId.toLowerCase()
    )
  );
} else {
  setItems(res);
}
    });
  }, [categoryId]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>{greeting}</h1>
      <ul className="ul__items">
        {items.map((prod) => (
          <li key={prod.id} className="ul__li--item">
            {prod.name} - ${prod.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;