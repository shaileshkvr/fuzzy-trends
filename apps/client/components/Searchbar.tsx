import { Input } from "@repo/ui";
import { SearchIcon } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="flex items-center ring ring-gray-200 rounded-lg px-2  hover:ring-gray-300 focus-within:ring-gray-300 transition-all">
      <Input
        id="search"
        name="search"
        type="text"
        placeholder="Search"
        className="focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none bg-transparent border-0"
      />
      <SearchIcon size={18} className="text-gray-500" />
    </div>
  );
};

export default Searchbar;
