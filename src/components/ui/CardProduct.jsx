import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router";

function CardProduct({ product }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/product/${product.id}`);
  };

  // Toma la primera imagen del array thumbnails o usa una imagen por defecto
  const firstThumbnail =
    product.thumbnails?.length > 0
      ? product.thumbnails[0]
      : "";

  return (
    <Card onClick={handleNavigation} className="cursor-pointer w-full lg:max-w-[360px]">
      <CardHeader>
        <CardTitle className="flex justify-center mb-10">
          <img
            src={firstThumbnail}
            alt={product.title}
            className="h-64 object-cover transition duration-300 hover:scale-110"
          />
        </CardTitle>
        <CardDescription className="text-base md:text-lg font-semibold">
          {product.title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-semibold">${product.price}</p>
      </CardContent>
      <CardFooter>
        <Badge>{product.category}</Badge>
      </CardFooter>
    </Card>
  );
}

export default CardProduct;
