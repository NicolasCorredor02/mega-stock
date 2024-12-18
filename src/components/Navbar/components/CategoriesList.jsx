import Categories from "@components/Navbar/components/Categories"


function CategoriesList({categories}) {
    return(
        <>
            {categories.map(category => (
                <Categories key={categories.indexOf(category)} category={category}></Categories>
            ))}   
        </>
    )
}

export default CategoriesList
