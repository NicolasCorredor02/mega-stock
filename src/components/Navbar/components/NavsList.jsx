import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";
import Navs from "@/components/Navbar/components/Navs";

function NavsList({ navs }) {
  return (
    <div className="w-60 md:w-auto flex flex-col justify-start md:flex-row md:items-center gap-3">
      {navs.map((nav) => (
        <NavigationMenuItem
          key={nav.id}
          className="w-full md:w-auto md:text-center"
        >
          <Link to={nav.href}>
            {nav.items ? (
              <Navs navWithItems={nav} />
            ) : (
              <NavigationMenuLink className="nav-item">
                {nav.label}
              </NavigationMenuLink>
            )}
          </Link>
          <Separator
            className="md:hidden my-4 block w-full"
            orientation="horizontal"
          />
        </NavigationMenuItem>
      ))}
    </div>
  );
}

export default NavsList;
