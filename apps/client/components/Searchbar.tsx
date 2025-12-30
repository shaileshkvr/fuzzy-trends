import { Input } from "@repo/ui";
import { SearchIcon } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg px-2 focus-within:border-gray-400 transition-all">
      <Input
        id="search"
        name="search"
        type="text"
        placeholder="Search"
        className="focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none bg-transparent border-0"
      />
      <SearchIcon size={18} className="text-gray-400" />
    </div>
  );
};

export default Searchbar;
