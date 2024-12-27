import { poppins,} from '@/utils/Helper/helper';
import { ProductCardSizeType } from '@/utils/Type/type';
import React from 'react'

function ProductCardSize({productSize,selectSize,prodId,prodCartSize}:ProductCardSizeType) {
  console.log(prodCartSize);
  return (
    <div className={`${poppins.className} flex gap-1`}>
        {productSize.map((e) => {
            return(
                <button key={e} onClick={() => selectSize(prodId,e)} className={`${prodCartSize === e ? 'bg-slate-500 text-white': ''}  size-[50px] border p-3  text-sm px-1 font-bold max-[870px]:size-[39px] max-[700px]:size-[45px] max-[380px]:size-[40px] max-[320px]:size-[36px] text-[12px] max-[300px]:size-[32px] max-[300px]:text-[10px] max-[990px]:size-[40px]`}>{e}</button>
            );
        })}
      </div>
  );
};
export default ProductCardSize;
