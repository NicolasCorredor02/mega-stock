import ItemDetail from "@/pages/PagesDetail/components/ItemDetail";
import ItemRelatedContainer from "@/pages/PagesDetail/components/ItemRelatedContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "@/firebase/db";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProductById(id)
    .then(product => setProduct(product));
  }, [id]);

  return (
    <div className="main-layout">
      <ItemDetail product={product}></ItemDetail>
      <ItemRelatedContainer category={product.category}></ItemRelatedContainer>
    </div>
  );
}

export default ItemDetailContainer;
