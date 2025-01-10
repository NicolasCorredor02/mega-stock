import { useEffect, useState } from "react";
import ItemList from "@pages/PagesShop/components/ItemList";
import { useParams } from "react-router";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  const allProducts = "https://fakestoreapi.com/products";
  const categoryProducts = `https://fakestoreapi.com/products/category/${category}`;

  useEffect(() => {
    fetch(category ? categoryProducts : allProducts)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [category, categoryProducts]);

  return (
    <section>
      <h1 className="h1-title-page">Products</h1>
      <ItemList products={products}></ItemList>
    </section>
  );
}

export default ItemListContainer;
