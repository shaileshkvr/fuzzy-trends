import Link from "next/link";
import Image from "next/image";
import Searchbar from "./Searchbar";
import {
  ListIcon,
  LogOutIcon,
  PackageIcon,
  SettingsIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui";

const Navbar = () => {
  return (
    <div className="p-2 flex items-center justify-between border-b-2 border-gray-200 mb-4">
      {/* LEFT SECTION */}
      <Link href="/" className="flex items-center">
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
        <div className="flex items-center gap-6">
          <Searchbar />
          <Link href="/">
            <ShoppingCartIcon className="h-[1.2rem] w-[1.2rem] text-gray-500" />
          </Link>
          {/* Show signin if logged out */}
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:scale-[0.95] transition-all rounded-full">
              <UserIcon className="h-[1.2rem] w-[1.2rem] text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <PackageIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                Orders
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                Wishlist
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <LogOutIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
