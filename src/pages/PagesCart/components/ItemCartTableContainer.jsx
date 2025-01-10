import { useContext } from "react";
import { CartContext } from "@/context/cart/cartContext";
import ItemCartTable from "@/pages/PagesCart/components/ItemCartTable";

function ItemCartTableContainer() {
    const { cart } = useContext(CartContext)

    return(
        <>
            <ItemCartTable cartProducts={cart} />
        </>
    )
}

export default ItemCartTableContainer;