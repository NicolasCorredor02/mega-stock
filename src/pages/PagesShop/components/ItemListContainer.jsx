import { useEffect, useState } from "react";
import ItemList from "@pages/PagesShop/components/ItemList";
import { useParams } from "react-router";
import { getProducts } from "@/firebase/db";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    category
      ? getProducts(category).then((products) =>
          setProducts(products)
        )
      : getProducts().then((products) => setProducts(products));
  }, [category]);

  return (
    <section>
      <h1 className="h1-title-page">Products</h1>
      <ItemList products={products}></ItemList>
    </section>
  );
}

export default ItemListContainer;
