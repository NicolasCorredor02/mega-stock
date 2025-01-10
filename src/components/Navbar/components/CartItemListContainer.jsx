import { useContext } from "react";
import { CartContext } from "@/context/cart/cartContext";
import CartItemList from "@/components/Navbar/components/CartItemList";

function CartListContainer() {

    const { cart } = useContext(CartContext)

    return(
        <>
            <CartItemList cartProducts={cart} />
        </>
    )
}

export default CartListContainer