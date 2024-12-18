import ItemRelated from "@/pages/PagesDetail/components/ItemRelated";
import { useEffect, useState } from "react";

function ItemRelatedContainer({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [category]);

  return (
    <ItemRelated itemsRelated={products}></ItemRelated>
  );
}

export default ItemRelatedContainer;
