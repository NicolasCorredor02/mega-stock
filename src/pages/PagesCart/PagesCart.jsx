import ItemCartTableContainer from "@/pages/PagesCart/components/ItemCartTableContainer";
import FormCheckout from "@/pages/PagesCart/components/FormCheckout";

function PagesCart() {
  return (
    <div className="main-layout">
      <h1 className="h1-title-page">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <ItemCartTableContainer/>
        <FormCheckout/>
      </div>
    </div>
  );
}

export default PagesCart;
