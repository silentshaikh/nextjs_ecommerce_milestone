'use client';
import { workSans } from '@/utils/Helper/helper';
import CartDetail from '../CartDetail/CartDetail';
import CartAmount from '../CartAmount/CartAmount';
function CartProduct() {
  return (
    <section className={`${workSans.className} bg-[#f3f3f3] py-16  flex justify-evenly items-start max-[550px]:flex-col-reverse max-[550px]:items-center`}>
      <CartDetail/>
      <CartAmount/>
    </section>
  )
};
export default CartProduct
