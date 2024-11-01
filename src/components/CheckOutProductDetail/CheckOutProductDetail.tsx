import { CheckOutCardDetail } from "@/utils/Type/type"

function CheckOutProductDetail({name,color,size,price}:CheckOutCardDetail) {
  return (
    <div className='flex flex-col text-sm font-bold max-[380px]:text-[12px]'>
      <div className="flex gap-7 pb-2">
        <h5>{name}</h5>
        <h5>Change</h5>
      </div>
      <h6 className="pb-8">{color}/{size}</h6>
      <div className="flex relative pb-2">
        <h5>(1)</h5>
        <h5 className="absolute left-44 max-[380px]:left-36">{price}</h5>
      </div>
    </div>
  )
}

export default CheckOutProductDetail
