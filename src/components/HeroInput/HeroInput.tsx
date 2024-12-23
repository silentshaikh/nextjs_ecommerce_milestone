'use client';

import useClothContext from "@/Hooks/ClothContext/ClothContext";

function HeroInput() {
  const {heroContent} = useClothContext()
  return (
    <input className='bg-[#D9D9D9] text-right text-sm w-[367px] h-[50px] pr-5 pl-10 outline-none max-[444px]:w-[300px] max-[400px]:w-[250px]' type="search" name="" id="" placeholder={heroContent.inputplaceholder} />
  )
}
export default HeroInput;