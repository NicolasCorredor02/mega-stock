import { useContext } from "react";
import { CartContext } from "@/context/cart/cartContext";
import ItemCartTable from "@/pages/PagesCart/components/ItemCartTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function ItemCartTableContainer() {
  const { cart } = useContext(CartContext);

  return (
    <>
      {cart.length > 0 ? (
        <ItemCartTable cartProducts={cart} />
      ) : (
        <div className="flex flex-col items-center justify-center w-full md:w-3/4 h-[80vh] gap-7">
            <FontAwesomeIcon
            className="text-slate-400 text-5xl"
            icon={faCircleXmark}
          />
          <p className="text-center text-xl md:text-3xl">Opps! Your shopping cart is empty.</p>
          
        </div>
      )}
    </>
  );
}

export default ItemCartTableContainer;
