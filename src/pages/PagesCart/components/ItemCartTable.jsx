import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CartItem from "@/components/Navbar/components/CartItem";
import { useMediaQuery } from "react-responsive";

function ItemCartTable({ cartProducts = [] }) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  if (isDesktop) {
    return (
      <section className="w-3/4 h-[80vh] overflow-auto">
        <Table>
          <TableCaption>Shopping cart</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Product</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartProducts.map((product) => (
              <CartItem key={product.id} product={product}></CartItem>
            ))}
          </TableBody>
        </Table>
      </section>
    );
  }

  return (
    <section className="overflow-auto">
      {cartProducts.map((product) => (
        <CartItem key={product.id} product={product}></CartItem>
      ))}
    </section>
  );
}

export default ItemCartTable;
