import { useEffect, useState } from "react";
import ItemFeatured from '@/pages/PagesHome/components/ItemFeatured';
import { getLimitProducts } from "@/firebase/db";

function ItemFeaturedContainer() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    getLimitProducts(4).then(products => setFeaturedProducts(products))
  }, []);

  return(
    <ItemFeatured featuredProducts={featuredProducts}/>
  )
}

export default ItemFeaturedContainer;
