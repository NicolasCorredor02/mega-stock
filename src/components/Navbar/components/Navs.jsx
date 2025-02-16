import {
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";

function Navs({ navWithItems }) {
  return (
    <NavigationMenu>
      <NavigationMenuTrigger>{navWithItems.label}</NavigationMenuTrigger>
      <NavigationMenuContent className="z-50" position="popper">
        <ul className="w-[200px] p-2">
          {navWithItems.items.map((item) => (
            <li key={item.id}>
              <Link to={`/shop/${item.href}`}>
                <NavigationMenuLink className="nav-item">
                  {item.label}
                </NavigationMenuLink>
              </Link>
              <Separator
                className="md:hidden my-4 block w-full"
                orientation="horizontal"
              />
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenu>
  );
}

export default Navs;
