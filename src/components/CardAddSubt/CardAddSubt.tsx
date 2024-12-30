'use client';
import useClothContext from "@/Hooks/ClothContext/ClothContext";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

function CardAddSubt({productId,quantity}:{productId:string,quantity:number}) {
  const {addProdInc,addProdDec} = useClothContext();
  return (
    <div className='flex flex-col '>
      <button className='size-[40px] flex justify-center items-center hover:bg-[#D9D9D9] hover:text-white border-[#D9D9D9] border-2 max-[620px]:size-[35px] max-[320px]:size-[30px]' onClick={() => addProdDec(productId,quantity)}><FiMinus /></button>
      <p className='size-[40px] border-[#D9D9D9] border-2 text-center pt-1 max-[620px]:size-[35px] max-[320px]:size-[30px]'>{quantity}</p>
      <button className='size-[40px] flex justify-center items-center hover:bg-[#D9D9D9] hover:text-white border-[#D9D9D9] border-2 max-[620px]:size-[35px] max-[320px]:size-[30px]'  onClick={() => addProdInc(productId)}><GoPlus /></button>
    </div>
  )
};
export default CardAddSubt;