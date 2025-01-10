import { useMediaQuery } from "react-responsive";
import { TableCell, TableRow } from "@/components/ui/table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useContext } from "react";
import { CartContext } from "@/context/cart/cartContext";
import { useNavigate } from "react-router";

function CartItem({ product, variant = "default" }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/product/${product.id}`);
  };

  const { addQuantity } = useContext(CartContext);
  const { discountQuantity } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);

  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });

  const styles = {
    default: {
      wrapper:
        "h-auto  grid auto-rows-auto md:grid-rows-1 grid-flow-col gap-8 p-4 bg-white border-b-2 border-gray-200 max-w-4xl",
      imageContainer: "row-span-2 max-w-40",
      detailContainer: "flex flex-col row-span-1 w-20 md:w-40",
      priceContainer: "row-span-1",
      countContainer:
        "row-span-1 flex justify-between md:justify-normal gap-2 items-center",
      removeContainer: "row-span-1 flex justify-center md:order-last",
      totalContainer: "hidden md:block md:row-span-3",
      image: "w-full h-32 object-cover cursor-pointer",
      title: "text-sm md:text-md lg:text-lg text-primary-foreground cursor-pointer",
      category: "text-sm md:text-md lg:text-lg text-gray-500",
      price: "text-sm md:text-md lg:text-lg text-gray-500",
      count: "text-sm md:text-md lg:text-lg w-6 text-center",
      buttonCount: "w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8",
      total: "text-sm md:text-md lg:text-lg text-primary-foreground",
    },
    sidebar: {
      wrapper:
        "h-auto max-h-80 grid auto-rows-auto grid-flow-col gap-2 p-2 bg-white border-b-2 border-gray-200",
      imageContainer: "row-span-2 max-w-20",
      detailContainer: "flex flex-col row-span-1 w-20 md:w-40",
      priceContainer: "row-span-1 ",
      countContainer: "row-span-1 flex gap-2 items-center",
      removeContainer: "row-span-1 flex justify-center md:order-last",
      totalContainer: "hidden md:block md:row-span-3",
      image: "w-full h-32 object-cover cursor-pointer",
      title: "text-xs md:text-base text-primary-foreground cursor-pointer",
      category: "text-xs md:text-base text-gray-500",
      price: "text-sm md:text-lg text-gray-500",
      count: "text-xs md:text-base w-6 md:w-8 text-center",
      buttonCount: "w-5 h-5 md:w-7 md:h-7",
    },
  };

  const currentStyle = styles[variant];

  if (isDesktop && variant === "default") {
    return (
      <TableRow>
        <TableCell>
          <img
            onClick={handleNavigation}
            src={product.image}
            alt={product.title}
          />
        </TableCell>
        <TableCell className={currentStyle.detailContainer}>
          <Label onClick={handleNavigation} className={currentStyle.title}>
            {product.title}
          </Label>
          <Label className={currentStyle.category}>{product.category}</Label>
        </TableCell>
        <TableCell>
          <Label className={currentStyle.price}>${product.price}</Label>
        </TableCell>
        <TableCell>
          <div className={currentStyle.countContainer}>
            <Button
              onClick={() => discountQuantity(product)}
              className={currentStyle.buttonCount}
              disabled={product.quantity <= 1}
              variant="destructive"
              size="icon"
            >
              <FontAwesomeIcon icon={faMinus} />
            </Button>
            <Label className={currentStyle.count}>{product.quantity}</Label>
            <Button
              onClick={() => addQuantity(product)}
              size="icon"
              className={currentStyle.buttonCount}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </div>
        </TableCell>
        <TableCell>
          <Label className={currentStyle.total}>
            ${product.price * product.quantity}
          </Label>
        </TableCell>
        <TableCell>
          <Button
            onClick={() => removeFromCart(product)}
            variant="destructive"
            size="sm"
          >
            {isTablet ? <FontAwesomeIcon icon={faTrash} /> : "Remove"}
          </Button>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <div className={currentStyle.wrapper}>
      <div className={currentStyle.imageContainer}>
        <img
          onClick={handleNavigation}
          className={currentStyle.image}
          src={product.image}
          alt={product.description}
        />
      </div>
      <div className={currentStyle.detailContainer}>
        <Label onClick={handleNavigation} className={currentStyle.title}>
          {product.title}
        </Label>
        <Label className={currentStyle.category}>{product.category}</Label>
      </div>
      <div className={currentStyle.priceContainer}>
        <Label className={currentStyle.price}>$ {product.price}</Label>
      </div>
      <div className={currentStyle.countContainer}>
        <Button
          onClick={() => discountQuantity(product)}
          className={currentStyle.buttonCount}
          disabled={product.quantity <= 1}
          variant="destructive"
          size="icon"
        >
          <FontAwesomeIcon icon={faMinus} />
        </Button>
        <Label className={currentStyle.count}>{product.quantity}</Label>
        <Button
          onClick={() => addQuantity(product)}
          size="icon"
          className={currentStyle.buttonCount}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
      <div className={currentStyle.removeContainer}>
        <Button onClick={() => removeFromCart(product)} variant="destructive">
          Remove
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
