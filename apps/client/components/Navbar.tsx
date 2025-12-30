import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="">
      {/* LEFT SECTION */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="FuzzyTrends"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <h1>FuzzuTrends</h1>
      </Link>
      {/* RIGHT SECTION */}
    </div>
  );
};

export default Navbar;
