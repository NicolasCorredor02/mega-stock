import ItemDetail from "@/pages/PagesDetail/components/ItemDetail";
import ItemRelatedContainer from "@/pages/PagesDetail/components/ItemRelatedContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { productServices } from "@/services/api";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await productServices.getById(id);
        setProduct(response);
      } catch (error) {
        console.error("Error al cargar los detalles del producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductById();
  }, [id]);

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="main-layout">
      <ItemDetail product={product}></ItemDetail>
      <ItemRelatedContainer category={product.category}></ItemRelatedContainer>
    </div>
  );
}

export default ItemDetailContainer;
