import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { CartContext } from "@/context/cart/cartContext";
import { Label } from "@/components/ui/label";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "@/firebase/db";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const formSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(2, { message: "The name must have at least 2 characters" })
    .max(50, { message: "The name cannot be longer than 50 characters" }),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  tel: z
    .string({ message: "Tel is required" })
    .min(10, { message: "The phone number must be at least 10 digits long" })
    .max(15, { message: "The phone number cannot be more than 15 digits long" })
    .regex(/^\+?[\d\s-]+$/, { message: "Please enter a valid phone number" }),
});

function FormCheckout() {
  const { getTotal, cart, emptyCart } = useContext(CartContext);

  const isCartEmpty = !cart || cart.length === 0;

  const MySwal = withReactContent(Swal);

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      const order = {
        buyer: data,
        total: parseFloat(getTotal().toFixed(2)),
        products: cart,
        time: serverTimestamp(),
      };

      const orderState = await createOrder(order);

      orderState
        ? MySwal.fire({
            icon: "success",
            title: "Thank you for your purchase!",
            text: `${orderState}`,
          })
        : MySwal.fire({
            icon: "error",
            title: "Opps...",
            text: <p>Error generating order</p>,
          });

      emptyCart();

      form.reset({
        name: "",
        email: "",
        tel: "",
      });
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "Opps...",
        text: <p>Error generating order</p>,
      });
    }
  });

  return (
    <Card className="flex flex-col mx-auto w-full md:w-2/3 lg:w-5/12 bg-white">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl">Generate order</CardTitle>
        <CardDescription>
          Fill out the form to generate the purchase order.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={onSubmit}>
          <CardContent>
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Name Example" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="tel"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tel</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="+573116457799"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col gap-6 md:gap-12">
            <div className="flex justify-between w-full">
              <Label className="text-2xl font-bold">
                Total: $ {getTotal().toFixed(2)}
              </Label>
            </div>
            <Button disabled={isCartEmpty} className="w-full">
              Checkout
            </Button>
          </CardFooter>
        </form>
      </Form>
      <div className="flex justify-end p-6 pt-0">
        <Button className="w-full" variant="destructive" onClick={emptyCart}>
            Empty Cart
        </Button>
      </div>
    </Card>
  );
}

export default FormCheckout;
