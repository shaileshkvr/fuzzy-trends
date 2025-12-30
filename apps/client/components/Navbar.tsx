import Link from "next/link";
import Image from "next/image";
import Searchbar from "./Searchbar";
import { ShoppingCartIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@repo/ui/components/dropdown-menu";

const Navbar = () => {
  return (
    <div className="p-2 flex items-center justify-between border-b-2 border-gray-200 mb-4">
      {/* LEFT SECTION */}
      <Link href="/" className="flex items-center rounded-xl">
        <Image
          src="/logo.png"
          alt="FuzzyTrends"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <h1 className="text-xl font-medium tracking-wider">FuzzyTrends</h1>
      </Link>
      {/* RIGHT SECTION */}
      <div className="flex items-center">
        {/* SEARCH BAR */}
        <div className="flex items-center">
          <Searchbar />
          <ShoppingCartIcon />
          {/* Show signin if logged out */}
          <DropdownMenu>
            
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
