'use client';
import useClothContext from "@/Hooks/ClothContext/ClothContext";

function FashionHeading() {
  const {fashionContent} = useClothContext();
  return (
    <h3 className="text-3xl font-bold max-[630px]:text-center">
      {fashionContent.fashionheading}
    </h3>
  )
}

export default FashionHeading
