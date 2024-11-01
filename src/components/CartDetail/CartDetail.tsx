import { cart } from "@/utils/Helper/helper"
import CartCard from "../CartCard/CartCard"
import CartOtherDetail from "../CartOtherDetail/CartOtherDetail"

function CartDetail() {
  return (
    <div className='flex items-center justify-evenly flex-wrap py-10 border-[#D9D9D9] border-b-2 px-5'>
      <div className="flex items-center gap-3 mb-7">
      <CartCard category={cart.category} name={cart.name} img={cart.img} price={cart.price}  />
      <CartOtherDetail/>
      </div>
      <div className="flex items-center gap-3 mb-7">
      <CartCard category={cart.category} name={cart.name} img={cart.img} price={cart.price}  />
      <CartOtherDetail/>
      </div>
      <div className="flex items-center gap-3 ">
      <CartCard category={cart.category} name={cart.name} img={cart.img} price={cart.price}  />
      <CartOtherDetail/>
      </div>
      
    </div>
  )
}

export default CartDetail
