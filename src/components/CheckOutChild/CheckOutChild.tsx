'use client';
import CheckOutForm from '../CheckOutForm/CheckOutForm';
import CheckOutOrder from '../CheckOutOrder/CheckOutOrder';
function CheckOutChild() {
  return (
    <section className='flex justify-evenly item-center py-8 max-[700px]:flex-col max-[700px]:mx-5'>
      <CheckOutForm/>
      <CheckOutOrder/>
    </section>
  )
};
export default CheckOutChild
