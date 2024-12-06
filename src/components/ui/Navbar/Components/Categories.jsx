import {
    NavigationMenuItem,
    NavigationMenuLink,
  } from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"

function Categories({category}) {
    return(
        <>
            <NavigationMenuItem className="w-full">
                <NavigationMenuLink className="text-xl font-semibold capitalize block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">{category}</NavigationMenuLink>
            </NavigationMenuItem>
            <Separator className="md:hidden my-4 block w-full" orientation="horizontal"/>
        </>
    )
}

export default Categories