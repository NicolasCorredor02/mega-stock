import ItemCartTableContainer from "@/pages/PagesCart/components/ItemCartTableContainer";
import FormPurchasingContainer from "@/pages/PagesCart/components/FormPurchasingContainer";

function PagesCart() {
  return (
    <div className="main-layout">
      <h1 className="h1-title-page">Shopping Cart</h1>
      <div className="flex flex-col md:flex-row w-full gap-4">
        <ItemCartTableContainer/>
        <FormPurchasingContainer/>
      </div>
    </div>
  );
}

export default PagesCart;
