import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { productServices } from "@/services/api";

function SearchBar({ onSearchResults, category }) {
  const handleSearch = async (event) => {
    const value = event.target.value;

    if (value.length > 0) {
      try {
        let dataSearch;

        category
          ? (dataSearch = await productServices.getSearchProducts(
              category,
              value
            ))
          : (dataSearch = await productServices.getSearchProducts("all", value));

        onSearchResults(dataSearch);
      } catch (error) {
        console.error("Error en la busqueda:", error);
      }
    } else {
      onSearchResults([]);
    }
  };

  return (
    <div className="relative w-full md:max-w-md lg:max-w-xl place-self-end">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search products..."
          onChange={handleSearch}
          className="pl-10 pr-4"
        />
      </div>
    </div>
  );
}

export default SearchBar;
