import ItemRelated from "@/pages/PagesDetail/components/ItemRelated";
import { useEffect, useState } from "react";
import { getProducts } from "@/firebase/db";

function ItemRelatedContainer({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(category)
    .then((products) => setProducts(products));
  }, [category]);

  return <ItemRelated itemsRelated={products}></ItemRelated>;
}

export default ItemRelatedContainer;
