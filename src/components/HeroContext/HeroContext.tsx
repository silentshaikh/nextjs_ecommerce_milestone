'use client';
import useClothContext from "@/Hooks/ClothContext/ClothContext";
import { rubikBuble } from "@/utils/Helper/helper"
function HeroContext() {
  const {heroContent} = useClothContext();
  return (
    <div>
      <h1 className={`${rubikBuble.className} text-6xl font-extrabold w-[338px] max-[400px]:w-[300px] max-[320px]:w-[250px] max-[300px]:text-5xl`}>{heroContent.mainheading}</h1>
      <h3 className='w-[87px] h-[48px] py-2 max-[830px]:mb-10'>{heroContent.subheading}</h3>
    </div>
  )
}

export default HeroContext
