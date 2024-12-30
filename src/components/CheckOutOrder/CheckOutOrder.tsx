import React from 'react'
import CheckOutOrderList from '../CheckOutOrderList/CheckOutOrderList'
// import CartAmountDetail from '../CartAmountDetail/CartAmountDetail'
import CheckOutAmount from '../CheckOutAmount/CheckOutAmount'

function CheckOutOrder() {
  return (
    <div className='flex flex-col items-center border-2 h-[470px] p-5 max-[720px]:px-3 max-[700px]:my-10 max-[430px]:w-[380px] max-[410px]:w-[350px] max-[380px]:w-[310px] max-[336px]:w-[290px] max-[320px]:w-[270px] max-[296px]:w-[260px] max-[283px]:w-[250px] max-[280px]:w-[220px] max-[270px]:w-[200px]'>
      <h3 className='uppercase font-bold pb-4'>Your Order</h3>
      <CheckOutOrderList/>
      {/* <CartAmountDetail/> */}
      <CheckOutAmount/>
    </div>
  )
}

export default CheckOutOrder
