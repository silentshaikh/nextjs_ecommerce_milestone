import CostProduct from '../CostProduct/CostProduct';
function CartAmountDetail() {
  return (
   
      <div className='border-b-2 border-[#D9D9D9] py-2 text-sm'>
      <CostProduct name='Sub Total :' price='$123'/>
      <CostProduct name='Shipping :' price='$10'/>
      <CostProduct name='Total :' price='$133' />
      </div>
      
  
        
  );
};
export default CartAmountDetail;
