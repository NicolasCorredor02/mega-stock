import CardProduct from '@/components/ui/CardProduct';

function ItemFeatured({ featuredProducts }) {
    return(
       <>
        {featuredProducts.map((product) => (
            <CardProduct key={product.id} product={product}/>
        ))}
       </>
    )
}

export default ItemFeatured