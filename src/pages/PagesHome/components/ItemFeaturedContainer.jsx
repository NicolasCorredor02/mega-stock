import { useEffect, useState } from "react";
import ItemFeatured from '@/pages/PagesHome/components/ItemFeatured';

function ItemFeaturedContainer() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((json) => setFeaturedProducts(json));
  }, []);

  return(
    <ItemFeatured featuredProducts={featuredProducts}/>
  )
}

export default ItemFeaturedContainer;
