import { useEffect, useState } from "react";
import ItemCategory  from '@/pages/PagesHome/components/ItemCategory';

function ItemCategoryContainer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  return (
    <ItemCategory categories={categories}/>
  )
}

export default ItemCategoryContainer;
