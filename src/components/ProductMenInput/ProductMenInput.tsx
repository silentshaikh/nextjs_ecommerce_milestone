'use client';
import useClothContext from "@/Hooks/ClothContext/ClothContext";
import {  workSans } from "@/utils/Helper/helper";
import { ProductInputType } from "@/utils/Type/type";
function ProductMenInput({name}:ProductInputType) {
  const {inputList,onInputHandler} = useClothContext()
  return (
    <>
       <input className={`${workSans.className} bg-[#D9D9D9] text-right text-sm w-[367px] h-[50px] pr-5 pl-10 outline-none max-[1010px]:w-[320px] max-[969px]:w-[380px] max-[590px]:w-[340px] max-[560px]:w-[320px] max-[530px]:w-[300px] max-[515px]:w-[280px] max-[500px]:w-[260px] max-[480px]:w-[240px] max-[450px]:w-[220px] max-[430px]:w-[200px] max-[400px]:w-[180px] max-[380px]:w-[160px] max-[360px]:w-[330px] max-[340px]:w-[300px] max-[308px]:w-[270px]`} type="search" name={name} value={inputList.meninput} onChange={(e) => onInputHandler(e)} id="" placeholder='Search' />
    </>
  )
};
export default ProductMenInput;