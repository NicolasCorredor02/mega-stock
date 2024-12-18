import Item from "@/pages/PagesDetail/components/Item";
import { Separator } from "@/components/ui/separator";

function ItemRelated({ itemsRelated }) {
  return (
    <section className="mt-32">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-5">Productos relacionados...</h2>
        <Separator />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {itemsRelated.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ItemRelated;
