import { useContext } from "react";
import { CartContext } from "@/context/cart/cartContext";
import { Label } from "@/components/ui/label";

function FormPurchasingContainer() {
  const { getTotal } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-9 w-full md:w-1/4 bg-neutral-200 p-4">
      <h3 className="text-3xl">Purchasing data</h3>
      <p>Form Purchasing...</p>
      <Label className="text-2xl font-bold">Total: $ {getTotal().toFixed(2)}</Label>
    </div>
  );
}

export default FormPurchasingContainer;
