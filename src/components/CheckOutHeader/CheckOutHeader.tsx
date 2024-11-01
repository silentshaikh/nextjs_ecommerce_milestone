'use client'
import CheckOutList from '../CheckOutList/CheckOutList';
function CheckOutHeader() {
  return (
    <div className=' font-bold w-96 relative left-32 max-[1100px]:left-20 max-[980px]:left-6 max-[410px]:w-80  max-[360px]:w-72 max-[320px]:w-[270px] max-[296px]:w-[260px] max-[290px]:left-2'>
      <CheckOutList/>
    </div>
  )
};
export default CheckOutHeader;