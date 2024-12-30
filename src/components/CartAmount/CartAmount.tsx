'use client'
import useClothContext from '@/Hooks/ClothContext/ClothContext'
import CartAmountDetail from '../CartAmountDetail/CartAmountDetail'
import { workSans } from '@/utils/Helper/helper'
import ConfirmOrder from '../ConfirmOrder/ConfirmOrder'
function CartAmount() {
  const {cartContent} = useClothContext();
  return (
    <>
      <div className={`${workSans.className} flex flex-col mr-3 max-[1008px]:w-[600px] max-[820px]:w-[700px] max-[720px]:w-[800px] max-[550px]:w-[400px] max-[550px]:items-center max-[550px]:mr-0 max-[400px]:w-[300px] max-[320px]:w-[280px] max-[290px]:w-[260px]`}>
      <div className='border-2  flex flex-col p-5'>
      <h4 className='uppercase font-bold pb-5'>{cartContent.cartheading}</h4>
        <CartAmountDetail/>
        <ConfirmOrder/>
      </div>
      </div>
    </>
  )
}

export default CartAmount
