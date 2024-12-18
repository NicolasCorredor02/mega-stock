import { useEffect, useState } from "react";
import ItemList from "@pages/PagesHome/components/ItemList";
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
      <h1 className="text-3xl font-semibold text-center my-4">Productos</h1>
      <ItemList products={products}></ItemList>
    </section>
  );
}

export default ItemListContainer;
