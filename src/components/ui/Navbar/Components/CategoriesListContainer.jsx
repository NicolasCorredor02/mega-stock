//Hooks
import { useEffect, useState } from "react";

import {
    NavigationMenu,
    NavigationMenuList
  } from "@/components/ui/navigation-menu"
import CategoriesList from "./CategoriesList";


function CategoriesListContainer() {

    // Consulta de categorias
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
    }, [])

    return(
        <>
            <NavigationMenu>
                <NavigationMenuList className="flex flex-col md:flex-row">
                    <CategoriesList categories={categories}></CategoriesList>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}

export default CategoriesListContainer