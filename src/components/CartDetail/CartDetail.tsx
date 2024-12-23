import { cart } from "@/utils/Helper/helper"
import CartCard from "../CartCard/CartCard"
import CartOtherDetail from "../CartOtherDetail/CartOtherDetail"

function CartDetail() {
  return (
    <div className='flex items-center justify-evenly flex-wrap py-10 border-[#D9D9D9] border-b-2 px-5'>
      <div className="flex items-center gap-3 mb-7">
      <CartCard category={cart.productcategory} name={cart.productname} img={cart.productimage} price={cart.productprice}  />
      <CartOtherDetail/>
      </div>
      <div className="flex items-center gap-3 mb-7">
      <CartCard category={cart.productcategory} name={cart.productname} img={cart.productimage} price={cart.productprice}  />
      <CartOtherDetail/>
      </div>
      <div className="flex items-center gap-3 ">
      <CartCard category={cart.productcategory} name={cart.productname} img={cart.productimage} price={cart.productprice}  />
      <CartOtherDetail/>
      </div>
      
    </div>
  )
}

export default CartDetail
