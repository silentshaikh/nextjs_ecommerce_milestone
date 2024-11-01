'use client';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import { RiArrowLeftSLine} from 'react-icons/ri';
import { poppins } from '@/utils/Helper/helper';
function SideBarHeading() {
  const {paddRemove , sideBarToggle,toggleAgainSide} = useClothContext()
  const onSideBarTogg = () => {
    sideBarToggle();
    toggleAgainSide(!paddRemove);
  };
  return (
   <div onClick={onSideBarTogg} className='pb-5  flex items-center gap-3 font-bold cursor-pointer'>
     <h2 className=''>
      Filters
    </h2>
    <RiArrowLeftSLine  className='text-xl  '  />
   </div>
  )
}

export default SideBarHeading
