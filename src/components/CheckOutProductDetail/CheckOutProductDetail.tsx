'use client';
import { CheckOutCardDetail } from "@/utils/Type/type"
import { useRouter } from "next/navigation";

function CheckOutProductDetail({name,color,size,price,quantity}:CheckOutCardDetail) {
  const navigCart = useRouter();
  return (
    <div className='flex flex-col text-sm font-bold max-[380px]:text-[12px] max-[400px]:px-3'>
      <div className="flex gap-16 pb-2 max-[400px]:text-[12px] max-[400px]:gap-10  ">
        <h5 className=" w-36 ">{name}</h5>
        <h5 onClick={() => navigCart.push('/cart')} className="underline cursor-pointer max-[400px]:text-[11px]">Change</h5>
      </div>
      <h6 className="pb-8 max-[400px]:text-[11px]">{color}/{size}</h6>
      <div className="flex relative pb-2">
        <h5>({quantity})</h5>
        <h5 className="absolute right-0 max-[380px]:left-36">{price}</h5>
      </div>
    </div>
  )
}

export default CheckOutProductDetail;
