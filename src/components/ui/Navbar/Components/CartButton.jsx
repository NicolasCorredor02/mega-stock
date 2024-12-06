//Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

//Import components
import { Badge } from "@/components/ui/badge"

function CartButton() {
    return(
        <>
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="hidden md:inline">Carrito</span>
            <Badge variant="destructive" className="absolute top-0 -right-1 px-1.5 py-0.5 h-4 min-w-[1rem] rounded-full">4</Badge>
        </>
           
        )
}

export default CartButton