import { useEffect, useState } from "react";
import ItemList from "@pages/PagesShop/components/ItemList";
import { useParams } from "react-router";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { productServices } from "@/services/api";
import SearchBar from "@/components/ui/SearchBar";
import { AnimatePresence } from "react-magic-motion";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let data;

        category
          ? (data = await productServices.getAll(category))
          : (data = await productServices.getAll());

        setProducts(data);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const handleSerachResults = (results) => {
    setProducts(results.length > 0 ? results : products);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <section>
      <h1 className="h1-title-page">Products</h1>
      <div className="mb-8">
        <SearchBar onSearchResults={handleSerachResults} category={category} />
      </div>
      <ItemList products={products}></ItemList>
    </section>
  );
}

export default ItemListContainer;
