'use client';

import useClothContext from "@/Hooks/ClothContext/ClothContext";
// import { useRouter } from "next/navigation";

function OrderButton() {
  const {cartContent} = useClothContext();
  // const navigToCheckOut = useRouter()
  return (
   <button  className='uppercase bg-[#D9D9D9] font-bold tracking-widest p-2'>{cartContent.cartbutton}</button>
  )
}

export default OrderButton;
