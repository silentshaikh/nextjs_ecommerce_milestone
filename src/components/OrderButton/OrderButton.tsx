'use client';

import { useRouter } from "next/navigation";

function OrderButton() {
  let navigToCheckOut = useRouter()
  return (
   <button onClick={() => navigToCheckOut.push('/checkout')} className='uppercase bg-[#D9D9D9] py-2'>continue</button>
  )
}

export default OrderButton
