'use client';

import useClothContext from "@/Hooks/ClothContext/ClothContext";
import { usePathname } from "next/navigation";

function SideColors() {
  const {productColor,onColrFilter,onColrKidFilter,onColrWomenFilter} = useClothContext();
  const colrPath = usePathname();
  let sideColor:string[] = ["B9C1E8","FFFFFF","A6D6CA","1E1E1E","A9A9A9","D9D9D9"]
  return (
    <>
   {colrPath === '/men' ?  <div className='flex gap-1'>
      {productColor.map((e) => {
        return <div style={{backgroundColor:`#${e}`}} className='size-[40px] max-[990px]:size-[35px]' onClick={() => onColrFilter(e)}></div>
      })}
    </div>:''}
    {colrPath === '/women' ?  <div className='flex gap-1'>
      {productColor.map((e) => {
        return <div style={{backgroundColor:`#${e}`}} className='size-[40px] max-[990px]:size-[35px]' onClick={() => onColrWomenFilter(e)}></div>
      })}
    </div>:''}
    {colrPath === '/kid' ?  <div className='flex gap-1'>
      {productColor.map((e) => {
        return <div style={{backgroundColor:`#${e}`}} className='size-[40px] max-[990px]:size-[35px]' onClick={() => onColrKidFilter(e)}></div>
      })}
    </div>:''}
    </>
  )
};
export default SideColors;