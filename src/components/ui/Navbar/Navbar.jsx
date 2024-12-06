//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; 
import { faUser } from "@fortawesome/free-solid-svg-icons";

//Components
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle
  } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CartButton from "@/components/ui/Navbar/Components/CartButton";
import CategoriesListContainer from "./Components/CategoriesListContainer";


function Navbar(){
  return (
    <nav className="container grid grid-rows-1 md:grid-rows-2 bg-primary w-full max-h-[150px] border-b mx-auto md:border-0 md:static text-primary-foreground">
     <div className="w-full grid grid-rows-1 grid-cols-2 md:grid-cols-3 place-self-start px-3 py-3 md:px-0">
          <div className="place-self-start flex items-baseline gap-3 col-span-1">
              <Sheet>
                  <SheetTrigger><FontAwesomeIcon icon={faBars} className="text-2xl md:hidden"/></SheetTrigger>
                  <SheetContent side="left">
                      <SheetHeader>
                          <SheetTitle className="text-4xl mb-10">Menu</SheetTitle>
                      </SheetHeader>
                      <div className="flex flex-col">
                          <CategoriesListContainer></CategoriesListContainer>
                      </div>
                  </SheetContent>
              </Sheet>
              <p className="text-2xl md:text-5xl">Mega Stock</p> 
          </div>
          <div className="hidden md:inline-flex items-center space-x-2">
              <Input type="text" placeholder="Buscar..."></Input>
              <Button type="submit" variant="secondary"><FontAwesomeIcon icon={faMagnifyingGlass}/></Button>
          </div>
          <div className="flex justify-end items-center gap-3 text-xl">
              <Sheet>
                  <SheetTrigger><Button variant="ghost"><FontAwesomeIcon icon={faMagnifyingGlass} className="md:hidden"/></Button></SheetTrigger>
                  <SheetContent side="top" className="inline-flex gap-0 p-0 h-20">
                      <Button type="submit" variant="secondary" className="h-full"><FontAwesomeIcon icon={faMagnifyingGlass}/></Button>
                      <Input type="text" placeholder="Buscar..." className="h-full"></Input>
                  </SheetContent>
              </Sheet>
              <Button variant="ghost"><FontAwesomeIcon icon={faUser} /><span className="hidden md:inline">Cuenta</span></Button>
              <Button className="relative" variant="ghost"><CartButton></CartButton></Button>
          </div>
      </div>
      <div className="hidden md:flex gap-5 place-self-center px-3 py-3 md:px-0">
          <CategoriesListContainer></CategoriesListContainer>
      </div>
    </nav>
  )
}


export default Navbar