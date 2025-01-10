import CartItem from "@/components/Navbar/components/CartItem";

function CartList({cartProducts}) {

    return(
        <>
            {cartProducts.map((product) => (
                <CartItem key={product.id} product={product} variant="sidebar"></CartItem>
            ))}
        </>
    )
}

export default CartList;