import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";

function Categories({ category }) {
  return (
    <>
      <NavigationMenuItem className="w-full md:w-auto md:text-center">
        <Link to={`/shop/${category}`}>
          <NavigationMenuLink className="text-lg md:text-xl font-semibold capitalize block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
            {category}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <Separator
        className="md:hidden my-4 block w-full"
        orientation="horizontal"
      />
    </>
  );
}

export default Categories;
