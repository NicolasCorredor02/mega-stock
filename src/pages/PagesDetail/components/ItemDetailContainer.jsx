import ItemDetail from "@/pages/PagesDetail/components/ItemDetail";
import ItemRelatedContainer from "@/pages/PagesDetail/components/ItemRelatedContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [id]);

  return (
    <div className="main-layout">
      <ItemDetail product={product}></ItemDetail>
      <ItemRelatedContainer category={product.category}></ItemRelatedContainer>
    </div>
  );
}

export default ItemDetailContainer;
