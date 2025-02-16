import CardProduct from "@/components/ui/CardProduct";
import { MagicMotion } from "react-magic-motion";

function ItemList({ products }) {
  return (
    <article className="grid grid-cols-auto-fit-products gap-9">
      {products.map((product) => (
        <MagicMotion transition={{type:"spring", duration: 1}} key={product.id}>
          <CardProduct  product={product}></CardProduct>
        </MagicMotion>
      ))}
    </article>
  );
}

export default ItemList;
