import { useEffect, useState } from "react";
import { getCategories } from "@/firebase/db";
import ItemCategory from "@/pages/PagesHome/components/ItemCategory";

function ItemCategoryContainer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories));
  }, []);

  return <ItemCategory categories={categories} />;
}

export default ItemCategoryContainer;
