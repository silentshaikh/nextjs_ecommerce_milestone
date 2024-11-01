'use client';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import {workSans } from '@/utils/Helper/helper';
import {RiArrowRightSLine } from 'react-icons/ri';
function ProductHeadingContext() {
    const {sideBar,sideBarToggle} = useClothContext();
  return (
    <>
         <h1 className='pt-16 text-4xl max-[1080px]:pl-5 max-[530px]:text-3xl max-[360px]:pb-2'>
      PRODUCT
    </h1>
    <h3 onClick={sideBarToggle} className={`text-xl cursor-pointer pt-2 ${workSans.className} ${sideBar ? 'flex' :'hidden'} items-center`}>Filter <RiArrowRightSLine/></h3>
    </>
  )
};
export default ProductHeadingContext;