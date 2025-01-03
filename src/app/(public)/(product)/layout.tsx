'use client';

// import type { Metadata } from "next";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
import ProductSideBar from "@/components/ProductSideBar/ProductSideBar";
import { usePathname } from "next/navigation";
// import "../globals.css";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathProduct = usePathname();
  return (
    <>
        {pathProduct === "/men" || pathProduct === "/women" || pathProduct === "/kid" ? <ProductSideBar /> : ''} 
        {children} 
    </>
  );
}
