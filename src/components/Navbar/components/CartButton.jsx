import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@/components/ui/badge";
import { useContext } from "react";
import { CartContext } from "@/context/cart/cartContext";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartItemListContainer from "@/components/Navbar/components/CartItemListContainer";
import { useNavigate } from "react-router";
import { Label } from "@/components/ui/label";

function CartButton() {
  const { getQuantity } = useContext(CartContext);
  const { getTotal } = useContext(CartContext);

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/cart");
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative" variant="ghost">
          <FontAwesomeIcon icon={faCartShopping} />
          <span className="hidden md:inline">Cart</span>
          <Badge
            variant="destructive"
            className="absolute top-0 -right-1 px-1.5 py-0.5 h-4 min-w-[1rem] rounded-full"
          >
            {getQuantity()}
          </Badge>
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto h-screen md:min-w-fit p-2">
        <SheetHeader className="mb-5">
          <SheetTitle>Shopping cart ({getQuantity()})</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
          {getQuantity() === 0 ? (
            <div className="flex flex-col">
              <FontAwesomeIcon
                className="text-slate-400 text-3xl"
                icon={faCartShopping}
              />
              <p className="text-center">Your shopping cart is empty.</p>
            </div>
          ) : (
            <>
              <div className="">
                <CartItemListContainer />
              </div>
              <SheetFooter>
                <Label className="text-lg font-bold">Total: $ {getTotal().toFixed(2)}</Label>
                <SheetClose asChild>
                  <Button onClick={handleNavigation}>Check out</Button>
                </SheetClose>
              </SheetFooter>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default CartButton;
