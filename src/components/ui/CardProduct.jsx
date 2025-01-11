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

  return (
    <Card onClick={handleNavigation} className="cursor-pointer">
      <CardHeader>
        <CardTitle className="flex justify-center mb-10">
          <img
            src={product.image}
            alt={product.title}
            className="h-64 object-cover transition duration-300 hover:scale-110"
          />
        </CardTitle>
        <CardDescription className="text-base md:text-lg font-semibold">{product.title}</CardDescription>
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
