'use client'
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import CostProduct from '../CostProduct/CostProduct';
function CartAmountDetail() {
  const {cartContent} = useClothContext();
  return (
   
      <div className='border-b-2 border-[#D9D9D9] py-2 text-sm'>
      <CostProduct name={cartContent.subtotal} price='$123'/>
      <CostProduct name={cartContent.shipping} price='$10'/>
      <CostProduct name={cartContent.total}  price='$133' />
      </div>
      
  
        
  );
};
export default CartAmountDetail;
