import Item from "@/pages/PagesDetail/components/Item";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

function ItemRelated({ itemsRelated, category }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/shop/${category}`);
  };

  return (
    <section className="mt-32">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-5">Related products...</h2>
        <Separator />
      </div>
      <div className="flex overflow-x-auto">
        <div className="flex justify-center items-center space-x-4">
          {itemsRelated.map((product) => (
            <Item key={product.id} product={product} />
          ))}
          <Button className="text-lg md:text-base" variant="link" onClick={handleNavigation}>
            More...
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ItemRelated;
