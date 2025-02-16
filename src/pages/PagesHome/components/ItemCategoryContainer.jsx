import {  useState } from "react";
// import { productServices } from "@/services/api";
import ItemCategory from "@/pages/PagesHome/components/ItemCategory";
// import LoadingSpinner from "@/components/ui/LoadingSpinner";

function ItemCategoryContainer() {
  const [categories, setCategories] = useState(["tecnology", "women's clothing", "men's clothing", "footwear"]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const data = await productServices.getCategories();
  //       setCategories(data);
  //     } catch (error) {
  //       console.error("Error al cargar las categorias:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCategories();
  // }, []);

  // if (loading) {
  //   return <LoadingSpinner />
  // }

  return <ItemCategory categories={categories} />;
}

export default ItemCategoryContainer;
