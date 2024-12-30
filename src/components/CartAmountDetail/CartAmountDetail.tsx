'use client'
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import CostProduct from '../CostProduct/CostProduct';
function CartAmountDetail() {
  const {cartContent,cartData} = useClothContext();
  const totalPrice = cartData.totalPrice;
  return (
   
      <div className='border-b-2 border-[#D9D9D9] py-2 text-sm'>
      <CostProduct name={cartContent.subtotal} price={totalPrice}/>
      <CostProduct name={cartContent.shipping} price={cartData.shippingCost}/>
      <CostProduct name={cartContent.total}  price={totalPrice>0?totalPrice+10:totalPrice} />
      </div>
      
  
        
  );
};
export default CartAmountDetail;
