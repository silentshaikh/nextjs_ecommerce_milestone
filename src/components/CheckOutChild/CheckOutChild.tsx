'use client';
import CheckOutForm from '../CheckOutForm/CheckOutForm';
import CheckOutOrder from '../CheckOutOrder/CheckOutOrder';
function CheckOutChild() {
  return (
    <section className='flex justify-center gap-20 max-[1110px]:gap-10 max-[800px]:gap-5 item-center py-8 max-[750px]:flex-col max-[750px]:mx-5 max-[750px]:item-center'>
      <CheckOutForm/>
      <CheckOutOrder/>
    </section>
  )
};
export default CheckOutChild
