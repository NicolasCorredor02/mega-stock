import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

function Item({ product }) {
    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate(`/product/${product.id}`)
    }
 
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <img
        src={product.image}
        alt={product.description}
        className="w-full object-cover transform group-hover:scale-105 transition duration-300"
      />
      <div className="absolute inset-0 bg-secondary-foreground bg-opacity-40 opacity-0 group-hover:opacity-90 transition duration-300 flex items-center justify-center">
        <div className="flex flex-col text-secondary text-center p-5 gap-3">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <Button onClick={handleNavigation}>
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Ver detalles
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Item;
