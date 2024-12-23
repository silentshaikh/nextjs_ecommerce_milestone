'use client';

import useClothContext from "@/Hooks/ClothContext/ClothContext";
import { useRouter } from "next/navigation";

function OrderButton() {
  const {cartContent} = useClothContext();
  const navigToCheckOut = useRouter()
  return (
   <button onClick={() => navigToCheckOut.push('/checkout')} className='uppercase bg-[#D9D9D9] py-2'>{cartContent.cartbutton}</button>
  )
}

export default OrderButton
