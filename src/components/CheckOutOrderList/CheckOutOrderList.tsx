import { cart, poppins } from '@/utils/Helper/helper'
import CheckOutProductCard from '../CheckOutProductCard/CheckOutProductCard'

function CheckOutOrderList() {
  return (
    <div className={`${poppins.className} flex flex-col gap-5 p-3 border-b-2  h-[270px] overflow-y-auto `}>
      <CheckOutProductCard name={cart.productname} img={cart.productimage} price={cart.productprice} color={cart.productcolors[0].hex} size={cart.productsizes[0]}  />
      <CheckOutProductCard name={cart.productname} img={cart.productimage} price={cart.productprice} color={cart.productcolors[0].hex} size={cart.productsizes[0]}  />
      <CheckOutProductCard name={cart.productname} img={cart.productimage} price={cart.productprice} color={cart.productcolors[0].hex} size={cart.productsizes[0]}  />
    </div>
  )
}

export default CheckOutOrderList
