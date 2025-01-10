import imageCategory from "@/assets/category.webp";
import { Link } from "react-router";

function CardCategory({ category }) {
  return (
    <Link to={`/shop/${category}`}>
      <div className="relative overflow-hidden rounded-lg group cursor-pointer">
        <img
          src={imageCategory}
          alt="default category image"
          className="h-64 w-full object-cover transition duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h3 className="text-secondary text-2xl font-semibold">{category}</h3>
        </div>
      </div>
    </Link>
  );
}

export default CardCategory;
