import ItemRelated from "@/pages/PagesDetail/components/ItemRelated";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { productServices } from "@/services/api";

function ItemRelatedContainer({ category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetcRelatedProducts = async () => {
      try {
        const response = await productServices.getLimitedProducts(6 , category);
        setProducts(response);
      } catch (error) {
        console.error("Error al cargar los productos relacionados", error);
      } finally {
        setLoading(false);
      }
    };

    fetcRelatedProducts();
  }, [category]);

  if (loading) {
    return <LoadingSpinner />
  }

  return <ItemRelated itemsRelated={products} category={category}></ItemRelated>;
}

export default ItemRelatedContainer;
