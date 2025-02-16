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
        <div className="flex flex-col items-center justify-center w-full lg:w-3/4 h-[50vh] gap-6">
            <FontAwesomeIcon
            className="text-slate-400 text-4xl"
            icon={faCircleXmark}
          />
          <p className="text-center text-lg md:text-2xl">Opps! Your shopping cart is empty.</p>
          
        </div>
      )}
    </>
  );
}

export default ItemCartTableContainer;
