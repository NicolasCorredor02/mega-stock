import Item from "@pages/PagesHome/components/Item"

function ItemList({products}) {
    return(
        <div className="grid grid-cols-auto-fit-products gap-9">
            {products.map(product => (
                <Item key={product.id} product={product}></Item>
            ))}
        </div>
    )
}

export default ItemList