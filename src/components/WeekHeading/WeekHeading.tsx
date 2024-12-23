'use client';
import useClothContext from "@/Hooks/ClothContext/ClothContext";
import { rubikBuble } from "@/utils/Helper/helper"

function WeekHeading() {
  const {weekContent} = useClothContext();
  return (
    <>
     <h2 className={`${rubikBuble.className} text-6xl flex flex-col relative px-16 max-[450px]:text-4xl`}>{weekContent.weekheading.slice(0,3)} <span>{weekContent.weekheading.slice(3)}<sup className="text-2xl text-[#000E8A] absolute  top-10">({weekContent.headincount})</sup></span>  </h2> 
    </>
  )
}

export default WeekHeading
