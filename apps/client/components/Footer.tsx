import { CopyrightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-12 flex flex-col items-center gap-8 md:gap-0 md:flex-row md:items-start md:justify-between bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="FuzzyTrends" width={30} height={30} />
          <p className="hidden md:block text-white text-md font-medium tracking-wider">
            FuzzyTrends
          </p>
        </Link>
        <p className="text-sm text-gray-400 flex items-center gap-1">
          <CopyrightIcon size={12} /> 2026 FuzzyTrends
        </p>
        <p className="text-sm text-gray-400">All Rights Resrved.</p>
      </div>
      <div className="flex flex-col text-sm gap-4 items-center md:items-start text-amber-50">
        <Link href="/" className="hover:text-cyan-200">
          Homepage
        </Link>
        <Link href="/" className="hover:text-cyan-200">
          Sales
        </Link>
        <Link href="/" className="hover:text-cyan-200">
          Blogs
        </Link>
        <Link href="/" className="hover:text-cyan-200">
          Register Seller
        </Link>
      </div>{" "}
      <div className="flex flex-col text-sm gap-4 items-center md:items-start text-amber-50">
        <Link href="/" className="hover:text-cyan-200">
          All Products
        </Link>
        <Link href="/" className="hover:text-cyan-200">
          New Arrivals
        </Link>
        <Link href="/" className="hover:text-cyan-200">
          Best Sellers
        </Link>
        <Link href="/" className="hover:text-cyan-200">
          Recomended
        </Link>
      </div>
      <div className="flex flex-col text-sm gap-4 items-center md:items-start text-amber-50">
        <Link href="/" className="hover:text-cyan-200">
          About
        </Link>
        <Link href="/" className="hover:text-cyan-200">
          Contact
        </Link>
        <Link href="/" className="hover:text-cyan-200">
          Affiliates
        </Link>
        <Link href="/" className="hover:text-cyan-200">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
