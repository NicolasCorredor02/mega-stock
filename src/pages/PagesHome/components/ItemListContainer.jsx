import { useEffect, useState } from "react"
import ItemList from "./ItemList"

function ItemListContainer() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }, [])

    return (
        <>  
            <section>
                <h1 className="text-3xl font-semibold text-center my-4">Productos</h1>
                <ItemList products={products}></ItemList>
            </section>
        </>
    )
}

export default ItemListContainer