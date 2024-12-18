import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import ItemCount from "@/pages/PagesDetail/components/ItemCount";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function ItemDetail({ product }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-14">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="flex justify-center items-center">
            <img
              className="max-h-[500px]"
              src={product.image}
              alt={product.description}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex flex-col gap-10 p-5">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-4xl font-semibold">$ {product.price}</p>
        <ItemCount />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">Description</AccordionTrigger>
            <AccordionContent className="text-lg">
              {product.description}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button className="md:w-52">
          <FontAwesomeIcon icon={faCartShopping} />
          Add Cart
        </Button>
      </div>
    </section>
  );
}

export default ItemDetail;
