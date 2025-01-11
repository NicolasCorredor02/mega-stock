//Hooks
import { useEffect, useState } from "react";
import { getCategories } from "@/firebase/db";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import CategoriesList from "@components/Navbar/components/CategoriesList";

function CategoriesListContainer() {
  // Consulta de categorias
  const [categories, setCategories] = useState([]);

  useEffect(() => {

      getCategories()
      .then(categories => setCategories(categories))
  }, []);

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col md:flex-row">
          <CategoriesList categories={categories}></CategoriesList>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export default CategoriesListContainer;
