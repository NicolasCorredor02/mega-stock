import { useEffect, useState } from "react";
import ItemFeatured from "@/pages/PagesHome/components/ItemFeatured";
import { productServices } from "@/services/api";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

function ItemFeaturedContainer() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const data = await productServices.getLimitedProducts(4);
        setFeaturedProducts(data);
      } catch (error) {
        console.error("Error al cargar los productos destacados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return <ItemFeatured featuredProducts={featuredProducts} />;
}

export default ItemFeaturedContainer;
