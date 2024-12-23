'use client';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import { poppins } from '@/utils/Helper/helper';
import React from 'react'

function Size({sizeFilter}:{sizeFilter:(size:string) => void}) {
  const {productSize} = useClothContext();
  return (
    <div className={`${poppins.className} flex gap-1`}>
        {productSize.map((e) => {
            return(
                <button key={e} className='size-[50px] border p-3  text-sm px-1 font-bold max-[870px]:size-[39px] max-[700px]:size-[45px] max-[380px]:size-[40px] max-[320px]:size-[36px] text-[12px] max-[300px]:size-[32px] max-[300px]:text-[10px] max-[990px]:size-[40px]' onClick={() => sizeFilter(e)}>{e}</button>
            );
        })}
      </div>
  );
};
export default Size
