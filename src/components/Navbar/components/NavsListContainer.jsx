//Hooks
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavsList from "@components/Navbar/components/NavsList";

function NavsListContainer() {
  const navsOptions = [
    {
      id: 1,
      label: "Home",
      href: "/",
    },
    {
      id: 2,
      label: "Products",
      href: "/shop",
      items: [
        {
          id: 1,
          label: "Technology",
          href: "technology",
        },
        {
          id: 2,
          label: "Women's clothing",
          href: "women's clothing",
        },
        {
          id: 3,
          label: "Men's clothing",
          href: "men's clothing",
        },
        {
          id: 4,
          label: "Footwear",
          href: "footwear",
        },
      ],
    },
    {
      id: 3,
      label: "About us",
      href: "",
    },
    {
      id: 4,
      label: "Help",
      href: "",
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavsList navs={navsOptions} />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavsListContainer;
