import { cart, poppins } from '@/utils/Helper/helper'
import CheckOutProductCard from '../CheckOutProductCard/CheckOutProductCard'

function CheckOutOrderList() {
  return (
    <div className={`${poppins.className} flex flex-col gap-5 p-3 border-b-2  h-[270px] overflow-y-auto `}>
      <CheckOutProductCard name={cart.name} img={cart.img} price={cart.price} color={cart.color[0]} size={cart.size[0]}  />
      <CheckOutProductCard name={cart.name} img={cart.img} price={cart.price} color={cart.color[0]} size={cart.size[0]}  />
      <CheckOutProductCard name={cart.name} img={cart.img} price={cart.price} color={cart.color[0]} size={cart.size[0]}  />
    </div>
  )
}

export default CheckOutOrderList
