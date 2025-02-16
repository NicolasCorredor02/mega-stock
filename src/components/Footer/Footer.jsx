//Icons
import { Mail } from "lucide-react";

//Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MapListContainer from "@/components/Footer/components/MapListContainer";

function Footer() {
  return (
    <footer className="bg-foreground">
      <div className="main-section-layout md:static">
        <div className="max-w-screen-xl mx-auto pt-20">
          <div className="justify-between items-center gap-12 md:flex">
            <div className="flex-1 max-w-lg">
              <h3 className="text-primary-foreground text-2xl font-bold">
                Subscribe and get all the latest news and discounts
              </h3>
            </div>
            <div className="flex-1 mt-6 md:mt-0">
              <form className="flex items-center gap-x-3 md:justify-end">
                <div className="relative">
                  <Mail className="text-primary absolute left-3 inset-y-1/4 icons-size" />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border shadow-sm rounded-lg"
                    required
                  ></Input>
                </div>
                <Button
                  variant="outline"
                  className="block w-auto py-2 px-4 font-medium text-sm text-center text-primary-foreground bg-primary active:shadow-none rounded-lg shadow"
                >
                  Suscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="flex-1 mt-16 space-y-6 space-x-6 sm:flex md:space-y-0">
            <MapListContainer />
          </div>
          <div className="mt-10 py-10 md:border-t items-center justify-between sm:flex">
            <p className="text-gray-600">
              © 2024 Mega Stock. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
