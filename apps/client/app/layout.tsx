import "@repo/ui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fuzzy Trends",
  description: "Wear what's trending before it's everywhere",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <div className="mx-auto p-4 sm:max-w-xl md:max-x-2xl lg:max-w-3xl xl:max-w-6xl">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
