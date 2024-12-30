'use client';
import { poppins } from '@/utils/Helper/helper'
import CheckOutProductCard from '../CheckOutProductCard/CheckOutProductCard'
import useClothContext from '@/Hooks/ClothContext/ClothContext';

function CheckOutOrderList() {
  const {cartData} = useClothContext();
  if(cartData.checkOutList.length===0){
    return(
      <div className={`${poppins.className} flex flex-col gap-5 p-3 border-b-2  h-[270px] w-[450px] max-[500px]:w-[100%]`}>
        <h3 className='text-xl'>No Product Items</h3>
      </div>
    )
  }else{
    // max-[1100px]:w-[400px] max-[750px]:w-[450px]
    return (
      <div className={`${poppins.className} flex flex-col gap-5 p-3 border-b-2  h-[270px] overflow-y-auto max-[350px]:px-3 max-[330px]:w-[250px] max-[310px]:w-[200px] max-[270px]:w-[150px] `}>
      {
        cartData.checkOutList.map((e) => {
          return (
            <>
            <CheckOutProductCard key={e.productid} name={e.productname} img={e.productimage} price={e.productprice} color={e.productcolor} size={e.productsize}  quantity={e.productquantity} />
            </>
          )
        })
      }
      
      {/* <CheckOutProductCard name={cart.productname} img={cart.productimage} price={cart.productprice} color={cart.productcolors[0].hex} size={cart.productsizes[0]}  />
      <CheckOutProductCard name={cart.productname} img={cart.productimage} price={cart.productprice} color={cart.productcolors[0].hex} size={cart.productsizes[0]}  /> */}
    </div>
  )
}
}

export default CheckOutOrderList
