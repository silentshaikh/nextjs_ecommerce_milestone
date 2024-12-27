'use client';
import useClothContext from "@/Hooks/ClothContext/ClothContext";
import Image from "next/image";
import Link from "next/link";
function Logo() {
  const {headerContent} = useClothContext();
  // console.log(headerContent)
  return (
    <Link href={`/`}>
    <div className="cursor-pointer max-[780px]:relative max-[780px]:right-16 max-[334px]:right-20">
      <Image 
      className="max-[360px]:w-[70px] max-[780px]:h-[50px] max-[320px]:w-[100px]"
      src={headerContent.logo}
      alt={headerContent.titlelogo}
      width={35}
      height={35}
      />
    </div>
      </Link>
  );
};
export default Logo;