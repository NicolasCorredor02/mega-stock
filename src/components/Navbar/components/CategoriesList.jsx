import Categories from "@components/Navbar/components/Categories"


function CategoriesList({categories}) {
    return(
        <>
            {categories.map(category => (
                <Categories key={category.id} category={category}></Categories>
            ))}   
        </>
    )
}

export default CategoriesList
