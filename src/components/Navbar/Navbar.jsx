//Icons
import { CircleUserRound, Menu } from "lucide-react";

//Components
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import CartButton from "@/components/Navbar/components/CartButton";
import NavsListContainer from "@components/Navbar/components/NavsListContainer";
import { Link } from "react-router";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 shadow-md bg-primary overflow-visible">
      <nav className="main-section-layout grid grid-rows-1 md:grid-rows-2 bg-primary max-h-[150px] md:static text-primary-foreground">
        <div className="w-full grid grid-rows-1 grid-cols-2">
          <div className="place-self-start flex items-center gap-3 col-span-1">
            <Sheet>
              <SheetTrigger>
                <Menu className="icons-size md:hidden" />
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="text-4xl mb-10">Menu</SheetTitle>
                </SheetHeader>
                <NavsListContainer />
              </SheetContent>
            </Sheet>
            <Link to="/">
              <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                Mega Stock
              </p>
            </Link>
          </div>
          <div className="flex justify-end items-center gap-3 text-xl">
            <Button variant="ghost">
              <CircleUserRound className="icons-size"/>
              <span className="hidden md:inline">Account</span>
            </Button>
            <CartButton />
          </div>
        </div>
        <div className="hidden md:flex gap-5 place-self-center px-3 py-3 md:px-0">
          <NavsListContainer />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
