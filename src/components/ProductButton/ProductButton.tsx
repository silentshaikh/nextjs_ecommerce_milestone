'use client';

import useClothContext from "@/Hooks/ClothContext/ClothContext";

function ProductButton({name,categ,btnFilter}:{name:string;categ:string;btnFilter:(type:string,categ:string) => void;}) {
  const {onHandleFilter} = useClothContext();
  return (
    <button className="uppercase hover:bg-[#b8b7b7]  transition-all text-sm border h-8 w-24 border-black max-[1070px]:text-[12px] max-[1070px]:w-20 max-[530px]:w-16 max-[530px]:text-[12px] max-[440px]:text-[10px] max-[440px]:h-6 max-[440px]:w-14 max-[400px]:w-12 max-[400px]:text-[9px] max-[360px]:w-11 max-[360px]:text-[8px]  max-[340px]:text-[7px] max-[340px]:w-10" onClick={() => btnFilter(name,categ)}>
      {name}
    </button>
  )
};
export default ProductButton;