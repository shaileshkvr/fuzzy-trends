import Link from "next/link";
import Image from "next/image";
import Searchbar from "./Searchbar";
import { ShoppingCartIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
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
        <div className="flex items-center gap-6">
          <Searchbar />
          <ShoppingCartIcon className="text-gray-400 hover:text-gray-500" />
          {/* Show signin if logged out */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shaileshkvr.png" />
                <AvatarFallback>SH</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>My Orders</DropdownMenuItem>
              <DropdownMenuItem>Wishlist</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant="destructive">Sign Out</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
