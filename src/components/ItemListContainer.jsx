import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams(); 

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
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center",}}>{greeting}</h1>
      <ItemList productos={items} />
    </div>
  );
}

export default ItemListContainer;
