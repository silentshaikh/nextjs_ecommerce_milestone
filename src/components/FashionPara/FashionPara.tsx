'use client';
import useClothContext from "@/Hooks/ClothContext/ClothContext";
import { poppins } from "@/utils/Helper/helper"
function FashionPara() {
  const {fashionContent} = useClothContext()
  return (
    <p className={`${poppins.className} text-center w-[600px] py-5 max-[630px]:w-[500px] max-[510px]:w-[400px] max-[390px]:w-[350px] max-[360px]:w-[300px] max-[330px]:w-[280px] max-[300px]:w-[260px]`}>
     {fashionContent.fashioncontent}
    </p>
  )
};
export default FashionPara;